import useSpotify from "@/utils/useSpotify";
import {useSession} from "next-auth/react";
import {ReactChildren} from "react";

export const Stats = ({children}) => {

    const spotifyApi = useSpotify()
    const {data: session} = useSession()

    return (
        <>
            <div className={' w-full flex h-screen relative content'}>
                {children}
            </div>
        </>
    );
};