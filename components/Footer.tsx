import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
    return (
        <>
            <footer className={'fixed bottom-2 pl-2  h-fit flex gap 1.5 items-center text-white text-sm mix-blend-difference uppercase '}>
                <ChevronUpDownIcon className={'h-8 w-8 '}/> Scroll to navigate
            </footer>
        </>
    );
};