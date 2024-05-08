import heartred from "../assets/images/library/heartred.png"
import heart from "../assets/images/library/heartoutline.png"
import download from "../assets/images/library/download.png"
import book from "../assets/images/logo/logo.png"



function Images(props: { src: string }) {
    return(
        <div className=" border rounded-md p-1 grid grid-cols-6 ">
            <img className="w-5 h-5 mt-1" src={download} /> 
            <p className="text-[0.5em] mr-72 pt-1.5 ">392</p>
            <img className="w-5 h-5 mt-1 mr-10 ml-3" src={props.src}/> 
            <p className="text-[0.5em] mr-20 pt-1.5 ">200</p>
            <img className="w-7 h-5 mt-1 mr-20 ml-2" src={book}/> 
            <p className="text-[0.5em] mr-28 pt-1.5 ">600</p>
        </div>
    )
  }

function DownloadAndViewPanel() {
  return (
    <div>
            <div className="grid grid-cols-4 text-center gap-24
             ml-28 mt-1 rounded-lg pt-1 mb-44 container"
             >
                <div className="ml-5 min-w-[15em]">
                <Images 
                    src={heart}
                />
                </div>
                <div className=" max-w-[15em]">
                <Images 
                    src={heartred}
                />
                </div>
                <div className="-ml-6 max-w-[15em]">
                <Images
                    src={heart}
                />
                </div>
                <div className="-ml-10 max-w-[15em]">
                <Images 
                    src={heartred}
                />
                </div>
            </div>
        </div>
  )
}

export default DownloadAndViewPanel