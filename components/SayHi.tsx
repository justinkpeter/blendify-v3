import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const GithubIcon = ({link}) => {
    return(
        <>
            <Link
                href={link}
                rel="noopener noreferrer" target="_blank"
                className={'rounded-full rounded-full hover:scale-150 social__icon'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"><path fill="#FFFFFE" fill-rule="evenodd" d="M2.535 15.304c0 5.436 3.572 10.048 8.525 11.675.622.114.851-.267.851-.592 0-.293-.011-1.263-.017-2.29-3.467.744-4.2-1.452-4.2-1.452-.566-1.423-1.383-1.8-1.383-1.8-1.131-.764.085-.749.085-.749 1.252.087 1.91 1.268 1.91 1.268 1.113 1.881 2.917 1.337 3.628 1.023.112-.795.435-1.338.791-1.645-2.768-.311-5.679-1.366-5.679-6.08 0-1.344.487-2.442 1.285-3.303-.13-.31-.556-1.562.12-3.257 0 0 1.047-.33 3.43 1.262.993-.273 2.06-.41 3.12-.414 1.058.004 2.126.141 3.122.414 2.379-1.592 3.424-1.262 3.424-1.262.679 1.695.252 2.946.122 3.257.8.861 1.283 1.959 1.283 3.302 0 4.726-2.916 5.766-5.691 6.071.447.382.845 1.13.845 2.278 0 1.647-.014 2.972-.014 3.377 0 .327.224.711.856.59 4.95-1.629 8.517-6.239 8.517-11.673C27.465 8.508 21.884 3 15 3 8.117 3 2.535 8.508 2.535 15.304z"/></svg>
            </Link>
        </>
    )
}

const TwitterIcon = ({link}) => {
    return(
        <>
            <Link
                href={link}
                rel="noopener noreferrer" target="_blank"
                className={'rounded-full rounded-full hover:scale-150 social__icon'}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"><path fill="#FFF" fill-rule="evenodd" d="M10.733 24.346c8.68 0 13.426-7.19 13.426-13.426 0-.204-.004-.408-.013-.61A9.595 9.595 0 0026.5 7.866a9.41 9.41 0 01-2.71.743A4.735 4.735 0 0025.865 6a9.463 9.463 0 01-2.996 1.146 4.72 4.72 0 00-8.041 4.303A13.398 13.398 0 015.1 6.518a4.706 4.706 0 00-.64 2.372c0 1.637.834 3.082 2.1 3.928a4.684 4.684 0 01-2.137-.59v.06a4.72 4.72 0 003.786 4.625 4.725 4.725 0 01-2.132.081 4.724 4.724 0 004.409 3.278 9.467 9.467 0 01-5.861 2.02c-.38 0-.757-.022-1.126-.066a13.358 13.358 0 007.234 2.12"></path></svg>
            </Link>
        </>
    )
}

const InstagramIcon = ({link}) => {
    return(
        <>
            <Link
                href={link}
                rel="noopener noreferrer" target="_blank"
                className={'rounded-full rounded-full hover:scale-150 social__icon'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"><path fill="#FFF" fill-rule="evenodd" d="M15.001 4h-.003c-2.985 0-3.36.013-4.533.066-1.17.054-1.97.24-2.67.511a5.386 5.386 0 00-1.948 1.269 5.4 5.4 0 00-1.27 1.948c-.272.7-.458 1.5-.51 2.67C4.013 11.637 4 12.013 4 15c0 2.987.013 3.361.067 4.535.053 1.17.239 1.97.51 2.67a5.39 5.39 0 001.27 1.948 5.386 5.386 0 001.947 1.27c.7.272 1.5.457 2.67.51 1.174.054 1.548.067 4.536.067 2.987 0 3.361-.013 4.534-.066 1.171-.054 1.972-.24 2.672-.511a5.382 5.382 0 001.947-1.27 5.4 5.4 0 001.27-1.948c.27-.7.455-1.5.51-2.67C25.986 18.36 26 17.987 26 15s-.014-3.362-.067-4.536c-.055-1.17-.24-1.97-.51-2.67a5.399 5.399 0 00-1.27-1.948 5.376 5.376 0 00-1.948-1.269c-.701-.272-1.501-.457-2.672-.51C18.36 4.012 17.986 4 15 4zm-.367 1.982h.367c2.937 0 3.285.01 4.445.064 1.072.049 1.655.228 2.042.378.514.2.88.438 1.264.823.385.385.624.752.824 1.265.15.387.33.97.378 2.042.053 1.16.065 1.508.065 4.443 0 2.936-.012 3.284-.065 4.444-.049 1.073-.228 1.655-.378 2.042-.2.513-.439.879-.824 1.264-.385.385-.75.623-1.264.822-.387.151-.97.33-2.042.38-1.16.052-1.508.063-4.445.063-2.937 0-3.285-.011-4.445-.064-1.072-.05-1.654-.228-2.042-.379-.514-.2-.88-.438-1.265-.823a3.41 3.41 0 01-.824-1.264c-.15-.387-.33-.97-.378-2.042-.053-1.16-.064-1.508-.064-4.445 0-2.938.01-3.284.064-4.444.049-1.072.228-1.654.378-2.042.2-.513.439-.88.824-1.265a3.414 3.414 0 011.265-.823c.387-.152.97-.33 2.042-.38 1.015-.045 1.408-.06 3.458-.061v.002h.62zm4.919 3.146a1.32 1.32 0 112.64 0 1.32 1.32 0 01-2.64 0zM15 9.351a5.65 5.65 0 100 11.298 5.65 5.65 0 000-11.298zM18.668 15a3.667 3.667 0 10-7.334 0 3.667 3.667 0 007.334 0z"/></svg>
            </Link>
        </>
    )
}

export const SayHi = () => {
    return (
        <>
            <div className={'ml-[25vw] h-screen w-screen  flex items-center relative'}>
                <div className={'w-[45vw] 2xl:w-[25vw] relative ml-24'}>
                    <h1 className={'my-5 font-bold text-white text-[5vw]'}>
                            <span className={'inline-block lg:pr-[5vh] leading-[5rem] 2xl:leading-[8rem] uppercase italic'}>
                                <span> Meet the </span><br/>
                                <span className={'break-normal bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-fuchsia-600'}> creator </span>
                                <br/>
                             </span>
                    </h1>
                    <p className={'font-light text-2xl 2xl:text-4xl text-gray-100 pr-[10vh]'}>
                            <span className={'inline-block leading-[3rem]'}>
                                 You've reached the end of this experience. Shoutout to
                                <span className={'mx-1.5 cursor-pointer'}>
                                    <Link className={'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300'} href={'https://nextjs.org/'} rel="noopener noreferrer" target="_blank">
                                        Next.js,
                                    </Link>
                                </span>
                                <span className={'mx-1.5  cursor-pointer'}>
                                    <Link className={'text-white  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-100 hover:to-blue-600'} href={'https://tailwindcss.com//'} rel="noopener noreferrer" target="_blank">
                                        TailwindCSS,
                                    </Link>
                                </span>
                                and of course,
                                <span className={'mx-1.5 cursor-pointer '}>
                                    <Link className={'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-green-700'} href={'https://developer.spotify.com/'} rel="noopener noreferrer" target="_blank">
                                        Spotify API,
                                    </Link>
                                </span> for making this possible.
                                Made wth love from Texas, USA.
                            </span>
                    </p>
                </div>
                <div className={'bg-green-200  w-[25vw] 2xl:w-[15vw] h-[35vw] 2xl:h-[20vw] rounded-3xl relative '}>
                    <img src={'/assets/img/portrait.webp'} alt={'hi'} className={'absolute w-full h-full object-cover rounded-3xl'}/>
                    <div className={'absolute bottom-16 flex flex-col w-full items-center  gap-4  '}>
                        <div className={'text-4xl text-white font-medium tracking-tight'}> Justin Peter </div>
                        <div className={'flex gap-4'}>
                            <GithubIcon link={'https://github.com/justinkpeter'} />
                            <TwitterIcon link={'https://twitter.com/_justinpeter'}/>
                            <InstagramIcon link={'https://instagram.com/justincrediblemoments'}/>
                        </div>

                    </div>

                    {/*<Image src={'/assets/icons/instagram.svg'} alt={'github'} className={'w-1/2 h-1/2 absolute bottom-0 right-0'} width={36} height={36}/>*/}


                </div>
            </div>
        </>
    );
};