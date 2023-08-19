const OfferCard = () => {
    return ( 
        <div className="sm:px-5 md:px-20 lg:px-40 m-5">
            <div className="grid grid-cols-1  lg:grid-cols-3 items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                <div className="">
                    <img className="" src="/images/food.png" alt="Food Image" />
                </div>
                <div className="sm:m-auto md:m-1">
                    <p>
                        
                        <span className="font-bold">Only For</span> <br/>
                        <span className="text-orange-600 text-3xl">Vegetables</span> <br/>
                        Regular Price: <br/>
                        <span className="text-orange-600">$120</span> <br />
                        Offer Price: <br/>
                        <span className="text-orange-600">$120</span> <br />
                    </p>
                </div>
                <div className="m-auto">
                    <h1 className="mt-5 font-bold text-lg lg:mt-7 text-right">Special Offer</h1>
                    <h1 className="font-bold text-7xl text-orange-600">50% OFF</h1>
                    <h1 className="text-lg text-gray-600 text-justify pt-2">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words therefore.</h1>
                    <p className="text-orange-600 text-right mt-3">Use Coupon: WE54QDS5</p>
                    <button className="inline-flex float-right my-5 rounded-s-full rounded-t-full text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Menu</button>
                </div>
            </div>
        </div>
     );
}
 
export default OfferCard;