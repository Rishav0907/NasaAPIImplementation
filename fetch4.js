var title=document.querySelector('#title')
var image=document.querySelector('#image')
var explanation=document.querySelector('#explanation')
var url="https://api.nasa.gov/planetary/apod?api_key=your_api_key"


fetch(url)
.then(function(response)
{
    return response.json()
}).then(function(response){
    console.log(response)
    var site_title=response.title
    var site_image=response.hdurl
    var site_explanation=response.explanation
    title.textContent=site_title
    image.src=site_image
    explanation.textContent=site_explanation
  })
