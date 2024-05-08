import Button from "./Button"


function BookSearch() {
  return (
    <div className="grid grid-rows-2 justify-center mt-28 border rounded-lg 
    shadow-2xl ml-24 max-h-[5em] max-w-[78em] container"
    >
        {/* 1st row */}
        <div className="grid grid-cols-3 my-2 mx-4 ">
            <div className="mr-24 ">
                <p>Book Title:</p>
            </div>
            <div className="">
                <p>Author Name:</p>
            </div>
            <div className="">
                <p>ISBN: </p>
            </div>
        </div>
        {/* 2nd row */}
        <div>
            <div className="grid grid-cols-4 mx-3 ">
                <div className="mr-2">
                    <input type="text" placeholder="type here" 
                    className=" border px-2 p-1 rounded-md bg-gray-200
                     border-gray-400 text-sm"
                    />
                </div>
                <div className="mx-[5.5em] ">
                    <input type="text" placeholder="type here" 
                    className="border px-2 mx-5 p-1 rounded-md bg-gray-200
                    border-gray-400 text-sm"
                    />
                </div>
                <div className="mx-[11.1em]">
                    <input type="text" placeholder="type here" 
                    className="border p-1 px-2 mx-6 rounded-md bg-gray-200
                    border-gray-400 text-sm"
                    />
                </div>
                <div className="-my-[1.5em]">
                    <Button className=' bg-green-950 bttn border
                    border-white ml-52 p-2 '
                    >
                    <p className="text-green-200 hover:text-white">Search</p>
                    </Button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default BookSearch