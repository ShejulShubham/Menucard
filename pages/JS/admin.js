const storageKey = "Arpita-users";


let arr=(JSON.parse(localStorage.getItem(storageKey))) || [];
let list=document.getElementById("users-list");
let displayarr=arr.filter(item=>item.role!="admin");
let c=0;
function renderuserlist(arr)
{
    list.innerHTML="";
    
    arr.forEach((item)=>{
    let li=document.createElement("li");
    li.innerHTML=`<p>${item.name}</p>
            <p>${item.email}</p>
            `;
            c++;
    list.appendChild(li);
});
}
renderuserlist(displayarr);

let search=document.getElementById("filter");



search.addEventListener("input",(e)=>{
    let val=e.target.value.toLowerCase();
    let filterarr=arr.filter(item=>item.name.toLowerCase().includes(val));
    renderuserlist(filterarr);
})

/*EXTRA*/
const anchor = document.createElement("a");
document.body.appendChild(anchor);
const userLoggedKey = "loggedInUser";

let loggedInUser=JSON.parse(localStorage.getItem(userLoggedKey));

let userp=document.getElementById("user");
console.log(loggedInUser.name);

userp.textContent="Current User : "+loggedInUser.name;

let logout=document.getElementById("logout");
function redirect() {
    anchor.href = "../index.html";
    anchor.click();
}
logout.addEventListener("click",()=>{
  alert("You are logged out");
  localStorage.removeItem(userLoggedKey);
  userp.textContent="";
  redirect();
});


/*COUNT OF USER*/

let count=document.getElementById("count");
count.textContent="Current Total Users :"+c;
