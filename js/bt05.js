// Đáp án bài 5: 0.81649658092
// Kết quả của chương trình phía dưới: 0.8687817770337302

var x = 0.5
var first = 1
var dau = -1
var mu = 1
var second = first + dau * (x*mu) / 2
var eps = 0.001

while(Math.abs(second - first) > eps) {
    mu++
    dau = -dau
    first = second
    second = first + dau * (Math.pow(x, mu) * (2 * mu - 1)) / (2 * mu); 
}

document.write(first)