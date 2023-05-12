import {signOut, useSession} from "next-auth/react";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { ArrowsPointingOutIcon, ArrowsPointingInIcon, ArrowLeftOnRectangleIcon, SpeakerXMarkIcon, SpeakerWaveIcon  } from "@heroicons/react/24/solid";


function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
        animate(
            "ul",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)"
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5
            }
        );
        animate(
            "li",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0
            }
        );
    }, [isOpen, animate]);

    return scope;
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });



export const Navbar = () => {
    const { data: session } = useSession()
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);


    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isMuted, setIsMuted] = useState(false)


    const fullScreen =(e) =>{
        e.preventDefault()

        if(isFullscreen) {
            document.exitFullscreen()
            setIsFullscreen(!isFullscreen)
            setIsOpen(!isOpen)
        }

        else if (document.documentElement.requestFullscreen){
            document.documentElement.requestFullscreen()
            setIsFullscreen(!isFullscreen)
            setIsOpen(!isOpen)
        }


    }

    const handleMute = (e) => {
        e.preventDefault()
        // mute playable media
        setIsMuted(!isMuted)
        setIsOpen(!isOpen)

        //mute all playable media
        const audios = document.querySelectorAll('audio')
        audios.forEach(audio => {
            audio.muted = !audio.muted
        })
    }


    return (
        <>
            <nav className={'fixed right-3 top-1.5 z-50 w-screen flex flex-grow text-sm text-white/90'} ref={scope}>
                <header className={'flex w-full pl-10  justify-between'}>
                    <div className={'flex uppercase pt-3 gap-2.5 h-fit cursor-pointer '}>
                        <div className={''}> blendify </div>
                        <a className={' hover:text-white/40'}> github  </a>

                    </div>
                   <div>
                       <motion.div
                           onClick={() => setIsOpen(!isOpen)}
                           whileTap={{ scale: 0.97 }}
                           className={'flex space-x-3 opacity-90 hover:opacity-80 items-center text-white bg-black/30 cursor-pointer rounded-full p-1 pr-4'}>
                           <img
                               className={'rounded-full w-12 h-12 object-cover'}
                               src={session?.user?.image}
                               alt=""/>
                           <h2> { session?.user?.name }</h2>
                           <div className="arrow w-fit " style={{ transformOrigin: "50% 55%" }}>
                               <svg width="15" height="15" viewBox="0 0 20 20" >
                                   <path className={'fill-white'} d="M0 7 L 20 7 L 10 16" />
                               </svg>
                           </div>
                       </motion.div>
                       <ul
                           style={{
                               pointerEvents: isOpen ? "auto" : "none",
                               clipPath: "inset(10% 50% 90% 50% round 10px)"
                           }}
                           className={'flex flex-col gap-2 bg-black/70 cursor-pointer py-2 my-2  '}
                       >
                           <li className={'block pl-2.5 py-1 hover:text-white/50 flex items-center gap-3 '} onClick={fullScreen}>
                               { !isFullscreen ?
                                   <ArrowsPointingOutIcon className={'w-5 h-5'}/> :
                                   <ArrowsPointingInIcon className={'w-5 h-5'}/> } Enter fullscreen
                           </li>
                           <li className={'block pl-2.5 py-1 hover:text-white/50 flex items-center gap-3'} onClick={handleMute}>
                               { !isMuted ? <SpeakerWaveIcon className={'w-5 h-5'}/> : <SpeakerXMarkIcon className={'w-5 h-5'}/> }
                               { !isMuted ? 'Mute Audio' : 'Unmute Audio' }
                           </li>
                           <li className={'block pl-2.5 py-1 hover:text-white/50 flex items-center gap-3'} onClick={()=> signOut()}>
                               { <ArrowLeftOnRectangleIcon className={'w-5 h-5'}/> }
                               Logout
                           </li>
                       </ul>{" "}
                   </div>
                </header>
            </nav>

        </>
    );

};






