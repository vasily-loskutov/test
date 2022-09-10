// let Task = {
//     setID : function(ID){
//         this.id = ID;
//     },
//     outputID: function(){console.log(this.id)}
// };

// XYZ = Object.create(Task);
// XYZ.prepareTask = function(ID,Label){
//     this.setID(ID);
//     this.label = Label;
// }
// XYZ.outputTaskDetails = function(){
//     this.outputID();
//     console.log(this.label);

// }

// let Foo = {};

// let a1 = Object.create(Foo);

// Object.defineProperty(Foo,'constructor',{
//     enumerable:false,
//     value:function Gotcha(){}
// });

// function Foo(who){
//     this.me = who;
// };
// Foo.prototype.identify = function(){
//     return "I am " + this.me;
// };
// function Bar(who){
//     Foo.call(this, who);
// };
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function(){
//     console.log('Hello '+ this.identify()+'.');
// };
// let b1 = new Bar('b1');
// let b2 = new Bar('b2');
// b1.speak();
// b2.speak();

// let Foo = {
//     init: function (who){
//         this.me = who;
//     },
//     identify:function(){
//         return 'I am ' + this.me;
//     }
// };

// let Bar = Object.create(Foo);

// Bar.speak = function(){
//     console.log('Hello, ' + this.identify() + '.');
// };
// let b1 = Object.create(Bar);
// b1.init('b1');
// let b2 =  Object.create(Bar);
// b2.init('b2');

// b1.speak();
// b2.speak();

// function Controller(){
//     this.errors = [];
// };
// Controller.prototype.showDialog = function(title,msg){};

// Controller.prototype.success = function(msg){
//     this.showDialog('Success',msg);
// };
// Controller.prototype.failure = function(err){
//     this.errors.push(err);
//     this.showDialog('Error',err);
// };
// function LoginController(){
//     Controller.call(this);
// };
// LoginController.prototype = Object.create(Controller.prototype);

// LoginController.prototype.getUser = function(){
//     return document.getElementById('login_username').value;
// };
// LoginController.prototype.getPassword = function(){
//     return document.getElementById('login_password').value;
// };
// LoginController.prototype.validateEntry = function(user,pw){
//     user = user || this.getUser;
//     pw = pw || this.getPassword;

//     if(!(user && pw)){
//         return this.failure('Please enter a username & password');
//     }else if(pw.length < 5){
//         return this.failure('Password must be 5+ characters!');
//     }
//     return true;
// };

// function AuthController(login){
//     Controller.call(this);
//     this.login = login;
// }
// AuthController.prototype = Object.create(Controller.prototype);
// AuthController.prototype.server = function(url,data){
//     return $.ajax({
//         url:url,
//         data:data
//     });
// };
// AuthController.prototype,checkAuth = function(){
//     let user = this.login.getUser();
//     let pw = this.login.getPassword();

//     if(this.login.validateEntry(user,pw)){
//         this.server('/check-auth',{
//             user:user,
//             pw:pw
//         }).then(this.succes.bind(this)).fail(this.failure.bind(this));
//     }
// };

// AuthController.prototype.succes = function(){
//     Controller.prototype.succes.call(this,'Autheticated');
// };
// AuthController.prototype.failure = function(err){
//     Controller.prototype.failure.call(this,'Auth Failed: ' + err);
// };

// let auth = AuthController(
//     new LoginController()
// );
// auth.checkAuth();


// class P{
//     foo(){console.log('P.foo')}
// };
// class C extends P{
//     foo(){
//         super();
//     }
// };
// let c1 = new C();
// c1.foo();

// let D = {
//     foo:function(){console.log('D.foo')}
// };
// let E = {
//     foo: C.prototype.foo
// }
// console.log(Object.setPrototypeOf(E,D))
// // E.foo();


// function foo(){
//     return (a) => {
//         console.log(this.a);
//     };
// };

// let obj1 = {
//     a:2
// };
// let obj2 = {
//     a:3
// };
// let bar = foo.call(obj1);
// bar.call(obj2);

// let myObject = {
//     a:2,
//     b:3,
//     c:4
// };


// Object.defineProperty(myObject,'a',{
//     configurable:false,
//     enumerable:false,
// })

// for(i in myObject){
//     console.log(i, myObject[i])
// }

//глобальная область видимости КРАСНЫЙ
// let students = [
//     {id:14, name:'Kyle'},
//     {id:22, name:'Suzy'},
//     {id:112, name:'Frank'},
//     {id:6, name:'Sarah'},

// ];

// function getStudentName(studentID){
//     // функциональная область видимости СИНИЙ
//     for(let student of students){
//         // Область видимости цикла ЗЕЛЕНЫЙ
//         if(student.id == studentID){
//             return student.name;
//         }
//     }
// }
// let nextStudent = getStudentName(14);
// console.log(nextStudent);



// var studentName = 'Suzy';

// function printStudent(studentName){
//     console.log(studentName);
//     console.log(window.studentName);
// }
// printStudent('Frank');

// var special = 42;

// function lookingFor(special){
//     var anotherSpecial = {
//         special:special
//     }
//     function keepLooking(){
//         var special = 3.141592;
//         console.log(special);
//         console.log(anotherSpecial.special)
//         console.log(window.special);
//     }
//     keepLooking();
// }

// lookingFor(1111111);

// (function wrappingOuterScope(){
//     var moduleOne = (function one(){

//     })()
//     var moduleTwo = (function two(){
//         function callModuleOne(){
//             moduleOne.somemetohd();
//         }
//     })()
// })();

// КЭШИРОВАНИЕ И МЕМОМИЗАЦИЯ
// let cache = {};

// function factorial(x){
//     if(x<2) return 1;
//     if(!(x in cache)){
//         cache[x] = x* factorial(x- 1);
//     }
//     return cache[x];
// }
// console.log(factorial(6));
// console.log(cache)


// function lookupStudent(studentID){
//     var students = [
//         {id:14,name:'Kyle'},
//         {id:73,name:'Suzy'},
//         {id:112,name:'Frank'},
//         {id:6,name:'Sarah'}

//     ];
//     return function greetStudent(greeting){

//         var student = students.find(
//             student => student.id == studentID
//         );
//         return `${greeting}, ${student.name}!`;
//     }
// };
// var choseStudents = [
//     lookupStudent(6),
//     lookupStudent(112),
// ];

// console.log(choseStudents[0].name);
// console.log(choseStudents[0]('Hello'))
// console.log(choseStudents[1]('Howdy'))

// function adder(num1){
//     return function addTo(num2){
//         return num1 + num2;
//     };
// }
// let add10To = adder(10);
// console.log(add10To(15));

// function makeCounter(){
//     var count = 0;

//     return  function getCurrent(){
//         count = count+1;
//         return count
//     };
// }

// var hits;
// {
//     let count = 0;
//     hits = function getCurrent(){
//         count = count+1;
//         return count;
//     }
// }

// let studentName = "Frank";

// let greeting = function hello(){
//     console.log(`Hello, ${studentName}`);
// }
// greeting();
// studentName = "Suzy";
// greeting();

// var keeps = [];

// for(let i = 0;i<3;i++){
    
//     keeps[i] = function keepEachI(){
//         return i;
//     }
// }
// console.log(keeps[0]());
// console.log(keeps[1]());
// console.log(keeps[2]());

// function say(myName){
//     var greeting = 'Hello';
//     output();
//      function output(){
//         console.log(`${greeting}, ${myName}`) ;
//     }
// }

// say('Kyle');

// function manageBtnClickEvents(btn){
//     var clickHandlers = [];

//     return function listener(cb){
//             if(cb){
//                 let clickHandler = 
//                 function onClick(evt){
//                     console.log('clicked!');
//                     cb(evt);
//                 };
//                 clickHandlers.push(clickHandler);
//                 btn.addEventListener('click',clickHandler)
//             }else{
//                 for(let handler of clickHandlers){
//                     btn.removeEventListener('click',handler);
//                 }
//                 clickHandlers = [];
//             }
//     }
// }

// var onSubmit = manageBtnClickEvents(mySubmitBtn);

// onSubmit(function checkout(evt){

// });

// onSubmit(function trackAction(evt){

// });

// onSubmit();

function manageStudentGrades(studentRecords){
    let grades = studentRecords.map(getGrade);
    studentRecords = null;
    return addGrade;


function getGrade(record){
    return record.grade;
 }

function sortAndTrimGradeList(){
    grades.sort(function desc(g1,g2){
        return g2 - g1;
    });
    grades = grades.slice(0,10);
 }

function addGrade(newGrade){
    grades.push(newGrade);
    sortAndTrimGradeList();
    return grades;
 }
}
var addNextGrade = manageStudentGrades([
    {id:14,name:'Kyle',grade:86},
    {id:16,name:'Kyle',grade:87},
    {id:88,name:'Kyle',grade:75},
    {id:55,name:'Kyle',grade:61},
    {id:64,name:'Kyle',grade:59},
    {id:78,name:'Kyle',grade:12},

])
// console.log(addNextGrade(81));

function storeStudentInfo(id,name,grade){
    return function getInfo(wichValue){
        var val = eval(wichValue);
        return val
    };
};

// var info = storeStudentInfo(73,'Suzy',87);

// console.log(info('name'));
// console.log(info('grade'));


function defineStudents(){
    var records = [
        {id:14,name:'Kyle'},
        {id:73,name:'Suzy'},
        {id:112,name:'Frank'},
        {id:6,name:'Sarah'}
        
    ];

    var publicAPI = {
        getName
    };
    return publicAPI

    function getName(studentID){
       var student =  records.find(student => student.id == studentID);
        return student.name;
    }
}

var test = defineStudents();

 function toggle(){
        let argumentsArr = arguments;
        var i = 0;
        return function printArgument(){
            let arr = argumentsArr[i];
            i++;
            return arr;
        }
 }  

let speed = toggle('slow','medium','fast');

// console.log(speed())
// console.log(speed())
// console.log(speed())

(
    function(){
        function FeatureXYZ(){/* функциональность FeatureXYZ */};
        //include doSomethingCool()
        function doSomethingCool(){
            var helper = 
            (typeof FeatureXYZ !== undefined) ?
            FeatureXYZ:
            function(){
                // действия по умолчанию
            }
            
            var val = helper();
        }
        doSomethingCool();
        
    })();

// const buttons = document.querySelectorAll('.btn');

// let handleClick = (event)=>{
//         console.log( 'target =>', event.target);
//         console.log('currenttarget =>', event.currentTarget);
//         console.log(event.target === event.currentTarget);
//         event.stopPropagation();
// };
// window.addEventListener('click', ()=>{
//         console.log('Window  Click')
// })
// buttons.forEach(button =>{
//     button.addEventListener('click',handleClick)
// })


// form.onclick = function(event) {
//     event.target.style.backgroundColor = 'yellow';
  
//     // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
//     setTimeout(() => {
//       alert("target = " + event.target.tagName + ", this=" + this.tagName);
//       event.target.style.backgroundColor = ''
//     }, 0);
//   };

const form = document.querySelector('#form1');

form1.onsubmit = function(e){
    e.preventDefault();
    const formData = new FormData(form1);
    const values = Object.fromEntries(formData.entries());
    console.log(values)

}
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     const formData = new FormData(form);
//     const values = Object.fromEntries(formData.entries());
//     console.log(values);
// })
