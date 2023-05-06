import {useSession} from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
    const { data: session, status } = useSession()

    // @ts-ignore
    return (
        <>
            <div className={'fixed z-50 flex flex-grow'}>
                <header>
                    <div className={'flex space-x-3 opacity-90 hover:opacity-80 items-center text-white bg-black cursor-pointer rounded-full p-1 pr-2'}>
                        <img
                            className={'rounded-full w-12 h-12'}
                            src={session?.user?.image}
                            alt=""/>
                        <h2> { session?.user?.name }</h2>
                        <ChevronDownIcon className={'w-5 h-5'} />
                    </div>
                </header>
            </div>

        </>
    );
};