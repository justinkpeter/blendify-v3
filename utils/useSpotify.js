import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import spotifyApi from "../lib/spotify";
export default function useSpotify(){
    const { data : session } = useSession()

    useEffect(() =>{
        if(session){
            // if refresh token attempt fails, redirect to login page
            if(session.error === 'RefreshAccessTokenError'){
                signIn('spotify', { callbackUrl: window.location.href })
            }

            spotifyApi.setAccessToken(session.user.accessToken)
        }
    }, [session])

    return spotifyApi
}