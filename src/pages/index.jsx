import Head from "next/head";
import Footer from "../components/Footer";
import ClientsReview from "@/components/ClientsReview";
import Header from "@/components/Header";
import InstallApp from "@/components/InstallApp";
import OfferCard from "@/components/OfferCard";
import MainHeroSection from "@/components/MainHeroSection";

const Home = () => {
  return ( 
    <>
      <Head>
        <title>Cuisine</title>
      </Head>

      <div>

        {/* Header */}
        <Header/>

        {/* Main Hero Section */}
        <MainHeroSection/>

        {/* Offer Card */}
        <OfferCard/>

        {/* Clients Review Section */}
        <ClientsReview/>

        {/* Install App Section */}
        <InstallApp/>

        {/* Footer */}
        <Footer/>
      </div>


    </>
   );
}
 
export default Home;