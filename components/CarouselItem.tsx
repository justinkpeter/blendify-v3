import Image from 'next/image'
import React from "react";
export const CarouselItem = () => {
    return (
        <>
            {/*<div className="carousel-item h-fit relative">*/}
            {/*    <div className={'w-full h-full relative flex flex-col'}>*/}
            {/*        <img src="https://i.scdn.co/image/ab6761610000e5ebb6124dc2f1c2d9ae143d36ab" className="object-cover object-center drop-shadow-2xl max-w-[150px] max-h-[150px]" />*/}
            {/*        hello*/}

            {/*    </div>*/}
            {/*</div>*/}

            <div className={'w-fit h-fit relative p-4 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/30 transition-all duration-100 ease-in-out group'}>
                <div className={'flex flex-col space-y-4 relative'}>
                    <div className={'relative h-[150px] w-[150px] overflow-hidden'}>
                        <img src="https://i.scdn.co/image/ab6761610000e5ebb6124dc2f1c2d9ae143d36ab"
                             className="absolute inset-0 object-cover w-full h-full object-center drop-shadow-2xl group-hover:scale-125 transition-all duration-500 ease-in-out"/>
                    </div>
                    <div className={'relative w-[150px]'}>
                        <div> Destin Conrad </div>
                        <div className={'w-[150px] flex flex-wrap break-words text-gray-400 overflow-hidden'}>
                            <span> Destin Conrad, </span>
                            <span> Kiana, </span>
                            <span>  Justin... </span>
                        </div>
                    </div>
                </div>
                    <div className={'absolute bottom-4 right-4  flex items-center justify-center'}>
                        <Image src={'/assets/logo/Spotify_Icon_RGB_White.png'} alt={'Spotify'} width={30} height={30}/>
                    </div>
            </div>
        </>
    );
};