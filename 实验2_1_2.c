#include <stdio.h>
#include <stdlib.h>
#include <malloc.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

int top = 0;

void push(Node** head, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = (*head)->next;
    (*head)->next = newNode;
    top++;
}

int pop(Node** head) {
    if (top == 0) return -1;
    printf("%d³öÕ»\n", (*head)->next->data);
    Node* temp = (*head)->next;
    (*head)->next = (*head)->next->next;
    free(temp);
    top--;
    return 0;
}

void display(Node* head) {
    Node* temp = head->next;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    Node* head = (Node*)malloc(sizeof(Node));
    head->next = NULL;
    push(&head, 1);
    push(&head, 2);
    push(&head, 3);
    push(&head, 4);
    display(head);
    pop(&head);
    display(head);
    pop(&head);
    pop(&head);
    puts("³öÕ»ºó£º");
    display(head);
    return 0;
}