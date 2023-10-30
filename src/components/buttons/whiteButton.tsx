import React from "react";

const WhiteButton=(props:any)=>{

    const {btnLink, btnText, myClass, myClick} = props;

    return (
        <a onClick={()=>myClick()} className={`${myClass} rounded-full group`} href={btnLink}><div className="font-bar font-medium text-base text-white border-[2px] border-white rounded-full bg-gradient-to-b px-6 py-[5px] h-[44px] leading-7 hover:from-primary5 hover:to-primary6 hover:border-primary6">{btnText}</div></a>

    )
}

export default WhiteButton;