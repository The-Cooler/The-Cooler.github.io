#include <stdio.h>
#include <stdlib.h>

#define MAXSIZE 100

typedef struct Queue {
    int data[MAXSIZE];
    int front;
    int rear;
} Queue;

Queue q;

void push(int x) {
    q.rear = (q.rear + 1) % MAXSIZE;
    q.data[q.rear] = x;
}

void pop() {
    q.front = (q.front + 1) % MAXSIZE;
}

int isEmpty() {
    return q.front - q.rear == 0;
}

int main() {
    q.front = q.rear = -1;
    int x, i;
    for (i = 1; i <= 10; i++) {
        if (isEmpty()) {
            puts("¶ÓÁÐÂúÁË\n");
            break;
        }
        x = rand() % 100;
        push(x);
        printf("%d ", x);
    }
    printf("\n");
    for (i = q.front + 1; i <= q.rear; i = (i + 1) % MAXSIZE) {
        printf("%d ", q.data[i]);
    }
    printf("\n");
    pop();
    pop();
    if (!isEmpty())
    printf("%d ", q.data[q.front + 1]);
    printf("%d ", q.data[q.rear]);
    return 0;
}