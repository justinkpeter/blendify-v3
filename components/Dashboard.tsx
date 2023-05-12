import React, {useRef, useState, useLayoutEffect, useCallback, forwardRef, ReactNode, CSSProperties} from "react";
import ResizeObserver from "resize-observer-polyfill"
import { motion, useTransform, useSpring, useScroll} from "framer-motion"
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import { Preview } from "@/components/Preview";
import { Overlay } from "@/components/Overlay";


const ScrollContainer = ({ children }:any) => {
    return(
        <div className={'fixed w-screen left-0 right-0 will-change-transform bg-zinc-900'}>
            {children}
        </div>
    )
}

const SectionContainer = forwardRef<HTMLDivElement, { style?: CSSProperties; children?: ReactNode }>(({ children, style }, ref) => {
    return(
        <motion.div className={'scroll-container fixed h-screen max-w-fit flex items-center scrollbar-hide '} ref={ref} style={style}>
            {children}
        </motion.div>
    )
})

SectionContainer.displayName = 'SectionContainer';



const Sections = ({ children }:any) => {
    return(
        <div className={'relative w-full flex bg-zinc-900'}>
            {children}
        </div>
    )
}


export const Dashboard = ({children}:any) => {

    const scrollRef = useRef<HTMLDivElement>(null)
    const ghostRef = useRef<HTMLDivElement>(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportWidth, setViewportWidth] = useState(0)

    useLayoutEffect(() => {
        if (!scrollRef || !scrollRef.current) return;
        setScrollRange(scrollRef.current.scrollWidth);
    }, [scrollRef, children]);

    const onResize = useCallback((entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
            setViewportWidth(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        if (ghostRef.current) {
            resizeObserver.observe(ghostRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [onResize]);

    const { scrollYProgress } = useScroll();
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, viewportWidth - scrollRange ]
    );
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);


    return (
        <>
            <ScrollContainer>
                <Navbar/>
                {/* @ts-ignore */}
                <SectionContainer ref={scrollRef} style={{ x:spring }}>
                    <Sections> {children} </Sections>
                </SectionContainer>
                <Footer/>
                <Overlay/>
                <Preview/>

            </ScrollContainer>
            <div ref={ghostRef} style={{ height: scrollRange }} className={'w-screen h-screen'} />

            {/*<Footer/>*/}

        </>
    );
}