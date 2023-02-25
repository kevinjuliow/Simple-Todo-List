const inputButton = document.querySelector('.inputBtn')
const textBox = document.querySelector('.textBox')
const content = document.querySelector('.todoContainer')

inputButton.addEventListener('click' , function(){
  
  const newTodo = document.createElement('div');
  const delleteBtn = document.createElement('button')
  newTodo.innerHTML = textBox.value;
  delleteBtn.innerHTML = 'X'
  content.append(newTodo);
  newTodo.classList.add('newTodo')
  newTodo.append(delleteBtn)
  delleteBtn.classList.add('delleteBtn')

  delleteBtn.addEventListener('click' , dellete)
  function dellete (){
    content.removeChild(newTodo)
  }

})




