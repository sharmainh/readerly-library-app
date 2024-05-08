import logo from "../assets/images/logo/book_icon.png"

interface ChoiceSelector{
  paragraph: string;
  paragraph2: string;
  paragraph3: string;
  heading: string
}

function Choices(props:ChoiceSelector){
  return(
    <div>
      <h1 className="text-xl mb-3 hover:text-green-200">{props.heading}</h1>
      <p className="mb-3 hover:text-green-200">{props.paragraph}</p>
      <p className="mb-3 hover:text-green-200">{props.paragraph2}</p>
      <p className="mb-3 hover:text-green-200">{props.paragraph3}</p>
    </div>
  )
}

function Footer() {
  return (
    <div className="container footer text-white min-w-[90em] pb-5">
      <div className="grid grid-cols-2 pt-10">
        {/* column 1 */}
        <div className="grid grid-cols-2 mx-24 font-thin">
          <h1 className="text-4xl text-center" 
            style={{
                    animation: 'jump 3s infinite alternate'
                    }}>
                      Readerly
          </h1> 
          <img className="w-12 h-14 -ml-[4em]" src={logo}/>
          <p className="text-center ml-5 mt-2">Innovative digital library company: 
            Access diverse content online; empower learning, research, and 
            exploration seamlessly for users worldwide.
          </p>
        </div>
         {/* column 2 */}
          <div className="grid grid-cols-3 gap-8 text-center mx-5 mt-5">
            <Choices 
              heading="Support"
              paragraph="Feature Requests"
              paragraph2="Contact Support"
              paragraph3="Account Recovery"
              />
              <Choices 
                heading="Books"
                paragraph="All-Time Best Sellers"
                paragraph2="Book Club Selections"
                paragraph3="Recommended Reads"
              />
              <Choices 
                heading="Authors"
                paragraph="Personal Blogs"
                paragraph2="Published Authors"
                paragraph3="Influencers"
              />
          </div>
      </div>
    </div>
  )
}

export default Footer