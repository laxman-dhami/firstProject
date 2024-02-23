function AddToBill(event){
  event.preventDefault();

  const Dish = event.target.dish.value;
  const Price = event.target.price.value;
  const Table = event.target.table.value;

  const obj = {
    Dish,
    Price,
    Table
  };
  axios.post('https://crudcrud.com/api/b4b7dbc93518438eb867665dcc04383e/rest', obj)
    .then((res)=>{
      
      showOnscreen(obj);
    })
    .catch((err)=>{
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded",()=>{
  axios.get('https://crudcrud.com/api/b4b7dbc93518438eb867665dcc04383e/rest')
    .then((res)=>{
      for(let i=0; i<res.data.length; i++){
        showOnscreen(res.data[i]);
      }
    })
    .catch((err)=>{
      console.log(err);
    });
});

function showOnscreen(obj){
  const parentEle = document.getElementById(obj.Table);
  parentEle.innerHTML = parentEle.innerHTML + `<li id="${obj._id}"> ${obj.Dish}-${obj.Price}-${obj.Table}
  <button onclick="deleteOrder('${obj._id}')" type="button">Delete</button>
  </li>`;
 }
  function deleteOrder(objId){
    axios.delete(`https://crudcrud.com/api/b4b7dbc93518438eb867665dcc04383e/rest/${objId}`)
    .then((res)=>{
      removeFromscreen(objId)
    })
    .catch((err)=>{
      console.log(err)
    })
}
function removeFromscreen(objId){
  const elementToRemove = document.getElementById(objId);
  if (elementToRemove) {
    elementToRemove.remove();
  } else {
    console.log("Element not found");
  }
}

