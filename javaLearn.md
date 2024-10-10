# Java学习

<button onclick="toggleNightMode()">切换黑夜模式</button>

<style>
body.night-mode {
    background-color: #282c34; /* 设置黑夜模式背景色 */
    color: #ffffff; /* 设置黑夜模式字体颜色 */
    transition: background-color 0.5s ease; /* 设置黑夜模式切换动画 */
    pre {
    background-color: #000000 !important; /* 设置黑夜模式背景色 */
    color: #ffffff !important; /* 设置黑夜模式字体颜色 */
    padding: 10px; /* 添加内边距，提高可读性 */
    border-radius: 5px; /* 可选：设置圆角效果 */
    overflow-x: auto; /* 允许水平滚动 */
    }
    code {
        background-color: inherit; /* 继承父元素背景色 */
        color: inherit; /* 继承父元素字体颜色 */
        padding: 0; /* 去除内边距 */
        border-radius: 0; /* 去除圆角 */
    }
}
</style>  

<script>
function toggleNightMode() {
  var body = document.body;
  body.classList.toggle("night-mode");
}
</script>   

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>
  hljs.highlightAll();
</script>

## 目录
* [一.基础语法](#基础语法)
* [二.面向对象](#面向对象)


## 基础语法
* [1.变量类型](#变量类型)
* [2.控制语句](#控制语句)
* [3.输入输出](#输入输出)


### 变量类型
> int 整数型  

> double 浮点型  

> char 字符型  

> boolean 布尔型  

<u>注意</u>：Java中的逻辑符号只有true和false,不能用1和0表示。

* 运算符  

> % 取余:C++中的%，两数必须是整型，Java中不做限制。  

### 控制语句
1. if 条件语句  

```java
if(条件表达式){
    //执行语句
}
else if(条件表达式){
    //执行语句
}
else{
    //执行语句
}
```
2. switch 多分支语句  

```java
switch(变量){
    case 值1:
        //执行语句
        break;
    case 值2:
        //执行语句
        break;
    default:
        //执行语句
        break;
}
```
3. for 循环语句  

```java
for(初始化表达式; 条件表达式; 迭代表达式){
    //执行语句
}
```
<u>Java8后新增一种for-each循环语句</u>：
```java
for(数据类型 变量 : 集合){
    //执行语句
}
```  

4. while 循环语句  

```java
while(条件表达式){
    //执行语句
}
```   

5. do-while 循环语句  

```java
do{
    //执行语句
}while(条件表达式);
```    

### 输入输出
**1. 包**
> 作用：可以有效避免重命名，提高利用率   
> 创建方式：package 包名.子包名   
> 导入包：import 包名.子包名   

**2. 输入**
> 启动输入流：Scanner sc(变量名) = new Scanner(System.in);
> 输入：int a = sc.nextInt();

**3. 输出**
> System.out.println(a + b);(没有ln的不换行)

## 面向对象
* [1.不知道怎么分类的知识点](#不知道怎么分类的知识点)
* [2.一些概念](#一些概念)
* [3.封装](#封装)
* [4.特殊类](#特殊类)


### 不知道怎么分类的知识点

> 1. 对象的创建: 类名 对象名 = new 类名();   

> 2. 成员变量: 对象名.成员变量名 = 值;   

> 3. 成员方法: 对象名.成员方法名(参数列表);  

> 4. 构造方法: 类名(参数列表){  //构造方法体 };  

> 5. 静态变量访问: 类名.静态变量名 = 值;  

> 6. 静态方法访问: 类名.静态方法名(参数列表){  //静态方法体 };   

> 7. 静态块在类内按顺序执行，且仅执行一次

### 一些概念   

![alt text](成员.png)

    
**this**     
> 1. this.属性 ———当前类的属性
> 2. this.方法 ———调用当前类的方法
> 3. this() ———调用当前类的构造函数


### 封装   

**访问权限**   

|           | 同一个包中 | 同一个类中 | 不同包中的子类中 | 不同包中的非子类中 |
| :-------: | :-------: | :-------: | :------------: | :---------------: |
| private   |     √     |     ✕     |      ✕        |        ✕         |
| default   |     √     |     √     |      ✕        |        ✕          |
| protected |     √     |     √     |       √        |        ✕         |
| public    |     √     |     √     |       √        |         √         |   

### 特殊类   
**1. String**   
```java
public class lang{
    public final class String{
        //构造函数
        public String();
        public String(char[] value);
        public String(byte[] value);
        public String(byte[] value,int offset,int length);
        public String(String original);

        //返回指定索引处的字符
        public char charAt(int index);

        //返回字符串长度
        public int length();

        //判断字符串是否为空，length() == 0则返回true
        public boolean isEmpty();

        //判断字符串是否相等(比较的是字符串的值)，忽略大小写
        public boolean equals(Object anObject);

        //按字典序比较两个字符串，返回值：0，字符串相等；正数，this字符串大于anotherString；负数，this字符串小于anotherString
        public int compareTo(String anotherString);

        //将字符串连接起来，this字符串在前
        public String concat(String str);

        //定位子字符串的位置
        public int indexOf(String str);

        //返回从指定索引开始到结尾的子字符串
        public String substring(int beginIndex);

        //返回从指定索引开始到指定索引结束的子字符串
        public String substring(int beginIndex,int endIndex);

        //替换字符串中的字符
        public String replace(char oldChar,char newChar);

        //按照正则表达式分割字符串
        public String[] split(String regex);

        //将字符串转换为小写
        public String toLowerCase();

        //将字符串转换为大写
        public String topperCase();

        //去除字符串两端的空白符
        public String trim();

        //将字符串转换为字节数组
        public void getBytes(int srcBegin,int srcEnd,byte[] dst,int dstBegin);

        //将字节数组转换为字符串
        public void getChars(int srcBegin,int srcEnd,char[] dst,int dstBegin);

        //返回字符串的规范化版本
        public String intern();
    }
}
```   

**注意**：String用==比较时，比较的是地址，而不是值。

**2. Math**   
```java
public class lang{
    public class Math{
        //返回绝对值
        public static double abs(double a);
        public static float abs(float a);
        public static int abs(int a);
        public static long abs(long a);

        //返回最大值
        public static double max(double a,double b);
        public static float max(float a,float b);
        public static int max(int a,int b);
        public static long max(long a,long b);

        //返回最小值
        public static double min(double a,double b);
        public static float min(float a,float b);
        public static int min(int a,int b);
        public static long min(long a,long b);

        //返回向上取整
        public static double ceil(double a);
        public static float ceil(float a);

        //返回向下取整
        public static double floor(double a);
        public static float floor(float a);

        //返回向上取整或向下取整
        public static double round(double a);
        public static float round(float a);

        //返回随机数
        public static double random();

        //返回两个数的最大公约数
        public static int gcd(int a,int b);
        public static long gcd(long a,long b);

        //返回两个数的最小公倍数
        public static int lcm(int a,int b);
        public static long lcm(long a,long b);
    }
}
