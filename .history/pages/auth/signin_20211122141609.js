import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";
function signIn(props) {
    console.log(props.providers)
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

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
export default signIn;
