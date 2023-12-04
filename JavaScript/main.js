// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));

// element.onclick = function () {
//   element.classList.toggle("show");
// };
// let myElement = document.querySelector("a");
// console.log(myElement.nextElementSibling.classList.item("0"));
/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };

// one.onblur = function () {
//   document.links[0].click();
// };
// let clasesToAdd = document.querySelector(".classes-to-add");
// let classesToRemove = document.querySelector(".classes-to-remove");
// let currentBtn = document.getElementsByClassName("element current");
// let classesList = document.querySelector(".classes-list div");

// clasesToAdd.onblur = function () {
// //   document.classesList.add();
// // };
/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// element.remove();
/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// // myP.id = `${myP.id}-clone`;

// // myDiv.appendChild(myP);
// let para = document.querySelector("p");
// para.remove();
// // let cloned = document.querySelector(".our-element").cloneNode(true);
// // console.log(cloned)
// let myDiv = document.querySelector(".our-element");
// myDiv.after( document.querySelector(".our-element").cloneNode(true).innerHTML = "start");
// myDiv.before(document.querySelector(".our-element").cloneNode(true).innerHTML = "end");

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

// let span = document.querySelector(".two");

// console.log(span.parentElement);

// span.onclick = function () {
//   span.parentElement.remove();
// }

// let div = document.getElementsByTagName("div")[0];
// console.log(div.lastChild.nodeValue)

// let ele = document.getElementsByTagName("div")[0];
// ele.onclick = function () {
//   console.log(ele.nodeName)
// }

// let ele2 = document.getElementsByTagName("span")[0];
//  ele2.onclick = function () {
//   console.log(ele2.nodeName)
//  }
//  let ele3 = document.getElementsByTagName("p")[0];
//  ele3.onclick = function () {
//   console.log(ele3.nodeName)
// //  }
// let header = document.getElementById("header");
// header.innerHTML = "Home" + "Features page";
// window.console.log('hello,world')
// window.document.title = "Hello , world"
// alert ("Hello I am alert"); // worst choice you've got ever
// confirm("You sure wanna do this motherfucker?");
// let promptCopy = prompt("What is the suitable day to you ser?");
// if (promptCopy === "Friday") {
// alert("no one works on this day motherFucker")
// }
//  setTimeout(function () {
//    confirm(" popup is about to show up in 2 sec more");
//  }, 3000);
// setTimeout(welcomingTheUser, 5000 , "Abdelrahman");
// function welcomingTheUser (user) {
//   alert (`Hello ${user}`)
// }
// let Timer = setTimeout (function (){
// console.log(`Hello`)
// } ,2000)

// let myButton = document.querySelector("button");
// myButton.onclick = function () {
//   clearTimeout(Timer);
// }

// myButton.style.backgroundColor = "red"
/* the time out needs to put inside a var so that when 
we wanna stop it we use that var in the clear time out */
// for (let i = 0; i < 1000; i++ ) {
// setInterval(function () {
// console.log(0[i])
// }, 1000)
// }
// let div = document.querySelector("div")
// function countdown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(stoping);
//   }
// }
// let stoping = setInterval(countdown, 1000)
// console.log(location)
// console.log(location.href)
// // location.href =  "https://google.com"
// location.href = "/#sec1"
// console.log(location.host)
// console.log(location.hostname);
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash sets or returns the anchor part of a URL, including the hash sign (#).
  --- protocol there are two "https which is the secure one" "http which is the normal one"
  --- reload()
  --- replace() // replace the page from the history and open new one
  --- assign() // do not replace the page from the history and open new one
*/

// console.log(location);
// console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
// }, 2000);
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// console.log(history);
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });
// let up = document.getElementById("upBtn");

// window.onscroll = function (){
// if (window.scrollY >= 600) {
//   up.style.display = "block"
// } else {
//   up.style.display = "none"
// }
// }
// up.onclick = function () {
//   window.scrollTo({
// left: 0,
// behavior: "smooth",
// top: 0,

//   })
// }
// # The assignments
// let Msg = prompt(`Print Number From – To`, "Example: 5-20");
// let editMsg = Msg.split("-").sort(function (a, b) {
//   return a - b;
// });
// for (let i = +editMsg[0]; i <= editMsg[1]; i++) {
// let num = document.createElement("div");
// num.textContent = i;
// document.body.append(num)
// }
// // 10-15
// 10;
// 11;
// 12;
// 13;
// 14;
// 15;

// // 20-10

// 10;
// 11;
// 12;
// 13;
// 14;
// 15;
// 16;
// 17;
// 18;
// 19;
// 20;
// let popup = document.getElementById("popup")
// let button = document.getElementById("close-button");

// setTimeout(function() {
// popup.style.display = "block"
// button.style.display = "block"
// } , 5000)
// button.onclick = function () {
//   popup.style.display = "none"
//   button.style.display = "none"
// // }
// let counter = document.getElementById("counter");
// let stopButton = document.getElementById("stop")

// let countdown = setInterval(function() {
// counter.innerHTML -=1;
// if (counter.innerHTML === "0") {

//   location.href = "https://elzero.org"
// } else if (counter.innerHTML === "5") {
//   window.open(
//     "https://elzero.org",
//     "_blank",
//     "width=400,height=400,left=200,top=10"
//   );
// }
// }, 1000);

// let toDo = document.getElementById("toDo");
// let list = document.getElementById("list");
// toDo.onclick = function () {
//   let checked = (list.style.textDecoration = " line-through");

//   if (checked === (list.style.textDecoration = " line-through")) {
//  toDo.onclick = function () {
//   let unchecked = (list.style.textDecoration = "none");
//  }
//   }

// };
// The LocalStorage
// set item

// window.localStorage.setItem("color", "blue");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";
// // get item
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);
// // remove only one speicific item
// // window.localStorage.removeItem("color")
// // clearing all the items
// // window.localStorage.clear();
// // adding these items to the page
// console.log(window.localStorage.key(0))
// document.body.style.backgroundColor = window.localStorage.color;
// console.log(window.localStorage);
// console.log(typeof window.localStorage);
// A project
/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// // lis.forEach((li) => {
// //   li.addEventListener("click", (e) => {
// //     // console.log(e.currentTarget.dataset.color);
// //     // Remove Active Class From all Lis
// //     lis.forEach((li) => {
// //       li.classList.remove("active");
// //     });
// //     // Add Active Class To Current Element
// //     e.currentTarget.classList.add("active");
// //     // Add Current Color To Local Storage
// //     window.localStorage.setItem("color", e.currentTarget.dataset.color);
// //     // Change Div Background Color
// //     exp.style.backgroundColor = e.currentTarget.dataset.color;
// //   });
// // });
// //  document.querySelector(".name").onblur = function() {
// // // console.log(this.value)
// // window.sessionStorage.setItem("input-name", this.value);
// }
// window.localStorage.clear()
/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   // console.log(this.value);
//   window.localStorage.setItem("input-name", this.value);
// };
// let fontName = document.getElementById("FontName");
// let fontColor = document.getElementById("fontColor");
// let size = document.getElementById("size");
// let text = document.getElementById("text");

// fontColor.onchange = function () {
//   window.localStorage.setItem("color", fontColor.value);
//   document.body.style.color = fontColor.value;
// };
// fontName.onchange = function () {
//   window.localStorage.setItem("fontName", fontName.value);
//   document.body.style.fontFamily = fontName.value;
// };
// size.onchange = function () {
//   window.localStorage.setItem("fontSize", size.value);
//   document.body.style.fontSize = size.value;
// };
// document.body.style.color = window.localStorage.getItem("fontColor");
// document.body.style.fontFamily = window.localStorage.getItem("fontName");
// document.body.style.fontSize = window.localStorage.getItem("size");

// fontColor.value = window.localStorage.getItem("fontColor");
// fontName.value = window.localStorage.getItem("fontName");
// size.value = window.localStorage.getItem("size");
// localStorage.clear()
// let select = document.getElementById("select");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// select.onchange = function () {
//   window.sessionStorage.setItem("selectBox", select.value);
// };
// one.oninput = function () {
//   window.sessionStorage.setItem("first input", one.value);
// };
// two.oninput = function () {
//   window.sessionStorage.setItem("second input", two.value);
// };
// three.oninput = function () {
//   window.sessionStorage.setItem("third input", three.value);
// };
// one.value = window.sessionStorage.getItem("one");
// two.value = window.sessionStorage.getItem("two");
// three.value = window.sessionStorage.getItem("three");
// select.value = window.sessionStorage.getItem("select");

// let a = 1;
// let b = 2;
// let myFriends = ["body", "Ahmed"]

//  [a,b] = myFriends

// console.log(a);
// console.log(b);
/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a, b, c, d, e = "Osama"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // console.log(myFriends[4]);

// let [, y, , z] = myFriends;

// console.log(y);
// console.log(z);
// let myFriends = [
//   "Ahmed",
//   "Sayed",
//   "Ali",
//   ["Shady", "Amr", ["Mohamed", "Gamal"]],
// ];
// let [,,,[a,,[,b]]] = myFriends;
// console.log(a) // shady
// console.log(b) // gamal
// let book = "video"
// let video = "book"
// // // we want to swap these values of these vars
// // let stash = book  // stash = video
// // book = video; // book = book
// // video = stash
// // using destructring

// [book, video] = [video, book];

// console.log(book);
// console.log(video);
/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// // // // Save Book Value In Stash
// // // let stash = book; // Video

// // // // Change Book Value
// // book = video; // Book

// // // Change Video Value
// // video = stash; // Video

// [book, video] = [video, book];

// console.log(book);
// console.log(video);

/*
  Destructuring
  - Destructuring Object
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// // ({ theName, theAge, theTitle, theCountry } = user);
// const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);/*
//   Destructuring
//   - Destructuring Object
//   --- Naming The Variables
//   --- Add New Property
//   --- Nested Object
//   --- Destructuring The Nested Object Only
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);
/*
  Destructuring
  - Destructuring Function Parameters
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }
/*
  Destructuring
  - Destructuring Mixed Content
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   skills: [, , three],
//   addresses: { egypt: e },
// } = user;

// console.log(`Your Name Is: ${n}`);
// console.log(`Your Age Is: ${a}`);
// console.log(`Your Last Skill Is: ${three}`);
// console.log(`Your Live In: ${e}`);

// const user2 = {
// name: "Body",
// age: 16 ,
// hardSkills: {
// network: "ccna",
// development: "javascript"
// },
// softSkills: ["communication","activeListening"]
// }

// const {
//   name: Na,
//   age: AG,
//   softSkills: [ COMM,ACTLIST],
//   hardSkills: {network: CCNA, development:JS}
// } = user2;

// console.log(
//   `Hello ${Na}, Your Age is ${AG} and your skills are ${COMM},${ACTLIST},${CCNA},${JS}`
// );
// console.log(Na)
// console.log(AG)
// console.log(COMM)
// console.log(ACTLIST);
// console.log()

// let myNumbers = [1, 2, 3, 4, 5];

// [a, , , , e] = myNumbers;
// console.log(a * e); // 5

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

//    [
//   a,
//   b,
//  c,
//   [d, e, [f ,g]],
// ] = mySkills ;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// ([c, ,] = arr1), ([, ,] = arr2), ([, a, b] = arr3);
// //  [c,,]= arr1;
// // [, , ] = arr2;
// //  [, a, b] = arr3;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
// const {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1,,h3],
// } = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming
// const game = {
//   title: "YS", // change it to "t" // done
//   developer: "Falcom", // change it to "d" // done
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"], // change it to "o", USA to u, Japan to "j"
//     "Ark Of Napishtim": {
//       // change the name of that obj to "a"
//       US: "20 USD", // u_price
//       JAP: "10 USD", //j_price
//       Origin: "30 USD",
//     },
//     //or
//   },
// };

// const {
//   title: t,
//   developer: d,
//   releases: {
//     "Oath In Felghana": o,
//     "Oath In Felghana": [u, j],
//     "Ark Of Napishtim": a,
//     "Ark Of Napishtim": { US: u_price, JAP: j_price, Origin:or },
//   },
// } = game;

// // Write Your Destructuring Assignment/s Here

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

// let chosen = 1;

// const myFriends = [
//     { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
//     { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
//     { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
// ];

// const [f1, f2, f3] = myFriends;

// let friendDetails = function(friendObj){
//     const {title: t, age: a, available: av, skills:[, s2]} = friendObj;

//     console.log(t);
//     console.log(a);
//     console.log(av ? "available" : "Not Available");
//     console.log(s2);
// }

// if(chosen === 1) friendDetails(f1);
// if(chosen === 2) friendDetails(f2);
// if(chosen === 3) friendDetails(f3);
// let myData = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4];
// let UniqueData = new Set();
// UniqueData.add(1).add(2).add(1).add(3).add(3).add(3).add(4).add(4).add(5);
// UniqueData.delete(5);

// console.log(UniqueData);
// console.log(UniqueData.size);
/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

// let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);
/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);
// let me = "Hello Here we are from the example nom1 hello"
// let re = /hello/ig; // i means insensitive that whether i capital or small you're telling it that, it doesn't matter
// g means global, it will get you all of the stuff that you're looking for and returns an array
// console.log(me.match(re))
/*
  Regular Expression

  Ranges
quick recap
 ^: not sign in regular ex
  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9 
  [^0-9] => Any Character Except 0 To 9
  Practice

  - Part 2
  [a-z] 
  [^a-z] 
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));

// let myString = "AaBbcdefG123!234%^&*";
// let numsAndSpecials = /[a-z]/ig;
// console.log(myString.match(numsAndSpecials))

// let myString2 = "AaBbcdefG123!234%^&*";
// let numsAndSpecials2 = /[a-zA-Z]/i;
// console.log(myString.match(numsAndSpecials));
/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));
/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net|org)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));
/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));

// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));

/*
  Regular Expression

  Quantifiers
  n+    => One Or More رقم واحد او اكتر
  n*    => zero or more هيجبلك الصفر معاه او عدد لا نهائي
  n?    => zero or one ممكن الحاجه اللي بعدها تبقى موجوده وممكن لا
*/

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));
/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S
/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));
/*
  Regular Expression

  - replace
  - replaceAll
*/

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));
/*
  Regular Expression
  - Input Form Validation Practice
*/

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);

//   if (validationResult === false) {
//     return false;

//   }
//   return true;
// }
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let re = /\w+:[a-z]\d+:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
// console.log(ip.match(re))
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let re = /Os(\d+)?O/g;
// console.log(specialNames.match(re));

// Output
// ['Os10O', 'OsO', 'Os100O']
// let phone = "+(995)-123 (4567)";
// let re = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
// console.log(phone.match(re));
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let reDate = /25(\/|\s\-\s|\s)?10(\/|\s\-\s|\s)?(\d{2})?\d{2}/g;

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

// let url1 = "elzero.org";
// let url2 = "http://elzero.org";
// let url3 = "https://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
// let re = /(https?:\/\/)?(www.)?\w+.\w+.*/ig;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
/*
  Constructor Function
*/

// function Person(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new Person(100, "Elzero", 5000);
// let userTwo = new Person(101, "Hassan", 6000);
// let userThree = new Person(102, "Sayed", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };
/*
  Constructor Function
  - Deal With Properties And Methods
*/
/*
  Constructor Function
  - New Syntax
*/

// class Persons {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }

// let userOne = new Persons(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof Persons);
// console.log(userOne.constructor === Persons);
// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());

// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); // Native Code
// console.log(userTwo.writeMsg); // Native Code
// /*
//   Constructor Function
//   - Update Properties
//   - Built In Constructors
// */

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.updateName("Osama");
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);
/*
  Class
  - Static Properties And Methods
*/

// class User {
//   // Static Property
//   static count = 0;

//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }

//   // Static Methods
//   static sayHello() {
//     return `Hello From Class`;
//   }
//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayHello());
// console.log(User.countMembers());
/*
  Class
  - Inheritance
*/

// Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

// class User {
//   // Private Property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);

// class Personinfo {
//   #p;
//   constructor(id, email, phone, salary) {
//     this.i = id;
//     this.e = email;
//     this.#p = phone;
//     this.s = salary;
//   }
//   sayNom () {
//     return this.#p * 100;
//   }
// }
// let personInfo = new Personinfo(100, "bgbody@gmail.com", 100, 5500);

// class Personinfo2 extends Personinfo {
//   constructor(id, email, phone, salary , name) {
//     super(id, email, phone, salary);
//     this.n = name;
//   }
// }
// let personInfo2 = new Personinfo2(100, "bgbody@gmail.com", 100, 5500,"body");
// console.log(personInfo.sayNom())
// console.log(personInfo2.n)
// console.log(personInfo2.sayNom());
/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/
/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);

// console.log(User.prototype);

// let strOne = "Elzero";

// console.log(String.prototype);
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne);

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// Object.prototype.love = "Elzero Web School";

// String.prototype.addDotBeforeAndAfter = function (val) {
//   return `.${this}.`;
// };

// let myString = "Elzero";
/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// // Object.defineProperty(myObject, "c", {
// //   writable: false,
// //   enumerable: true,
// //   configurable: true, <= Cannot redefine property
// //   value: 3,
// // });

// myObject.c = 100;

// console.log(delete myObject.c);

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);
/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });

// console.log(myObject);

// console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));
/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

// let dateNow = new Date();

// console.log(dateNow);

// console.log(Date.now()); // 1000 Mill = 1 Second

// let seconds = Date.now() / 1000; // Number Of Seconds
// console.log(`Seconds ${seconds}`);

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; // Number Of Hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; // Number Of Days
// console.log(`Days ${days}`);

// let years = days / 365; // Number Of Years
// console.log(`Years ${years}`);
// let dateNow = new Date();
// console.log(dateNow.getDate())
/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

// let dateNow = new Date();
// let birthday = new Date("Oct 25, 82");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(35);
// console.log(dateNow);

// dateNow.setFullYear(2020, 13);
// console.log(dateNow);

// dateNow.setMonth(15);
// console.log(dateNow);
/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

// console.log(Date.parse("Oct 25 1982"));

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date(404344800000);
// console.log(date2);

// let date3 = new Date("10-25-1982");
// console.log(date3);

// let date4 = new Date("1982-10-25");
// console.log(date4);

// let date5 = new Date("1982-10");
// console.log(date5);

// let date6 = new Date("82");
// console.log(date6);

// let date7 = new Date(1982, 9, 25, 2, 10, 0);
// console.log(date7);

// let date8 = new Date(1982, 9, 25);
// console.log(date8);

// let date9 = new Date("1982-10-25T06:10:00Z");
// console.log(date9);
/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 100000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);
// /*
//   Generators
//   - Generator Function Run Its Code When Required.
//   - Generator Function Return Special Object [Generator Object]
//   - Generators Are Iterable
// */

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator);
// console.log(generator);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }

// for (let value of generator) {
//   console.log(value);
// }
/*
  Generators
  - Delegate Generator
*/

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Z"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

// function* generateNumbers() {
//   // yield 1;
//   // yield 2;
//   // return "A";
//   // yield 3;
//   // yield 4;
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// function sayHello() {
//   return `Hello`;
// }
// let a = 0;
// export {
//   sayHello,a
// }
/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a as myNumber, arr, saySomething };

// export default function () {
//   return `Hello`;
// }