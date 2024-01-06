import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";

type PopularStaysContainerType = {
  imageDimensions?: string;
  accommodationType?: string;
  hotelName?: string;
  pricePerNight?: string;
  reviewCount?: string;
  rating?: string;
  roomDimensions?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propBorder?: CSSProperties["border"];
};

const PopularStaysContainer: NextPage<PopularStaysContainerType> = ({
  imageDimensions,
  accommodationType,
  hotelName,
  pricePerNight,
  reviewCount,
  rating,
  roomDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
  propBorder,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const moreDetailsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex-1 shrink-0 flex flex-row items-start justify-center py-0 px-3 box-border w-3/12 text-left text-base text-darkslategray-300 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
        <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
          <img
            className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
            alt=""
            src={imageDimensions}
          />
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[11px]"
            style={stayDetailsStyle}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                {accommodationType}
              </div>
              <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                {hotelName}
              </b>
              <div className="self-stretch relative text-lg tracking-[0.04em]">
                {pricePerNight}
              </div>
            </div>
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0 object-cover cursor-pointer"
              alt=""
              src="/video@2x.png"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className="relative w-[270px] h-[19px] text-cornflowerblue-100">
            <div className="absolute top-[0px] left-[53.6px] tracking-[0.04em] inline-block w-[216.4px]">
              {reviewCount}
            </div>
            <div className="absolute top-[0px] left-[0px] w-[44.3px] h-[19px] text-darkslategray-300">
              <div className="absolute top-[0px] left-[20.3px] tracking-[0.04em] font-medium inline-block w-6">
                {rating}
              </div>
              <img
                className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src={roomDimensions}
                style={vectorIconStyle}
              />
            </div>
          </div>
          <button
            className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-lavender-200 sm:w-[100%!important]"
            style={moreDetailsButtonStyle}
          >
            <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-100 text-left">
              More details
            </div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopularStaysContainer;
