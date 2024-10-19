#include <stdio.h>
#include <stdlib.h>
#include <malloc.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

void push(Node** head, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    Node* temp = *head;
    while (temp->next!= *head) temp = temp->next;
    temp->next = newNode;
    newNode->next = *head;
}

void pop(Node* head) {
    Node* temp = head->next;
    while (temp->next->next != head) temp = temp->next;
    Node* toDelete = temp->next;
    temp->next = head;
    free(toDelete);
}

void print(Node* head) {
    Node* temp = head->next;
    while (temp != head) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    Node* head = (Node*)malloc(sizeof(Node));
    head->data = 0;
    head->next = head;
    push(&head, 1);
    push(&head, 2);
    push(&head, 3);
    push(&head, 4);
    print(head);
    pop(head);
    print(head);
    return 0;
}
