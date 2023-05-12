import React, {useEffect} from "react";

export const AudioFeature = ({feature, value, Icon}) => {

    useEffect(() =>{
        console.log('feature', value)
    }, [value])

    return (
        <>
            <div className={'relative inline-flex items-center bg-black/30 mb-4 py-6 pr-3 mr-2 rounded-2xl overflow-hidden group w-56'}>
                <span className={'relative w-10 ml-4'}>
                    <span className={'w-7 inline-block'}>
                         <Icon className={'text-green-400'}/>
                    </span>
                </span>
                <div className={'min-w-28 max-w-full mb-2'}>
                    <h4 className={'text-md font-bold text-white/60'}> { feature } </h4>
                    { feature.toLowerCase()  === 'danceability' && <div className={'text-xl font-semibold'}> { Number(value * 100).toFixed(1) } </div> }
                    { feature.toLowerCase()  === 'energy' && <div className={'text-xl font-semibold'}> { Number(value * 100).toFixed(1) } </div> }
                    { feature.toLowerCase()  === 'loudness' && <div className={'text-xl font-semibold'}> { Number(value).toFixed(2) } <span className={'text-sm'}>db</span></div> }
                    { feature.toLowerCase()  === 'speechiness' && <div className={'text-xl font-semibold'}> { Number(value * 100).toFixed(1) } </div> }
                    { feature.toLowerCase()  === 'tempo' && <div className={'text-xl font-semibold'}> { Number(value).toFixed(0) } <span className={'text-sm'}>bpm</span></div> }
                    { feature.toLowerCase()  === 'valence' && <div className={'text-xl font-semibold'}> { Number(value * 100).toFixed(1) } </div> }
                </div>
                <div className={'absolute bottom-0 left-0 w-full h-1.5 bg-green-800/30'}>
                    <div className={`relative h-full bg-green-400`} style={{width:`${value * 100}%`}}/>
                </div>
            </div>
        </>
    );
}