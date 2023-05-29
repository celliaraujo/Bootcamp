// Executar no terminal o comando: node c3valores.js

var a = 5
var b = 8
var c = 1

console.log("var a= ".concat(a))
console.log("var b= ".concat(b))
console.log("var c= ".concat(c))
console.log("---------------------")

console.log("A==B AND B>C : ".concat(a==b && b>c))
console.log("A<>B OR B<C : ".concat(a!=b || b<c))
console.log("A>B NOT: ".concat(!(a>b)))
console.log("A<B AND B>C: ".concat(a<b))
console.log("A>=B OR B=C : ".concat(a>=b))
console.log("A<=B NOT : ".concat(!(a<=b)))