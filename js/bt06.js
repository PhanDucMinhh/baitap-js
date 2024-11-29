// Đáp án bài 6: 0.4794255386
// Kết quả của chương trình phía dưới: 0.4791666666666667

var x = 0.5
var first = x
var mu = 3
var dau = -1
var second = first + dau * Math.pow(x, mu) / factorial(mu)
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 2
    dau = -dau
    first = second
    second = first + dau * Math.pow(x, mu) / factorial(mu)
}

function factorial(n) {
    if(n==1) return 1
    return n * factorial(n-1)
}

document.write(first)