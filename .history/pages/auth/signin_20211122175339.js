import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />

      <div className='flex flex-col justify-center  items-center min-h-screen py-2  px-14 text-center'>
        <img className='w-80' src='https://links.papareact.com/ocw'/>
        <p className='font-xs italic'>
        Instaclone app for trying next.js , react.js next-auth , tailwindcss and redux
          </p>
      <div className='mt-40'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id)}
              className="p-3 bg-blue-500 rounded-lg text-white"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      </div>


    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
