import fivestar from "../assets/images/library/5stars.png"
import fourstar from "../assets/images/library/4stars.png"
import psychology from "../assets/images/blog/Psychology of Money.png"
import pain from "../assets/images/blog/The Pain Habit.png"
import life  from "../assets/images/blog/Life On Our Planet.png"
import illusion from "../assets/images/blog/Illusion of choice.png"



interface TrendingBook{
    className2: string;
    imageUrl: string; imageUrl2: string;
    heading: string;
    paragraph: string;

}


function Image(props: { src: string; className: string }) {
    return(
        <img alt="" className={props.className} src={props.src}
        style={{ borderTopLeftRadius: '5px', borderRadius: '5px' }} 
        />
    )
}

function Trending(props: TrendingBook){
    return(
        <>
        <div className="border trending leading-10 rounded-lg p-2 pb-12 
        grid-rows-2 grid-col">
            <Image className={'w-[14em] h-40 justify-center'} src={props.imageUrl} />
            <div className="mt-2 grid grid-row-2 text-center justify-center mx-5 leading-10 ">
                <h1 className="text-[1.1em] ">{props.heading}</h1>
                <p className="font-light text-sm pb-3">{props.paragraph}</p>
                <Image className={`${props.className2} ml-6 rounded-lg`} 
                    src={props.imageUrl2}
                />
            </div>
        </div> 
        </>
    )
}


function TrendingBooks() {
  return (
    <>
    <div className="grid grid-row grid-flow-col justify-center 
    mt-32 blog text-3xl font-bold container"
    >
        <h1 className="ml-28">Trending Books</h1>
    </div>
    <div className=" flex justify-center gap-20 mt-10 ml-24 container ">
        <Trending
            imageUrl={life}
            heading="A Life On Our Planet"
            paragraph="By: David Attenborough"
            className2="w-22 h-5"
            imageUrl2={fivestar}
        />     
        <Trending
            imageUrl={psychology} 
            heading="Psychology of Money"
            paragraph="By: Morgan Housel"
            className2="h-6"
            imageUrl2={fourstar}
        />
        <Trending
            imageUrl={illusion} 
            heading="The Illusion of Choice"
            paragraph="By: Richard Shotton"
            className2="w-22 h-5"
            imageUrl2={fivestar}
        />
        <Trending
            imageUrl={pain}
            heading="Pain Habit"
            paragraph="By: Drew Coverdale"
            className2="pr-2 w-28 h-6"
            imageUrl2={fourstar}
        />
    </div>
    </>
  )
}

export default TrendingBooks