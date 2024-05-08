import envelope from "../assets/images/blog/blog_envelope.png"


function Subscribe() {
  return (
    <div className="flex border shadow-2xl ml-[15em] mb-24 max-w-[55em]
    rounded-md">
        <div className="mb-3">
            <img className="w-72 h-64" src={envelope}/>
        </div>
        <div className="ml-12">
            <h1 className="text-3xl mt-14">Subscribe To Our Blog For 
                The Latest <br/> Information
            </h1>
            <p className="mt-2"> 
                Explore literary wonders and insights on our captivating
                <br/>library blog.
            </p>
            <div className="flex items-center justify-center mt-5 ">
                <form className="flex bg-green-950 border border-gray-300 
                rounded-md shadow-md text-black max-h-8"
                >
                    <input type="text" placeholder="Enter Your Email" 
                    className=" px-4 rounded-l-md"
                    />
                    <button type="submit" className="
                    px-4 rounded-r-md focus:ring bttn hover:text-white"
                    >
                        <p className="mb-5em -mt-5 text-green-200">Submit</p>
                    </button> 
                </form>
            </div>
        </div>
   </div>
  )
}

export default Subscribe