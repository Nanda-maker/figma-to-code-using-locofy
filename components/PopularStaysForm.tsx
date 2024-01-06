import type { NextPage } from "next";
import { useCallback } from "react";
import PopularStaysContainer from "./PopularStaysContainer";

const PopularStaysForm: NextPage = () => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-11xl text-darkslategray-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-center">
        <b className="relative tracking-[0.04em] capitalize inline-block w-[1105.3px] shrink-0 sm:text-3xl">
          Popular Stays
        </b>
        <button
          className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl shrink-0 flex flex-row items-start justify-start gap-[10px] md:hidden"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[140.7px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/arrowright@2x.png"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] text-base lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <PopularStaysContainer
          imageDimensions="/matterhorn-suites-image@2x.png"
          accommodationType="Entire bungalow"
          hotelName="Matterhorn Suites"
          pricePerNight="$575/night"
          reviewCount="(60 reviews)"
          rating="4.9"
          roomDimensions="/vector@2x.png"
          propGap="11px"
          propWidth="37.47%"
          propRight="62.53%"
          propBorder="1px solid #ccdcec"
        />
        <PopularStaysContainer
          imageDimensions="/discovery-shores-image@2x.png"
          accommodationType="2-Story beachfront suite"
          hotelName="Discovery Shores"
          pricePerNight="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          roomDimensions="/vector@2x.png"
          propFlex="1"
          propGap="11px"
          propWidth="37.47%"
          propRight="62.53%"
          propBorder="1px solid #ccdcec"
        />
        <PopularStaysContainer
          imageDimensions="/arctic-hut-image@2x.png"
          accommodationType="Single deluxe hut"
          hotelName="Arctic Hut "
          pricePerNight="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          roomDimensions="/vector@2x.png"
          propFlex="1"
          propGap="5px"
          propWidth="37.61%"
          propRight="62.39%"
          propBorder="1px solid #ccdcec"
        />
        <PopularStaysContainer
          imageDimensions="/lake-louise-image@2x.png"
          accommodationType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          pricePerNight="$244/night"
          reviewCount="(63 reviews)"
          rating="4.6"
          roomDimensions="/vector@2x.png"
          propFlex="unset"
          propGap="11px"
          propWidth="37.47%"
          propRight="62.53%"
          propBorder="1px solid #cdddec"
        />
      </div>
      <div className="rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-200 md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[140.7px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/arrowright@2x.png"
        />
      </div>
    </div>
  );
};

export default PopularStaysForm;
