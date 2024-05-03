import circus from "../assets/images/books/Night Circus.png"
import money from "../assets/images/books/The Psychology of Money.png"
import outsider from "../assets/images/books/The Outsider.png"
import ottoman from "../assets/images/books/Ottoman.png"
import forest from "../assets/images/books/Shadow in the Forest.png"
import hunter from "../assets/images/books/The Forest Hunter.png"


function BookCoverGallery() {
  return (
    <div className="grid grid-rows-2 gap-5 grid-flow-col max-h-[75px] 
    ml-64 mt-16 w-2/5 h-32"
    >
      <div>
        <img src={money} alt="" className="h-30 book-cover"/>
      </div>
      <div>
        <img src={outsider} alt="" className="mt-[7.5em] book-cover"/>
      </div>
      <div>
        <img src={ottoman} alt="" className="book-cover"/>
      </div>
      <div>
        <img src={forest} alt="" className="mt-[8.5em] book-cover"/>
      </div> 
      <div>
        <img src={hunter} alt="" className="book-cover"/>
      </div>
      <div>
        <img src={circus} alt="" className="mt-[6em] book-cover"/>
      </div>       
    </div>
  )
}

export default BookCoverGallery