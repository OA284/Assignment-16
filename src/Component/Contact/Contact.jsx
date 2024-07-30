export default function Contact() {
    return (
        <>
            <div className="w-full h-[30rem] mt-[6.5rem] relative mb-[15rem] flex flex-col justify-start items-center">
                <div className="info flex flex-col gap-y-7 mt-8 mb-24 items-center text-[#2c3e50]">
                    <h1 className="text-4xl font-bold">CONTACT SECTION</h1>

                    <div className="shapes flex gap-4 justify-center items-center">
                        <div className="lineOne border-2 w-20 h-1 border-[#2c3e50]"></div>
                        <i class="fa-solid fa-star"></i>
                        <div className="lineTwo border-2 w-20 h-1 border-[#2c3e50]"></div>
                    </div>
                </div>

                <div className="inputs lg:w-[45%] md:w-[50%] sm:w-[95%] flex flex-col items-start gap-y-9">
                    <div className="inputOne w-full">
                        <label id='LO' htmlFor="IO" className='text-[#61bc9c] ml-3 hidden'>userName:</label>
                        <input id='IO' onInput={ function(){ document.getElementById("IO").value == "" ? document.getElementById("LO").classList.replace("block", "hidden") : document.getElementById("LO").classList.replace("hidden", "block") } } type="text" placeholder='userName' className='w-full p-3 border-b-[1.7px] rounded-xl'/>
                    </div>

                    <div className="inputTwo w-full">
                        <label id='LT' htmlFor="IT" className='text-[#61bc9c] hidden'>userName:</label>
                        <input id='IT'  onInput={ function(){ document.getElementById("IT").value == "" ? document.getElementById("LT").classList.replace("block", "hidden") : document.getElementById("LT").classList.replace("hidden", "block") } } type="number" placeholder='userAge' className='w-full p-3 border-b-[1.7px] rounded-xl'/>
                    </div>

                    <div className="inputThree w-full">
                        <label id='LTr' htmlFor="ITr" className='text-[#61bc9c] hidden'>userName:</label>
                        <input id='ITr' onInput={ function(){ document.getElementById("ITr").value == "" ? document.getElementById("LTr").classList.replace("block", "hidden") : document.getElementById("LTr").classList.replace("hidden", "block") } } type="email" placeholder='userEmail' className='w-full p-3 border-b-[1.7px] rounded-xl'/>
                    </div>

                    <div className="inputFour w-full">
                        <label id='LF' htmlFor="IF" className='text-[#61bc9c] hidden'>userName:</label>
                        <input id='IF' onInput={ function(){ document.getElementById("IF").value == "" ? document.getElementById("LF").classList.replace("block", "hidden") : document.getElementById("LF").classList.replace("hidden", "block") } } type="password" placeholder='userPassword' className='w-full p-3 border-b-[1.7px] rounded-xl'/>
                    </div>
                    <button className='py-2 px-3 text-white rounded-md bg-[#1abc9c]'>Send Message</button>
                </div>
            </div>
        </>
    )
}

