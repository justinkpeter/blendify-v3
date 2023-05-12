import { TrackItem } from "@/components/stats/Item";
import useSpotify from "@/utils/useSpotify";
import {useSession} from "next-auth/react";
import {useEffect,  useState} from "react";
import {initTransition} from "@/utils";
import {SectionTitle} from "@/components/stats/SectionTitle";


export const FavoriteTracks = () => {


    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [topTracks, setTopTracks] = useState([{
        name:'', artists:[
            {name:'', images:[{url:''}]},
        ],
    }])
    const [sectionWidth, setSectionWidth] = useState(0)

    useEffect(() => {
        if(spotifyApi.getAccessToken()) {
            spotifyApi.getMyTopTracks({limit: 5,time_range:'short_term'}).then((data:any) => {
                setTopTracks(data.body.items)
            })
        }
    }, [session, spotifyApi])

    useEffect(() => {
        if(topTracks.length > 0) {
            initTransition()
        }
    }, [topTracks])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const favoriteTracksElement = document.querySelector('.favorite-tracks');
            if (!favoriteTracksElement) return;

            setSectionWidth(favoriteTracksElement.clientWidth);
        }
    }, [sectionWidth]);


    return (
        <>
            <div className={'h-screen  flex  w-fit relative favorite-artists ml-[10vw] '} >
                <SectionTitle title={'tracks'} sectionWidth={sectionWidth}/>
                <div className={'h-screen w-fit flex items-center relative'}>
                    <div className={'w-[45vw] leading-6 ml-24'}>
                        <h1 className={'my-5 font-bold text-white text-[5vw]'}>
                            <span className={'inline-block lg:pr-[5vh] leading-[5rem] 2xl:leading-[8rem] uppercase italic'}>
                                <span className={'break-normal bg-clip-text text-transparent bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'}> {topTracks[0]?.name} </span><br/>
                                <span> has been on repeat </span>
                                <br/>
                             </span>
                        </h1>
                        <p className={'font-light text-2xl 2xl:text-5xl text-gray-100 pr-[10vh]'}>
                            <span className={'inline-block leading-[3rem]'}>
                                Yeah, you've got your playlist stacked with bangers, but
                                <span className={'italic font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'}> {topTracks[0]?.name} </span> by
                                <span className={'italic font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'}> {topTracks[0]?.artists[0]?.name}? </span>
                                A whole new different type of vibe. Regardless, here are your top 5 tracks in the last 4 weeks.
                            </span>
                        </p>
                    </div>
                </div>
                <div className={'w-fit h-full flex items-center'}>
                    <TrackItem data={topTracks[0]} rank={1} />
                    <TrackItem data={topTracks[1]} rank={2} />
                    <TrackItem data={topTracks[2]} rank={3} />
                    <TrackItem data={topTracks[3]} rank={4} />
                    <TrackItem data={topTracks[4]} rank={5} />
                </div>
            </div>
        </>
    );
}