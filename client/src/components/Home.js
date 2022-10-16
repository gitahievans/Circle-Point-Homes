import React, {useState} from 'react';
import Homepage from '../pages/Homepage';
import Houses from '../pages/Houses';

function Home({ user, setUser }) {

  return (
    <>
        <Homepage user={user}/>
        <Houses />
    </>
  )
}

export default Home