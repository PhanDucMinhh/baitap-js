var x = 0.5
var mu = 2
var first = -x
var second = first - Math.pow(x, mu) / mu
var eps = 0.001


while (Math.abs(second - first) > eps) {
    mu++
    first = second
    second = first - Math.pow(x, mu) / mu
}
document.write(first)