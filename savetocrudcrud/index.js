

function saveToCloud(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const add=document.getElementById('add').value;

    
    const obj = {
        name: name,
        email: email,
        tel: tel,
        add:add
    };
   axios.post('https://crudcrud.com/api/57d2170fc9604478a46a6bee5ce54708/appointmentData',obj)
   .then(res=>{
    showOnScreen(res.data)
    
   })
   .catch(err=>{
    document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>"
    console.log(err)
   })
     
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/57d2170fc9604478a46a6bee5ce54708/appointmentData')
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
    const childHTML = `<li id=${obj._id}>${obj.name}-${obj.email}-${obj.tel}-${obj.add}
    <button class="delete-btn" onclick="deleteItem('${obj._id}')">Delete</button>
    <button class="edit-btn" onclick="editItem('${obj._id}', '${obj.name}', '${obj.email}', '${obj.tel}', '${obj.add}')">Edit</button>
</li>`;

parentEle.innerHTML = parentEle.innerHTML + childHTML;
}


    const parentEle = document.getElementById('listofitems');
    const childHTML = `<li id=${obj._id}>${obj.name}-${obj.email}-${obj.tel}-${obj.add}
        <button class="delete-btn" onclick="deleteItem('${obj._id}')">Delete</button>
        <button class="edit-btn" onclick="editItem('${obj._id}', '${obj.name}', '${obj.email}', '${obj.tel}', '${obj.add}')">Edit</button>
    </li>`; // Added closing backtick

    parentEle.appendChild(listItem);



function deleteItem(objId) {
    axios.delete(`https://crudcrud.com/api/57d2170fc9604478a46a6bee5ce54708/appointmentData/${objId}`)
        .then((res) => {
            removeUserFromScreen(objId)
        })
        .catch((err)=>{
            console.log(err)
        })
            
        function removeUserFromScreen(objId){
            const parentEle=document.getElementById('listofitems'); // Change 'listofusers' to 'listofitems'
            const childNodeToBeDeleted=document.getElementById(objId);
            if(childNodeToBeDeleted){
                parentEle.removeChild(childNodeToBeDeleted); // Corrected typo here
            }
        }
        
    }
