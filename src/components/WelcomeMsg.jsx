const WelcomeMsg = () => {
    return ( 
        <section className="container m-auto p-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center ">

            <div className="">
                <img src="/images/cheff.png" alt="" className="border-2 border-black" />
            </div>

            {/* Welcome Msg */}
  
            <div className="">
                    <h2 className="text-4xl leading-15 mb-6">Welcome to Our
                        <br/>
                        <span className="text-orange-600">Restaurant</span>
                    </h2>
                    <p className=" mb-6">
                        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words therefore. Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words therefore. Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words therefore.
                    </p>
                    <button className="inline-flex rounded-s-full rounded-t-full text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make Reservation</button>
            </div>
        </section>
     );
}
 
export default WelcomeMsg;