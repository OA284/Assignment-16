export default function Footer() {
    return (
        <>
            <div className="footer w-full h-full bg-[#2c3e50]">
                <div className="container h-full py-24 flex sm:flex-row sm:justify-center sm:items-center sm:gap-18 flex-col justify-between items-center gap-y-10">
                    <div className="location text-white w-[33%] text-center leading-10">
                        <h1 className="text-3xl font-semibold">LOCATION</h1>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>

                    <div className="around text-white w-[33%] text-center">
                        <h1 className="text-3xl font-semibold mb-3">AROUND THE WEB</h1>
                        <div className="socialMedia grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-4 gap-y-2">
                                <i className="fa-brands fa-facebook border-2 p-2 rounded-full mx-auto"></i>
                                <i className="fa-brands fa-twitter border-2 p-2 rounded-full mx-auto"></i>
                                <i className="fa-brands fa-linkedin-in border-2 p-2 rounded-full mx-auto"></i>
                                <i class="fa-solid fa-globe border-2 p-2 rounded-full mx-auto"></i>
                        </div>
                    </div>

                    <div className="aboutFreelancer w-[33%] text-center flex flex-col justify-center items-center">
                        <h1 className="text-white text-3xl font-semibold mb-3">ABOUT FREELANCER</h1>
                        <p className="text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

                <div className="underFooter w-full h-[4rem] bg-[#1a252f] flex justify-center items-center">
                    <p className="text-white">Copyright © Your Website 2021</p>
                </div>
            </div>
        </>
    )
}
