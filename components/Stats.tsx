import styles from '@/styles/Item.module.css'
import useSpotify from "@/utils/useSpotify";
import {useEffect, useState} from "react";
import { useSession } from 'next-auth/react'
import {initTransition} from "@/utils/";
import { HeartIcon } from "@heroicons/react/20/solid";
import {CarouselItem} from "@/components/CarouselItem";


import { useLocomotiveScroll } from "react-locomotive-scroll";


const Item = ({index, name, img}) => {


    const { scroll } = useLocomotiveScroll()

    const stopScroll = (e) => {
        e.stopPropagation()
        e.preventDefault()
        scroll?.stop()
        console.log('stop scroll')
    }

    return (
        <>
            <figure className={"gallery__item item__view-more"} onClick={stopScroll}>
                <div className={'gallery__item-img'}>
                    <div className={"gallery__item-imginner"} style={{backgroundImage: `url(${img ?? ''}`}}></div>
                </div>
                <figcaption className={"gallery__item-caption"}>
                    <h2 className={"gallery__item-title"} data-scroll data-scroll-speed="1">{name ?? ''}</h2>
                    <span className={"gallery__item-number"} style={{ WebkitTextStrokeColor: 'white'}}>
                        0{parseInt(index) + 1}
                    </span>
                    {/*<p className={styles["tags"]}>*/}
                    {/*    <span>#house</span>*/}
                    {/*    <span>#green</span>*/}
                    {/*    <span>#chair</span>*/}
                    {/*</p>*/}
                    {/*<a className={styles["gallery__item-link"]}>see more</a>*/}
                </figcaption>
            </figure>
        </>
    )
}


export const Stats = () => {

    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [topArtists, setTopArtists] = useState([])
    // const [selectedArtist, setSelectedArtist] = useState(null)

    useEffect(() => {
        if(spotifyApi.getAccessToken()) {
            spotifyApi.getMyTopArtists({limit: 5}).then((data) => {
                setTopArtists(data.body.items)
                console.log(data.body.items)
            })
        }
    }, [session, spotifyApi])

    useEffect(() => {
        if(topArtists.length > 0) {
            initTransition()
            if(spotifyApi.getAccessToken()) {

                spotifyApi.getArtistTopTracks(topArtists[0].id, 'US').then((data) => {
                    console.log(data.body.tracks)
                })


            }

        }
    }, [topArtists])

    return (
        <>

        {/*     Top Tracks */}
        {/*     Top Songs */}
        {/*     Top Genres */}


                <div data-scroll-section className={'bg-zinc-900 content'}>
                    <div className={'h-screen  flex  w-[300vw] relative '}>
                        {/* favorite artists title*/}
                        <div className={styles["gallery__text"]}>
                            <span className={styles["gallery__text-inner"]} data-scroll data-scroll-speed="-8">favorite</span>
                            <span data-scroll data-scroll-speed="-7.5" className={styles["gallery__text-inner"]}>artists</span>
                        </div>
                        {/* artists */}
                        <div className={'w-fit h-full flex items-center '}>
                            {/*{topArtists?.map((item, index) => {*/}
                            {/*    return (*/}
                            {/*        <Item key={item?.id} index={index} name={item?.name} img={item?.images[0].url}/>*/}
                            {/*    )*/}
                            {/*})}*/}
                            <Item index={0} name={topArtists[0]?.name} img={topArtists[0]?.images[0].url} />
                            <Item index={1} name={topArtists[1]?.name} img={topArtists[1]?.images[0].url}/>
                            {/*<Item index={2} name={topArtists[2]?.name} img={topArtists[2]?.images[0].url}/>*/}
                            {/*<Item index={3} name={topArtists[3]?.name} img={topArtists[3]?.images[0].url}/>*/}
                            {/*<Item index={4} name={topArtists[4]?.name} img={topArtists[4]?.images[0].url}/>*/}



                        </div>
                    </div>
                    <div className="overlay">
                        <div className="overlay__row"></div>
                        <div className="overlay__row"></div>
                    </div>
                    <section className="previews">
                        <div className="preview">
                            <div className={'preview-container'}>
                                {/* image and link */}
                                <div className={'relative flex flex-col sticky top-0'}>
                                    <div className="preview__img">
                                        <div
                                            className="preview__img-inner"
                                            style={{backgroundImage: `url(${topArtists[0]?.images[0].url}`}}
                                        ></div>
                                    </div>
                                    <button className={'btn oh__inner'}> open in spotify </button>
                                    <button className={"unbutton preview__back"}>
                                        <svg width="100px" height="18px" viewBox="0 0 50 9">
                                            <path vectorEffect="non-scaling-stroke" d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
                                        </svg>
                                    </button>
                                </div>
                                { /* metadata  */}
                                <div className={'relative w-full overflow-y-scroll'}>
                                    <div className={'preview__column--start preview__column'}>
                                        <h2 className="preview__title oh">
                                            <span className="oh__inner"> {topArtists[0]?.name} </span>
                                        </h2>
                                    </div>
                                    <div className="preview__column preview__column--start relative">
                                <span className="preview__column-title preview__column-title--main oh">
                                  {/*<span className="oh__inner">Artist </span>*/}
                                </span>
                                        <div className="oh">
                                            <div className={'flex flex-wrap gap-2 mt-4 w-full'}>
                                                <div className="oh__inner genre"> alternative r&b </div>
                                                <div className="oh__inner genre"> indie r&b </div>
                                                <div className="oh__inner genre"> chill r&b </div>
                                                <div className="oh__inner genre"> alternative r&b </div>
                                            </div>
                                            <div className="oh__inner ">
                                                <div className={'flex mb-[25px]'}>
                                                    <div className={'inline-flex items-center bg-zinc-700/80 mb-[15px] px-6 py-4 mr-2 rounded-2xl overflow-hidden group'}>
                                                <span className={'relative w-[43px]'}>
                                                    <span className={'w-[29px] inline-block'}>
                                                        <HeartIcon className={'group-hover:text-green-500'}/>
                                                    </span>
                                                </span>
                                                        <div className={'min-w-[120px]'}>
                                                            <h4 className={'text-md font-bold text-zinc-500/70'}>Followers </h4>
                                                            <span className={'text-lg font-bold'}> 200,000 </span>
                                                        </div>
                                                    </div>
                                                    <div className={'inline-flex items-center bg-zinc-700/80 mb-[15px] px-6 py-4 mr-2 rounded-2xl overflow-hidden group'}>
                                                <span className={'relative w-[43px]'}>
                                                    <span className={'w-[29px] inline-block'}>
                                                        <HeartIcon className={'group-hover:text-green-500'}/>
                                                    </span>
                                                </span>
                                                        <div className={'min-w-[120px]'}>
                                                            <h4 className={'text-md font-bold text-zinc-500/70'}>Followers </h4>
                                                            <span className={'text-lg font-bold'}> 200,000 </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className={'relative bg-yellow-800 w-full '}>*/}
                                        <div className={'relative w-full  h-full overflow-x-hidden'}>
                                            <div className="carousel carousel-center w-full p-4 space-x-6 ">
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                            </div>

                                        </div>

                                        <div className={'relative w-full  h-full overflow-x-hidden'}>
                                            <div className="carousel carousel-center w-full p-4 space-x-6 ">
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                                <CarouselItem/>
                                            </div>

                                        </div>




                                        {/*<div className={'oh__inner'}>*/}

                                        {/*</div>*/}
                                        {/*</div>*/}



                                    </div>
                                </div>


                            </div>



                            {/*<h2 className="preview__title oh">*/}
                            {/*    <span className="oh__inner"> Portraits</span>*/}
                            {/*</h2>*/}
                            {/*<div className="preview__column preview__column--start">*/}
                            {/*    <span className="preview__column-title preview__column-title--main oh">*/}
                            {/*      <span className="oh__inner">Alex Moulder</span>*/}
                            {/*    </span>*/}
                            {/*    <span className="oh">*/}
                            {/*        <span className="oh__inner">2020</span>*/}
                            {/*    </span>*/}
                            {/*</div>*/}
                            {/*<div className="preview__column">*/}
                            {/*    <h3 className="preview__column-title oh">*/}
                            {/*        <span className="oh__inner">Location</span>*/}
                            {/*    </h3>*/}
                            {/*    <p>*/}
                            {/*        And if it rains, a closed car at four. And we shall play a game of*/}
                            {/*        chess, pressing lidless eyes and waiting for a knock upon the*/}
                            {/*        door.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            {/*<div className="preview__column">*/}
                            {/*    <h3 className="preview__column-title oh">*/}
                            {/*        <span className="oh__inner">Material</span>*/}
                            {/*    </h3>*/}
                            {/*    <p>*/}
                            {/*        At the violet hour, when the eyes and back, turn upward from the*/}
                            {/*        desk, when the human engine waits.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            {/*<button className="unbutton preview__back">*/}
                            {/*    <svg width="100px" height="18px" viewBox="0 0 50 9">*/}
                            {/*        <path*/}
                            {/*            vector-effect="non-scaling-stroke"*/}
                            {/*            d="m0 4.5 5-3m-5 3 5 3m45-3h-77"*/}
                            {/*        ></path>*/}
                            {/*    </svg>*/}
                            {/*</button>*/}
                        </div>
                        <div className="preview">
                            <div className="preview__img">
                                <div
                                    className="preview__img-inner"
                                    // style={{backgroundImage: `url(${topArtists[1]?.images[0].url}`}}
                                ></div>
                            </div>
                            <h2 className="preview__title oh">
                                <span className="oh__inner">Bennett</span>
                            </h2>
                            <div className="preview__column preview__column--start">
            <span className="preview__column-title preview__column-title--main oh">
              <span className="oh__inner">Aria Bennett</span>
            </span>
                                <span className="oh">
              <span className="oh__inner">2021</span>
            </span>
                            </div>
                            <div className="preview__column">
                                <h3 className="preview__column-title oh">
                                    <span className="oh__inner">Location</span>
                                </h3>
                                <p>
                                    And if it rains, a closed car at four. And we shall play a game of
                                    chess, pressing lidless eyes and waiting for a knock upon the
                                    door.
                                </p>
                            </div>
                            <div className="preview__column">
                                <h3 className="preview__column-title oh">
                                    <span className="oh__inner">Material</span>
                                </h3>
                                <p>
                                    At the violet hour, when the eyes and back, turn upward from the
                                    desk, when the human engine waits.
                                </p>
                            </div>
                            <button className="unbutton preview__back">
                                <svg width="100px" height="18px" viewBox="0 0 50 9">
                                    <path
                                        vector-effect="non-scaling-stroke"
                                        d="m0 4.5 5-3m-5 3 5 3m45-3h-77"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {/*    <div className="preview">*/}
                        {/*        <div className="preview__img">*/}
                        {/*            <div*/}
                        {/*                className="preview__img-inner"*/}
                        {/*                // style={{backgroundImage:url(img/3_big.jpg)}}*/}
                        {/*            ></div>*/}
                        {/*        </div>*/}
                        {/*        <h2 className="preview__title oh">*/}
                        {/*            <span className="oh__inner">Hughes</span>*/}
                        {/*        </h2>*/}
                        {/*        <div className="preview__column preview__column--start">*/}
                        {/*<span className="preview__column-title preview__column-title--main oh">*/}
                        {/*  <span className="oh__inner">Jimmy Hughes</span>*/}
                        {/*</span>*/}
                        {/*            <span className="oh">*/}
                        {/*  <span className="oh__inner">2022</span>*/}
                        {/*</span>*/}
                        {/*        </div>*/}
                        {/*        <div className="preview__column">*/}
                        {/*            <h3 className="preview__column-title oh">*/}
                        {/*                <span className="oh__inner">Location</span>*/}
                        {/*            </h3>*/}
                        {/*            <p>*/}
                        {/*                And if it rains, a closed car at four. And we shall play a game of*/}
                        {/*                chess, pressing lidless eyes and waiting for a knock upon the*/}
                        {/*                door.*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*        <div className="preview__column">*/}
                        {/*            <h3 className="preview__column-title oh">*/}
                        {/*                <span className="oh__inner">Material</span>*/}
                        {/*            </h3>*/}
                        {/*            <p>*/}
                        {/*                At the violet hour, when the eyes and back, turn upward from the*/}
                        {/*                desk, when the human engine waits.*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*        <button className="unbutton preview__back">*/}
                        {/*            <svg width="100px" height="18px" viewBox="0 0 50 9">*/}
                        {/*                <path*/}
                        {/*                    vectorEffect="non-scaling-stroke"*/}
                        {/*                    d="m0 4.5 5-3m-5 3 5 3m45-3h-77"*/}
                        {/*                ></path>*/}
                        {/*            </svg>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    <div className="preview">*/}
                        {/*        <div className="preview__img">*/}
                        {/*            <div*/}
                        {/*                className="preview__img-inner"*/}
                        {/*                // style={{backgroundImage:url(img/3_big.jpg)}}*/}
                        {/*            ></div>*/}
                        {/*        </div>*/}
                        {/*        <h2 className="preview__title oh">*/}
                        {/*            <span className="oh__inner">Hughes</span>*/}
                        {/*        </h2>*/}
                        {/*        <div className="preview__column preview__column--start">*/}
                        {/*<span className="preview__column-title preview__column-title--main oh">*/}
                        {/*  <span className="oh__inner">Jimmy Hughes</span>*/}
                        {/*</span>*/}
                        {/*            <span className="oh">*/}
                        {/*  <span className="oh__inner">2022</span>*/}
                        {/*</span>*/}
                        {/*        </div>*/}
                        {/*        <div className="preview__column">*/}
                        {/*            <h3 className="preview__column-title oh">*/}
                        {/*                <span className="oh__inner">Location</span>*/}
                        {/*            </h3>*/}
                        {/*            <p>*/}
                        {/*                And if it rains, a closed car at four. And we shall play a game of*/}
                        {/*                chess, pressing lidless eyes and waiting for a knock upon the*/}
                        {/*                door.*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*        <div className="preview__column">*/}
                        {/*            <h3 className="preview__column-title oh">*/}
                        {/*                <span className="oh__inner">Material</span>*/}
                        {/*            </h3>*/}
                        {/*            <p>*/}
                        {/*                At the violet hour, when the eyes and back, turn upward from the*/}
                        {/*                desk, when the human engine waits.*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*        <button className="unbutton preview__back">*/}
                        {/*            <svg width="100px" height="18px" viewBox="0 0 50 9">*/}
                        {/*                <path*/}
                        {/*                    vectorEffect="non-scaling-stroke"*/}
                        {/*                    d="m0 4.5 5-3m-5 3 5 3m45-3h-77"*/}
                        {/*                ></path>*/}
                        {/*            </svg>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    <div className="preview">*/}
                        {/*        <div className="preview__img">*/}
                        {/*            <div*/}
                        {/*                className="preview__img-inner"*/}
                        {/*                // style={{backgroundImage:url(img/3_big.jpg)}}*/}
                        {/*            ></div>*/}
                        {/*        </div>*/}
                        {/*        <h2 className="preview__title oh">*/}
                        {/*            <span className="oh__inner">Hughes</span>*/}
                        {/*        </h2>*/}
                        {/*        <div className="preview__column preview__column--start">*/}
                        {/*<span className="preview__column-title preview__column-title--main oh">*/}
                        {/*  <span className="oh__inner">Jimmy Hughes</span>*/}
                        {/*</span>*/}
                        {/*            <span className="oh">*/}
                        {/*  <span className="oh__inner">2022</span>*/}
                        {/*</span>*/}
                        {/*        </div>*/}
                        {/*        <div className="preview__column">*/}
                        {/*            <h3 className="preview__column-title oh">*/}
                        {/*                <span className="oh__inner">Location</span>*/}
                        {/*            </h3>*/}
                        {/*            <p>*/}
                        {/*                And if it rains, a closed car at four. And we shall play a game of*/}
                        {/*                chess, pressing lidless eyes and waiting for a knock upon the*/}
                        {/*                door.*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*        <div className="preview__column">*/}
                        {/*            <h3 className="preview__column-title oh">*/}
                        {/*                <span className="oh__inner">Material</span>*/}
                        {/*            </h3>*/}
                        {/*            <p>*/}
                        {/*                At the violet hour, when the eyes and back, turn upward from the*/}
                        {/*                desk, when the human engine waits.*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*        <button className="unbutton preview__back">*/}
                        {/*            <svg width="100px" height="18px" viewBox="0 0 50 9">*/}
                        {/*                <path*/}
                        {/*                    vectorEffect="non-scaling-stroke"*/}
                        {/*                    d="m0 4.5 5-3m-5 3 5 3m45-3h-77"*/}
                        {/*                ></path>*/}
                        {/*            </svg>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                    </section>
                </div>


        </>
    );
};