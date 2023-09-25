

/*

for(let i = 0; i < 5; i++){
  console.log('in loop:', i)
}

console.log('in loop')


const names = ['larry','shaun', 'elisson']

for(let i = 0; i < names.length; i++){
  //console.log(names[i])

let html = `
 <div>${names[i]}</div>

`
console.log(html)

}
*/

// while loops



//do{
 //console.log('val of i is:', i)
  //i++;
//}while(i < 5);

//const age = 25

//if(age > 20){
 //console.log('you are 20 yrs old')
//}

const password = 'hillwill23456'

if(password.length >= 12 && password.includes('@')){
 console.log('pass word is strong enough')
}else if(password.length >= 8 ){
  console.log('password is strong')
} 


//logical operators or || and &&


//let user = false

//if(!user){
 //console.log('it must be continued')
//}
//console.log(!true)
//console.log(!false)




//break and continue


const scores = [20,30, 45, 50,32, 41,21]


//for(i = 0; i < 5; i++){

 //if(scores[i] === 0){
  //continue;
// }

 //console.log('your score:', i) 
//if(scores[i] === 50 ){
  //console.log('you have your final score:', 50)
  //break;
//}

//}



const grades = 'F'

switch(grades){

case 'A':
console.log('you got an A')
break;
   
case 'B':
console.log('you got an B')
 break;


case 'C':
console.log('you got an C')
break;

case 'D':
console.log('you got an D')
default:

console.log('invalid grade')
 
}

//const greet = function(name){
  //console.log(`good morning ${name}`)
//}
//greet('mario')

  
/*

const bill = function(products,tax){
  Total = 0
  for(let i = 0 ; i < products.length;i++){
    Total += products[i] + products[i] * tax
  }
  
return Total;
}
console.log(bill([20,30,45,60], 0.2))


//const name = 'don'
// functions
const greet = () => 'hello'
let resultOne = greet()
console.log(resultOne)


const ul = document.querySelector('.people')

let people = ['eli','don','dell','larry','ben']
let html = ``;
people.forEach(function(person){
html += `<li style = "color:red">${person}<li/> `

})

console.log(html)
ul.innerHTML = html

let sports ={
name:'jonson',
age:30,
email:'hillarioushanzo@gmail',
location:'berlin',
blogs:['the glory hunter reloaded'],
login: function(){
 console.log('lets kick off')
}

} 

sports.login()

sports.name = 'jansen'


//class user{
//constructor(email,name){

  //this.email = email
   this.name = name
   this.score = 0

//}
//login(){
  console.log(this.email,'just logged in')
//}
//logout(){
  console.log(this.email,'just logged out')
//}

//updateScore(){
  this.score++
  console.log(this.email, 'score is now ', this.score)
//}



//}

// var userOne = new user('hillarious@gmail','hill')
//var userTwo = new user('douglascosta@gmail','costa')

//userOne.login()
//userTwo.logout()


const posts = [

{title: 'post one', body:'this is post one'},
{title:'post two', body:'this is post two'}

]

function getPosts(){
  setTimeout(() => {
let output =  '';
posts.forEach((post,index) =>{
output += `<li>${post.title}</li>`
})

document.body.innerHTML = output
  }, 1000) 
}

function createPost(post, callback){
return new promise((resolve,reject)=>{
   setTimeout(()=>{
   post.push()
    const error = false

  if(error){
    resolve
  }else{
   reject('error: something went wrong')
  }

   })
})

setTimeout(()=>{
posts.push(post)
callback()
},2000)
}



getPosts()
createPost({title:'post three', body:'this is post three'},getPosts)
.then(getPosts)
.catch(err => console.log(err) )
  */
 

/*
class User{
constructor(email, name){
this.email = email
this.name = name
this.score = 0

}
login(){
console.log(this.email,'you just logged in')


}logout(){
console.log(this.email,'you just logged out')
}
updateScore(){
  this.score++
  console.log(this.email,'score is now', this.score)
}




}
 var userOne = new User('lary@gmail.com','leon')
  var userTwo = new User('ellison@gmail.com','elli')

userOne.login()
userTwo.logout()

*/

  /*
class user {

constructor(name,email,){
 this.name = name
 this.email = email
 this.score = 0
}login(){
  console.log(this.email,'you just logged in')
  return this
}

logout(){
  console.log(this.email,'you just logged out')
  return this
}

updateScore(){
  score++
  console.log(this.email, 'score is now', this.score)
   return this
}
}
var userOne = new user('ellison@gmail.com','elli')
var userTwo = new user('larry@gmail','larry')

userOne.login().updateScore().updateScore().logout()

  */



/*

class user{
constructor(email, name){
 this.email = email
 this.name = name
 this.score = 0
}
login(){
 console.log(this.email, 'you just logged in')
 return this
}
logout(){
 console.log(this.email, 'you just logged out')
 return this
}

updateScore(){
 this.score++;
 console.log(this.email,'the score is', this.score)
 return this
}
}

class Admin extends users{
 deleteUser(users){
  users = users.filter()
 }
}



var userOne = new user('hill@gmail.com', 'hill')
var userTwo = new user('lag@gmail.com', 'lag')




userOne.login() .updateScore().updateScore().logout()

var users = [userOne,userTwo]

class User {
  constructor() {
    this.email = email;
    this.name = name;
    this.online = true;

  }
}

var admin = new admin('hill@gmail.com')

 */



/*

class  bold{
constructor(email,name){
this.email = email
 this.name = name
}
login(){
 console.log('user is login')
}
logout(){
  console.log('user is logged out')
}
}



var boldOne = new bold('hill@gmail','hill')
var boldTwo = new bold('lil@gmail.com','lil')

boldOne.login()

const greet = () => 'game'
let result = greet
console.log(greet)

const b = 'willrock'
if(b.length >= 8){
  console.log('password is strong')
}else
if(password.length >= 4){
  console.log('password is fsirly strong')
}else
if(password.length < 4){
  console.log('password is weak')
}


const tech = 'Y'

switch(tech){
  case 'A':
   console.log('your grade is A')
  break;

  case 'B':
  console.log('your grade is B')
  

  case 'C':
  console.log('your grade is c')
  

  case 'D':
  console.log('your grade is d')
  break;
 
  default:
  console.log('your grade is error')
}

for(let i = 0; i < 5; i++){
   console.log('in loop',i)
}


let i = 0;

while(i < 5){
 console.log('in loop', i)
}
i++;
 
*/



class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.online = false
    this.login = function () {
      console.log(this.email, 'has logged in')
    }
  }
}

var userOne = new User('hillarious@gmail.com','myhill')
var userTwo = new User('hillarious@gmail.com','my hill')

console.log(userOne)
userTwo.login()










