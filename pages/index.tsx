import {signOut, useSession} from "next-auth/react";

export default function Home() {

        const { data: session, status } = useSession()
        console.log(session, status)
      return (
        <main>

            <button onClick={()=> signOut()}> LOG OUT </button>
          {/*<Login />*/}
        </main>
      )
}
