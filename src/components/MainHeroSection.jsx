const MainHeroSection = () => {
    return ( 
        <section className="text-gray-600 body-font container-lg mx-auto">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                    <h1 className="title-font  text-5xl mb-4 font-bold text-gray-900 leading-15">Enjoy <span className="text-orange-600">Delicious </span><br/>
                        <span className="text-orange-600">Food </span> In Your <br/>
                        Healthy Life
                    </h1>
                    <p className="mb-8 leading-relaxed">combined with a handful of model sentence structures, to generate Lorem Ipsum
                        which looks reasonable. The generated Lorem Ipsum is therefore always free
                        from repetition, injected humour, or non-characteristic words therefore.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex rounded-s-full rounded-t-full text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Menu</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div></div>
                </div>
            </div>
        </section>
     );
}
 
export default MainHeroSection;