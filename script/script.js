 const scrlbt = document.querySelector('.scroll-top');

 scrlbt.addEventListener('click',()=>{
     window.scrollTo({
         top:0,
         behavior:'smooth'
     });
 });


 console.log('Привет мир');


let massage;
massage = 'Hello';



for (let index = 1; index < 2; index++) {

    alert(massage);
}



let favoriteFood = "пицца";

for (let index = 1; index < 7; index++) {
    
    console.log(favoriteFood);
}

console.log(favoriteFood); 

favoriteFood="cушка";

console.log(favoriteFood);

let age = 145;
age = 31;
console.log(age);

const pi = 3.1;

let $$$$$ = 1;
let ____________________________________________________________________________________________________________$$$$$$$$$$$$$$$$$$$$$_______________________bn = 4;

alert($$$$$ + ____________________________________________________________________________________________________________$$$$$$$$$$$$$$$$$$$$$_______________________bn)


let 阴道_屁股_阴茎 = 6;


let nig = 123;
nig = 12.345;


let isSun = true;

let isNoSun = false;


if(isSun)
{
    console.log("РНДГЕГКН")
}


let box = null;
let box2;
console.log(box,box2);


let item = {
    title:"Книга",
    pages:200,
    available:true
};

console.log(item.title);

item.title = "Нига";

console.log(item.title);


let colors = ["red","nered","neredagreen"];

for (let index = 0; index < colors.length; index++) {
    console.log(typeof colors[index],": ",colors[index]);
    
}

console.log(`Мой любимый цвет - ${colors[0]}!`)

let buttonPressed = false;

if(buttonPressed)
{
    console.log("Кнопка нажата");
}

let Adult = true;
let aAdult = false;

let nummm = -10;

if(nummm > 0)
{
    console.log("Позитвное")
}
else{
    console.log("Негативное")
}
let grader = ["Отлично","Хорошо","Норм","Пойдёт","лох","лох"];
let grade = 3;

let ber = 0;
for (let index = 10  ; index >=0 ; index = index - 2) {
    
    if(grade>=index)
    {
        console.log(grader[ber])
        break;
    }
    else{
         ber++
    }
}


let agew = 20;
let hasTicket = true;


if(agew >= 18 && hasTicket)
{
    console.log("Можно войти");
}
else{
    console.log("Пчёл отсюда")
}


let day = 3;

switch(day) {

    case 1:
        console.log("Monday")
        break;
    default:
        console.log("Фтщерук щт")
}


let string="admin";

switch(string) {
    case "admin":
        console.log("ПРиветствую господ бог");
        break;
    case "user":
        console.log("ПРиветствую раб божий");
        break;
    case "guest":
        console.log("Приветствую пупник");
        break;
    default:
        console.log("Ты не пройдёшь");
}


let isOnline = true;

let status = isOnline ? "В сети" : "Не в сети";
console.log(status);

let isready = true;

let sratus = isready ? "Готов" : "Не готов";
console.log(sratus);


for(let i = 1; i <10; i++)
{
    for(let ii=1; ii<10;ii++)
    {
        console.log(i + " * " + ii + " = " + i*ii + "   ");
    }
}


for(let i = 5;i<16;i++)
{
    console.log(i);
}

let masser = [];

for(let i = 0;i<10;i++)
{
    masser[i] = Math.round((Math.random()*1000)/100);
    console.log('array random',masser[i])
}

let t = 1;

while(t<=3)
{
    console.log("Шаг" +t);
    t++;
}



let yu = 1;

do {
    console.log(yu);
    yu = yu+1;
}
while(yu<10);


let passw;

do{
    passw = prompt("Введите пароль: ");
}while(passw !=="1234");

alert("ПАроль принят");


let passwr;

do{
    passwr = prompt("Введите пароль 2: ");
}while(passwr !=="5");

alert("ПАроль принят");


let fru = ["apple","banan","lemon"];

for(let frum of fru)
{
    console.log(frum);
}

for(let ertyui of "Prever")
{
    console.log(ertyui);
}


let frul = ["applezilla","bananzilla","lemonzilla"];

for(let fruml of frul)
{
    console.log(fruml);
}

let person = {name:"urOchka", age:15, city:"Мiнск"};


for(let key in person)
{
    console.log(key +": " + person[key]);
}

for(let i = 1;i<=10;i++)
{
if(i % 2 ===0) continue;
console.log(i);
}


let dfghjk = 0;
for( let i =0;i<=5;i++)
{
    dfghjk = dfghjk +i;
}
console.log(dfghjk);



let ananas ="ananas ananasil ananasinu";
let dfghjll = 0;
for(let hy of ananas)
{
    if(hy ==="a")dfghjll++;
}

console.log(ananas+'    '+dfghjll);


let n = 15;

for(let i = 0;i<n;i++)
{
    console.log(i*i)
}


function showM(from, text)
{
    alert(from+ ', '+ text )
}

showM('Privet', 'ueiw');

function sum (a,b){
    console.log(a +b);
}

function sume (a,b){
    return (a +b);
}

let res = sume(1, 2);
alert(res);

const sayh = function()
{
    console.log("Priv")
}


const gener = () => {
    const sumf = (a,b) => a+b;
    return sumf;
}

const sur = gener();
sur(1,5);



button.onclick = function()
{
    console.log("Клик");
}

const sqare = x => x*x;

const obj = {
    name: "Test",
    show() {
        console.log(this.name);
    }
};

obj.show();


button.addEventListener("click", () =>{
    alert.log("Нажали");
});