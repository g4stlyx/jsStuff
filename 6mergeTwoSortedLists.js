/* 
    Although it doesnt work locally, it works in leetcode.
    It is probably about the ListNode class?    

*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeTwoSortedLists(list1,list2){
    let temp = new ListNode();
    let answer = temp;
    while(list1 && list2){
        if(list1.val < list2.val){
            temp.next = new ListNode(list1.val)
            list1 = list1.next
        }
        else{
            temp.next = new ListNode(list2.val)
            list2 = list2.next
        }
        temp = temp.next
    }
    while(list1){
        temp.next = new ListNode(list1.val)
        list1 = list1.next
        temp = temp.next
    }
    while(list2){
        temp.next = new ListNode(list2.val)
        list2 = list2.next
        temp = temp.next
    }
    return answer.next
}

let ex11 = new ListNode(); ex11.next.val = 1; ex11.next.val=2; ex11.next.val =3;
let ex12 = new ListNode(); ex12.next = 1; ex12.next=3; ex12.next =4;
let ex32 = new ListNode(); ex32.next.val = 0;

console.log(mergeTwoSortedLists(ex11,ex12)) // [1,1,2,3,4,4]
console.log(mergeTwoSortedLists(new ListNode(),new ListNode)) // []
console.log(mergeTwoSortedLists(new ListNode(),ex32)) // [0]