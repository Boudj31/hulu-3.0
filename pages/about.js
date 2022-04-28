import React from 'react'
import Header from './../components/Navigation/Header';
import { useRouter } from 'next/router';

const About = () => {
    const router = useRouter();
  return (
    <div>
        <Header />
        about page 
        <button
      type="button"
        onClick={() => {
             router.push({
             pathname: '/post/[pid]',
             query: { pid: 5 },
        })
      }}
    >Voir le post 5</button>
    </div>
  )
}

export default About