import Image from 'next/image'
import React from "react";
export const CarouselItem = ({item}:any) => {
    return (
        <>
            <div className={'w-fit h-fit relative p-3 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/30 transition-all duration-100 ease-in-out group'}>
                <div className={'flex flex-col space-y-4 relative'}>
                    <div className={'relative h-[150px] w-[150px] overflow-hidden'}>
                        <img src={item && item?.album?.images[0]?.url || item?.images[0]?.url}
                             alt={item?.name}
                             className="absolute inset-0 object-cover w-full h-full object-center drop-shadow-3xl group-hover:scale-125 transition-all duration-500 ease-in-out"/>
                    </div>
                    <div className={'relative w-full flex  items-center  justify-between '}>
                        <div> {item?.name} </div>
                        <Image src={'/assets/logo/Spotify_Icon_RGB_White.png'} alt={'Spotify'} width={30} height={30}/>
                    </div>
                    <div className={'flex flex-wrap gap-1'}>
                        {item?.artists?.map((artist: any, index: number) => {
                            const isLastItem = index === item.artists.length - 1;
                            const comma = isLastItem ? '' : ', ';
                            return (
                                <div className={'text-white/60'} key={artist.id}>
                                    {artist.name}
                                    {comma}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <a className={'h-full w-full absolute top-0 preview__uri'} href={item?.uri}></a>

            </div>
        </>
    );
};