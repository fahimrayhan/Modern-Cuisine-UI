

const InstallApp = () => {
    return ( 
        <div className="px-10 py-5  flex justify-between bg-[#FF5F1B] bg-opacity-10 mb-20 shadow-lg">
            <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2  mx-auto justify-items-center">
                <div className="m-auto">
                    <div className="max-w-xl mb-6 ">
                        <div>
                            <p className="text-3xl font-semibold tracking-wider uppercase rounded-full">Never Feel Hungry</p>
                        </div>
                        <h2 className="font-sans font-bold tracking-tight text-gray-900 text-4xl  sm:leading-15 md:leading-15 max-w-lg mb-6 ">
                            <span className="text-orange-600">Download Our Mobile App</span>
                            <br className="" />
                            Enjoy Delicious Foods{' '}
                            <span className="inline-block text-deep-purple-accent-400">is real</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">combined with a handful of model sentence structures, to generate
                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words therefore.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                            <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                        </a>
                        <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                            <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2 ">
                    <div className="">
                        <img className="h-[452px] rounded-lg shadow-xl" src="/images/phone.png"  alt="" />
                    </div>
                </div>
            </div>
           
        </div>
     );
}
 
export default InstallApp;