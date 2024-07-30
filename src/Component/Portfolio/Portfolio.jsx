export default function Portfolio() {
    return (
        <>
            <div className="w-full h-[30rem] pt-7 mt-[6.5rem] relative lg:mb-[20rem] md:mb-[35rem] sm:mb-[160rem] flex flex-col justify-start items-center">
                <div className="info flex flex-col gap-y-5 items-center text-[#2c3e50]">
                    <h1 className="text-4xl font-bold">PORTFOLIO COMPONENT</h1>

                    <div className="shapes flex gap-4 justify-center items-center">
                        <div className="lineOne border-2 w-20 h-1 border-[#2c3e50]"></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="lineTwo border-2 w-20 h-1 border-[#2c3e50]"></div>
                    </div>
                </div>

                <div className="pic grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-[82%] mt-6">
                    <div className="imgOne relative">
                        <div className='bg-[#29b096] absolute w-full h-full rounded-2xl opacity-0 hover:opacity-70 transition ease-in-out delay-150 flex justify-center items-center'>
                            <i className="fa-solid fa-plus text-white text-[6rem] bg-[#1ead8d] accent-transparent rounded-full py-12 px-14" onClick={console.log("hi")}></i>
                        </div>
                        <img src="./../../../src/assets/port1.png" alt="" className="rounded-2xl" />
                    </div>

                    <div className="imgOne relative">
                        <div className='bg-[#29b096] absolute w-full h-full rounded-2xl opacity-0 hover:opacity-70 transition ease-in-out delay-150 flex justify-center items-center'>
                            <i className="fa-solid fa-plus text-white text-[6rem] bg-[#1ead8d] accent-transparent rounded-full py-12 px-14"></i>
                        </div>
                        <img src="./../../../src/assets/port2.png" alt="" className="rounded-2xl" />
                    </div>

                    <div className="imgOne relative">
                        <div className='bg-[#29b096] absolute w-full h-full rounded-2xl opacity-0 hover:opacity-70 transition ease-in-out delay-150 flex justify-center items-center'>
                            <i className="fa-solid fa-plus text-white text-[6rem] bg-[#1ead8d] accent-transparent rounded-full py-12 px-14"></i>
                        </div>
                        <img src="./../../../src/assets/port3.png" alt="" className="rounded-2xl" />
                    </div>

                    <div className="imgOne relative">
                        <div className='bg-[#29b096] absolute w-full h-full rounded-2xl opacity-0 hover:opacity-70 transition ease-in-out delay-150 flex justify-center items-center'>
                            <i className="fa-solid fa-plus text-white text-[6rem] bg-[#1ead8d] accent-transparent rounded-full py-12 px-14"></i>
                        </div>
                        <img src="./../../../src/assets/port1.png" alt="" className="rounded-2xl" />
                    </div>

                    <div className="imgOne relative">
                        <div className='bg-[#29b096] absolute w-full h-full rounded-2xl opacity-0 hover:opacity-70 transition ease-in-out delay-150 flex justify-center items-center'>
                            <i className="fa-solid fa-plus text-white text-[6rem] bg-[#1ead8d] accent-transparent rounded-full py-12 px-14"></i>
                        </div>
                        <img src="./../../../src/assets/port2.png" alt="" className="rounded-2xl" />
                    </div>

                    <div className="imgOne relative">
                        <div className='bg-[#29b096] absolute w-full h-full rounded-2xl opacity-0 hover:opacity-80 transition ease-in-out delay-150 flex justify-center items-center'>
                            <i className="fa-solid fa-plus text-white text-[6rem] bg-[#1ead8d] accent-transparent rounded-full py-12 px-14"></i>
                        </div>
                        <img src="./../../../src/assets/port3.png" alt="" className="rounded-2xl" />
                    </div>
                </div>
            </div>
        </>
    )
}
