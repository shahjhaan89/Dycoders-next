import React from "react";
import IndustryForm from "./industyForm";

const PickIndustryForm=()=>{

   let data = {
    "title": "See how we can help you reach your goals",
    "description" : "<p>Answer three questions to help us match our expertise and software solutions to your sector.</p>",
    "industry" : {
        "title" : "Pick your Industry:",
        "industryList": [
            {
                "title" : "Fintech"
            },
            {
                "title" : "Retail"
            },
            {
                "title" : "Insurance"
            },
            {
                "title" : "Logistics"
            },
            {
                "title" : "Fintech"
            },
            {
                "title" : "Retail"
            }
        ]
    },
    "business" : {
        "title" : "Pick your Industry:",
        "businessList": [
            {
                "title" : "Fill a software version"
            },
            {
                "title" : "Validate a business idea"
            },
            {
                "title" : "Scale up operations"
            },
            {
                "title" : "Cut operational costs"
            },
            {
                "title" : "Plug a talent"
            },
            {
                "title" : "Bolster security"
            }
        ]
    }

   }

    return(
        <>
        <IndustryForm 
        title={data.title} 
        description={data.description} 
        pickIndustryTitle={data.industry.title}
        pickIndustryList ={data.industry.industryList}
        pickIndustryBtnText="title"
        pickBusinessTitle={data.business.title}
        pickBusinessList={data.business.businessList}
        pickBusinessBtnText="title"
        // industryFormBlock={

        // } 
        />
        </>
    )
}

export default  PickIndustryForm;