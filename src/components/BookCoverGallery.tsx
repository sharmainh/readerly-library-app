import digital from "../assets/images/books/Digital Marketing Strategy.jpg"
import burst from "../assets/images/books/Bursts of Brilliance.jpg"
import brand from "../assets/images/books/Brand Up.jpg"
import circus from "../assets/images/books/Night Circus.png"
import good from "../assets/images/books/The Good Life.jpeg"
import money from "../assets/images/books/The Psychology of Money.png"


function BookCoverGallery() {
  return (
    <div className="grid grid-rows-2 gap-5 grid-flow-col max-h-[75px] 
    ml-64 mt-14 w-2/5 h-32"
    >
      <div>
        <img src={circus} alt="" className="h-30 book-cover"/>
      </div>
      <div>
        <img src={brand} alt="" className="mt-[10em] book-cover"/>
      </div>
      <div>
        <img src={burst} alt="" className="book-cover"/>
      </div>
      <div>
        <img src={good} alt="" className="mt-[10em] book-cover"/>
      </div> 
      <div>
        <img src={digital} alt="" className="book-cover"/>
      </div>
      <div>
        <img src={money} alt="" className="mt-[10em] book-cover"/>
      </div>       
    </div>
  )
}

export default BookCoverGallery