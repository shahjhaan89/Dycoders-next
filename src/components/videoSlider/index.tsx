"use client";
import React from "react";
import VideoSlide from "./slide";

let data = {
    "poster" : "images/home-poster.jpg",
    "webm": "videos/homepage_video.webm",
    "mp4": "videos/homepage_video.mp4",

    "slidersList": [{
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }, {
        "slideTitle": "Creating a suite of business-critical apps for scaling operations",
        "slideLink": "hello"
    }
    ],
    "navList": [{
        "navImage": "images/portfolios/Clients-Logos_Barclays.png"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Fogbugz.webp"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Healthdesk.webp"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Kentech.webp"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Muchkin-Mailbox.png"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Qserv.webp"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Ravbits.webp"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Smarttrainer.webp"
    }, {
        "navImage": "images/portfolios/Clients-Logos_Tudo.png"
    }
    ]
}
const VideoSlider = () => {

    return (
        <div>
            <VideoSlide bannerNavSlider={data.navList}  bannerVidWebm={data.webm} bannerVideMp4={data.mp4} bannerVidPoster={data.poster} bannerSlidesList={data.slidersList} slideLink="slideLink" slideTitle="slideTitle" navLogo="navImage" />
           
        </div>
    );
};

export default VideoSlider;