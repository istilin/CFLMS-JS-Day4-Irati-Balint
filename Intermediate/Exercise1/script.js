/* Creating our Class (Blueprint) */

class Hotel {
	hotelName = ""
	numberOfNights = Math.floor(Math.random()*10) + 1
	address = ""
	image = ""

	constructor(hotelName, address, image){
		this.hotelName = hotelName
		this.address = address
		this.image = image
	}

	/* Method will return some html depending on the condition */
	showAvailability(numNights){

		if (numNights > this.numberOfNights){
			return `<p>Sorry, no available nights for ${this.hotelName}.</p>`

		} else{
			return `<br><button> I'll reserve </button>`

		}

	}

}

/* We create our hotel instances */

const hotel1 = new Hotel("Hilton", "Blabla 10", "https://r-cf.bstatic.com/images/hotel/max1024x768/475/47526446.jpg")
const hotel2 = new Hotel("Hotel somethingsomething", "Blabla 20", "https://r-cf.bstatic.com/images/hotel/max1024x768/475/47526446.jpg")
const hotel3 = new Hotel("Hostel thingy", "Blabla 30", "https://r-cf.bstatic.com/images/hotel/max1024x768/475/47526446.jpg")

/* We put the hotel instances into an array to have the opportunity to render them */

const hotels = [hotel1, hotel2, hotel3]


/* Rendering function */

const generateDOM = () => {
	const hotelsDiv = document.getElementById('hotels')

	hotels.map((hotel) => {
		/* Creating the html elements */
		const nameP = document.createElement('p')
		const addressP = document.createElement('p')
		const img = document.createElement('img')
		const availableOrNot = hotel.showAvailability(Math.floor(Math.random() * 5))

		/* Setting up the html elements */
		nameP.innerText = hotel.hotelName
		addressP.innerText = hotel.address
		img.setAttribute('src', hotel.image)

		/* Appending the html elements to our hotels div */
		hotelsDiv.appendChild(nameP)
		hotelsDiv.appendChild(addressP)
		hotelsDiv.appendChild(img)
		hotelsDiv.innerHTML += availableOrNot


	})
}

/* Calling the render function */
generateDOM()