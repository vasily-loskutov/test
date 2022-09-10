function f1(){
   fetch('/index.php?d=1').then(data=>{
    return data.text()
   }).then(data =>{
     console.log(data)
   })
}
function f2(){
    console.log(2)
}
function f3(){
    console.log(3)
}
f1();
f2();
f3();
