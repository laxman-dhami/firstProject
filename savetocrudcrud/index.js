

function saveToCloud(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    
    const obj = {
        name: name,
        email: email,
        tel: tel
    };
   axios.post('https://crudcrud.com/api/91a5b00b4bf84e91bf92df051baebd7a/appointmentData',obj)
   .then(res=>{
    showOnScreen(res.data)
    
   })
   .catch(err=>{
    document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>"
    console.log(err)
   })
    
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/91a5b00b4bf84e91bf92df051baebd7a/appointmentData')
    .then(res=>{
        console.log(res.data)
        for(let i=0;i<res.data.length;i++){
         showOnScreen(res.data[i])
        }
    })
    .catch(err=>{
        console.log(err)
    })
    
})
function showOnScreen(obj){
    const parentEle=document.getElementById('listofitems')
    parentEle.innerHTML=parentEle.innerHTML+`<li>${obj.name}-${obj.email}-${obj.tel}`
}

