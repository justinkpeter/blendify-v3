import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
export const Genres = ({data}) => {
    return (
        <>
            <div className={'oh flex flex-wrap gap-2 mt-4 w-full'}>
                { data?.map((genre) => {
                    return (
                        <div className="oh__inner genre" key={genre}> {genre} </div>
                    )
                })}
                { data && data.length === 0 && <div className="oh__inner genre">
                    <div className={'relative flex item-center gap-2'}>
                        <div> <ExclamationCircleIcon className={'w-6 h-6 text-white'}/> </div>
                        <div> No genres found  </div>
                    </div>
                </div>}
            </div>



               {/*<div className="oh__inner genre"> alternative r&b </div>*/}
               {/*<div className="oh__inner genre"> indie r&b </div>*/}
               {/*<div className="oh__inner genre"> chill r&b </div>*/}
               {/*<div className="oh__inner genre"> alternative r&b </div>*/}
        </>
    );
};