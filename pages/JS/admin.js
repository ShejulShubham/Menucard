const storageKey = "Arpita-users";


let arr=(JSON.parse(localStorage.getItem(storageKey))) || [];
let list=document.getElementById("users-list");
let displayarr=[...arr];
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
renderuserlist(displayarr);

let search=document.getElementById("filter");



search.addEventListener("input",(e)=>{
    let val=e.target.value.toLowerCase();
    let filterarr=arr.filter(item=>item.name.toLowerCase().includes(val));
    renderuserlist(filterarr);
})
