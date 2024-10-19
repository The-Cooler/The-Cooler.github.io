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
        printf("��������Χ\n");
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
            printf("�ҵ�Ԫ��%d��λ��Ϊ%d\n", data, pos);
            return;
        }
        temp = temp->next;
        pos++;
    }
    printf("δ�ҵ�Ԫ��%d\n", data);
}

int main() {
    List* head = (List*)malloc(sizeof(List));
    head->next = NULL;
    //����
    insert(head, 1);
    //ɾ��  
    delete_(head, 1);
    //����
    find(head, 1);
    return 0;
}