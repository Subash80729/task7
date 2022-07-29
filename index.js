var body = document.querySelector('body')
var container = document.createElement('div')



var heading = document.createElement('h1')
heading.innerHTML = "card creation"

var image = document.createElement('img')
image.src = "https://images.squarespace-cdn.com/content/v1/5c1074accc8fed6a4251da8f/1632825358284-7LGGMHZO98Q9L3FWUSKC/Coconut+Tree"

var content = document.createElement('p')
content.innerText = "Lets celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between.The coconut palm is a long-lived plant; it has a single trunk, 20-30 metre tall, its bark is smooth and gray, marked by ringed scars left by fallen leaf bases. The tree can live as long as 100 years producing an annual yield of 50 to 100 coconuts."
var btn = document.createElement('button')
btn.innerHTML = "submit"
body.appendChild(container)


heading.style = `
text-align:center;
color:green;
background-color:black;

`
image.style = `
width:100%;
height:400px;

`
btn.style = `
margin-left:50%;
margin-right:50%;
display: block;
   text-decoration: none;
   color: green;
   background-color: yellow;
   padding: 3px;
   text-align: center;


`





container.append(heading, image, content, btn)
container.style=`
position:absolute;
top:50%;
left:50%;
right:50%;
transform:translate(-50%,-50%);


border:2px solid black;
width:500px;
height:auto;

`