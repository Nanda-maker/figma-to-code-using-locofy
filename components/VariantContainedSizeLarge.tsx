import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type VariantContainedSizeLargeType = {
  button?: string;

  /** Style props */
  variantContainedSizeLargeBoxSizing?: CSSProperties["boxSizing"];
  buttonColor?: CSSProperties["color"];
  buttonDisplay?: CSSProperties["display"];
};

const VariantContainedSizeLarge: NextPage<VariantContainedSizeLargeType> = ({
  button,
  variantContainedSizeLargeBoxSizing,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargeBoxSizing]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonDisplay]);

  return (
    <div
      className="overflow-hidden flex flex-col items-start justify-start py-2 px-[22px] text-left text-mini text-text-primary font-components-button-large"
      style={variantContainedSizeLargeStyle}
    >
      <div
        className="relative tracking-[0.46px] leading-[26px] uppercase font-medium"
        style={buttonStyle}
      >
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
