window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/6199cafc4ecd44c3a5d4199adaf854a3/appointmentdata')
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
    const listItem = document.createElement('li');
    listItem.id = obj._id;
    listItem.innerHTML = `${obj.Name}-${obj.Email}-${obj.Phone}
        <button onclick="deleteUser('${obj._id}')">Delete</button>
        <button onclick="populateFormForEditing('${obj._id}','${obj.Name}','${obj.Email}','${obj.Phone}')">Edit</button>`;
    
    parentEle.appendChild(listItem);
}


function populateFormForEditing(objId,Name,Email,Phone) {
    document.getElementById('name').value=Name;
    document.getElementById('email').value=Email;
    document.getElementById('tel').value=Phone
    document.getElementById('editUserId').value = objId;
}

function savetoCrudcrud(event) {
    event.preventDefault();

    const editUserId = document.getElementById('editUserId').value;
    const Name = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Phone = document.getElementById('tel').value;

    const obj = {
        Name,
        Email,
        Phone
    };

    if (editUserId) {
        axios.put(`https://crudcrud.com/api/6199cafc4ecd44c3a5d4199adaf854a3/appointmentdata/${editUserId}`, obj)
            .then((res) => {
                updateOnScreen(editUserId, obj);
                document.getElementById('editUserId').value = '';
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        axios.post('https://crudcrud.com/api/6199cafc4ecd44c3a5d4199adaf854a3/appointmentdata', obj)
            .then((res) => {
                showOnScreen(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

function updateOnScreen(objId, updatedData) {
    const listItem = document.getElementById(objId);
    listItem.innerHTML = `${updatedData.Name}-${updatedData.Email}-${updatedData.Phone}
        <button onclick="deleteUser('${objId}')">Delete</button>
        <button onclick="populateFormForEditing('${objId}','${updatedData.Name}','${updatedData.Email}','${updatedData.Phone}')">Edit</button>`;
}

function deleteUser(objId) {
    axios.delete(`https://crudcrud.com/api/6199cafc4ecd44c3a5d4199adaf854a3/appointmentdata/${objId}`)
        .then((res) => {
            removeFromScreen(objId);
        })
        .catch((err) => {
            console.log(err);
        });
}

function removeFromScreen(objId) {
    const parentEle = document.getElementById('listofusers');
    const childEle = document.getElementById(objId);
    if (childEle) {
        parentEle.removeChild(childEle);
    }
}
