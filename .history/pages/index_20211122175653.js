import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import SignIn from './auth/signin'

export default function Home() {
  const {data:session} = useSession()
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {session ?  <Feed/> : '' }
    
    </div>
  )
}
