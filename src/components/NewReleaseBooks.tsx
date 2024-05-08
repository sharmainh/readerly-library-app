import newbook from "../assets/images/library/new_book.png"
import stars from "../assets/images/library/5stars.png"
import cart from "../assets/images/library/cart.jpg"
import Button from "./Button"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

interface Image{
    alt: string;
    src: string
}


function ImageFadeIn( props:Image ) {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const handleImageLoad = () => {
        setLoaded(true);
      };
  
      const image = new Image();
      image.onload = handleImageLoad;
      image.src = props.src;
  
      return () => {
        image.onload = null; // Clean up event listener
      };
    }, [props.src]);
  
    return (
      <div className={`image-container ${loaded ? 'fade-in' : ''}`}>
        <img src={props.src} alt={props.alt} className=" w-3/4 h-96 ml-12" />
      </div>
    );
  }

function NewReleaseBooks() {
  return (
    <div className="container">
        <div className="grid grid-cols-2 newrelease min-w-[90em] pb-5">
            <div className="mt-24  ml-28">
                <h1 className="text-4xl font-bold">Newly Released Book</h1>
                <p className="mt-3 text-2xl">How A Man Turns Evil</p>
                <p className="text-gray-800 text-lg">Jordan Preston</p>
                <p className="font-thin max-w-sm mt-3 text-gray-800">A gripping
                 novel that explores the intricate transformation of a man 
                 from virtue to malevolence, unraveling the dark forces that 
                 shape his descent into evil, compelling readers to introspection.
                </p>
                <div className="grid grid-cols-2 mt-3">
                    <div className="">
                        <img className="w-24 h-5 mt-1" src={stars}/>
                    </div>
                    <div className="-ml-[10em]"> 
                        <p>
                            <span> 101</span> <span 
                            className="text-gray-800 font-thin">
                            reviews
                            </span>
                        </p>
                    </div>
                </div>
              

            <Button className='p-3 m-5 bg-green-950 bttn border
             border-white ml-12 leading-3'
             >
                <Link to="/library" className='flex items-center 
                    justify-center text-green-200 hover:text-white'
                >
                    <span className="lg:inline-block">
                    Add To Cart
                    </span>
                    <img className="w-6 h-6 ml-2" src={cart} alt="Cart Icon"/>
                </Link>
            </Button>
            </div>
            <div>
                <div className="grid grid-cols-1 w-96 h-[28em] pt-8 ml-20
                    bg-white border mt-10 rounded-md ">
                    <ImageFadeIn src={newbook} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewReleaseBooks