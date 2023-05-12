import styles from "@/styles/Item.module.css";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

export const SectionTitle = ({title, sectionWidth}) => {

    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["0 0", "100% 100%"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [-sectionWidth/8, sectionWidth/5 ])
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(x, physics);

    return (
        <>
            <motion.div className={styles["gallery__text"]} style={{x:spring}} >
                <span className={styles["gallery__text-inner"]} >favorite</span>
                <span className={styles["gallery__text-inner"]}>{ title }</span>
            </motion.div>
        </>
    );
};