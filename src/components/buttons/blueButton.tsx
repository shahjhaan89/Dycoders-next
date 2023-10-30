import React from "react";

const BlueButton=(props:any)=>{

    const {btnLink, btnText, myClass, myClick} = props;

    return (
            <a onClick={()=>myClick()} className={`${myClass} bg-gradient-to-b from-primary6 to-primary5 rounded-full p-0.5 group hover:from-primary5 hover:to-primary6`} href={btnLink}><div className="font-bar font-medium text-base text-white bg-gradient-to-b from-primary5 to-primary6 rounded-full px-6 py-1 h-10 leading-7 group-hover:from-primary6 group-hover:to-primary5">{btnText}</div></a>
    )
}


export default BlueButton;