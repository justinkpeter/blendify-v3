import React, {useEffect} from "react";
import { itemSelectedState } from "@/atoms/itemAtom";
import { artistState } from "@/atoms/artistAtom";
import {CarouselItem} from "@/components/CarouselItem";
import {useRecoilValue} from "recoil";
import { useState } from "react";
import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";

export const Carousel = ({data, title, id}) => {

    function scrollCarousel(direction:string) {
        // direction is either 'left' or 'right'
        const container = document.getElementById(id);
        const containerWidth = container?.offsetWidth;
        if(!containerWidth) return;
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

    const handleScrollLeft = (e) => {
        e.preventDefault();
        scrollCarousel( 'left');
        setColor(colorVariants['gray'])
    };

    const handleScrollRight = (e) => {
        e.preventDefault();
        scrollCarousel('right');
        setColor(colorVariants['white'])
    };

    useEffect(() =>{},[data])

    if(!data) return null;
    else if(data.length === 0) return null;

    return (
        <>
            <div className={'relative w-full mb-8 2xl:mb-0  h-full overflow-x-hidden'}>
                <div className={'flex justify-between w-full pr-4'}>
                    <h4 className={'text-2xl font-bold'}> {title} </h4>
                    <div className={'2xl:hidden flex gap-4'}>
                        <button className="btn btn-sm btn-ghost btn-circle text-xl" onClick={handleScrollLeft} >
                            { color === colorVariants['gray'] ?
                                <ArrowLongLeftIcon className={'w-6 h-6 text-gray-500'}/> :
                                <ArrowLongLeftIcon className={'w-6 h-6 text-white'}/> }
                        </button>
                        <button className="btn btn-sm btn-ghost btn-circle text-xl" onClick={handleScrollRight} >
                            { color === colorVariants['gray'] ?
                                <ArrowLongRightIcon className={'w-6 h-6 text-white'}/> :
                                <ArrowLongRightIcon className={'w-6 h-6 text-gray-500'}/>  }
                        </button>
                    </div>
                </div>

                <div id={id} className=" oh top__tracks carousel carousel-center w-full py-4 space-x-6">
                    {data.map((item, index) => {
                        return (
                            <CarouselItem key={index} item={item}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
};