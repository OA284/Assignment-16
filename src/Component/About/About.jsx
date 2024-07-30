import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function About() {
    return (
        <>
            <div className="w-full h-[30rem] mt-[6.5rem] relative bg-[#1abc9c] flex flex-col justify-center items-center">
                <div className="infoOne flex flex-col gap-y-5 items-center">
                    <h1 className="text-white text-5xl font-bold text-center">ABOUT COMPONENT</h1>

                    <div className="shapes flex gap-4 justify-center items-center">
                        <div className="lineOne border-2 w-20 h-1 border-white"></div>
                        <i class="fa-solid fa-star text-white"></i>
                        <div className="lineTwo border-2 w-20 h-1 border-white"></div>
                    </div>

                    <div className="infoTwo flex md:flex-row flex-col text-white w-[70%] gap-6">
                        <div className="partOne">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. 
                                The download includes the complete source files 
                                including HTML, CSS, and JavaScript as well as 
                                optional SASS stylesheets for easy customization.
                            </p>
                        </div>

                        <div className="partTwo">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. 
                                The download includes the complete source files 
                                including HTML, CSS, and JavaScript as well as optional 
                                SASS stylesheets for easy customization.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
