import {Dashboard} from "@/components/Dashboard";
import { Stats } from "@/components/stats/Stats";
import { FavoriteArtists } from "@/components/stats/FavoriteArtists";
import { FavoriteTracks } from "@/components/stats/FavoriteTracks";
import {FavoriteGenres} from "@/components/stats/FavoriteGenres";
import {SayHi} from "@/components/SayHi";

export default function Home() {



      return (
          <>
              <Dashboard>
                  <Stats>
                      <FavoriteArtists/>
                      <FavoriteTracks/>
                      <FavoriteGenres/>
                      <SayHi/>
                  </Stats>
              </Dashboard>
          </>
      )
}
