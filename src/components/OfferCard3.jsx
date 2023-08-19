const OfferCard3 = () => {
    return ( 
        <div className="sm:px-5 md:px-25 lg:px-60 mt-28">
            <div className="grid grid-cols-1 gap-5  lg:grid-cols-2 items-center justify-center p-6  ">

                <div className="m-auto">
                    <section className="mt-5">
                        <h4 className="text-gray-400 border-s-4 ">
                            <span className="ms-3">Browse our catalog and select a
                                service or product</span>
                        </h4>
                    </section>
                    <section className="bg-[#FF5F1B] bg-opacity-40  p-2 mt-5">
                        <h4 className="text-orange-600 text-lg font-bold border-s-4 border-orange-600">
                            <span className="ms-3">Book your slot with payment</span>
                        </h4>
                        
                        <p className="border-s-4 border-gray-200 "><span className="me-2"></span>We put your money on hold in a safe place
                            until you confirm </p>
                    </section>
                    <section className="mt-5">
                        <h4 className="text-gray-400 border-s-4 ">
                            <span className="ms-3">The Magic Begins</span>
                        </h4>
                    </section>
                    <section className="mt-5">
                        <h4 className="text-gray-400 border-s-4 ">
                            <span className="ms-3">Confirm Completion</span>
                        </h4>
                    </section>
                </div>
                <div className="flex items-center justify-center">
                    {/* <div className=" border-[t,l]-4 border-l-2 border-orange-500 w-[50%]"></div> */}
                    <img className=" w-3/5" src="/images/food.png" alt="Food Image 2" />
                </div>
            </div>
        </div>
     );
}
 
export default OfferCard3;