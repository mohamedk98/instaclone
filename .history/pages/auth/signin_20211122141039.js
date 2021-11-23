import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";
function signin({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = getProviders();
  return {
    props: { providers },
  };
}
export default signin;
