import React from 'react';
import {getProviders,signIn} from 'next-auth/react'
function signin({providers}) {
    return (
        <div>
               <h1>Sign in Page</h1> 
        </div>
    );
}

export async function getServerSideProps(context) {
    const providers = getProviders()
    return {
        props:{providers}
    }
}
export default signin;