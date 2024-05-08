import psychofmoney from "../assets/images/blog/Psychology of Money.jpeg"
import icon from "../assets/images/logo/logo.png"
import fivestar from "../assets/images/blog/5 star.png"
import photo from "../assets/images/blog/profilephoto.png"
import painhabit from "../assets/images/blog/The Pain Habit.png"
import illusion from "../assets/images/blog/Illusion of choice.png"

interface BlogProps{
   imageUrl1: string;  
   paragraph2: string;
   className: string;  className2?: string;
   className3?: string; className4?: string; className5?: string;
}

function Image(props: { src: string; className: string }) {
    return(
        <img alt="" className={props.className} src={props.src}
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} 
        />
    )
}

function Blog(props: BlogProps){
    return(
       <div className="border rounded-lg shadow-xl mb-24">
            <Image className={props.className} src={props.imageUrl1} />
            <div className="flex justify-start mt-2">
            <Image className="w-8 h-6" src={icon} />
            <p className="">800 Views</p>
            <Image className={`${props.className2} ml-[7.5em] 
            w-12 h-12 -mt-[0.5em]`} 
             src={fivestar}
             />
            </div>
            <div className="flex justify-center">
                <p className={`${props.className3} font-thin max-w-[24em] 
                text-xs text-left -mt-[0.5em] pl-1`} 
                >
                    {props.paragraph2}
                </p>
            </div>
            <div className="grid grid-cols-2 mt-2 mb-2">
                <Image className= {`${props.className4} w-12 h-12 rounded-xl`} 
                src={photo} 
                />
                <p className= {`${props.className5} 
                text-xs -ml-[6em] mt-3`}
                >
                    Blog Posted By: Sharmain <br/>
                    5-3-2024
                </p>
            </div>
        </div> 
    )
}


function BlogPosts() {
  return (
    <>
        <div className="grid grid-row grid-flow-col justify-center 
            mt-20 blog text-3xl font-bold ml-24"
        >
            <h1>Blog Posts</h1>
        </div>
        {/* first post */}
        <div className="flex justify-center gap-20 mt-10 ml-24">
            <Blog
            imageUrl1={psychofmoney} className="blog w-72 h-50"
            paragraph2="An essential read for individuals of all interests, 
            not just those keen on investments! The book delves into the 
            intricacies of the Psychology of Money, shedding light on the 
            profound impact it has on Personal Finance."
           />
            <Blog 
            imageUrl1= {painhabit} className="blog w-72 h-[11.5em]"
            paragraph2="A MUST READ for all, even those not inclined towards 
            self-help literature! The author delves into the psychological 
            dimensions of coping with pain, emphasizing habits and their
             profound influence on our well-being"
            
            />  
            <Blog 
            imageUrl1={illusion} className="blog w-72 h-[11.5em]"
            paragraph2='A highly recommended read for a broad audience, 
            "The Illusion of Choice" delves into the intricacies of personal 
            decision-making, money management, and their profound psychological 
            implications.' className3="pb-4"
            />
        </div> 
    </>
  )
}

export default BlogPosts