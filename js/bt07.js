// Đáp án bài 7: 0.87758256189
// Kết quả của chương trình phía dưới: 0.875

var x = 0.5
var first = 1
var mu = 2
var dau = -1
var second = first + dau * Math.pow(x, mu) / factorial(mu)
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 3
    dau = -dau
    first = second
    second = first + dau * Math.pow(x, mu) / factorial(mu)
}

function factorial(n) {
    if(n==1) return 1
    return n * factorial(n-1)
}

document.write(first)