import { ArtistItem} from "@/components/stats/Item";
import useSpotify from "@/utils/useSpotify";
import {useSession} from "next-auth/react";
import {useEffect,  useState} from "react";
import {initTransition} from "@/utils";
import {SectionTitle} from "@/components/stats/SectionTitle";


export const FavoriteArtists = () => {
    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [topArtists, setTopArtists] = useState([])
    const [sectionWidth, setSectionWidth] = useState(0)

    useEffect(() => {
        if(spotifyApi.getAccessToken()) {
            spotifyApi.getMyTopArtists({limit: 5, time_range: 'short_term'}).then((data) => {
                setTopArtists(data.body.items)
            })
        }
    }, [session, spotifyApi])

    useEffect(() => {
        if(topArtists.length > 0) {
            initTransition()
        }
    }, [topArtists])

    useEffect(() => {
        if( typeof window !== 'undefined') {
            setSectionWidth(document.querySelector('.favorite-artists').clientWidth)

        }
    }, [sectionWidth])


    return (
        <>
            <div className={' h-screen flex w-fit relative favorite-artists'}>
                {/* favorite artists title*/}
                <SectionTitle title={'artists'} sectionWidth={sectionWidth}/>
                {/* artists */}
                <div className={'h-screen w-fit flex items-center relative'}>
                    <div className={'w-[45vw] leading-6 ml-24'}>
                        <h1 className={'my-5 font-bold text-white text-[5vw]'}>
                            <span className={'inline-block lg:pr-[5vh] leading-[5rem] 2xl:leading-[8rem] uppercase italic'}>
                                <span> Grooving to </span><br/>
                                <span className={'break-normal bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'}> {topArtists[0]?.name} </span>
                                <br/>
                             </span>
                        </h1>
                        <p className={'font-light  text-2xl 2xl:text-5xl text-gray-100 pr-[10vh]'}>
                            <span className={'inline-block leading-[3rem]'}>
                                When it comes to that one artist to grace your ears, nobody does is quite
                                like <span className={'italic font-medium'}> {topArtists[0]?.name} </span>for you!
                                For the last 30 days, they've been your #1 artist.
                            </span>
                        </p>
                    </div>
                </div>


                <div className={'w-fit h-full flex items-center'}>
                    <ArtistItem data={topArtists[0]} rank={1} />
                    <ArtistItem data={topArtists[1]} rank={2}/>
                    <ArtistItem data={topArtists[2]} rank={3}/>
                    <ArtistItem data={topArtists[3]} rank={4}/>
                    <ArtistItem data={topArtists[4]} rank={5}/>
                </div>
            </div>
        </>
    );
}