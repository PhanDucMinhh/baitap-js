// Đáp án bài 11: 0.4054651081
// Kết quả của chương trình phía dưới: 0.40580357142857143

var x = 0.5
var mu = 2
var first = x
var dau = -1
var second = first + dau * Math.pow(x, mu) / mu
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 1
    dau = -dau
    first = second
    second = first + dau * Math.pow(x, mu) / mu
}

document.write(first)