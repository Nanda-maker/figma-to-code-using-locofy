import type { NextPage } from "next";

type FlightSearchContainerType = {
  sIN?: string;
  flightIcons?: string;
  lAX?: string;
  departOn?: string;
  sep2021?: string;
};

const FlightSearchContainer: NextPage<FlightSearchContainerType> = ({
  sIN,
  flightIcons,
  lAX,
  departOn,
  sep2021,
}) => {
  return (
    <div className="flex-1 rounded-lg flex flex-col items-center justify-center p-5 gap-[21px] text-left text-5xl text-cornflowerblue-200 font-components-button-large border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b className="relative tracking-[0.04em] capitalize inline-block w-[44.7px] shrink-0">
          {sIN}
        </b>
        <img
          className="relative w-[117.4px] h-6 object-cover"
          alt=""
          src={flightIcons}
        />
        <b className="relative tracking-[0.04em] capitalize inline-block text-right w-[51.3px] shrink-0">
          {lAX}
        </b>
      </div>
      <div className="relative text-xl tracking-[0.04em] capitalize text-black">
        <b>{departOn}</b>
        <span>{sep2021}</span>
      </div>
    </div>
  );
};

export default FlightSearchContainer;
