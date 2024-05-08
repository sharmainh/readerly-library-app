import { Link } from "react-router-dom"
import Button from "../components/Button"
import BookCoverGallery from "../components/BookCoverGallery"
import BlogPosts from "../components/BlogPosts"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Subscribe from "../components/Subscribe"

  function Home() {
    return (
      <>
     {/* section 1 */}
     <div className="container">
      <div className="grid grid-rows-3 grid-flow-col pl-12 home 
      text-white min-w-[90em]"
      >
        <div className="row-span-3 ml-12">
          <h1 className=" m-7 col-span-2 
              text-4xl mt-20 leading-tight md:leading-normal 
              lg:leading-relaxed "
              >
              Empowering <br/> Minds With Digital <br/> Resources
          </h1>
          <p className="m-7 font-thin -mt-3">
             As you read a book word by word, page <br/> by page, 
             you participate in its creation.
          </p>
          <Button className='p-3 m-5 justify-center bttn border text-center
            border-white ml-12 leading-3'>
              <div>
                  <Link to="/library" 
                    className='flex place-items-center 
                    lg:inline-block lg:mt-0 text-green-200
                    hover:text-white '
                  >
                    View Library
                  </Link>
              </div>
          </Button>  
        </div>
        <BookCoverGallery />
      </div>
      {/* section 2 */}
      <Features />
      <BlogPosts />
      {/* subscribe */}
      <Subscribe />
      {/* footer */}
      <Footer />
      </div>
      </>  
  )
}
export default Home