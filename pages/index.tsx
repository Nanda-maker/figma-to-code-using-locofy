import type { NextPage } from "next";
import Header from "../components/Header";
import TravelSearchForm from "../components/TravelSearchForm";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import SubscribeContainer from "../components/SubscribeContainer";
import Footer from "../components/Footer";

const Homepage: NextPage = () => {
  return (
    <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
      <div className="self-stretch flex flex-col items-center justify-start">
        <Header />
        <TravelSearchForm />
      </div>
      <div className="w-full flex flex-col items-center justify-start py-0 px-20 box-border gap-[80px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysForm />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <SubscribeContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
