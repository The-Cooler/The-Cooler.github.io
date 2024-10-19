#include <stdio.h>
#include <stdlib.h>
#include <malloc.h>

typedef struct {
    int data;
    void* next;
}List;

void insert(List* head, int data) {
    List* newNode = (List*)malloc(sizeof(List));
    newNode->next = head->next;
    newNode->data = data;
    head->next = newNode;
}

void delete_(List* head, int pos) {
    List* temp = head;
    List* prev = head;
    while (temp != NULL && pos > 0) {
        prev = temp;
        temp = temp->next;
        pos--;
    }
    if (temp == NULL) {
        printf("超出链表范围\n");
        return;
    }
    prev->next = temp->next;
    free(temp);
}

void find(List* head, int data) {
    List* temp = head->next;
    int pos = 1;
    while (temp != NULL) {
        if (temp->data == data) {
            printf("找到元素%d，位置为%d\n", data, pos);
            return;
        }
        temp = temp->next;
        pos++;
    }
    printf("未找到元素%d\n", data);
}

int main() {
    List* head = (List*)malloc(sizeof(List));
    head->next = NULL;
    //插入
    insert(head, 1);
    //删除  
    delete_(head, 1);
    //查找
    find(head, 1);
    return 0;
}