// Đáp án bài 8: 0.523598776
// Kết quả của chương trình phía dưới: 0.5001860119047619

var x = 0.5
var first = x
var mu = 3
var mau = 2
var second = x + (1 / mau * Math.pow(x, mu) / mu)
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu += 2
    mau += 2
    first = second
    second = x + (1 / mau * Math.pow(x, mu) / mu)
}

document.write(first)