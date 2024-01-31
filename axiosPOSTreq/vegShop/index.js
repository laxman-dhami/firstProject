
function savetoCrud(event){
    event.preventDefault();
    const Name=event.target.name.value;
    const Price=event.target.price.value;
    const Quantity=event.target.quantity.value;

    const obj={
       Name,
       Price,
       Quantity
    }
    axios.post('https://crudcrud.com/api/b6a5a4481e204f3da3787c25dcdb6ebe/vegshop',obj)
    .then((res)=>{
      showOnScreen(res.data)
      updateTotalCount(Quantity)
    })
    .catch((err)=>{
        console.log(err)
    })
}


function showOnScreen(obj) {
    const parentEle = document.getElementById('listofitems');
    parentEle.innerHTML += `<li id="${obj._id}">${obj.Name} - Rs${obj.Price} - ${obj.Quantity} Kg  
      <input type="number" name="add" id="add_${obj._id}"></input>
        <button onclick="deleteitems('${obj._id}')">Delete</button>
        <button onclick="buyitems('${obj.Name}','${obj.Price}','${obj.Quantity}','${obj._id}')">Buy</button></li>`;
  
   
}


 window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/b6a5a4481e204f3da3787c25dcdb6ebe/vegshop')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            showOnScreen(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
 })


 function deleteitems(objId){
 axios.delete(`https://crudcrud.com/api/b6a5a4481e204f3da3787c25dcdb6ebe/vegshop/${objId}`)
 .then((res)=>{
    removeItem(objId)
    updateTotalCount(false);
 })
 .catch((err)=>{
    console.log(err)
 })
 }
 function removeItem(objId){
    const parentEle=document.getElementById('listofitems')
    const childNodetobedeleted=document.getElementById(objId)
    if(childNodetobedeleted){
        parentEle.removeChild(childNodetobedeleted)
    }
 }
 
 let totalCount = 0; // Initialize totalCount variable outside the functions

function updateTotalCount(increase) {
    totalCount += increase ? 1 : -1;
    // Assuming you have an element with id 'totalCount' to display the total count
    document.getElementById('totalCount').textContent = `Total Count: ${totalCount} items`;
}

function buyitems(name, price, quantity, objId) {
    const quantityToBuy = document.getElementById(`add_${objId}`)?.value ?? 0;
  
    
    if (!quantityToBuy || quantityToBuy <= 0) {
        
        return;
    }

    if (quantityToBuy > quantity) {
        
        return;
    }

    const updatedQuantity = quantity - quantityToBuy;

    
    const quantityElement = document.getElementById(objId);
    quantityElement.innerHTML = `${name} - Rs${price} - ${updatedQuantity} Kg  
        <input type="number" name="add" id="add_${objId}"></input>
        <button onclick="deleteitems('${objId}')">Delete</button>
        <button onclick="buyitems('${name}','${price}','${updatedQuantity}','${objId}')">Buy</button>`;

   
   
}

