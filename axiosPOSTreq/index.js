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
  axios.post("https://crudcrud.com/api/7bbb44ec07ae44fb9a641e9b17602d72//appointmentdata",obj)
  .then((res)=>{
    showOnScreen(res.data)
  })
  .catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+'<h4>Something went wrong</h4>'
    console.log(err)
  })
}
function showOnScreen(obj){
  const parentEle=document.getElementById('listofusers')
  parentEle.innerHTML=parentEle.innerHTML+`<li>${obj.Name}- ${obj.Email}-${obj.Phone}</li>`
}