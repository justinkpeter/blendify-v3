import { useRecoilState } from "recoil";
import { artistState } from "@/atoms/artistAtom";
import { trackState } from "@/atoms/trackAtom";
import { itemSelectedState } from "@/atoms/itemAtom";
import React, { useEffect, useState} from "react";
import spotifyApi from "@/lib/spotify";
import { pauseLivePreview, playLivePreview } from "@/utils/functions";
import Image from "next/image";

interface ItemProps {
    data: any;
    rank: number;
}
export const ArtistItem = ({data, rank}:ItemProps) => {

    const [artist, setArtist] = useRecoilState(artistState)
    const [itemSelected, setItemSelected] = useRecoilState(itemSelectedState)
    const [topTrackPreview, setTopTrackPreview] = useState('')

    useEffect(() => {
        // get artist top track
        if(data && spotifyApi.getAccessToken()) {
            spotifyApi.getArtistTopTracks(data.id, 'US').then((data:any) => {
                setTopTrackPreview(data.body.tracks[0].preview_url)
            })

        }
    }, [data])


    const handleClick = (e:any) => {
        e.preventDefault()
        //@ts-ignore
        setItemSelected('artist')
        setArtist(data ?? '')
    }

    const handleMouseEnter = (e:any) => {
        e.preventDefault()
        playLivePreview(data?.id)
    }

    const handleMouseLeave = (e:any) => {
        e.preventDefault()
        pauseLivePreview(data?.id)
    }

    const handlePreviewUri = (e:any) => {
        e.preventDefault()
        // @ts-ignore
        if(data?.uri) window.open(data.uri)
    }

    return (
        <>
            <figure className={"gallery__item item__view-more group"} onClick={handleClick}>
                <div className={'gallery__item-img'}>
                    <div
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        className={"gallery__item-imginner"} style={{backgroundImage: `url(${data?.images[0].url ?? ''}`}}/>
                </div>
                <figcaption className={"gallery__item-caption"}>
                    <h2 className={"gallery__item-title text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-colors duration-300 ease-in "} >{data?.name ?? ''}</h2>
                    <span className={"gallery__item-number flex flex-col items-center "} style={{WebkitTextStrokeColor: 'white'}}>
                        {rank}
                        <a href={data?.uri} onClick={handlePreviewUri} className={'h-fit w-fit z-50'}>
                            <Image src={'/assets/logo/Spotify_Icon_RGB_White.png'} alt={'Spotify'} width={30} height={30}/>
                        </a>
                    </span>
                </figcaption>
                <div className={'absolute w-full h-full pointer-events-none'}>
                    <audio id={data?.id} preload="none" src={topTrackPreview} ></audio>
                </div>
            </figure>
        </>
    )
}

export const TrackItem = ({data,rank}:ItemProps) => {
    const [track, setTrack] = useRecoilState(trackState)
    const [itemSelected, setItemSelected] = useRecoilState(itemSelectedState)
    const [previewImg, setPreviewImg] = useState('')

    const handleClick = (e:any) => {
        e.preventDefault()
        // @ts-ignore
        setItemSelected('track')
        setTrack(data ?? '')
    }

    const handleMouseEnter = (e:any) => {
        e.preventDefault()
        playLivePreview(data?.id)
    }

    const handleMouseLeave = (e:any) => {
        e.preventDefault()
        pauseLivePreview(data?.id)
    }

    const handlePreviewUri = (e:any) => {
        e.preventDefault()
        // @ts-ignore
        if(data?.uri) window.open(data.uri)
    }

    useEffect(()=>{
        if(data) {
            setPreviewImg(data?.album?.images[0]?.url ?? '')
        }
    }, [data])


    return (
        <>
            <figure className={"gallery__item item__view-more group"} onClick={handleClick}>
                <div className={'gallery__item-img'}>
                    <div className={"gallery__item-imginner"}
                         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                         style={{backgroundImage: `url(${previewImg}`}}
                    />
                </div>
                <figcaption className={"gallery__item-caption"}>
                    <h2 className={"gallery__item-title text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-violet-500 transition-colors duration-300 ease-in hover:underline"} >{data?.name ?? ''}</h2>
                    <div className={'-mt-8 2xl:-mt-4 pt-2.5 ml-0 text-white/60 h-fit relative '}>
                        { data?.artists?.map((artist:any, index:any) => {
                            const isLastArtist = index === data.artists.length - 1;
                            const comma = isLastArtist ? '' : ', ';

                            return (
                                <span key={index} className={"hover:underline"} style={{WebkitTextStrokeColor: 'white'}} onClick={(e) => {
                                    e.preventDefault()
                                    if(data && artist?.uri) window.open(artist.uri)
                                } }>
                                    {artist.name}{comma}
                                </span>
                            )
                        })}
                    </div>
                    <span className={"gallery__item-number flex flex-col items-center "} style={{WebkitTextStrokeColor: 'white'}}>
                        {rank}
                        <a href={data?.uri} onClick={handlePreviewUri} className={'h-fit w-fit z-50'}>
                            <Image src={'/assets/logo/Spotify_Icon_RGB_White.png'} alt={'Spotify'} width={30} height={30}/>
                        </a>
                    </span>
                </figcaption>
                <div className={'absolute w-full h-full pointer-events-none'}>
                    <audio id={data?.id} preload="none" src={data?.preview_url} ></audio>
                </div>
            </figure>
        </>
    )
}
