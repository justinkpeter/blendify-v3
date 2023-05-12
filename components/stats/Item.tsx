import { useRecoilState } from "recoil";
import { artistState } from "@/atoms/artistAtom";
import { trackState } from "@/atoms/trackAtom";
import { itemSelectedState } from "@/atoms/itemAtom";
import { useEffect, useState} from "react";
import spotifyApi from "@/lib/spotify";
import { pauseLivePreview, playLivePreview } from "@/utils/functions";
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

    return (
        <>
            <figure className={"gallery__item item__view-more"} onClick={handleClick}>
                <div className={'gallery__item-img'}>
                    <div
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                        className={"gallery__item-imginner"} style={{backgroundImage: `url(${data?.images[0].url ?? ''}`}}/>
                </div>
                <figcaption className={"gallery__item-caption"}>
                    <h2 className={"gallery__item-title"} >{data?.name ?? ''}</h2>
                    <span className={"gallery__item-number"} style={{WebkitTextStrokeColor: 'white'}}>
                        {rank}
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

    useEffect(()=>{
        if(data) {
            setPreviewImg(data?.album?.images[0]?.url ?? '')
        }
    }, [data])


    return (
        <>
            <figure className={"gallery__item item__view-more"} onClick={handleClick}>
                <div className={'gallery__item-img'}>
                    <div className={"gallery__item-imginner"}
                         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                         style={{backgroundImage: `url(${previewImg}`}}
                    />
                </div>
                <figcaption className={"gallery__item-caption"}>

                    <h2 className={"gallery__item-title"} >{data?.name ?? ''}</h2>
                    <div className={'mt-20 2xl:mt-24 pt-2.5 -ml-16 text-white/60'}>
                        { data?.artists?.map((artist:any, index:any) => {
                            const isLastArtist = index === data.artists.length - 1;
                            const comma = isLastArtist ? '' : ', ';

                            return (
                                <span key={index} className={""} style={{WebkitTextStrokeColor: 'white'}}>
                                    {artist.name}{comma}
                                </span>
                            )
                        })}
                    </div>
                    <span className={"gallery__item-number"} style={{WebkitTextStrokeColor: 'white'}}>
                        {rank}
                    </span>
                </figcaption>
                <div className={'absolute w-full h-full pointer-events-none'}>
                    <audio id={data?.id} preload="none" src={data?.preview_url} ></audio>
                </div>
            </figure>
        </>
    )
}




// artistItem


// trackItem