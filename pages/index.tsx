import { useRef } from "react";
import { LocomotiveScrollProvider, useLocomotiveScroll } from "react-locomotive-scroll";

import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";

export default function Home() {

        // const { data: session, status } = useSession()
        // console.log(session, status)

        const containerRef = useRef(null);

        const { scroll } = useLocomotiveScroll();








      return (
          <>
              <LocomotiveScrollProvider options={{smooth:true, direction:'horizontal', multiplier: 0.8}} containerRef={containerRef}>
                  <Navbar />
                  <main data-scroll-container ref={containerRef} className={'bg-zinc-900 content'}>

                      {/*<button onClick={()=> signOut()}> LOG OUT </button>*/}
                      { scroll }
                      <Stats/>

                  </main>

              </LocomotiveScrollProvider>


          </>


      )
}
