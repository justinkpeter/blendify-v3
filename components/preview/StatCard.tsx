import React from "react";

export const StatCard = ({title, value, Icon}: {title:string, value:any, Icon:any}) => {
    return (
        <>
            <div className={'inline-flex items-center bg-black/30 mb-4 px-6 py-4 mr-2 rounded-2xl overflow-hidden group gap-3'}>
                <span className={'relative w-10'}>
                    <span className={'w-7 inline-block'}>
                     { Icon && <Icon className={'w-8 h-8 group-hover:text-green-500'}/> }
                    </span>
                </span>
                <div className={'min-w-32'}>
                    <h4 className={'text-md font-bold text-white/60'}> {title} </h4>
                    <span className={'text-lg font-black'}> {value} </span>
                </div>
            </div>
        </>
    );
};