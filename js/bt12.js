// Đáp án bài 12: 1.09861228867
// Kết quả của chương trình phía dưới: 1.098065476190476

var x = 0.5
var first = x
var mu = 3
var second = first + Math.pow(x, mu) / mu
var kq = 0
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 2
    first = second
    second = first + Math.pow(x, mu) / mu
}

kq = 2 * first

function factorial(n) {
    if(n==0) return 1
    return n * factorial(n-1)
}

document.write(kq)