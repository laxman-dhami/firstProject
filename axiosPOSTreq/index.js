function savetoCrudcrud(event){
  event.preventDefault()
  const Name=event.target.name.value;
  const Email=event.target.email.value;
  const Phone=event.target.tel.value;
  
  const obj={
    Name,
    Email,
    Phone
  }
  axios.post("https://crudcrud.com/api/7bbb44ec07ae44fb9a641e9b17602d72/appointmentdata",obj)
  .then((res)=>{
    showOnScreen(res.data)
  })
  .catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+'<h4>Something went wrong</h4>'
    console.log(err)
  })
}


window.addEventListener("DOMContentLoaded",()=>{
  axios.get('https://crudcrud.com/api/7bbb44ec07ae44fb9a641e9b17602d72/appointmentdata')
  .then((res)=>{
    for(let i=0;i<res.data.length;i++){
      showOnScreen(res.data[i])
    }
  })
  .catch((err)=>{
    console.log(err)
  })
})





function showOnScreen(obj) {
  const parentEle = document.getElementById('listofusers');
  parentEle.innerHTML = parentEle.innerHTML + `<li id="${obj._id}">${obj.Name}- ${obj.Email}-${obj.Phone} <button onclick="deleteUser('${obj._id}')">Delete</button> <button onclick="editUser('${obj._id}')">Edit</button></li>`;
}


function deleteUser(objId){
axios.delete(`https://crudcrud.com/api/7bbb44ec07ae44fb9a641e9b17602d72/appointmentdata/${objId}`)
.then((res)=>{
  removeUser(objId)
})
.catch((err)=>{
  console.log(err)
})

function removeUser(objId){
  const parentNode=document.getElementById('listofusers')
  const childNodetobedeleted=document.getElementById(objId)
  if(childNodetobedeleted){
    parentNode.removeChild(childNodetobedeleted)
  }
}
}