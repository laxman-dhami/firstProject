function savetocrudcrud(event){
    event.preventDefault()

   const Name= event.target.name.value;
   const Email=event.target.email.value;
   const Phone=event.target.tel.value;

   const obj={
    Name,
    Email,
    Phone
   }
   axios.post('https://crudcrud.com/api/d3fd21bbb77348a38ade3a2c014876b8/appointmentdata',obj)
   .then((res)=>{
    showOnscreen(res.data)
   })
   .catch((err)=>{
    console.log(err)
   })
}
   function showOnscreen(obj){
    const parentele=document.getElementById('listofusers')
    parentele.innerHTML = parentele.innerHTML + `<li id="${obj._id}">${obj.Name} - ${obj.Email} - ${obj.Phone}
    <button onclick="deleteUser('${obj._id}')">Delete</button>
    <button onclick="editUser('${obj.Email}','${obj.Name}','${obj.Phone}','${obj._id}')">Edit</button></li>`

}

