// Đáp án bài 14: 1.12762596521
// Kết quả của chương trình phía dưới: 1.1276041666666667

var x = 0.5
var first = 1 
var mu = 2
var second = first + Math.pow(x, mu) / factorial(mu)
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 2
    first = second
    second = first + Math.pow(x, mu) / factorial(mu)
}

function factorial(n) {
    if(n==0) return 1
    return n * factorial(n-1)
}

document.write(first)
