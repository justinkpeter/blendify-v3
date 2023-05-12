import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
    return (
        <>
            <footer className={'fixed bottom-2 pl-2  h-fit flex gap 1.5 items-center text-white/30 text-sm uppercase '}>
                <ChevronUpDownIcon className={'h-5 w-5 '}/> Scroll to navigate
            </footer>
        </>
    );
};