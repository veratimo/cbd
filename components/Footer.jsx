import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto max-w-7xl py-2 sm:py-6 lg:py-8'>
      <div className="flex flex-col sm:flex-row justify-between align-center py-3 my-4">
        <div className="px-4">
          <Image src="/assets/icons/logo-black.png" alt="" height={100} width={50} />
          <span className="mb-3 font-[14px] sm:font-[16px]">© 2022 Chiara Bonetti</span>
        </div>

        <div className="justify-left sm:justify-content-end">
          <p className="underline">
            <a className="text-black" href="https://instagram.com/cbartdistrict?igshid=YmMyMTA2M2Y=" target="_blank">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer