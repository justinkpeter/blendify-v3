import { useState } from "react";
import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";
import { CarouselItem } from "@/components/CarouselItem";

export const Carousel = ({items, title, id, numbers}) =>{

    function scrollCarousel(containerId, direction) {
        // direction is either 'left' or 'right'
        const container = document.getElementById(containerId);
        const containerWidth = container.offsetWidth;
        const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;

        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    const colorVariants = {
        'gray': 'text-gray-500',
        'white': 'text-white'
    }

    const [color, setColor] = useState(colorVariants['gray']);

    const handleScrollLeft = () => {
        scrollCarousel(id, 'left');
        setColor(colorVariants['gray'])
    };

    const handleScrollRight = () => {
        scrollCarousel(id, 'right');
        setColor(colorVariants['white'])
    };

    if(items.length === 0) return null;
    return (
        <>
            <div className={'carousel-container relative w-full'}>
                <div className={'w-full relative mb-16 flex flex-col'}>
                    <div className={'flex justify-between'}>
                        <h4 className={'text-2xl font-bold'}>{title} </h4>
                        <div className={'flex gap-4'}>
                            <button className="btn btn-sm btn-ghost btn-circle text-xl" onClick={handleScrollLeft} >
                                { color === colorVariants['gray'] ? <ArrowLongLeftIcon className={'w-6 h-6 text-gray-500'}/> : <ArrowLongLeftIcon className={'w-6 h-6 text-white'}/> }
                            </button>
                            <button className="btn btn-sm btn-ghost btn-circle text-xl" onClick={handleScrollRight}>
                                { color === colorVariants['gray'] ? <ArrowLongRightIcon className={'w-6 h-6 text-white'}/> : <ArrowLongRightIcon className={'w-6 h-6 text-gray-500'}/>  }
                            </button>
                        </div>
                    </div>
                    <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral">
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                        {/*<div className="carousel-item h-[10vw] w-[10vw]">*/}
                        {/*    <img src="/demo1/1.jpg" className="object-cover object-center w-full h-full" />*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                        {/*    <img src="/demo1/1.jpg" className="" />*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                        {/*    <img src="/demo1/1.jpg" className="" />*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                        {/*    <img src="/demo1/1.jpg" className="" />*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                        {/*    <img src="/demo1/1.jpg" className="" />*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                        {/*    <img src="/demo1/1.jpg" className="" />*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                        {/*    <img src="/demo1/1.jpg" className="" />*/}
                        {/*</div>*/}
                    </div>


                    {/*<div id={id} className={'carousel carousel-center w-full  pt-5 h-fit relative gap-3 bg-blue-800'}>*/}
                    {/*    {items?.map((item, index) => {*/}
                    {/*        return(*/}
                    {/*            <CarouselItem key={index} item={item} index={index} showNumber={numbers}/>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}