// Đáp án bài 4: 1.22474487139
// Kết quả của chương trình phía dưới: 1.2231626157407407

var x = 0.5
var mu = 1
var dau = 1
var tu = 1
var mau = 0
var first = 1
var second = first + dau*(x*tu/2)
var eps = 0.001

while (Math.abs(second - first) > eps) {
    mu++
    mau += 2
    dau = -dau
    first = second
    second = first + (dau*Math.pow(x, mu)*tu) / (mau*(mau**2))
    tu += 2
}

document.write(first)