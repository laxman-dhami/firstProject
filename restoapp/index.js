function addToBill(event) {
    event.preventDefault();
    const dish = event.target.dish.value;
    const price = event.target.price.value;
    const table = event.target.table.value;

    const obj = {
        dish,
        price,
        table
    }

    axios.post('https://crudcrud.com/api/31f4b5a0da5c40c4866d6c02e0baf313/orders', obj)
        .then((res) => {
            console.log(res);
            showOnscreen(obj);
        })
        .catch((err) => {
            console.log(err);
        })
}

function showOnscreen(obj) {
    const { dish, price, table } = obj;
    const ulId = table + 'Orders';
    const ulElement = document.getElementById(ulId);

    // Create a new list item
    const liElement = document.createElement('li');
    liElement.textContent = `${dish} -Rs ${price}`;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteOrder(obj, ulElement, liElement);
    });

    // Append the delete button to the li element
    liElement.appendChild(deleteButton);

    // Append the li element to the ul element
    ulElement.appendChild(liElement);
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/31f4b5a0da5c40c4866d6c02e0baf313/orders')
        .then((res)=>{
            for(let i=0; i<res.data.length; i++){
                showOnscreen(res.data[i])
            }
        })
        .catch((err)=>{
            console.log(err)
        })
})
function deleteOrder(obj, ulElement, liElement) {
    // Extract the order ID or any unique identifier from obj
    const orderId = obj._id; // Assuming there's an 'id' property in your object

    // Make a DELETE request to remove the order from the API
    axios.delete(`https://crudcrud.com/api/31f4b5a0da5c40c4866d6c02e0baf313/orders/${orderId}`)
        .then((res) => {
            console.log(res);
            // Remove the li element from the DOM
            ulElement.removeChild(liElement);
        })
        .catch((err) => {
            console.log(err);
        });
}

