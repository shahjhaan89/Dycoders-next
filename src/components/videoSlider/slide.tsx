import * as React from "react";
import { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import Image from "next/image";
import Slider from "react-slick"
import BlueButton from "../buttons/blueButton";
import WhiteButton from "../buttons/whiteButton";


const VideoSlide = (props: any) => {
    const { bannerVidWebm, bannerVideMp4, bannerVidPoster, bannerSlidesList, bannerNavSlider, navLogo } = props

    const [nav1, setNav1] = useState<any>();
    const [nav2, setNav2] = useState<any>();
    const slider1 = useRef<Slider>(null);
    const slider2 = useRef<Slider>(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    return (
        <>
        {/* Main Slider */}
            <div className="relative overflow-hidden h-screen">
               
                    <video className="absolute left-1/2 min-h-full min-w-full top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto"
                        poster={`${bannerVidPoster}`} playsInline loop autoPlay>
                        <source src={`${bannerVidWebm}`} type="video/webm" />
                        <source src={`${bannerVideMp4}`} type="video/mp4" />
                    </video>
                <Slider className="main-slider slider" autoplay infinite={true} arrows={false} centerMode={false} slidesToShow={1} slidesToScroll={1} focusOnSelect={true} asNavFor={nav2} ref={slider1} >
                    {
                        bannerSlidesList.map((slide: any, index: any) => (
                            <div key={index}>
                                <div className="relative z-50">
                                    <div className="max-w-[85rem] w-full mx-auto px-4">
                                        <div className="max-w-[60rem]">
                                        <h1 className="text-[65px] leading-[65px] font-kan font-bold text-white uppercase ">{slide["slideTitle"]} {index}</h1>
                                       <div className="flex items-center gap-[15px] mt-[40px]">
                                       <BlueButton btnLink="#" btnText="Estimate Project" />
                                       <WhiteButton btnLink="#" btnText="Case Study" />
                                       
                                       </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </Slider>
            </div>


            {/* Navigation Slider */}
            <div className="-mt-[80px] bg-[url('/images/HEADER.svg')] bg-no-repeat bg-cover bg-center relative z-[100px] nav-slider border-t border-white">
                <Slider infinite={true} arrows={false} slidesToShow={5} slidesToScroll={1} focusOnSelect={true} 
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            initialSlide: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]} asNavFor={nav1}
                    ref={slider2} className="h-[80px]">
                    {bannerNavSlider.map((slide: any, index: any) => (
                        <div key={index} className="h-[80px] relative overflow-hidden border-l border-white">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${slide[`${navLogo}`]}`}
                                alt={`${process.env.NEXT_PUBLIC_BASE_URL}/${slide[`${navLogo}`]}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="max-h-full max-w-full w-auto h-auto absolute top-0 bottom-0 left-0 right-0 m-auto py-0 px-[15px] invert brightness-0"
                               
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default VideoSlide;
