import BookSearch from "../components/BookSearch"
import Footer from "../components/Footer"
import NewReleaseBooks from "../components/NewReleaseBooks"
import TrendingBooks from "../components/TrendingBooks"
import DownloadAndViewPanel from "../components/DownloadAndViewPanel"


function Library() {
  return (
    <div>
      <NewReleaseBooks/>
      <BookSearch/>
      <TrendingBooks/>
      <DownloadAndViewPanel/>
      <Footer/>
   
    </div>
  )
}

export default Library