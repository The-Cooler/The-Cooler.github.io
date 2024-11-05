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
    background-color: #282c34 !important; 
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
* [三.异常](#异常)


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
* [4.继承](#继承)
* [5.特殊类](#特殊类)


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

### 继承   

**继承**: 一个类可以从另一个类继承其<font color="red">属性和方法</font>，并可以对其扩展。
> 1. 单继承：一个子类只能有一个父类。
> 2. 接口继承：一个子类可以实现多个接口。

***形式***
```java
class 子类 extends 父类{
    //属性
    //方法
}
```


### 多态   

**多态**: 同一个方法在不同的类中有不同的实现方式。

***形式***
```java
public class 父类{
    //属性
    //方法
}

public class 子类 extends 父类{
    //属性
    //方法
}
```

**1. 方法的重写&&变量的隐藏**

* 1. 方法的重写: 子类方法会覆盖父类方法    

方法重写条件：   

> 1. 子类方法的返回类型必须与父类方法的返回类型相同。
> 2. 子类方法的参数列表必须与父类方法的参数列表相同。
> 3. 子类方法的访问权限不能比父类方法的访问权限更严格。   

* 2. 变量的隐藏：子类会隐藏父类的同名变量    

变量隐藏的条件：   

> 1. 子类中定义的变量与父类中同名的变量类型相同。
> 2. 子类中定义的变量与父类中同名的变量作用域小于等于父类中同名的变量作用域。

**2. 向上转型**

向上转型：
> 1. 子类对象可以赋值给父类对象。
> 2. 执行子类重写的方法。
> 3. 父类不能操作子类定义的新变量或方法。
> 4. 因为子类变量相同属于隐藏，所以不能直接访问子类变量。    

```java
class 父类{
    void 方法(){System.out.println("父类方法");}
}

class 子类 extends 父类{
    void 方法(){System.out.println("子类方法");}
}

class Main{
    public static void main(String[] args){
        父类 obj = new 子类();
        //调用子类的方法，因为父类方法被覆盖
        obj.方法();//子类方法
        //错误，因为父类引用不能直接调用子类中新增的方法
        obj.方法2(); //编译错误
    }
}
```


**3. 向下转型**

向下转型：
> 1. 只能转换向上转型过的对象
> 2. 转型后对象能完全访问子类的任何方法和变量   

```java
class 父类{}
class 子类 extends 父类{}

public class Main{
  public static void main(String args[]){
      父类 obj = 子类();
      子类 obj1 = (子类)obj;
      //调用子类方法
      obj.方法()
      //调用子类变量
      obj.变量
  } 
}

```

**4. 抽象类**
> 抽象类是不能实例化的，只能被继承。抽象类中可以有抽象方法和普通方法，有抽象方法的类一定是抽象类且必须被继承。抽象方法不能有实现，只能声明。抽象类不能创建对象，只能被继承。抽象类中可以有构造方法。

```java
访问权限 abstract class 抽象类{
  abstract void 抽象方法();
  void 普通方法(){}
}

class 子类 extends 抽象类{
  //必须实现抽象方法
  void 抽象方法(){
    //方法体
  }
}
```

**5.接口与包**   

*接口的定义：没有方法体的方法，全局常量的集合。*

特点：   
> 1.接口的所有方法都是抽象方法，不能有实现(java8新增的default可以定义)。   
> 2.接口不能创建对象，只能被实现。   
> 3.接口的变量默认是final和static的。   
> 4.实现接口的类必须实现接口中所有的抽象方法。   
> 5.一个类可以实现多个接口，一个接口可以被多个类实现。   
> 6.接口不能包含构造方法。   
> 7.接口可以多继承   


形式：

```java
访问权限 interface 接口名{
  
  //常量
  类型名 常量名 = 值;//等价于public static final 类型名 常量名 = 值;
  
  //抽象方法
  返回值类型 抽象方法方法名(参数列表);//等价于public abstract 返回值类型 方法名(参数列表);
  
  //默认方法
  default 返回值类型 方法名(参数列表){
    //方法体
  }

  //静态方法
  static 返回值类型 方法名(参数列表){
    //调用私有方法只能在接口内
    私有方法名(参数列表);
  }

  //私有方法
  private 返回值类型 方法名(参数列表){

  }
}

class 实现类 implements 接口名1, 接口名2, ...{
  //方法体
  返回值类型 抽象方法方法名(参数列表){}

  
  void show(){
    //要求必须在具体方法内调用

    //调用接口的默认方法
    接口名.usper.默认方法(参数列表);

    //调用接口的静态方法
    接口名.静态方法(参数列表);
  }
}
```

### 特殊类   

[1.string](#1-string)    
[2.stringbuffer](#2-stringbuffer)  
[3.math](#3-math)


#### **1. String**

##### **构造方法**

<span style="color: blue;">**`String()`**</span>  
- **描述**: 创建一个新的空字符串实例。

<span style="color: blue;">**`String(char[] value)`**</span>  
- **描述**: 通过字符数组创建一个新的字符串实例。
- **参数**:
  - `value`: 用于创建字符串的字符数组。

<span style="color: blue;">**`String(byte[] value)`**</span>  
- **描述**: 通过字节数组创建一个新的字符串实例。
- **参数**:
  - `value`: 用于创建字符串的字节数组。

<span style="color: blue;">**`String(byte[] value, int offset, int length)`**</span>  
- **描述**: 通过字节数组的指定部分创建一个新的字符串。
- **参数**:
  - `value`: 用于创建字符串的字节数组。
  - `offset`: 转换开始点。
  - `length`: 要转换的字节数。

<span style="color: blue;">**`String(String original)`**</span>  
- **描述**: 复制现有字符串。
- **参数**:
  - `original`: 要复制的字符串。

##### **方法**

<span style="color: blue;">**`char charAt(int index)`**</span>  
- **描述**: 返回指定索引处的字符。
- **参数**: `index`: 字符索引。
- **返回**: 字符。

<span style="color: blue;">**`int length()`**</span>  
- **描述**: 返回字符串长度。
- **返回**: 字符串的长度。

<span style="color: blue;">**`boolean isEmpty()`**</span>  
- **描述**: 如果字符串为空（`length() == 0`），返回 `true`。

<span style="color: blue;">**`boolean equals(Object anObject)`**</span>  
- **描述**: 比较两个字符串是否相等。
- **参数**:
  - `anObject`: 与当前字符串比较的对象。
- **返回**: 布尔值，表示字符串是否相等。

<span style="color: blue;">**`int compareTo(String anotherString)`**</span>  
- **描述**: 按字典序比较两个字符串。
- **参数**:
  - `anotherString`: 要比较的字符串。
- **返回**: 整数，0 表示相等，正数表示大于，负数表示小于。

<span style="color: blue;">**`String concat(String str)`**</span>  
- **描述**: 将指定字符串连接到此字符串的结尾。
- **参数**:
  - `str`: 连接的字符串。
- **返回**: 新的字符串。

<span style="color: blue;">**`int indexOf(String str)`**</span>  
- **描述**: 返回子字符串的索引。
- **参数**:
  - `str`: 子字符串。
- **返回**: 子字符串的起始索引。

<span style="color: blue;">**`String substring(int beginIndex)`**</span>  
- **描述**: 返回从指定索引开始到结尾的子字符串。
- **参数**:
  - `beginIndex`: 起始索引。
- **返回**: 新的子字符串。

<span style="color: blue;">**`String substring(int beginIndex, int endIndex)`**</span>  
- **描述**: 返回从指定索引开始到结束的子字符串。
- **参数**:
  - `beginIndex`: 起始索引。
  - `endIndex`: 结束索引。
- **返回**: 新的子字符串。

<span style="color: blue;">**`String replace(char oldChar, char newChar)`**</span>  
- **描述**: 替换字符串中的字符。
- **参数**:
  - `oldChar`: 被替换的字符。
  - `newChar`: 替换的字符。
- **返回**: 新的字符串。

<span style="color: blue;">**`String[] split(String regex)`**</span>  
- **描述**: 根据正则表达式分割字符串。
- **参数**:
  - `regex`: 正则表达式。
- **返回**: 字符串数组。

<span style="color: blue;">**`String toLowerCase()`**</span>  
- **描述**: 将字符串转换为小写。
- **返回**: 小写字符串。

<span style="color: blue;">**`String toUpperCase()`**</span>  
- **描述**: 将字符串转换为大写。
- **返回**: 大写字符串。

<span style="color: blue;">**`String trim()`**</span>  
- **描述**: 去除字符串两端的空白符。
- **返回**: 修剪后的字符串。

<span style="color: blue;">**`void getBytes(int srcBegin, int srcEnd, byte[] dst, int dstBegin)`**</span>  
- **描述**: 将字符转换为字节并存储到字节数组中。
- **参数**:
  - `srcBegin`: 起始索引。
  - `srcEnd`: 结束索引。
  - `dst`: 目标字节数组。
  - `dstBegin`: 目标开始索引。

<span style="color: blue;">**`void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)`**</span>  
- **描述**: 将字符存储到字符数组中。
- **参数**:
  - `srcBegin`: 起始索引。
  - `srcEnd`: 结束索引。
  - `dst`: 目标字符数组。
  - `dstBegin`: 目标开始索引。

<span style="color: blue;">**`String intern()`**</span>  
- **描述**: 返回字符串的规范化版本。
- **返回**: 规范化字符串。

##### **注意**: String用==比较时，比较的是地址，而不是值。

#### **2. StringBuffer**

##### **构造方法**

<span style="color: blue;">**`StringBuffer()`**</span>  
- **描述**: 创建一个新的空字符串缓冲区。

<span style="color: blue;">**`StringBuffer(int capacity)`**</span>  
- **描述**: 创建一个新的字符串缓冲区，其初始容量为 `capacity`。
- **参数**:
  - `capacity`: 初始容量。

##### **方法**

<span style="color: blue;">**`StringBuffer append(boolean b)`**</span>  
- **描述**: 将布尔值转换为字符串并追加到缓冲区末尾。
- **参数**:
  - `b`: 要追加的布尔值。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(char c)`**</span>  
- **描述**: 将字符追加到缓冲区末尾。
- **参数**:
  - `c`: 要追加的字符。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(char[] str)`**</span>  
- **描述**: 将字符数组追加到缓冲区末尾。
- **参数**:
  - `str`: 要追加的字符数组。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(char[] str, int offset, int len)`**</span>  
- **描述**: 将字符数组的指定部分追加到缓冲区末尾。
- **参数**:
  - `str`: 要追加的字符数组。
  - `offset`: 起始索引。
  - `len`: 要追加的字符数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(double d)`**</span>  
- **描述**: 将双精度浮点数转换为字符串并追加到缓冲区末尾。
- **参数**:
  - `d`: 要追加的双精度浮点数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(float f)`**</span>  
- **描述**: 将单精度浮点数转换为字符串并追加到缓冲区末尾。
- **参数**:
  - `f`: 要追加的单精度浮点数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(int i)`**</span>  
- **描述**: 将整数转换为字符串并追加到缓冲区末尾。
- **参数**:
  - `i`: 要追加的整数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(long lng)`**</span>  
- **描述**: 将长整数转换为字符串并追加到缓冲区末尾。
- **参数**:
  - `lng`: 要追加的长整数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(Object obj)`**</span>  
- **描述**: 将对象转换为字符串并追加到缓冲区末尾。
- **参数**:
  - `obj`: 要追加的对象。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(String str)`**</span>  
- **描述**: 将字符串追加到缓冲区末尾。
- **参数**:
  - `str`: 要追加的字符串。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer append(StringBuffer sb)`**</span>  
- **描述**: 将字符串缓冲区追加到缓冲区末尾。
- **参数**:
  - `sb`: 要追加的字符串缓冲区。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`int capacity()`**</span>  
- **描述**: 返回当前容量。
- **返回**: 当前容量。

<span style="color: blue;">**`char charAt(int index)`**</span>  
- **描述**: 返回指定索引处的字符。
- **参数**:
  - `index`: 字符索引。
- **返回**: 字符。

<span style="color: blue;">**`int length()`**</span>  
- **描述**: 返回字符串缓冲区长度。
- **返回**: 字符串缓冲区长度。

<span style="color: blue;">**`StringBuffer delete(int start, int end)`**</span>  
- **描述**: 删除指定索引范围的字符。
- **参数**:
  - `start`: 起始索引。
  - `end`: 结束索引。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer deleteCharAt(int index)`**</span>  
- **描述**: 删除指定索引处的字符。
- **参数**:
  - `index`: 字符索引。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, boolean b)`**</span>  
- **描述**: 在指定索引处插入布尔值。
- **参数**:
  - `index`: 起始索引。
  - `b`: 要插入的布尔值。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, char c)`**</span>  
- **描述**: 在指定索引处插入字符。
- **参数**:
  - `index`: 起始索引。
  - `c`: 要插入的字符。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, char[] str)`**</span>  
- **描述**: 在指定索引处插入字符数组。
- **参数**:
  - `index`: 起始索引。
  - `str`: 要插入的字符数组。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, char[] str, int offset, int len)`**</span>  
- **描述**: 在指定索引处插入字符数组的指定部分。
- **参数**:
  - `index`: 起始索引。
  - `str`: 要插入的字符数组。
  - `offset`: 字符数组起始索引。
  - `len`: 要插入的字符数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, double d)`**</span>  
- **描述**: 在指定索引处插入双精度浮点数。
- **参数**:
  - `index`: 起始索引。
  - `d`: 要插入的双精度浮点数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, float f)`**</span>  
- **描述**: 在指定索引处插入单精度浮点数。
- **参数**:
  - `index`: 起始索引。
  - `f`: 要插入的单精度浮点数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, int i)`**</span>  
- **描述**: 在指定索引处插入整数。
- **参数**:
  - `index`: 起始索引。
  - `i`: 要插入的整数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, long l)`**</span>  
- **描述**: 在指定索引处插入长整数。
- **参数**:
  - `index`: 起始索引。
  - `l`: 要插入的长整数。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, Object obj)`**</span>  
- **描述**: 在指定索引处插入对象。
- **参数**:
  - `index`: 起始索引。
  - `obj`: 要插入的对象。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer insert(int index, String str)`**</span>  
- **描述**: 在指定索引处插入字符串。
- **参数**:
  - `index`: 起始索引。
  - `str`: 要插入的字符串。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`StringBuffer reverse()`**</span>  
- **描述**: 反转字符串缓冲区。
- **返回**: 字符串缓冲区。

<span style="color: blue;">**`String toString()`**</span>  
- **描述**: 返回字符串缓冲区的字符串表示。
- **返回**: 字符串。

<span style="color: blue;">**`StringBuffer setLength(int newLength)`**</span>  
- **描述**: 设置字符串缓冲区的长度。
- **参数**:
  - `newLength`: 新的长度。
- **返回**: 字符串缓冲区。

##### ***String和StringBuffer的区别***

- String是不可变的对象，每次修改都会产生一个新的对象，因此String的操作效率较低。
- StringBuffer是可变的对象，可以对字符串进行修改，因此StringBuffer的操作效率较高。
- 在多线程环境下，使用StringBuffer比String更安全，因为StringBuffer的操作是线程安全的。

##### ***StringBuffers和StringBuilders的区别***

- StringBuffers是同步的，而StringBuilders是非同步的。
- StringBuffers是可变的，而StringBuilders是不可变的。
- StringBuffers是线程安全的，而StringBuilders不是线程安全的。
- StringBuffers的效率比StringBuilders高。

#### **2. Math**

##### **方法**

<span style="color: blue;">**`static double abs(double a)`**</span>  
- **描述**: 返回绝对值。
- **参数**:
  - `a`: 需要绝对值的双精度浮点数。
- **返回**: `a` 的绝对值。

<span style="color: blue;">**`static float abs(float a)`**</span>  
- **描述**: 返回绝对值。
- **参数**:
  - `a`: 需要绝对值的单精度浮点数。
- **返回**: `a` 的绝对值。

<span style="color: blue;">**`static int abs(int a)`**</span>  
- **描述**: 返回绝对值。
- **参数**:
  - `a`: 需要绝对值的整数。
- **返回**: `a` 的绝对值。

<span style="color: blue;">**`static long abs(long a)`**</span>  
- **描述**: 返回绝对值。
- **参数**:
  - `a`: 需要绝对值的长整数。
- **返回**: `a` 的绝对值。

<span style="color: blue;">**`static double max(double a, double b)`**</span>  
- **描述**: 返回两个双精度浮点数的最大值。
- **参数**:
  - `a`: 第一个双精度浮点数。
  - `b`: 第二个双精度浮点数。
- **返回**: `a` 和 `b` 中的较大值。

<span style="color: blue;">**`static float max(float a, float b)`**</span>  
- **描述**: 返回两个单精度浮点数的最大值。
- **参数**:
  - `a`: 第一个单精度浮点数。
  - `b`: 第二个单精度浮点数。
- **返回**: `a` 和 `b` 中的较大值。

<span style="color: blue;">**`static int max(int a, int b)`**</span>  
- **描述**: 返回两个整数的最大值。
- **参数**:
  - `a`: 第一个整数。
  - `b`: 第二个整数。
- **返回**: `a` 和 `b` 中的较大值。

<span style="color: blue;">**`static long max(long a, long b)`**</span>  
- **描述**: 返回两个长整数的最大值。
- **参数**:
  - `a`: 第一个长整数。
  - `b`: 第二个长整数。
- **返回**: `a` 和 `b` 中的较大值。

<span style="color: blue;">**`static double min(double a, double b)`**</span>  
- **描述**: 返回两个双精度浮点数的最小值。
- **参数**:
  - `a`: 第一个双精度浮点数。
  - `b`: 第二个双精度浮点数。
- **返回**: `a` 和 `b` 中的较小值。

<span style="color: blue;">**`static float min(float a, float b)`**</span>  
- **描述**: 返回两个单精度浮点数的最小值。
- **参数**:
  - `a`: 第一个单精度浮点数。
  - `b`: 第二个单精度浮点数。
- **返回**: `a` 和 `b` 中的较小值。

<span style="color: blue;">**`static int min(int a, int b)`**</span>  
- **描述**: 返回两个整数的最小值。
- **参数**:
  - `a`: 第一个整数。
  - `b`: 第二个整数。
- **返回**: `a` 和 `b` 中的较小值。

<span style="color: blue;">**`static long min(long a, long b)`**</span>  
- **描述**: 返回两个长整数的最小值。
- **参数**:
  - `a`: 第一个长整数。
  - `b`: 第二个长整数。
- **返回**: `a` 和 `b` 中的较小值。

<span style="color: blue;">**`static double ceil(double a)`**</span>  
- **描述**: 返回大于或等于 `a` 的最小整数值。
- **参数**:
  - `a`: 要向上取整的双精度浮点数。
- **返回**: 向上取整后的整数。

<span style="color: blue;">**`static float ceil(float a)`**</span>  
- **描述**: 返回大于或等于 `a` 的最小整数值。
- **参数**:
  - `a`: 要向上取整的单精度浮点数。
- **返回**: 向上取整后的整数。

<span style="color: blue;">**`static double floor(double a)`**</span>  
- **描述**: 返回小于或等于 `a` 的最大整数值。
- **参数**:
  - `a`: 要向下取整的双精度浮点数。
- **返回**: 向下取整后的整数。

<span style="color: blue;">**`static float floor(float a)`**</span>  
- **描述**: 返回小于或等于 `a` 的最大整数值。
- **参数**:
  - `a`: 要向下取整的单精度浮点数。
- **返回**: 向下取整后的整数。

<span style="color: blue;">**`static double round(double a)`**</span>  
- **描述**: 对 `a` 进行四舍五入。
- **参数**:
  - `a`: 要四舍五入的双精度浮点数。
- **返回**: 四舍五入后的整数。

<span style="color: blue;">**`static float round(float a)`**</span>  
- **描述**: 对 `a` 进行四舍五入。
- **参数**:
  - `a`: 要四舍五入的单精度浮点数。
- **返回**: 四舍五入后的整数。

<span style="color: blue;">**`static double random()`**</span>  
- **描述**: 返回一个介于 [0.0, 1.0) 的随机数。
- **返回**: 随机生成的双精度浮点数。

<span style="color: blue;">**`static int gcd(int a, int b)`**</span>  
- **描述**: 返回两个整数的最大公约数。
- **参数**:
  - `a`: 第一个整数。
  - `b`: 第二个整数。
- **返回**: 最大公约数。

<span style="color: blue;">**`static long gcd(long a, long b)`**</span>  
- **描述**: 返回两个长整数的最大公约数。
- **参数**:
  - `a`: 第一个长整数。
  - `b`: 第二个长整数。
- **返回**: 最大公约数。

<span style="color: blue;">**`static int lcm(int a, int b)`**</span>  
- **描述**: 返回两个整数的最小公倍数。
- **参数**:
  - `a`: 第一个整数。
  - `b`: 第二个整数。
- **返回**: 最小公倍数。

<span style="color: blue;">**`static long lcm(long a, long b)`**</span>  
- **描述**: 返回两个长整数的最小公倍数。
- **参数**:
  - `a`: 第一个长整数。
  - `b`: 第二个长整数。
- **返回**: 最小公倍数。

#### **3. Calendar**

***Calendar类***

- 用于处理日期、时间、时区和时刻。
- 该类提供了对日期、时间、时区和时刻的各种操作。
- Calendar类是抽象类，不能直接实例化，只能通过它的子类来实例化。

***Calendar类中的常量***

- `Calendar.YEAR`： 年。
- `Calendar.MONTH`： 月。
- `Calendar.DATE`： 日。
- `Calendar.HOUR`： 时。
- `Calendar.MINUTE`： 分。
- `Calendar.SECOND`： 秒。
- `Calendar.AM_PM`： 上午/下午。
- `Calendar.HOUR_OF_DAY`： 24小时制的小时。


##### **方法**

<span style="color: blue;">**`Calendar getInstance()`**</span>  
- **描述**: 获取当前时间的日历对象。
- **返回**: 当前时间的日历对象。

<span style="color: blue;">**`void setTime(Date date)`**</span>  
- **描述**: 设置日历的时间。
- **参数**:
  - `date`: 要设置的时间。

<span style="color: blue;">**`Date getTime()`**</span>  
- **描述**: 获取日历的时间。
- **返回**: 日历的时间。

#### **4. Date**

- 用于处理日期和时间。
- 该类表示特定的日期和时间，精确到毫秒。
- Date类是java.util包中的一个类，是Calendar类的子类。

##### **方法**

<span style="color: blue;">**`Date()`**</span>  
- **描述**: 创建一个新的 Date 对象。

<span style="color: blue;">**`Date(long date)`**</span>  
- **描述**: 创建一个新的 Date 对象，并将其初始化为指定的时间。
- **参数**:
  - `date`: 要设置的时间。

### **5. SimpleDateFormat**

- 用于格式化日期和时间。
- 该类用于格式化日期和时间，它可以将一个Date对象转换为一个字符串，或者将一个字符串转换为一个Date对象。

##### **方法**

<span style="color: blue;">**`SimpleDateFormat(String pattern)`**</span>  
- **描述**: 创建一个新的 SimpleDateFormat 对象。
- **参数**:
  - `pattern`: 日期和时间模式。

<span style="color: blue;">**`String format(Date date)`**</span>  
- **描述**: 将一个 Date 对象格式化为字符串。
- **参数**:
  - `date`: 要格式化的时间。
- **返回**: 格式化后的字符串。

<span style="color: blue;">**`Date parse(String source)`**</span>  
- **描述**: 将一个字符串解析为 Date 对象。
- **参数**:
  - `source`: 要解析的字符串。
- **返回**: 解析后的 Date 对象。

## 异常
***定义：程序运行中，各种非正常情况***   

*常见：除数为0，空指针，文件不存在，输入格式不正确等。*

$$
Object -> 
Throwable -> 
  \begin{cases}
		Exception(运行时异常)->
    \begin{cases}
      ArithmeticException(算术异常) \\
      NulPointerException(空指针异常) \\
      IllegalArgumentException(非法参数异常) \\
      ArrayIndexOutOfBoundsException(数组越界) \\
    \end{cases} \\
		Error (运行时错误) \\
  \end{cases}
$$   

### **1. 异常处理**

$$
处理异常 
  \begin{cases}
    捕获异常:try-catch-finally \\
    抛出异常:throw \\
    声明异常:throws \\
  \end{cases}
$$

#### **1.1 try-catch-finally**

- try块：可能出现异常的语句块。
- catch块：捕获异常的语句块。
- finally块：无论是否出现异常都要执行的语句块。

```java
try {
  //可能出现异常的语句块
} catch (ExceptionType e) {
  //捕获异常的语句块
  e.printStackTrace(); //打印异常信息
}catch (ExceptionType1 e1) {
  //捕获异常的语句块
}
finally {
  //无论是否出现异常都要执行的语句块
  //一定是出口语句，不能有return语句
}
```
<span style="color: red;">**注意**：ExceptionType不能是ExceptionType1的父类，因为如此后面的catch块将不会执行。</span>


#### **1.2 throw**

- 抛出一个异常。

```java
throw new ExceptionType("异常信息");
```

#### **1.3 throws**

- 抛出一个异常，并通知调用者。

```java
public void method() throws ExceptionType {
  //可能出现异常的语句块
}
```

