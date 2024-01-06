import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-start py-[33px] px-[84px] gap-[44px] text-left text-lg text-primary-contrast font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
        <img
          className="relative w-[174px] h-[33px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <div className="self-stretch relative leading-[27px]">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className="relative w-[130px] h-[30px]">
          <img
            className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/entyposocialfacebookwithcircle@2x.png"
          />
          <img
            className="absolute top-[0px] left-[100px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/entyposocialtwitterwithcircle@2x.png"
          />
          <img
            className="absolute top-[0px] left-[50px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/entyposocialinstagramwithcircle@2x.png"
          />
        </div>
      </div>
      <div className="relative box-border w-px h-[157.9px] border-r-[1px] border-solid border-gray-400 md:hidden" />
      <div className="flex-1 shrink-0 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
        <div className="relative w-[197.3px] h-[159.8px] sm:mb-[40px!important]">
          <div className="absolute top-[47.8px] left-[0px] inline-block w-[135.7px]">
            About Us
          </div>
          <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.7px]">
            Company
          </div>
          <div className="absolute top-[78.8px] left-[0px] inline-block w-[84.3px]">
            News
          </div>
          <div className="absolute top-[109.8px] left-[0px] inline-block w-[115.1px]">
            Careers
          </div>
          <div className="absolute top-[140.8px] left-[0px] inline-block w-[197.3px]">
            How we work
          </div>
        </div>
        <div className="relative w-[197.3px] h-[159.8px] sm:mb-[40px!important]">
          <div className="absolute top-[47.8px] left-[0px] inline-block w-[109.6px]">
            Account
          </div>
          <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.6px]">
            Support
          </div>
          <div className="absolute top-[78.8px] left-[0px] inline-block w-[197.3px]">
            Support Center
          </div>
          <div className="absolute top-[109.8px] left-[0px] inline-block w-[53px]">
            FAQ
          </div>
          <div className="absolute top-[140.8px] left-[0px] inline-block w-[164.4px]">
            Accessibility
          </div>
        </div>
        <div className="relative w-[197.3px] h-[159.8px]">
          <div className="absolute top-[47.8px] left-[0px] inline-block w-[172.9px]">
            Covid Advisory
          </div>
          <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.7px]">
            More
          </div>
          <div className="absolute top-[78.8px] left-[0px] inline-block w-[135.4px]">
            Airline Fees
          </div>
          <div className="absolute top-[109.8px] left-[0px] inline-block w-[50.6px]">
            Tips
          </div>
          <div className="absolute top-[140.8px] left-[0px] inline-block w-[197.3px]">
            Quarantine Rules
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
