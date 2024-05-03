import join from "../assets/images/icons/join.png"
import support from "../assets/images/icons/support.png"
import podcast from "../assets/images/icons/podcast-1.png"
import library from "../assets/images/icons/library.png"

interface FeatureProps {
    imageUrl: string;
    heading: string;
    paragraph: string;
    className?: string;
  }

function Feature(props: FeatureProps){
    return(
        <div className="grid grid-rows-4 grid-flow-col gap-4 border rounded-lg 
            features max-h-[14em] max-w-[18em] shadow-lg"
        >
            <div className="row-span-2 col-span-2 flex justify-center 
            items-center flex-col mt-24"
            >
                <img alt="" className={props.className} src={props.imageUrl} />
                <h1 className="text-xl text-center mt-3">{props.heading}</h1>
                <p className=" break-words text-center mt-3 font-light">
                    {props.paragraph}
                </p>
            </div>
        </div> 
    )
}

function Features() {
  return (
    <div className="grid grid-rows-2 mt-20">
        <h1 className="text-3xl font-bold features text-center">
            We Offer Unique Features
        </h1>
        <p className="text-balance text-center font-thin">
            Readerly is your digital library-- a place that makes it easy to 
            access books, documents, audio-visual <br/> materials and resources for 
            students, researchers, and members of the wider public.
        </p>
        <div className="flex justify-evenly mt-5">
            <Feature imageUrl={join} className="w-16 h-16 mt-6"
            heading="Join a Community" 
            paragraph="Join a community that aligns with your interests, to 
            maximize the benefits you gain from being a part of the Readerly 
            community."  
            />
            <div>
            <Feature imageUrl={support} className="w-16 h-16"
            heading="Access 24/Hr Support" 
            paragraph="Support staff is available to answer questions, 
            provide information, and offer guidance on various matters." 
            /> 
            </div>
            <div>
            <Feature imageUrl={podcast} className="w-16 h-16 mt-6"
            heading="Listen to Podcasts" 
            paragraph="If you're interested in exploring podcasts listen to 
            our audio content on-demand, whenever and wherever you want." 
            />
            </div>
            <div>
            <Feature imageUrl={library} className="w-16 h-16"
            heading="Enjoy Our Library" 
            paragraph="Access a wide range of information sources, a vast 
            collection of books, documents, and audio-visual materials." 
            />
            </div>
        </div>
    </div>
  )
}

export default Features