// function betterThanAverage(classPoints, yourPoints) {
//             classPoints.push(yourPoints);
//             let  count = 0
//             for(let i = 0;i<classPoints.length;i++){
//                 count += classPoints[i];
//             }
//             let arithmeticMean =  count / classPoints.length
//             if(yourPoints > arithmeticMean){
//                 return true
//             }else{
//                 return false

//             }
            
// }
// // console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// // console.log(numbers.reduce((total,current)=>{return total + current},0))

// function countSheeps(arrayOfSheep) {
      
//     return arrayOfSheep.filter((x)=>{if(x == true){return x}} ).length
// }

// // console.log(countSheeps([true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]))
// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6,10).join("")}`
// }

// // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// function isPrime(num) {
//     if(num > 0){
//         for(let i = 2;i<num;i++){
//         if((num % i == 0)){
//             return false
//         }

//    }
//    return true
// }

//   }

// // console.log(isPrime(2))
// function digital_root(n) {
//     while(n>=10){
       
//             let stringN = String(n).split("");
//             n =  stringN.map((x) => { return Number(x)}).reduce((x,last) =>{ return last +=Number(x)},0);
      
          
//     }

        
//          return n;
      
     
    

// }       
// // console.log(digital_root( 942))
// let decodeMorse = function(morseCode){
//     let AbcMorse = {
//         '':' ',
//     "-.-.-.":";",
//     "-...-":"=",
//     "---":"O",
//     "----.":"9",
//     "-..-.":"/",
//     ".-...":"&",
//     "...--":"3",
//     ".--":"W",
//     "--":"M",
//     "--..":"Z",
//     ".----.":"'",
//     "-.-.--":"!",
//     "-...":"B",
//     "..-":"U",
//     ".----":"1",
//     "-.--.-":")",
//     ".-":"A",
//     "-....-":"-",
//     "...-":"V",
//     "...---...":"SOS",
//     "-.--":"Y",
//     "..":"I",
//     "--.-":"Q",
//     "-.":"N",
//     "..---":"2",
//     "-....":"6",
//     "---...":",",
//     ".-.-.":"+",
//     ".--.-.":"@",
//     "....-":"4",
//     "-----":"0",
//     ".-.-.-":".",
//     "-.-.":"C",
//     ".":"E",
//     "..-.":"F",
//     ".---":"J",
//     "-.-":"K",
//     ".-..":"L",
//     ".-.":"R",
//     "...":"S","--.":"G","---..":"8","..--..":"?","-.--.":"(",".--.":"P",".....":"5","..--.-":"_","-..":"D",".-..-.":"\"","-":"T","....":"H","--..--":",","...-..-":"$","--...":"7","-..-":"X"}
   

//     return morseCode.split('  ').join(' ').split(' ').map((x) => {return AbcMorse[x]}).join('').trim();
//   }

// // console.log(decodeMorse('   .   .   '))
// function pigIt(str){
//     return str.split(' ').map((x)=>{return x !== '!' && x !== '?' && x !== '.' && x !== ','? x.slice(1) + x[0] + 'ay': x }).join(' ');
//   }
// // console.log(pigIt('Hello world ?'));
// function scramble(str1, str2) {
    
//     for(let i = 0; i<str2.length;i++){
//         for(let k = 0; k<str1.length;k++){
//             if(i == str1[k]){

//             }
//         }
//     }
    
// }
// // console.log(scramble())


// function humanReadable (seconds) {
 
     
//      return `${Math.floor(seconds/ 60 / 60).toString().padStart(2,'0')}:${(Math.floor(seconds / 60)- (Math.floor(seconds/ 60 / 60) * 60)).toString().padStart(2,'0')}:${(seconds % 60).toString().padStart(2,'0')}`;
//   }



// function generateHashtag (str) {
//     if((str.length > 0) && (str.length <= 140)){
//         return  '#' + str.split(' ').join('').split(' ').map((x) => { return  x[0].toUpperCase()+ x.slice(1)}).join('') ;
//     }
//         return  false;
    
    
// }
// console.log(generateHashtag('Do We have A Hashtag'));
       function sumPairs(ints, s) {
              //Если чисел < 2 то пару мы точно не сможем найти
              if(ints.length < 2)
                return undefined;
              //Объявляем структуру данных Set
              let temp = new Set();
              //Сразу закинем первый элемент, т.к. для него пока что пары точно нет
              temp.add(ints[0]);
              //Проходимся по всему массиву начиная со 2 элемента
              for (let i = 1; i < ints.length; ++i) {
                //Функция has возвращает true если элемент `s - ints[i]` находится
                //в temp, иначе false
                if(temp.has(s - ints[i])){
                  return [s - ints[i], ints[i]];
                }
                temp.add(ints[i]);
              }
              //Если по итогу мы так и не наши
              return undefined;
            }
//   for(let i = 0;i<ints.length;i++){
//     for(let k = 0;k<ints.slice(0,i).length;k++){
//          for(let j = 0;j<ints.slice(0,i).length;j++){
//             if((ints[i] + ints[j] == s) &&(i != j) ){
//               return [ints[j], ints[i]]
              
//          }
//      }
//  }
// }
// return undefined;
// }

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

//     let arr = [];
//     for(let i = 0;i<ints.length;i++){
//         arr.push(ints[i]);
//         for(let k = 0;k<arr.length;k++){
//             for(let j = 0;j<arr.length;j++){
//             if((arr[i] + arr[j] == s) &&(i != j) ){
//                  return [arr[j], arr[i]]
                 
//             }
//         }
//     }
    
//    }
//    return undefined;

function perimeter(n) {
  if(n <= 0 ){
    return 4
  }
  var fib = [0, 1]; // Initialize array!
  for (let i = 2; i <= n+1; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
  }
    return fib.reduce((partialSum, a) => partialSum + a, 0)*4;
}
       
    
// console.log(perimeter(7))

// var isPP = function(n){
 
//     for(let k = 0;k<Math.pow(10, 1000);k++){
//       for(let i = 0;i<Math.pow(10, 1000);i++){
//           if((k !== 1)&& ((i !== 1)) && (Math.pow(k,i) == n)){
//            return [k,i];
//          }
//        }
//       }
//    return null;

       



// function incrementString (string) {
//   let digitInString = string.replace(/[^0-9 ]/gi, '').trim(); 
//   let lettersInString = string.replace(/[^a-z ]/gi, '').trim()
//   if(digitInString == ''){
//     return lettersInString+'1';
//   }else if(string == ''){
//     return '1';
//   }
//   else{
//        if(Number(digitInString) + 1 >=1000){
//         return  lettersInString+ (Number(digitInString) + 1).toString().padStart(5,'0');
//        }
//         return   lettersInString+ (Number(digitInString) + 1).toString().padStart(3,'0');
//   }
// }
// console.log(incrementString('foobar0999'));


function isMerge(s, part1, part2) {
  if(s == ''){
    return true;
  }
      let newS = [];
      let partSum = part1.split('').concat(part2.split(''));
      
      for(let i = 0 ;i<s.length;i++){
        newS.push('');
      }
    for(let k = 0;k<s.length;k++){
        for(let j = 0; j<partSum.length;j++){
          if(s[k] == partSum[j] ){
             if(newS[k] == ''){
              newS.splice(k,0,partSum[j]);
             }
          }
        }
    }
    return newS.join('') ;
}

// console.log(isMerge('codewars', 'code', 'warss'));

// function productFib(prod){
//   var cache = {
//     0: 0,
//     1: 1
//   }
  
//   function fib(s){
//     if(s == 0 || s == 1){return s;}
//     if(s > 1){
//       if(cache[s]){
//         return cache[s];
//       }else{
//         cache[s] = fib(s - 1) + fib(s - 2)
//         return fib(s - 1) + fib(s - 2);
//       }
//     }
//   }
//   let n = 0;
//   while(fib(n) * fib(n + 1) < prod){
//     n++;
//   }
//   if(fib(n) * fib(n + 1) == prod){
//     return [fib(n), fib(n + 1), true]
//   }else{
//     return [fib(n), fib(n + 1), false]
//   }


// }

// console.log(productFib(5895))


