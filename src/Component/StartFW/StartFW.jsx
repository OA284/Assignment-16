export default function StartFW() {
    return (
        <>
            <div className="w-full h-[30rem] mt-[6.5rem] relative flex flex-col bg-[#1abc9c]">
                <div className="img">
                    <img src="./../../../src/assets/avataaars.png" alt="" className="mt-3 mb-10 mx-auto"/>
                </div>

                <div className="info flex flex-col gap-y-5 items-center">
                    <h1 className="text-white text-4xl font-bold">START FRAMEWORK</h1>

                    <div className="shapes flex gap-4 justify-center items-center">
                        <div className="lineOne border-2 w-20 h-1 border-white"></div>
                        <i class="fa-solid fa-star text-white"></i>
                        <div className="lineTwo border-2 w-20 h-1 border-white"></div>
                    </div>

                    <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
