var x = 0.5
var mu = 1
var first = 1
var second = first + Math.pow(x, mu) / factorial(mu)
var eps = 0.001

while(Math.abs(second - first) > eps){
    mu++
    first = second
    second = first + Math.pow(x, mu) / factorial(mu)
}
document.write(first)

function factorial(n){
    if(n == 0) return 1
    return n * factorial(n-1)
}