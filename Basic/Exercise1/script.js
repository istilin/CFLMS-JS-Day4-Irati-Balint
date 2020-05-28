/* Adding event listener for the submit event */

document.getElementById("theform").addEventListener("submit", (event) => {
	/* Overwriting the default behavior of submit event (refresh) */
	event.preventDefault()
	console.log("hello")
	/* Getting the value of out of our input field */
	result_firstname = document.getElementById("firstname").value
	console.log(result_firstname)
	result_lastname = document.getElementById("lastname").value
	console.log(result_lastname)
	result_age = document.getElementById("age").value
	console.log(result_age)

	/* Calling the function with the data from the input field to generate the dom elements */
	generateDOM(result_firstname, result_lastname, result_age)


})

/* Generates the DOM elements */
const generateDOM = (firstname, lastname, age) => {
	/* Prepering out results div in variables */
	const resultFirst = document.getElementById('resultfirstname')
	const resultLast = document.getElementById('resultlastname')
	const resultAge = document.getElementById('resultage')
	const wrapper = document.getElementById('wrapper')

	const profession = document.getElementById('profession').value
	/* Using the ternary operator instead of writing an if else statement */

	const divColor = profession === 'it' ? 'purple' : 'yellow'
	wrapper.style.backgroundColor = divColor

	/* Using the ternary operator instead of writing an if else statement */
	const color = firstname.length > 5 ? 'green' : 'red'
	resultFirst.style.color = color

	resultFirst.innerHTML = firstname
	resultLast.innerHTML = lastname
	resultAge.innerHTML = age

}
