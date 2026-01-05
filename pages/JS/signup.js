let namef=document.getElementById("name");
let emailf=document.getElementById("email");
let passwordf=document.getElementById("password");
let rolef=document.getElementById("role");
let form=document.getElementById("newForm");
let submit=document.getElementById("submit");
const storagekey="Arpita-users";
let userarr=[];
form.addEventListener("submit",()=>{
    let obj={
        name:namef.value,
        email:emailf.value,
        password:passwordf.value,
        role:rolef.value,


    }
    userarr.push(obj);
    console.log(userarr);
    /*localStorage.setItem(storagekey,JSON.stringify(arr));
    console.log(localStorage.getItem(storagekey));*/

});