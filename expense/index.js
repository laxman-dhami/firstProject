function AddToBill(event) {
  event.preventDefault();

  const Dish = event.target.dish.value;
  const Price = event.target.price.value;
  const Table = event.target.table.value;

  const obj = {
    Dish,
    Price,
    Table
  };
  
  axios.post("https://crudcrud.com/api/7057e4490e544fe984904346d29fa775/orders", obj)
    .then((res) => {
      showOnscreen(res.data); 
    })
    .catch((err) => {
      console.log(err);
    });
}

function showOnscreen(obj) {
  const { _id,Dish, Price, Table } = obj;
  const uId = Table;
  const parentElement = document.getElementById(uId);
  const liElement = document.createElement('li');
  liElement.textContent = `${Dish} - Rs${Price}`;
  parentElement.appendChild(liElement);

  let deleteBtn=document.createElement('button')
  deleteBtn.textContent="Delete"
  liElement.appendChild(deleteBtn)
  deleteBtn.addEventListener("click",function(){
    deleteOrder(_id)
    parentElement.removeChild(liElement)
  })
}

window.addEventListener('DOMContentLoaded',()=>{
  axios.get('https://crudcrud.com/api/7057e4490e544fe984904346d29fa775/orders')
  .then((res)=>{
    console.log(res)

    for(let i=0;i<res.data.length;i++){
      showOnscreen(res.data[i])
    }
  })
  .catch((err)=>{
    console.log(err)
  })
})

function deleteOrder(orderId){
 axios.delete(`https://crudcrud.com/api/7057e4490e544fe984904346d29fa775/orders/${orderId}`)
 .then((res)=>{
  console.log(res)
 })
 .catch((err)=>{
  console.log(err)
 })
}




