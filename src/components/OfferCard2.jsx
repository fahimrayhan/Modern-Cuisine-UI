const OfferCard2 = () => {
    return (
        <div className="sm:px-5 md:px-20 lg:px-40 mt-28">
            <div className="grid grid-cols-1 gap-5  lg:grid-cols-2 items-center justify-center p-6  ">
                
                <div className="m-auto">
                    <h1 className="mt-5 font-bold text-4xl lg:mt-7">Do You Have Any Dinner
                        Plan Today ? <span className="text-orange-600">
                            Reserve <br/>
                            Your Table
                        </span></h1>
                    <h1 className="text-lg text-gray-600  pt-2">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words therefore.</h1>
                    <button className="inline-flex float-right my-5 rounded-s-full rounded-t-full text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Menu</button>
                </div>
                <div className="flex items-center justify-center">
                    {/* <div className=" border-[t,l]-4 border-l-2 border-orange-500 w-[50%]"></div> */}
                    <img className=" w-3/5" src="/images/food.png" alt="Food Image 2" />
                </div>
            </div>
        </div>
    );
}

export default OfferCard2;
