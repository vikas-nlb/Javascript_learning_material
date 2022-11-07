//Delete the nth element from the end of the linked list
const getLength = (head) => {
    let len = 0
    while (head) {
        len++
        head = head.next
    }
    return len
}
var removeNthFromEnd = function (head, n) {
    let copy  = head
    let len = getLength(head)
    let deleteNum = 0
    if (len < n) {
        return head
    } else if (len === n) {
        return null
    } else {
        deleteNum = len - n
        console.log('Del', deleteNum)
    }
    for (let i = 1; i <= len; i++) {
        if (i === deleteNum) {
            head.next = head.next?.next
            return copy 
            // this works as copy is refering to the same linkedlist as head and since i have initilased it at the begining copy will still be pointing to the first element
        }
        head = head?.next
        console.log(head, 'head')
    }

};

// First I get the length of the linked list
//I make a copy of the head pointer and make both head and copy point to the same linked list
// I find the difference between the length and the node i have to delete which takes me to the node just before the one i need to delete
//Then i just make the value of the link of the current node point to the  node which is next to next , thereby effectively removing the nth node from the linked list
//I return the copy as it will be still pointing to the begining to the linked list