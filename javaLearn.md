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

<style>   

body night-mode table th{
    background-color: #282c34 !important; 
    color: #000000
}

body.night-mode table td {
    background-color: #282c34 !important; /* 设置黑夜模式字体颜色 */
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

/*黑夜模式调整表格字体颜色*/




|           | 同一个包中 | 同一个类中 | 不同包中的子类中 | 不同包中的非子类中 |
| :-------: | :-------: | :-------: | :------------: | :---------------: |
| private   |     √     |     ✕     |      ✕        |        ✕         |
| default   |     √     |     √     |      ✕        |        ✕          |
| protected |     √     |     √     |       √        |        ✕         |
| public    |     √     |     √     |       √        |         √         |   

### 特殊类   

[1.string](#1-string)   
[2.math](#2-math)


#### **1. String**   

[1.构造方法](#构造方法)
[2.方法](#方法)
[3.注意](#注意)

##### Class `lang.String`

`java.lang.String`

这个类模拟了 Java 标准库中的 `String` 类，提供了一系列用于操作字符串的方法。

##### **构造方法**

 - **`String()`**
  - **描述**: 创建一个新的空字符串实例。

- **`String(char[] value)`**
  - **描述**: 通过字符数组创建一个新的字符串实例。
  - **参数**:
    - `value`: 用于创建字符串的字符数组。

- **`String(byte[] value)`**
  - **描述**: 通过字节数组创建一个新的字符串实例。
  - **参数**:
    - `value`: 用于创建字符串的字节数组。

- **`String(byte[] value, int offset, int length)`**
  - **描述**: 通过字节数组的指定部分创建一个新的字符串。
  - **参数**:
    - `value`: 用于创建字符串的字节数组。
    - `offset`: 转换开始点。
    - `length`: 要转换的字节数。

- **`String(String original)`**
  - **描述**: 复制现有字符串。
  - **参数**:
    - `original`: 要复制的字符串。

##### **方法**

- **`char charAt(int index)`**
  - **描述**: 返回指定索引处的字符。
  - **参数**:`index`: 字符索引。
  - **返回**: 字符。

- **`int length()`**
  - **描述**: 返回字符串长度。
  - **返回**: 字符串的长度。

- **`boolean isEmpty()`**
  - **描述**: 如果字符串为空（`length() == 0`），返回 `true`。

- **`boolean equals(Object anObject)`**
  - **描述**: 比较两个字符串是否相等，忽略大小写。
  - **参数**:
    - `anObject`: 与当前字符串比较的对象。
  - **返回**: 布尔值，表示字符串是否相等。

- **`int compareTo(String anotherString)`**
  - **描述**: 按字典序比较两个字符串。
  - **参数**:
    - `anotherString`: 要比较的字符串。
  - **返回**: 整数，0 表示相等，正数表示大于，负数表示小于。

- **`String concat(String str)`**
  - **描述**: 将指定字符串连接到此字符串的结尾。
  - **参数**:
    - `str`: 连接的字符串。
  - **返回**: 新的字符串。

- **`int indexOf(String str)`**
  - **描述**: 返回子字符串的索引。
  - **参数**:
    - `str`: 子字符串。
  - **返回**: 子字符串的起始索引。

- **`String substring(int beginIndex)`**
  - **描述**: 返回从指定索引开始到结尾的子字符串。
  - **参数**:
    - `beginIndex`: 起始索引。
  - **返回**: 新的子字符串。

- **`String substring(int beginIndex, int endIndex)`**
  - **描述**: 返回从指定索引开始到结束的子字符串。
  - **参数**:
    - `beginIndex`: 起始索引。
    - `endIndex`: 结束索引。
  - **返回**: 新的子字符串。

- **`String replace(char oldChar, char newChar)`**
  - **描述**: 替换字符串中的字符。
  - **参数**:
    - `oldChar`: 被替换的字符。
    - `newChar`: 替换的字符。
  - **返回**: 新的字符串。

- **`String[] split(String regex)`**
  - **描述**: 根据正则表达式分割字符串。
  - **参数**:
    - `regex`: 正则表达式。
  - **返回**: 字符串数组。

- **`String toLowerCase()`**
  - **描述**: 将字符串转换为小写。
  - **返回**: 小写字符串。

- **`String toUpperCase()`**
  - **描述**: 将字符串转换为大写。
  - **返回**: 大写字符串。

- **`String trim()`**
  - **描述**: 去除字符串两端的空白符。
  - **返回**: 修剪后的字符串。

- **`void getBytes(int srcBegin, int srcEnd, byte[] dst, int dstBegin)`**
  - **描述**: 将字符转换为字节并存储到字节数组中。
  - **参数**:
    - `srcBegin`: 起始索引。
    - `srcEnd`: 结束索引。
    - `dst`: 目标字节数组。
    - `dstBegin`: 目标开始索引。

- **`void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)`**
  - **描述**: 将字符存储到字符数组中。
  - **参数**:
    - `srcBegin`: 起始索引。
    - `srcEnd`: 结束索引。
    - `dst`: 目标字符数组。
    - `dstBegin`: 目标开始索引。

- **`String intern()`**
  - **描述**: 返回字符串的规范化版本。
  - **返回**: 规范化字符串。

##### **注意**：String用==比较时，比较的是地址，而不是值。

#### **2. Math**   

[1.方法](#方法)


##### Class `lang.Math`

`java.lang.Math`

这个类模拟了 Java 标准库中的 `Math` 类，提供了一系列用于数学运算的方法。

##### **方法**

- **`static double abs(double a)`**
  - **描述**: 返回绝对值。
  - **参数**:
    - `a`: 需要绝对值的双精度浮点数。
  - **返回**: `a` 的绝对值。

- **`static float abs(float a)`**
  - **描述**: 返回绝对值。
  - **参数**:
    - `a`: 需要绝对值的单精度浮点数。
  - **返回**: `a` 的绝对值。

- **`static int abs(int a)`**
  - **描述**: 返回绝对值。
  - **参数**:
    - `a`: 需要绝对值的整数。
  - **返回**: `a` 的绝对值。

- **`static long abs(long a)`**
  - **描述**: 返回绝对值。
  - **参数**:
    - `a`: 需要绝对值的长整数。
  - **返回**: `a` 的绝对值。

- **`static double max(double a, double b)`**
  - **描述**: 返回两个双精度浮点数的最大值。
  - **参数**:
    - `a`: 第一个双精度浮点数。
    - `b`: 第二个双精度浮点数。
  - **返回**: `a` 和 `b` 中的较大值。

- **`static float max(float a, float b)`**
  - **描述**: 返回两个单精度浮点数的最大值。
  - **参数**:
    - `a`: 第一个单精度浮点数。
    - `b`: 第二个单精度浮点数。
  - **返回**: `a` 和 `b` 中的较大值。

- **`static int max(int a, int b)`**
  - **描述**: 返回两个整数的最大值。
  - **参数**:
    - `a`: 第一个整数。
    - `b`: 第二个整数。
  - **返回**: `a` 和 `b` 中的较大值。

- **`static long max(long a, long b)`**
  - **描述**: 返回两个长整数的最大值。
  - **参数**:
    - `a`: 第一个长整数。
    - `b`: 第二个长整数。
  - **返回**: `a` 和 `b` 中的较大值。

- **`static double min(double a, double b)`**
  - **描述**: 返回两个双精度浮点数的最小值。
  - **参数**:
    - `a`: 第一个双精度浮点数。
    - `b`: 第二个双精度浮点数。
  - **返回**: `a` 和 `b` 中的较小值。

- **`static float min(float a, float b)`**
  - **描述**: 返回两个单精度浮点数的最小值。
  - **参数**:
    - `a`: 第一个单精度浮点数。
    - `b`: 第二个单精度浮点数。
  - **返回**: `a` 和 `b` 中的较小值。

- **`static int min(int a, int b)`**
  - **描述**: 返回两个整数的最小值。
  - **参数**:
    - `a`: 第一个整数。
    - `b`: 第二个整数。
  - **返回**: `a` 和 `b` 中的较小值。

- **`static long min(long a, long b)`**
  - **描述**: 返回两个长整数的最小值。
  - **参数**:
    - `a`: 第一个长整数。
    - `b`: 第二个长整数。
  - **返回**: `a` 和 `b` 中的较小值。

- **`static double ceil(double a)`**
  - **描述**: 返回大于或等于 `a` 的最小整数值。
  - **参数**:
    - `a`: 要向上取整的双精度浮点数。
  - **返回**: 向上取整后的整数。

- **`static float ceil(float a)`**
  - **描述**: 返回大于或等于 `a` 的最小整数值。
  - **参数**:
    - `a`: 要向上取整的单精度浮点数。
  - **返回**: 向上取整后的整数。

- **`static double floor(double a)`**
  - **描述**: 返回小于或等于 `a` 的最大整数值。
  - **参数**:
    - `a`: 要向下取整的双精度浮点数。
  - **返回**: 向下取整后的整数。

- **`static float floor(float a)`**
  - **描述**: 返回小于或等于 `a` 的最大整数值。
  - **参数**:
    - `a`: 要向下取整的单精度浮点数。
  - **返回**: 向下取整后的整数。

- **`static double round(double a)`**
  - **描述**: 对 `a` 进行四舍五入。
  - **参数**:
    - `a`: 要四舍五入的双精度浮点数。
  - **返回**: 四舍五入后的整数。

- **`static float round(float a)`**
  - **描述**: 对 `a` 进行四舍五入。
  - **参数**:
    - `a`: 要四舍五入的单精度浮点数。
  - **返回**: 四舍五入后的整数。

- **`static double random()`**
  - **描述**: 返回一个介于 [0.0, 1.0) 的随机数。
  - **返回**: 随机生成的双精度浮点数。

- **`static int gcd(int a, int b)`**
  - **描述**: 返回两个整数的最大公约数。
  - **参数**:
    - `a`: 第一个整数。
    - `b`: 第二个整数。
  - **返回**: 最大公约数。

- **`static long gcd(long a, long b)`**
  - **描述**: 返回两个长整数的最大公约数。
  - **参数**:
    - `a`: 第一个长整数。
    - `b`: 第二个长整数。
  - **返回**: 最大公约数。

- **`static int lcm(int a, int b)`**
  - **描述**: 返回两个整数的最小公倍数。
  - **参数**:
    - `a`: 第一个整数。
    - `b`: 第二个整数。
  - **返回**: 最小公倍数。

- **`static long lcm(long a, long b)`**
  - **描述**: 返回两个长整数的最小公倍数。
  - **参数**:
    - `a`: 第一个长整数。
    - `b`: 第二个长整数。
  - **返回**: 最小公倍数。
