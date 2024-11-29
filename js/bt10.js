// Đáp án bài 10: 0.463647609
// Kết quả của chương trình phía dưới: 0.46346726190476184

var x = 0.5
var mu = 3
var first = x
var dau = -1
var second = first + dau * Math.pow(x, mu) / mu
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 2
    dau = -dau
    first = second
    second = first + dau * Math.pow(x, mu) / mu
}

document.write(first)