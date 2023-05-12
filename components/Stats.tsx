import styles from '@/styles/Item.module.css'
import useSpotify from "@/utils/useSpotify";
import {useEffect, useRef, useState} from "react";
import { useSession } from 'next-auth/react'
import {initTransition} from "@/utils/";


import { useLocomotiveScroll } from "react-locomotive-scroll";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

import { Item } from "@/components/stats/Item";





export const Stats = () => {

    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [topArtists, setTopArtists] = useState([])
    // const [selectedArtist, setSelectedArtist] = useState(null)
    const { scroll } = useLocomotiveScroll()

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


    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["0 0", "100% 100%"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [-600, 1500])
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(x, physics);



    return (
        <>

        {/*     Top Tracks */}
        {/*     Top Songs */}
        {/*     Top Genres */}
        <div className={'bg-zinc-900 content '}>
            <div className={'h-screen  flex  w-[300vw] relative '}>
                {/* favorite artists title*/}
                <motion.div className={styles["gallery__text"]} style={{x:spring}}>
                    <span className={styles["gallery__text-inner"]} data-scroll data-scroll-speed="-8">favorite</span>
                    <span data-scroll data-scroll-speed="-7.5" className={styles["gallery__text-inner"]}>artists</span>
                </motion.div>
                {/* artists */}
                <div className={'w-fit h-full flex items-center '}>
                    {/*{topArtists?.map((item, index) => {*/}
                    {/*    return (*/}
                    {/*        <Item key={item?.id} index={index} name={item?.name} img={item?.images[0].url}/>*/}
                    {/*    )*/}
                    {/*})}*/}
                    <Item index={0} name={topArtists[0]?.name} img={topArtists[0]?.images[0].url} id={topArtists[0]?.id} />
                    {/*<Item index={1} name={topArtists[1]?.name} img={topArtists[1]?.images[0].url}/>*/}
                    {/*<Item index={2} name={topArtists[2]?.name} img={topArtists[2]?.images[0].url}/>*/}
                    {/*<Item index={3} name={topArtists[3]?.name} img={topArtists[3]?.images[0].url}/>*/}
                    {/*<Item index={4} name={topArtists[4]?.name} img={topArtists[4]?.images[0].url}/>*/}

                </div>
            </div>
        </div>
        </>
    );
};