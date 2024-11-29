// Đáp án bài 9: 0.9588510772
// Kết quả của chương trình phía dưới: 0.9583333333333334

var x = 0.5
var first = 1
var dau = -1
var mu = 2
var mau = 3
var second = first + dau * Math.pow(x, mu) / factorial(mau)
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 2
    mau += 2
    dau = -dau
    first = second
    second = first + dau * Math.pow(x, mu) / factorial(mau)
}

function factorial(n) {
    if(n==0) return 1
    return n * factorial(n-1)
}

document.write(first)