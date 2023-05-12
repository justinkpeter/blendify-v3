import useSpotify from "@/utils/useSpotify";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {SectionTitle} from "@/components/stats/SectionTitle";

const GenreBar = ({percentage, color, name}) => {
    return (
        <>
            <div className={'relative w-[10vh] h-full text-xl top-[5vh]'}>
                {/* genre bar*/}
                <div className={'relative h-4/5 overflow-hidden bg-gray-700 rounded-lg'}>
                    <span className={'h-[7.8vh] flex justify-center items-center transition text-gray-400 font-bold'}> {percentage}% </span>
                    {/*  genre bar level*/}
                    <div style={{height: `${percentage}%`}} className={`absolute right-0 bottom-0 left-0 rounded-lg ${color} origin-bottom`}/>
                </div>
                <h3 className={'absolute my-2 overflow-hidden capitalize text-center font-bold -left-[3vh] -right-[3vh] text-white '}>
                    {name}
                </h3>
            </div>
        </>
    );
}

export const FavoriteGenres = () => {
    const spotifyApi = useSpotify()
    const {data: session} = useSession()
    const [topArtists, setTopArtists] = useState([])
    const [sectionWidth, setSectionWidth] = useState(0)
    const shortTermTopGenres = []
    const genreFrequency = {}
    const [topGenres, setTopGenres] = useState([])

    useEffect(() => {
        if(spotifyApi.getAccessToken()) {
            spotifyApi.getMyTopArtists({limit: 50, time_range:'short_term'}).then((data) => {
                setTopArtists(data.body.items)
                // iterate through each artist and extract their genres
                data.body.items.forEach((artist) => {
                    artist.genres.forEach((genre) => {
                        shortTermTopGenres.push(genre)
                    })
                })
                // count the frequency of each genre
                shortTermTopGenres.forEach((genre) => {
                    if(genreFrequency[genre]) {
                        genreFrequency[genre] += 1
                    } else {
                        genreFrequency[genre] = 1
                    }
                })

                // convert object to array of key-value pairs
                const genreFrequencyArray = Object.entries(genreFrequency)
                // sort the array in descending order by values
                const sortedGenres = genreFrequencyArray.sort((a, b) => b[1] - a[1]).slice(0, 5)
                // convert the array of key-value pairs back to an object
                const sortedGenresObject = Object.fromEntries(sortedGenres)
                // calculate sum value of all the values in the new object
                const sum = Object.values(sortedGenresObject).reduce((a, b) => a + b, 0)
                // calculate the percentage of each genre
                Object.keys(sortedGenresObject).forEach((key) => {
                    sortedGenresObject[key] = Math.round(sortedGenresObject[key]/sum * 100)
                })

                // iterate through each genre and create an object with the genre name and percentage, then store it in an array
                const topGenresArray = []
                Object.keys(sortedGenresObject).forEach((key) => {
                    topGenresArray.push({name: key, percentage: sortedGenresObject[key]})
                })
                setTopGenres(topGenresArray)

            })
        }
    }, [session, spotifyApi])


    return (
        <>

            <div className={'flex w-screen h-screen  flex justify-center p-24 ml-[10vw]'}>
                <div className={'h-full w-fit flex items-center relative'}>
                    <div className={'w-[40vw] leading-6 mx-24'}>
                        <h1 className={'my-5 font-bold text-[5vw] text-white'}>
                            <span className={'inline-block lg:pr-[4vh] leading-[5rem] 2xl:leading-[8rem] uppercase italic'}>
                                <span className={'break-normal bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600'}> {topGenres[0]?.name} </span><br/>
                                <span> goes hard </span>
                                <br/>
                             </span>
                        </h1>
                        <p className={'font-light text-2xl 2xl:text-4xl text-gray-100 pr-[10vh]'}>
                            <span className={'inline-block leading-loose'}>
                                Looks like you're a huge {topGenres[0]?.name} fan! This genre appears in
                                <span className={'font-medium bg-clip-text text-transparent bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500 mx-1.5 '}>
                                    {topGenres[0]?.percentage}%
                                </span>
                                of your top 50 artists you've listened to in the last 4 weeks. <br/>
                            </span>
                        </p>
                    </div>
                </div>

                <div className={'w-full h-full  flex gap-16 2xl:gap-36 relative'}>
                    <GenreBar percentage={topGenres[0]?.percentage} color={'bg-gradient-to-t from-amber-500 to-red-500'} name={topGenres[0]?.name}/>
                    <GenreBar percentage={topGenres[1]?.percentage} color={'bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500'} name={topGenres[1]?.name}/>
                    <GenreBar percentage={topGenres[2]?.percentage} color={'bg-gradient-to-t from-blue-700  to-blue-200'} name={topGenres[2]?.name}/>
                    <GenreBar percentage={topGenres[3]?.percentage} color={'bg-gradient-to-t from-teal-400 to-lime-200'} name={topGenres[3]?.name}/>
                    <GenreBar percentage={topGenres[4]?.percentage} color={'bg-gradient-to-t from-rose-400 to-rose-500'} name={topGenres[4]?.name}/>

                </div>

            </div>
        </>
    );
};