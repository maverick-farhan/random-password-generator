let btn = document.getElementById('btn')
let input = document.getElementById('stringGenerator')

window.addEventListener('load',()=>{
input.focus();
});
input.value="";
btn.addEventListener('click',()=>{
let chars = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let special = '`~!@#$%^&*()-+_:;"/.<,>|';
let length = 15;

const generate = ()=>{
let password = "";
let allChars=chars+cap+special+numbers;
password += chars[Math.floor(Math.random()*chars.length)];
password += numbers[Math.floor(Math.random()*numbers.length)];
password += special[Math.floor(Math.random()*special.length)];
password += cap[Math.floor(Math.random()*cap.length)];
while(length>password.length){
    password += allChars[Math.floor(Math.random()*allChars.length)];
}
console.log(password);
console.log(password.length);
return password;
}
document.querySelector('span#copied').style.display="block";
input.value=generate();
input.select();
navigator.clipboard.writeText(input.value);
});