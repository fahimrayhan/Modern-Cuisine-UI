import Head from "next/head";
import Footer from "../components/Footer";
import ClientsReview from "@/components/ClientsReview";
import Header from "@/components/Header";
import InstallApp from "@/components/InstallApp";
import OfferCard from "@/components/OfferCard";
import MainHeroSection from "@/components/MainHeroSection";
import WelcomeMsg from "@/components/WelcomeMsg";
import OfferCard2 from "@/components/OfferCard2";
import PopularDishes from "@/components/PopularDishes";
import ProductCard from "@/components/ProductCard";
import ChefsCards from "@/components/ChefsCards";
import OfferCard3 from "@/components/OfferCard3";

const Home = () => {
  return ( 
    <>
      <Head>
        <title>Cuisine</title>
      </Head>

      <div>

        <div className="">
          <div className="bg-gradient-to-r from-white from-70%  to-black to-30%">
            {/* Header */}
            <Header/>
            {/* Main Hero Section */}
            <MainHeroSection/>
          </div>
        
        {/* Popular Dishes */}
        <ProductCard/>

        {/* Offer Card 1*/}
          <div className="">
            <OfferCard />
        </div>
        {/* Offer Card 2*/}
          <div className="">
            <OfferCard2/>
        </div>
        </div>
        {/* Clients Review Section */}
        <ClientsReview/>

        {/* Chefs Card */}
        <ChefsCards/>

        {/* OfferCard 3 */}
        <OfferCard3/>

        {/* Welcome Msg */}
        <WelcomeMsg/>

        {/* Install App Section */}
        <InstallApp/>

        {/* Footer */}
        <Footer/>
      </div>


    </>
   );
}
 
export default Home;