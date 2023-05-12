import {
    HeartIcon,
    SparklesIcon,
    UserGroupIcon,
    MusicalNoteIcon,
    ChevronDoubleUpIcon,
    BoltIcon,
    SpeakerWaveIcon,
    ChatBubbleLeftRightIcon,
    FaceSmileIcon, ForwardIcon
} from "@heroicons/react/20/solid";
import {CarouselItem} from "@/components/CarouselItem";
import React, {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {artistIdState, artistState} from "@/atoms/artistAtom";
import { itemSelectedState} from "@/atoms/itemAtom";
import {Genres} from "@/components/preview/Genres";
import spotifyApi from "@/lib/spotify";
import {Carousel} from "@/components/preview/Carousel";
import {StatCard} from "@/components/preview/StatCard";
import { numberWithCommas, getPopularity, getArtistAlbumSingleCount, convertArtistReleaseDate } from "@/utils/functions";
import {trackState} from "@/atoms/trackAtom";
import {AudioFeature} from "@/components/preview/AudioFeauture";

export const Preview = () => {

    // const artistId = useRecoilValue(artistIdState)
    const artist = useRecoilValue(artistState)
    const track = useRecoilValue(trackState)
    const itemSelected = useRecoilValue(itemSelectedState)
    const [previewUri, setPreviewUri] = useState(itemSelected?.uri)


    const [artistMetaData, setArtistMetaData] = useState({
        topTracks: [],
        relatedArtists: [],
        albums: [],
        followers: null
    })

    const [trackMetaData, setTrackMetaData] = useState({
        genres: [],
        album: null,
        artists: [],
        duration: null,
        popularity: 0,
        releaseDate: null,
        explicit: null,
        relatedTracks: [],
    })

    useEffect(() => {
        if (spotifyApi.getAccessToken() && itemSelected === 'artist'){
            spotifyApi.getArtist(artist?.id).then((data) => {
                setArtistMetaData((prevMetaData) => ({
                    ...prevMetaData,
                    followers: data.body.followers.total
                }));
            });

            spotifyApi.getArtistTopTracks(artist?.id, 'US').then((data) => {
                setArtistMetaData((prevMetaData) => ({
                    ...prevMetaData,
                    topTracks: data.body.tracks
                }));
            });

            spotifyApi.getArtistRelatedArtists(artist?.id).then((data) => {
                setArtistMetaData((prevMetaData) => ({
                    ...prevMetaData,
                    relatedArtists: data.body.artists
                }));
            });

            spotifyApi.getArtistAlbums(artist?.id).then((data) => {
                setArtistMetaData((prevMetaData) => ({
                    ...prevMetaData,
                    albums: data.body.items
                }));
            });
        }

        if(spotifyApi.getAccessToken() && itemSelected === 'track'){
            // iterate thru each artist  on the track  and get their genres
            const artists = track?.artists.map((artist) => artist.id)
            spotifyApi.getArtists(artists).then((data) => {
                // get the genres of each artist
                const genres = data.body.artists.map((artist) => artist.genres)
                // get the popularity of the first artist
                const popularity = data.body.artists[0].popularity
                // flatten the array of arrays
                const flattenedGenres = [].concat.apply([], genres)
                // get the unique genres
                const uniqueGenres = [...new Set(flattenedGenres)]
                // set the genres
                // @ts-ignore
                setTrackMetaData((prevMetaData) => ({
                    ...prevMetaData,
                    genres: uniqueGenres,
                    popularity: popularity,
                    releaseDate: track?.album?.release_date,
                }));

                //get audio features for the track
                spotifyApi.getAudioFeaturesForTrack(track?.id).then((data) => {
                    setTrackMetaData((prevMetaData) => ({
                        ...prevMetaData,
                        duration: data.body.duration_ms,
                        explicit: data.body.explicit,
                        danceability: data.body.danceability,
                        energy: data.body.energy,
                        loudness: data.body.loudness,
                        speechiness: data.body.speechiness,
                        valence: data.body.valence,
                        tempo: data.body.tempo,
                    }));
                });

                // get related tracks
                spotifyApi.getRecommendations({
                    seed_artists: artists,
                    seed_genres: uniqueGenres,
                    seed_tracks: track?.id,
                    limit: 10,
                }).then((data) => {
                    setArtistMetaData((prevMetaData) => ({
                        ...prevMetaData,
                        relatedTracks: data.body.tracks
                    }));
                })
            })

        }

    }, [artist, track, itemSelected])

    const handlePreviewUri = (e) => {
        e.preventDefault()
        if(itemSelected === 'artist') window.open(artist?.uri)
        else if(itemSelected === 'track') window.open(track?.uri)
    }




    return(
        <>
            <section className="previews">
                <div className="preview ">
                    <div className={'preview-container'} >
                        {/* image and link */}
                        <div className={'relative flex flex-col sticky top-0'}>
                            <div className="preview__img">
                                <div
                                    className="preview__img-inner drop-shadow-2xl"
                                    // style={{backgroundImage:
                                    //         `url(${artist?.images && artist.images[0]?.url || +
                                    //         track?.album?.images[0]?.url || ''})`}}>
                                    style={{backgroundImage:
                                            `url(${itemSelected === "artist" ? 
                                                artist?.images && artist.images[0]?.url : 
                                                track?.album?.images[0]?.url || ''})`}}>
                                </div>
                            </div>
                            <button className={'oh__inner preview__uri bg-green-500 hover:bg-green-800 rounded-lg my-4 flex justify-center py-4 hover:underline transition-all duration-300 '}
                                    onClick={handlePreviewUri}>
                                Open in Spotify
                            </button>
                            <button className={"unbutton preview__back justify-self-start"}>
                                <svg width="100px" height="18px" viewBox="0 0 50 9">
                                    <path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
                                </svg>
                            </button>
                        </div>
                        { /* metadata  */}
                        <div className={'relative w-full overflow-y-scroll metadata'} >
                            <div className={'preview__column--start preview__column'}>
                                <h2 className="preview__title oh">
                                    {/*<span className="oh__inner"> {topArtists[0]?.name} </span>*/}
                                     <span className="oh__inner"> {itemSelected === "artist" ? artist?.name : track?.name} </span>
                                </h2>
                            </div>
                            <div className="preview__column preview__column--start relative" id={'scrollable'}>
                                <span className="preview__column-title preview__column-title--main oh">
                                  {/*<span className="oh__inner">Artist </span>*/}
                                </span>
                                <div className="oh">
                                    <div className={'flex flex-wrap gap-2 mt-4 w-full oh__inner'}>
                                        {/*{ genres }*/}
                                        <Genres data={itemSelected === 'artist' ? artist?.genres : trackMetaData?.genres}/>
                                    </div>
                                    <div className="oh__inner ">
                                        <div className={'flex my-6'}>
                                            { itemSelected ==='artist' && <StatCard title={'Popularity'} value={getPopularity(artist?.popularity)} Icon={SparklesIcon}/>}
                                            { itemSelected ==='artist' && <StatCard title={'Followers'} value={getPopularity(artist?.followers)} Icon={UserGroupIcon}/>}
                                            { itemSelected ==='track' && <StatCard title={'Popularity'} value={getPopularity(trackMetaData?.popularity)} Icon={SparklesIcon}/>}
                                            { itemSelected ==='track' && <StatCard title={'Release Date'} value={convertArtistReleaseDate(trackMetaData?.releaseDate)} Icon={ChevronDoubleUpIcon}/>}
                                            {/*<StatCard title={'Followers'} value={numberWithCommas(artistMetaData?.followers)} Icon={UserGroupIcon}/>*/}
                                        </div>
                                    { <Carousel title={'Top Tracks' } data={artistMetaData.topTracks?.slice(0,8)} id={'carousel-top-tracks'}/>}
                                    </div>
                                    <div className="oh__inner ">
                                        <div className={'flex my-6'}>
                                            { itemSelected === 'artist' && <StatCard title={'Discography'} value={getArtistAlbumSingleCount(artistMetaData?.albums)} Icon={MusicalNoteIcon}/> }
                                            { itemSelected === 'artist' && <StatCard title={'Latest Album Release'} value={convertArtistReleaseDate(artistMetaData?.albums[0]?.release_date)} Icon={ChevronDoubleUpIcon}/> }
                                        </div>
                                        { itemSelected ==='track' &&
                                            <div className={'relative'}>
                                                <h4 className={'text-2xl font-bold mb-5'}> Audio Features </h4>
                                                <AudioFeature feature={'Danceability'} value={trackMetaData?.danceability} Icon={MusicalNoteIcon}/>
                                                <AudioFeature feature={'Energy'} value={trackMetaData?.energy} Icon={BoltIcon}/>
                                                <AudioFeature feature={'Loudness'} value={trackMetaData?.loudness} Icon={SpeakerWaveIcon}/>
                                                <AudioFeature feature={'Speechiness'} value={trackMetaData?.speechiness} Icon={ChatBubbleLeftRightIcon}/>
                                                <AudioFeature feature={'Valence'} value={trackMetaData?.valence} Icon={FaceSmileIcon}/>
                                                <AudioFeature feature={'Tempo'} value={trackMetaData?.tempo} Icon={ForwardIcon}/>
                                            </div>
                                        }
                                        { itemSelected ==='artist' && <Carousel title={'Related Artists' } data={artistMetaData.relatedArtists?.slice(0,8)} id={'carousel-related-artists'} />}
                                        {/*{ itemSelected ==='track' && <Carousel title={'Related Tracks' } data={artistMetaData.relatedTracks?.slice(0,8)} id={'carousel-related-tracks'} />}*/}
                                    </div>
                                </div>

                                {/*{ artistMetaData.topTracks.length > 0 && <Carousel data={artistMetaData.topTracks?.slice(0,8)}/>}*/}



                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}