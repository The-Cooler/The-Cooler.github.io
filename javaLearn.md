# Java学习
## 基础语法
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
2.switch 多分支语句  

````java
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
````
3.for 循环语句  

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
4.while 循环语句  

```java
while(条件表达式){
    //执行语句
}
```
5.do-while 循环语句  
```java
do{
    //执行语句
}while(条件表达式);
```
