const OfferCard = () => {
    return ( 
        <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">

            <div class="hidden relative lg:block  lg:col-span-3">
                <img class="absolute inset-0 w-full h-full object-cover object-center" src="https://www.myaccelerate.io/assets/utilities/image/epa.jpg" alt="Ad- woman on a beach" />
            </div>
            <div class=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
                
                    <img class="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl" src="https://www.myaccelerate.io/assets/utilities/image/epa.jpg" alt="Ad- woman on a beach"/>
                        <h1 class="mt-5 font-bold text-lg lg:mt-7">You can school from home!</h1>
                        <h1 class="font-bold text-lg text-gray-600">Get started today!</h1>
                        <h1 class="text-lg text-gray-600 text-justify pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
                        <button class="mt-5 bg-gray-600 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-gray-800">START STUDYING</button>
                    </div>
        </div>
     );
}
 
export default OfferCard;