/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "../PrimaryInputField/PrimaryInputField.css";
import "../PrimaryInputField/PrimaryInputField.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  fFamily?: string;
  fWeight?: number;
  color?: string;
  w?: string;
  h?: number;
  mTop?: number;
  mBottom?: number;
  mAll?: number;
  mRight?: number;
  bRadius?: number;
  pAll?: number;
  pLeft?: number;
  pRight?: number;
  bColor?: string;
  bWidth?: number;
};

const PrimaryInputField = (props: Props) => {
  return (
    <label style={{ fontFamily: props.fFamily, fontWeight: props.fWeight }}>
      {props.title && (
        <div>
          {props.title}
          {props.required ? (
            <span style={{ color: "red" }}> *</span>
          ) : (
            <span style={{ fontWeight: props.fWeight }}> (Optional)</span>
          )}
        </div>
      )}
      <input
        {...props}
        className="input"
        style={{
          width: props.w,
          height: props.h,
          marginTop: props.mTop,
          borderRadius: props.bRadius,
          paddingLeft: props.pLeft,
          marginBottom: props.mBottom,
          borderColor: props.bColor,
          borderWidth: props.bWidth,
        }}
      />
    </label>
  );
};

export default PrimaryInputField;
