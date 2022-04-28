import React from 'react'
import { useRouter } from 'next/router';

const Link = ({title, href}) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
      }
  return (
    <p className=" opacity-0 group-hover:opacity-100 tracking-widest"> <a href={href} onClick={handleClick} style={style}>
    {title}
  </a></p>
  )
}

export default Link