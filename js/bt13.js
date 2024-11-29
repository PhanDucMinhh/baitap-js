// Đáp án bài 13: 0.52109530549
// Kết quả của chương trình phía dưới: 0.5208333333333334

var x = 0.5
var first = x
var mu = 3
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