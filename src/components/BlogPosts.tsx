import psychofmoney from "../assets/images/blog/Psychology of Money.jpeg"

interface BlogProps{
    imageUrl: string;
    paragraph?: string;
    className?: string;
}

function Image(props: BlogProps){
    return(
        <img alt="" className={props.className} src={props.imageUrl}/>
    )
}

function Blog(props: BlogProps){
    return(
        <div>
            {/* image */}
            
            <div className="grid grid-row grid-flow-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                {/* image */}
                    <p></p>
                    {/* image */}
                </div>
            </div>
            <div className="grid grid-row grid-flow-col gap-4">
                <p></p>
            </div>
            <div className="grid grid-row grid-flow-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <p></p>
                </div>
            </div>
        </div>
    )
}


function BlogPosts() {
  return (
    <>
        <div className="grid grid-row grid-flow-col justify-center 
            mt-20 blog text-3xl font-bold"
        >
            <h1>Blog Posts</h1>
        </div>
        {/* first post */}
        <div className="flex justify-evenly ... mt-5">
           <Blog
            imageUrl={psychofmoney} className="w-full h-full"
            paragraph="dbjnjnknkndjndjwnjnejkwnjknewjbnjnwe"
           
           />
            <div>02</div>
            <div>03</div>
        </div> 
    </>
  )
}

export default BlogPosts