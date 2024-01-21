

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
   axios.post('https://crudcrud.com/api/e6ed165021ef4d619c52b3c4997dd555//appointmentdata',obj)
   .then(res=>{
    showOnScreen(res.data)
    
   })
   .catch(err=>{
    document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>"
    console.log(err)
   })
    function showOnScreen(obj){
        const parentEle=document.getElementById('listofitems')
        parentEle.innerHTML=parentEle.innerHTML+`<li>${obj.name}-${obj.email}-${obj.tel}`
    }
}


