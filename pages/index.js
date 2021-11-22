import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
   return (
      <div>
         <Head>
            <title>Facebookclone</title>
            <meta name="description" content="facebook clone app" />
         </Head>

         <Header/>

         <main>
            {/* Sidebar */}
            {/* Feed */}
            {/* Widgets */}
         </main>

      </div>
   )
}
