"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from "html-react-parser";
import Slider from "react-slick";
import GrayButton from "../buttons/grayButton";

const IndustryForm = (props: any) => {

  const { title, description, pickIndustryTitle, pickIndustryList, pickIndustryBtnText, pickIndustryClick, pickBusinessTitle, pickBusinessList, pickBusinessBtnText, pickBusinessClick, industryFormBlock } = props;

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3>{title}</h3>
          {/* {parse(`${description}`)} */}
        </div>
        <div>
            <Slider>
              <div>
                <h3>{pickIndustryTitle}</h3>
                {pickIndustryList&&pickIndustryList.map((slide:any, index:any)=>(
                  <GrayButton  key={index} btnText={slide[`${pickIndustryBtnText}`]} myClass="m-2" myClick={slide[`${pickIndustryClick}`]}  />
                ))}
              </div>

              <div>
                <h3>{pickBusinessTitle}</h3>
                {pickBusinessList&&pickBusinessList.map((slide:any, index:any)=>(
                  <GrayButton  key={index} btnText={slide[`${pickBusinessBtnText}`]} myClass="m-2" myClick={slide[`${pickBusinessClick}`]}  />
                ))}
              </div>

              <div>
                {industryFormBlock}
              </div>

            </Slider>
        </div>
      </div>
    </>
  );
};

export default IndustryForm;
