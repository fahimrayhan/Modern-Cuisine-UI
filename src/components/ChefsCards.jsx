const ChefsCards = () => {
    return ( 
        <div>
            <h1 className="text-4xl font-bold text-center mb-10">Our <span className="text-orange-600">Chef's</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full mb-10 px-10">
                <div className="bg-white shadow-xl rounded-lg max-w-sm ">
                    <a href="#">
                        <img className="rounded-t-lg p-8" src="/images/cheff.png" alt="Chef Image" />
                    </a>
                    <div className="px-5 pb-5 grid grid-cols- justify-center items-center">
                        <div className=" text-center">
                            <h3 className="font-bold text-xl">Clare Smyth</h3>
                            <p className=" text-sm text-gray-500">Michelin-starred restaurant</p>
                         </div>   
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-lg max-w-sm ">
                    <a href="#">
                        <img className="rounded-t-lg p-8" src="/images/ch2.png" alt="Chef Image" />
                    </a>
                    <div className="px-5 pb-5 grid grid-cols- justify-center items-center">
                        <div className=" text-center">
                            <h3 className="font-bold text-xl">Clare Smyth</h3>
                            <p className=" text-sm text-gray-500">Michelin-starred restaurant</p>
                         </div>   
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-lg max-w-sm border-orange-600 border-[1px]">
                    <a href="#">
                        <img className="rounded-t-lg p-8" src="/images/ch5.png" alt="Chef Image" />
                    </a>
                    <div className="px-5 pb-5 grid grid-cols- justify-center items-center">
                        <div className=" text-center">
                            <h3 className="font-bold text-xl">Clare Smyth</h3>
                            <p className=" text-sm text-gray-500">Michelin-starred restaurant</p>
                         </div>   
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-lg max-w-sm ">
                    <a href="#">
                        <img className="rounded-t-lg p-8" src="/images/ch1.png" alt="Chef Image" />
                    </a>
                    <div className="px-5 pb-5 grid grid-cols- justify-center items-center">
                        <div className=" text-center">
                            <h3 className="font-bold text-xl">Clare Smyth</h3>
                            <p className=" text-sm text-gray-500">Michelin-starred restaurant</p>
                         </div>   
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-lg max-w-sm ">
                    <a href="#">
                        <img className="rounded-t-lg p-8" src="/images/ch4.png" alt="Chef Image" />
                    </a>
                    <div className="px-5 pb-5 grid grid-cols- justify-center items-center">
                        <div className=" text-center">
                            <h3 className="font-bold text-xl">Clare Smyth</h3>
                            <p className=" text-sm text-gray-500">Michelin-starred restaurant</p>
                         </div>   
                    </div>
                </div>
               
            </div>
        </div>
     );
}
 
export default ChefsCards;