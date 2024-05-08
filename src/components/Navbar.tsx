import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import logo from "../assets/images/logo/book_icon.png"
import { useAuth0 } from '@auth0/auth0-react';


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };


    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false);
    };

  return (
    // <div className="flex container min-w-[90em] justify-center">
    <div className="container min-w-[90em] justify-center">
        <nav className='flex items-center justify-between flex-wrap nav_bg '>
            <div className='flex items-center flex-shrink-0 text-white 
            mr-6 m-2 ml-10'
            >
                <Link to='/' className='flex items-center font-semibold
                 text-xl tracking-tight'
                >
                    <h1 
                    style={{
                        fontSize: 24, 
                        animation: 'jump 3s infinite alternate'
                    }}>
                        Readerly
                    </h1> 
                    <img src={logo} 
                    className="h-12 w-10 mt-1 rounded-lg ml-1 " 
                    alt="Image of a book with drawn pages resembling text lines"
                    />
                </Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 
                mr-2 py-2 text-green-200 border rounded border-green-200
                 hover:text-green-100 hover:border-green-100'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center text-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-3 m-5 justify-center bttn'>
                        <div>
                            <Link to='/' onClick={ clicked} 
                            className='flex place-itmes-center 
                            mt-4 lg:inline-block lg:mt-0 text-green-200
                             hover:text-white mr-4'>
                                    Home
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 justify-center bttn">
                        <div>
                            <Link to='/library' onClick={ clicked } 
                            className='flex place-items-center mt-4 
                            lg:inline-block lg:mt-0 text-green-200
                            hover:text-white mr-4'
                            >
                                    Library
                            </Link>
                        </div>
                    </Button>
                    { isAuthenticated ? (
                    <Button className="p-3 m-5 justify-center bttn">
                        <div>
                            <Link to='/libraryhub' onClick={ clicked } 
                            className='flex place-items-center mt-4 
                            lg:inline-block lg:mt-0 text-green-200
                            hover:text-white mr-4'
                            >
                                    Library Hub
                            </Link>
                        </div>
                    </Button>
                     ) : (
                        <></> // If user is not authenticated, 
                        //don't render the LibraryHub link
                    )}
                    {
                        !isAuthenticated ? 
                        <Button className='p-3 m-5 justify-center bttn'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick() }}
                                className='flex place-items-center mt-4 mr-2 
                                lg:inline-block lg:mt-0 text-green-200
                                hover:text-white mr-4'
                                >
                                    Sign In
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 m-5 justify-center bttn'>
                        <div>
                            <Link to="/" onClick={ () => { signOutOnClick() }}
                            className='flex place-items-center mt-4 mr-2 
                            lg:inline-block lg:mt-0 text-green-200
                            hover:text-white mr-4'
                            >
                                    Sign Out
                            </Link>
                        </div>
                    </Button>
                    }
                </div>
            </div>
            ) : (
                <></>
            )}
        </nav>
    </div>
  )
}

export default Navbar