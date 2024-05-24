// task 3

function isPalindrome(num) {
    num = String(num);

    let head = 0;
    let tail = num.length - 1;

    while (head <= tail) {
        if (num[head] != num[tail]) {
            return false;
        }
        head++;
        tail--;
    }
    return true;
}

let testCases = [121, 12321, 98789, 4444, 1001, 12345, 1, 22, 1234321, 6789876, 123456, 1234567890987654321n];
testCases.forEach((num) => {
    console.log(`${num} isPalindrome: ${isPalindrome(num) ? `a palindrome`:`Not a palindrome`}`);
})