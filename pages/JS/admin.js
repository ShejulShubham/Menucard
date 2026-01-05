const storageKey = "Arpita-users";


let arr=(JSON.parse(localStorage.getItem(storageKey))) || [];
let list=document.getElementById("users-list");

function renderuserlist(arr)
{
    list.innerHTML="";
    
    arr.forEach((item)=>{
    let li=document.createElement("li");
    li.innerHTML=`<p>${item.name}</p>
            <p>${item.email}</p>
            `;
    list.appendChild(li);
});
}
renderuserlist(arr);

let input=document.getElementById("filter");

input.addEventListener("input",()=>{
    let val=input.value;
    let filtered=arr.forEach((item)=>{
        item.name.includes(val);
    });
    renderuserlist(filtered);

});
