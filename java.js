var array =[]

function submit() {
  var obj ={
     name : document.getElementById('name').value,
      email :document.getElementById('email').value,
      password :document.getElementById('password').value,
      number : document.getElementById('number').value,
      
       
  }
  array.push(obj)
  console.log(array)
}