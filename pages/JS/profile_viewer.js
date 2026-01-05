

const userLoggedKey="loggedInUser";
localStorage.setItem(userLoggedKey,JSON.stringify(obj));
let loggedInUser=JSON.parse(localStorage.getItem(userLoggedKey)) || [];

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
    
        card.innerHTML=`
        <label>Name : <input id="name" value=${loggedInUser.name} disabled></label>
            <label>Email : <input id="email" value=${loggedInUser.email} disabled></label>
            <label>Password : <input type="password" id="password" disabled value=${loggedInUser.role}></label>
        `
        card.className="card";
    
    container.appendChild(card);

}
renderloggedUser();