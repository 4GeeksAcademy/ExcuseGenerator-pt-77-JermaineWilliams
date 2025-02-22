import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  const whoArray = ["The dog", "My grandma", "My mom", "My bird", "Mr.Williams"]
  const actionArray = ["ate", "broke", "crashed", "pooped", "Threw"]
  const whatArray = ["my homework", "my phone", "the car","my shoes", "My book"]
  const whenArray = ["before the class","when I was sleeping","while I was exercising","during my lunch","while I was praying", "When i was talking to my friend"]
  
  let whoIndex = Math.floor(Math.random() * whoArray.length);
  let actionIndex = Math.floor(Math.random() * actionArray.length);
  let whatIndex = Math.floor(Math.random() * whatArray.length);
  let whenIndex = Math.floor(Math.random() * whenArray.length);

  const who = document.querySelector(".who")
  const action = document.querySelector(".action")
  const what = document.querySelector(".what")
  const when = document.querySelector(".when")

  who.innerHTML = whoArray[whoIndex]
  action.innerHTML = actionArray[actionIndex]
  what.innerHTML = whatArray[whatIndex]
  when.innerHTML = whenArray[whenIndex]
  
  
  
  
  
  
  console.log("Hello Rigo from the console!");
}
