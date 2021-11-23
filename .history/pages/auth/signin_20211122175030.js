import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />

      <div>
        <img className='w-80' src=''/>
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
