const form=document.querySelector('form')
const fruits=document.querySelector('.fruits')
form.addEventListener('submit',function(event){
  event.preventDefault();
  const fruitToAdd=document.querySelector('#fruit-to-add')
  const newLi=document.createElement('li')
  newLi.innerHTML=fruitToAdd.value+'<button class="delete-btn">x'
  fruits.append(newLi)
})
fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
     const fruitToDelete=event.target.parentElement;
     fruits.removeChild(fruitToDelete)
    
  }
 });
 const filter=document.getElementById('filter')
 filter.addEventListener('keyup',function(e){
 const textEntered=e.target.value.toLowerCase();
 const fruitItems=document.getElementsByClassName('fruit')
 for(let i=0;i<fruitItems.length;i++){
  const currentFruitText=fruitItems[i].firstChild.textContent.toLowerCase();
  if(currentFruitText.indexOf(textEntered)===-1){
    fruitItems[i].style.display='none';
  }else{
    fruitItems[i].style.display='flex'
  }
}
 })
