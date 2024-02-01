document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);


function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  



function getTodos(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res)=>{
        showOutput(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}
function addTodo(){
    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title:'new todo',
        completed:false
    })
    .then((res)=>{
        showOutput(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function updateTodo(){
    axios.put('https://jsonplaceholder.typicode.com/todos/1',{
        title:'updated todo',
        completed:true
    })
    .then((res)=>{
        showOutput(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function removeTodo(){
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
        showOutput(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}
