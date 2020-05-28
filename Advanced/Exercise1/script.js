var circle = document.getElementById("circle")
circle.addEventListener("mouseover", (event) => {
	const textdiv = document.getElementById("text")
	textdiv.innerHTML = ""
	const textP = document.createElement('p')
	textP.innerText = "you are in the circle"
	textdiv.appendChild(textP)
})

circle.addEventListener("mouseout", (event) => {
	const textdiv = document.getElementById("text")
	textdiv.innerHTML = ""
	const textP = document.createElement('p')
	textP.innerText = "you are outside of the circle"
	textdiv.appendChild(textP)
})
circle.addEventListener("click", (event) => {
	circle.style.backgroundColor = "grey"

})
circle.addEventListener("dblclick", (event) => {
	circle.style.backgroundColor = "blue"

})

