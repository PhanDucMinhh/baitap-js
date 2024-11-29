var x = 0.5
var mu = 1
var dau = -1
var first = 1
var second = first + dau * (mu + 1) * (mu + 2) * Math.pow(x, mu) / 2
var eps = 0.001

while (Math.abs(second - first) > eps) {
    mu++
    dau = -dau                                                                                                                                                                  
    first = second
    second = first + dau * (mu + 1) * (mu + 2) * Math.pow(x, mu) / 2
}

document.write(first)