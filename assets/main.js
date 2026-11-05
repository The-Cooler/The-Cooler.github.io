        (function () {
            'use strict';

            var root = document.documentElement;
            var toggle = document.getElementById('theme-toggle');
            var themeLabel = toggle ? toggle.querySelector('.theme-label') : null;
            var meta = document.querySelector('meta[name="theme-color"]');

            /* ---------- 主题 ---------- */
            function applyTheme(theme, persist) {
                root.classList.add('theme-transition');
                void root.offsetHeight;
                root.setAttribute('data-theme', theme);
                window.setTimeout(function () {
                    root.classList.remove('theme-transition');
                }, 500);
                if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'DARK' : 'LIGHT';
                if (toggle) {
                    toggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
                }
                if (meta) meta.setAttribute('content', theme === 'dark' ? '#282C34' : '#F1F2F3');
                if (persist) {
                    try { localStorage.setItem('stack-theme', theme); } catch (e) { /* 存储不可用时忽略 */ }
                }
                window.dispatchEvent(new CustomEvent('themetoggle'));
            }

            applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);

            if (toggle) {
                toggle.addEventListener('click', function () {
                    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                    applyTheme(next, true);
                });
            }

            var mq = window.matchMedia('(prefers-color-scheme: dark)');
            var onScheme = function (e) {
                var saved = null;
                try { saved = localStorage.getItem('stack-theme'); } catch (err) { /* ignore */ }
                if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
            };
            if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onScheme);
            else if (typeof mq.addListener === 'function') mq.addListener(onScheme);

            /* ---------- 灯箱 ---------- */
            var zoomBtn = document.querySelector('.cc-zoom');
            var lightbox = document.getElementById('lightbox');
            var lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;

            if (zoomBtn && lightbox && lightboxImg) {
                var openLightbox = function () {
                    lightboxImg.src = zoomBtn.querySelector('.cc-shot').src;
                    lightboxImg.alt = zoomBtn.querySelector('.cc-shot').alt;
                    lightbox.hidden = false;
                    document.body.style.overflow = 'hidden';
                    void lightbox.offsetHeight;
                    lightbox.classList.add('is-open');
                    lightbox.focus();
                };

                var closeLightbox = function () {
                    lightbox.classList.remove('is-open');
                    document.body.style.overflow = '';
                    window.setTimeout(function () {
                        lightbox.hidden = true;
                        lightboxImg.src = '';
                    }, 280);
                };

                zoomBtn.addEventListener('click', openLightbox);
                lightbox.addEventListener('click', closeLightbox);
                document.addEventListener('keydown', function (e) {
                    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
                });
            }

            /* ---------- 网格画布 ---------- */
            var canvas = document.getElementById('grid');
            if (canvas && canvas.getContext) {
                var ctx = canvas.getContext('2d');
                var W = 0;
                var H = 0;
                var dpr = 1;
                var minorColor = '';
                var majorColor = '';
                var glowColor = '';
                var pointer = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 };
                var raf = 0;
                var running = false;

                var readPalette = function () {
                    var cs = getComputedStyle(root);
                    minorColor = cs.getPropertyValue('--grid-line').trim() || 'rgba(0,0,0,.06)';
                    majorColor = cs.getPropertyValue('--grid-line-major').trim() || 'rgba(0,0,0,.12)';
                    glowColor = cs.getPropertyValue('--grid-glow').trim() || 'rgba(0,0,0,0)';
                };

                var stepSize = function () {
                    if (W < 640) return 30;
                    if (W < 1100) return 38;
                    return 46;
                };

                var pointAt = function (x, y, t, warp) {
                    var nx = 0;
                    var ny = 0;
                    if (warp) {
                        nx += Math.sin(y * 0.012 + t * 0.00035) * 3.2 + Math.sin((x + y) * 0.007 - t * 0.00022) * 1.8;
                        ny += Math.cos(x * 0.011 - t * 0.0003) * 2.6 + Math.cos((x - y) * 0.008 + t * 0.0002) * 1.4;

                        var dx = x - pointer.x;
                        var dy = y - pointer.y;
                        var d2 = dx * dx + dy * dy;
                        var sigma = 250;
                        if (d2 < sigma * sigma * 9) {
                            var f = Math.exp(-d2 / (2 * sigma * sigma));
                            var d = Math.sqrt(d2) || 1;
                            var force = 20 * f;
                            nx += (dx / d) * force;
                            ny += (dy / d) * force;
                        }
                    }
                    return [x + nx, y + ny];
                };

                var strokeGrid = function (t, warp, color, isMajor, every) {
                    var s = stepSize();
                    var x;
                    var y;
                    var p;
                    var i;
                    var j;
                    ctx.strokeStyle = color;
                    ctx.beginPath();
                    for (x = 0, i = 0; x <= W + s; x += s, i++) {
                        if ((i % every === 0) !== isMajor) continue;
                        for (y = 0; y <= H + s; y += s) {
                            p = pointAt(x, y, t, warp);
                            if (y === 0) ctx.moveTo(p[0], p[1]);
                            else ctx.lineTo(p[0], p[1]);
                        }
                    }
                    for (y = 0, j = 0; y <= H + s; y += s, j++) {
                        if ((j % every === 0) !== isMajor) continue;
                        for (x = 0; x <= W + s; x += s) {
                            p = pointAt(x, y, t, warp);
                            if (x === 0) ctx.moveTo(p[0], p[1]);
                            else ctx.lineTo(p[0], p[1]);
                        }
                    }
                    ctx.stroke();
                };

                var render = function (t, warp) {
                    if (!W || !H) return;
                    ctx.clearRect(0, 0, W, H);
                    ctx.lineWidth = 1;
                    strokeGrid(t, warp, minorColor, false, 4);
                    strokeGrid(t, warp, majorColor, true, 4);

                    if (warp && pointer.x > -1000 && pointer.y > -1000) {
                        var g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260);
                        g.addColorStop(0, glowColor);
                        g.addColorStop(1, 'rgba(0,0,0,0)');
                        ctx.fillStyle = g;
                        ctx.fillRect(pointer.x - 260, pointer.y - 260, 520, 520);
                    }
                };

                var loop = function (t) {
                    if (!running) return;
                    pointer.x += (pointer.tx - pointer.x) * 0.075;
                    pointer.y += (pointer.ty - pointer.y) * 0.075;
                    render(t, true);
                    raf = requestAnimationFrame(loop);
                };

                var start = function () {
                    if (running) return;
                    running = true;
                    raf = requestAnimationFrame(loop);
                };

                var stop = function () {
                    running = false;
                    if (raf) cancelAnimationFrame(raf);
                    raf = 0;
                };

                var resize = function () {
                    dpr = Math.min(window.devicePixelRatio || 1, 2);
                    W = window.innerWidth;
                    H = window.innerHeight;
                    canvas.width = Math.round(W * dpr);
                    canvas.height = Math.round(H * dpr);
                    canvas.style.width = W + 'px';
                    canvas.style.height = H + 'px';
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                };

                var onPointer = function (e) {
                    if (pointer.x < -9000) {
                        pointer.x = e.clientX;
                        pointer.y = e.clientY;
                    }
                    pointer.tx = e.clientX;
                    pointer.ty = e.clientY;
                };

                var onLeave = function () {
                    pointer.tx = -1e4;
                    pointer.ty = -1e4;
                };

                readPalette();
                resize();

                window.addEventListener('resize', resize);
                window.addEventListener('pointermove', onPointer, { passive: true });
                window.addEventListener('pointerdown', onPointer, { passive: true });
                document.addEventListener('mouseleave', onLeave);
                window.addEventListener('themetoggle', function () {
                    readPalette();
                });

                document.addEventListener('visibilitychange', function () {
                    if (document.hidden) stop();
                    else start();
                });

                start();
            }

            /* ---------- 滚动入场 ---------- */
            var revealEls = document.querySelectorAll('.reveal');
            if (!('IntersectionObserver' in window)) {
                Array.prototype.forEach.call(revealEls, function (el) {
                    el.classList.add('is-in');
                });
            } else {
                var io = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-in');
                            io.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
                Array.prototype.forEach.call(revealEls, function (el) {
                    io.observe(el);
                });
            }
        })();
