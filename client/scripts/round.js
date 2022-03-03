var lst=['a','b','c','d','e','f']
var length=lst.length
const round=(lst)=>{
    a=String(lst.splice(1,1))
    console.log(a,lst)
    lst.push(a)
    
}
round(lst)
