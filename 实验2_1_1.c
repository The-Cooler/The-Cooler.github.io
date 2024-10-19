#include <stdio.h>
#include <stdlib.h>

typedef struct Stack {
    int top;
    int size;
    int* arr;
}Stack;

Stack* createStack(int size) {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->top = 0;
    stack->size = size;
    stack->arr = (int*)malloc(size * sizeof(int));
    return stack;
}

void push(Stack* stack, int data) {
    if (stack->top == stack->size) {
        printf("ջ��\n");
        return;
    }
    stack->arr[stack->top] = data;
    stack->top++;
}

int pop(Stack* stack) {
    if (stack->top == 0) {
        printf("ջ��\n");
        return -1;
    }
    stack->top--;
    return stack->arr[stack->top];
}

int peek(Stack* stack) {
    if (stack->top == 0) {
        printf("ջ��\n");
        return -1;
    }
    return stack->arr[stack->top - 1];
}

int isEmpty(Stack* stack) {
    return stack->top == 0;
}

int main() {
    Stack* stack = createStack(5);
    push(stack, 1);
    push(stack, 2);
    push(stack, 3);
    push(stack, 4);
    push(stack, 5);
    printf("ջ��Ԫ��:%d\n", peek(stack));
    printf("ջ�Ƿ�Ϊ��:%d\n", isEmpty(stack));
    printf("����Ԫ��:%d\n", pop(stack));
    printf("ջ��Ԫ��:%d\n", peek(stack));
    printf("ջ�Ƿ�Ϊ��:%d\n", isEmpty(stack));
    return 0;
}
