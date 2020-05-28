class Hotel{
	hotelName = ""
	numberOfNights = Math.floor(Math.random()*10) + 1
	address = ""
	image = ""

	constructor(hotelName, address, image){
		this.hotelName = hotelName
		this.address = address
		this.image = image
	}

	showAvailability(numNights){

		if (numNights > this.numberOfNights){
			return `<p>Sorry, no available nights for ${this.hotelName}.</p>`

		} else{
			return `<button> I'll reserve </button>`

		}

	}

}

const hotel1 = new Hotel("Hilton", "Blabla 10", "https://r-cf.bstatic.com/images/hotel/max1024x768/475/47526446.jpg")
const hotel2 = new Hotel("Hotel somethingsomething", "Blabla 20", "https://r-cf.bstatic.com/images/hotel/max1024x768/475/47526446.jpg")
const hotel3 = new Hotel("Hostel thingy", "Blabla 30", "https://r-cf.bstatic.com/images/hotel/max1024x768/475/47526446.jpg")

console.log(hotel1)
console.log(hotel2)
console.log(hotel3)

console.log(hotel1.showAvailability(4))
