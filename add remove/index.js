const form=document.querySelector('form')
const fruits=document.querySelector('.fruits')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const fruitToAdd=document.getElementById('fruit-to-add')
    const newLi=document.createElement('li')
    newLi.innerHTML=fruitToAdd.value+'<button class="delete-btn">x'
    // const newLiText=document.createTextNode(fruitToAdd.value)
   
    // newLi.appendChild(newLiText)
    // newLi.className='fruit'
    // const btn=document.createElement('button')
    // const btnText=document.createTextNode('x')
    // btn.className='delete-btn'
    // btn.appendChild(btnText)
    // newLi.appendChild(btn)
    fruits.appendChild(newLi)
})
fruits.addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete=event.target.parentElement
        fruits.removeChild(fruitToDelete)
    }
})
const filter=document.getElementById('filter')
filter.addEventListener('keyup',function(event){
    const textEnterd=event.target.value.toLowerCase();
    const fruitListItems=document.getElementsByClassName('fruit')
    for(let i=0;i<fruitListItems.length;i++){
        currentFruit=fruitListItems[i].firstChild.textContent.toLocaleLowerCase();
        if(currentFruit.indexOf(textEnterd)===-1){
            fruitListItems[i].style.display="none"
        }
        else{
           fruitListItems[i].style.display="flex"
        }
    }

})
