export const Preview = () =>{
    return (
        <>
            <div className={'w-screen h-screen relative p-24 bg-stone-900 text-white flex justify-center items-center'}>
                <div className={'w-full h-full bg-stone-800 max-w-screen-2xl relative '}>
                    <div className={'flex w-full h-full relative gap-20'}>
                        <div>
                            <div className={'grow h-[25vw] w-[25vw] max-h-[400px] max-w-[400px] bg-blue-300'}/>
                            <button className={'btn btn-block'}> open in spotify </button>
                        </div>
                        <div className={'relative bg-green-200 w-full '}>
                            <div className={'font-semibold text-[12vh] 2xl:text-[10vh] leading-[110px] uppercase'}> Destin Conrad </div>
                            <div className={'flex flex-wrap space-x-1.5 '}>
                                <span className={'rounded-full bg-gray-500 px-4  py-1 hover:opacity-70'}> alternative r&b </span>
                                <span className={'rounded-full bg-gray-500 px-4  py-1 hover:opacity-70'}> indie r&b </span>
                                <span className={'rounded-full bg-gray-500 px-4  py-1 hover:opacity-70'}> mellow bars </span>
                                <span className={'rounded-full bg-gray-500 px-4  py-1 hover:opacity-70'}> melodic rap </span>
                            </div>
                            <div className="stats shadow">

                                <div className="stat place-items-center">
                                    <div className="stat-title">Downloads</div>
                                    <div className="stat-value">31K</div>
                                    <div className="stat-desc">From January 1st to February 1st</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Users</div>
                                    <div className="stat-value text-secondary">4,200</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">New Registers</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                            {/*<div className={'flex mb-[25px]'}>*/}
                            {/*    <div className={'inline-flex items-center bg-zinc-700/80 mb-[15px] px-6 py-4 mr-2 rounded-2xl overflow-hidden group'}>*/}
                            {/*        <span className={'relative w-[43px]'}>*/}
                            {/*            <span className={'w-[29px] inline-block'}>*/}
                            {/*                <HeartIcon className={'group-hover:text-green-500'}/>*/}
                            {/*            </span>*/}
                            {/*        </span>*/}
                            {/*        <div className={'min-w-[120px]'}>*/}
                            {/*            <h4 className={'text-md font-bold text-zinc-500/70'}>Followers </h4>*/}
                            {/*            <p className={'text-lg font-bold'}> 200,000 </p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className={'inline-flex items-center bg-zinc-700/80 mb-[15px] px-6 py-4 mr-2 rounded-2xl overflow-hidden group'}>*/}
                            {/*        <span className={'relative w-[43px]'}>*/}
                            {/*            <span className={'w-[29px] inline-block'}>*/}
                            {/*                <HeartIcon className={'group-hover:text-green-500'}/>*/}
                            {/*            </span>*/}
                            {/*        </span>*/}
                            {/*        <div className={'min-w-[120px]'}>*/}
                            {/*            <h4 className={'text-md font-bold text-zinc-500/70'}>Followers </h4>*/}
                            {/*            <p className={'text-lg font-bold'}> 200,000 </p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div>
                                <div className={'flex gap-4'}>
                                    <div className={'flex gap-2 items-center'}>
                                        <div className={'w-[20px] h-[20px] bg-green-500 rounded-full'}/>
                                        <div className={'text-sm'}> 1.2k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};