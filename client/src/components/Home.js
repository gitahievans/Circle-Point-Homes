import React, {useState} from 'react';
import Homepage from '../pages/Homepage';
// import Footer from '../pages/Footer';

function Home({ user }) {

  return (
    <>
        <Homepage user={user}/>
        {/* <Footer /> */}
    </>
  )
}

export default Home