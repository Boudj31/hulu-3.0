import React from 'react'
import { useRouter } from 'next/router';

const HeaderItem = ({title, Icon, href}) => {
  const router = useRouter();

  const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
  return (
    <div className='group flex flex-col items-center 
    cursor-pointer w-12 sm:w-20 hover:text-white' onClick={handleClick}>
        <Icon  className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
        <a href={href}>
              {title}
    </a>
        </p>

    </div>
  )
}

export default HeaderItem