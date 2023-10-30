import React from "react";

const GrayButton=(props:any)=>{

    const {btnLink, btnText, myClass, myClick} = props;

    return (
            <a onClick={()=>myClick()} className={`${myClass} font-bar font-medium text-base text-secondary bg-secondary2 rounded px-6 py-1 h-10 leading-7 hover:text-white hover:bg-primary5`} href={btnLink}>{btnText}</a>
    )
}

export default GrayButton;