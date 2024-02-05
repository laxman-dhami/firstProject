let totalValue = 0;

function storeTotal(event){
    event.preventDefault();

    const Name = event.target.name.value;
    const Price = event.target.price.value;

    const items = {
        Name,
        Price
    };

    axios.post('https://crudcrud.com/api/6346cf612a8d4428a4dfa608e1de13a9/data', items)
    .then((res)=>{
        showOnTv(res.data);
    })
    .catch((err)=>{
        console.log(err);
    });
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/6346cf612a8d4428a4dfa608e1de13a9/data')
    .then((res)=>{
        for(let i=0; i<res.data.length; i++){
            showOnTv(res.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    });
});

function showOnTv(items){
    const parent=document.getElementById('listofitems');
    const listItem = document.createElement('li');
    listItem.id = items._id;
    listItem.innerHTML = `${items.Name}-${items.Price} <button onclick="deleteItems('${items._id}', '${items.Price}')">Delete</button>`;
    parent.appendChild(listItem);
    totalValue += Number(items.Price);
    updateTotalValue();
}

function deleteItems(itemsId, price){
    axios.delete(`https://crudcrud.com/api/6346cf612a8d4428a4dfa608e1de13a9/data/${itemsId}`)
    .then((res)=>{
        removeUser(itemsId);
        totalValue -= parseFloat(price);
        updateTotalValue();
    })
    .catch((err)=>{
        console.log(err);
    });
}

function removeUser(itemsId) {
    const parentN = document.getElementById('listofitems');
    const childNodeToBeDeleted = document.getElementById(itemsId);
    if (childNodeToBeDeleted) {
        parentN.removeChild(childNodeToBeDeleted);
    }
}

function updateTotalValue() {
    const totalElement = document.getElementById('total');

    totalElement.textContent = `Total value: $${totalValue.toFixed(2)}`;
}
