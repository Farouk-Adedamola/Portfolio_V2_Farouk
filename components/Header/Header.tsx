"use client"
// import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeBtn from '@/components/ThemeBtn'
import Text from '@/components/Text/Text'

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }

  return (
    <header className="flex flex-col w-full">
      <div className='!h-3 bg-gradient-to-tr from-btn-secondary via-btn to-primary"' >
      </div>

      <div className=" px-4 py-6 flex container mx-auto justify-between items-center">
        <Link href="/" className="text-xl font-bold md:hidden">
          <Image src="" alt="image" width={24} height={24} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-green-600 dark:text-white">
          <Link href="/" className="hover:text-primary-content font-briston">
            <Text font='sf-medium' className='-tracking-wide text-3xl text-black dark:text-primary' weight='semibold'  >Home</Text>
          </Link>
          <Link href="/about" className="hover:text-primary-content">
            <Text font='sf-regular' className=' -tracking-wide text-3xl' weight='semibold'  >Blog</Text>
          </Link>
          <Link href="/projects" className="hover:text-primary-content">
            <Text font='sf-regular' className=' -tracking-wide text-3xl' weight='semibold' >Projects</Text>
          </Link>
          <Link href="/contact" className="hover:text-primary-content">
            <Text font='sf-regular' className=' -tracking-wide text-3xl' weight='semibold'  >About</Text>
          </Link>
          <Link href="/contact" className="hover:text-primary-content">
            <Text font='product-sans' className=' -tracking-wide text-3xl' weight='semibold'  >Contact</Text>
          </Link>
        </nav>

  
      <ThemeBtn/>
      </div>

      {/* Mobile Menu */}
      {/* <div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-700 px-4 py-2">
          <Link href="/" className="block py-2 hover:text-gray-300">Home</Link>
          <Link href="/about" className="block py-2 hover:text-gray-300">About</Link>
          <Link href="/contact" className="block py-2 hover:text-gray-300">Contact</Link>
        </nav>
      )}
      </div> */}
    </header>
  )
}

export default Header