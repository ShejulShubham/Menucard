

const userLoggedKey="loggedInUser";
localStorage.setItem(userLoggedKey,JSON.stringify(obj));
let loggedInUser=Array(JSON.parse(localStorage.getItem(userLoggedKey))) || [];

let container=document.getElementById("container");
let msg=document.getElementById("msg");

function renderloggedUser()
{
    if(loggedInUser.length==0)
    {
        msg.textContent="No Logged In User";
        
    }
    let card=document.createElement("div");
    card.innerHTML="";
    loggedInUser.forEach((item)=>{
        card.innerHTML=`
        <label>Name : <input id="name" value=${item.name} disabled></label>
            <label>Email : <input id="email" value=${item.email} disabled></label>
            <label>Password : <input type="password" id="password" disabled value=${item.role}></label>
        `
        card.className="card";
    });
    container.appendChild(card);

}
renderloggedUser();