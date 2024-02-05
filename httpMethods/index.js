function saveToCrudcrud(event) {
    event.preventDefault();

    const objId = document.getElementById('objId').value; // Get the user ID from the hidden input
    const Name = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Phone = document.getElementById('tel').value;

    const obj = {
        Name,
        Email,
        Phone
    };

    if (objId) {
        // If objId exists, it's an edit operation
        axios.put(`https://crudcrud.com/api/ce948ad5bb0d48c2a20369817937214d/appointmentdata/${objId}`, obj)
            .then((res) => {
                updateOnScreen(objId, obj);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        // If objId is empty, it's a new user creation
        axios.post("https://crudcrud.com/api/ce948ad5bb0d48c2a20369817937214d/appointmentdata", obj)
            .then((res) => {
                showOnScreen(res.data);
            })
            .catch((err) => {
                document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong</h4>';
                console.log(err);
            });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/ce948ad5bb0d48c2a20369817937214d/appointmentdata')
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                showOnScreen(res.data[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

function showOnScreen(obj) {
    const parentEle = document.getElementById('listofusers');

    parentEle.innerHTML = parentEle.innerHTML + `<li id="${obj._id}">${obj.Name} - ${obj.Email} - ${obj.Phone} 
        <button onclick="deleteUser('${obj._id}')">Delete</button>
        <button onclick="editUser('${obj.Email}','${obj.Name}','${obj.Phone}','${obj._id}')">Edit</button></li>`;
}

function updateOnScreen(objId, updatedObj) {
    const listItem = document.getElementById(objId);
    if (listItem) {
        listItem.innerHTML = `${updatedObj.Name} - ${updatedObj.Email} - ${updatedObj.Phone} 
        <button onclick="deleteUser('${objId}')">Delete</button>
        <button onclick="editUser('${updatedObj.Email}','${updatedObj.Name}','${updatedObj.Phone}','${objId}')">Edit</button>`;
    }
}

function editUser(email, name, tel, objId) {
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    document.getElementById('tel').value = tel;
    document.getElementById('objId').value = objId;
}

function deleteUser(objId) {
    axios.delete(`https://crudcrud.com/api/ce948ad5bb0d48c2a20369817937214d/appointmentdata/${objId}`)
        .then((res) => {
            removeUser(objId);
        })
        .catch((err) => {
            console.log(err);
        });

    function removeUser(objId) {
        const parentNode = document.getElementById('listofusers');
        const childNodeToBeDeleted = document.getElementById(objId);
        if (childNodeToBeDeleted) {
            parentNode.removeChild(childNodeToBeDeleted);
        }
    }
}
