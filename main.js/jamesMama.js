
const button = document.querySelector('button')
const image = document.querySelector('img')
const deatils = document.querySelector('#details')


 button.addEventListener('click',run)

function run(){
  const choose = document.querySelector('input').value
  console.log(choose)
  const url = `https://api.nasa.gov/planetary/apod?api_key=FkFVqWCIbegpLT7qLARm4mLWObYj3h2rDHg8KORa&date=${choose}`

  fetch(url)
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    image.src = data.url
    deatils.innerText = data.explanation
 
  })
  .catch(err => {
    alert(`error ${err}`)
  })


 }
