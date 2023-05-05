import React, { useState, useEffect, useRef }from 'react';
import {getProviders, signIn} from "next-auth/react";
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import Image from 'next/image'

export default function Login({providers}:any) {

    const [vantaEffect, setVantaEffect] = useState<any | undefined>(undefined);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: true,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: "#18181b"
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <div ref={vantaRef} className={'relative h-screen w-screen  select-none'}>
                <div className={'my-auto h-full w-screen flex flex-col items-center justify-center text-white'}>
                    <div className={"text-7xl font-bold"}>
                        <span> Discover how you </span>
                        <span className={"text-green-500"}> listen.</span>
                    </div>
                    <div className={"mt-2 text-3xl text-white"}>
                        <span> Explore your music taste and create awesome playlists.</span>
                    </div>
                    <div className={"flex mt-16"}>
                        <button
                            className={"py-6 px-12 w-fit rounded-full bg-green-500 font-medium transition text-lg hover:bg-green-800 flex items-center gap-4"}
                            onClick={() => signIn(providers.spotify.id, { callbackUrl: '/'})}
                        >
                            <Image src={'/assets/logo/Spotify_Icon_RGB_White.png'} alt={'Spotify'} width={30} height={30}/>
                            <span> Continue with Spotify </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}