import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/solid'

const Header = () => {

  let isLogged = true;
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title="HOME" Icon={HomeIcon} href="/login" />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} href="/trending"/>
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} href="/about" />
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchIcon} href="/search" />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} href={ isLogged ? "/profil" : "/login"} />
        </div>
    
        <Image 
        className='object-contain' 
        src="https://links.papareact.com/ua6"
         width={200}
          height={100}/>



    </header>
  )
}

export default Header