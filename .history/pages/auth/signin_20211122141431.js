import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";
function signin({ providers }) {
    console.log(providers)
  return (
    // <>
    //   {Object.values(providers).map((provider) => (
    //     <div key={provider.name}>
    //       <button onClick={() => signIntoProvider(provider.id)}>
    //         Sign in with {provider.name}
    //       </button>
    //     </div>
    //   ))}
    // </>
    <h1>ff</h1>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
export default signin;
