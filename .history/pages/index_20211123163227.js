import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalStom";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import SignIn from "./auth/signin";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Modal />
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {session ? <Feed /> :router.push('/signin') }
    </div>
  );
}
