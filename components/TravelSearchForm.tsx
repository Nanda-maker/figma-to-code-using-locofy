import type { NextPage } from "next";
import { useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Button, IconButton } from "@chakra-ui/react";

const TravelSearchForm: NextPage = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);

  const onSearchFlightsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch relative h-[639.9px] bg-[url('/search-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-42xl text-primary-contrast font-baloo-bhai">
        <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col items-center justify-center py-0 px-[140px] box-border gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
            <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
            <div className="self-stretch relative text-5xl leading-[32px] font-components-button-large">
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col items-start justify-start p-5 gap-[4px] text-left text-xl text-darkslategray-300 font-components-button-large md:flex-col sm:mt-5">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-[5px] gap-[5px] sm:flex-col sm:items-start">
              <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
                Search flights
              </b>
              <div className="shrink-0 flex flex-row items-center justify-start sm:w-full">
                <div className="relative w-[216.5px] h-[38px] sm:w-[100%!important]">
                  <FormControlLabel
                    className="absolute top-[0px] left-[0px]"
                    label="Return"
                    labelPlacement="end"
                    control={<Radio size="medium" />}
                  />
                  <FormControlLabel
                    className="absolute top-[0px] left-[106px]"
                    label="One-way"
                    labelPlacement="end"
                    control={<Radio color="primary" checked size="medium" />}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-300 md:flex-col">
              <div className="flex-1 shrink-0 flex flex-row items-start justify-start p-[5px] gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                <Autocomplete
                  className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
                  size="medium"
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)",
                    "Sanya (SYX)",
                  ]}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Singapore -  Changi (SIN)"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch rounded box-border h-14 flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-gray-200">
                    <div className="bg-primary-contrast h-0.5 flex flex-row items-center justify-start py-0 px-1 box-border">
                      <div className="relative tracking-[0.15px] leading-[12px]">
                        Arrival
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px] text-center text-dimgray">
                      <div className="shrink-0 hidden flex-row items-start justify-start gap-[8px]">
                        <div className="shrink-0 flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 shrink-0 flex flex-row items-center justify-start p-1">
                            <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="shrink-0 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                              <div className="relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/cancel@2x.png"
                            />
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-gainsboro-100 shrink-0 flex flex-row items-center justify-start p-1">
                            <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="shrink-0 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                              <div className="relative tracking-[0.16px] leading-[18px]">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/cancel@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-text-primary text-left">
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                  <DatePicker
                    label="Date"
                    value={selectOutlinedDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setSelectOutlinedDateTimePickerValue(newValue);
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "medium",
                        fullWidth: true,
                        color: "primary",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-center justify-center p-[5px] hover:bg-chocolate md:w-full md:text-left">
                <Button
                  className="cursor-pointer"
                  colorScheme="orange"
                  variant="solid"
                  w="164px"
                  onClick={onSearchFlightsButtonClick}
                >
                  Search flights
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default TravelSearchForm;
