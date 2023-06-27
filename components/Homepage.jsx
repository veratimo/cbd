'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { featuredExhibition } from '@/constants/constants';

const Homepage = () => {
  return (
    <div className='container mx-auto'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex flex-row items-center justify-center sm:justify-between h-[50vh] sm:h-auto'>
          <div className='flex-col'>
            <h1>Lateralmente</h1>
            <h2>/la·te·ral·mén·te/</h2>
            <h3>avverbio</h3>
            <p>Di lato, di fianco.</p>
          </div>
          <Image 
            src="/assets/images/index/braccio-guanto.webp" 
            alt=""
            width={800}
            height={800}
            className='hidden sm:block'
          />
        </div>
        {/* end of hero and start p Lateralmente */}
        <div className='mx-auto my-9 py-9'>
          <div class="flex items-center h-20 flex-row justify-center py-4 sm:py-8 my-4 sm:my-8">
              <hr style={{width:"50%"}} />
          </div>

          <div className='flex flex-col items-center mx-auto my-4 sm:my-8 w-[50vw]'>
              <p className='text-center'>
                  “Lateralmente” è frutto di una ricerca che vuole indagare il rapporto fra ciò che esiste dentro e fuori di sé, nel mondo di oggi.
                  Lateralmente suggerisce il disturbo mentale da tabù, quale lo disegna la società attuale e la fetta più ignorante di essa, nell’opposto di questo.
              </p>
              <Link class="text-black" href="/lateralmente">
                        <p class="pt-2 underline">Leggi di più</p>
              </Link>
          </div>

          <div class="flex items-center h-20 flex-row justify-center py-4 sm:py-8 my-4 sm:my-8">
              <hr style={{width:"50%"}} />
          </div>
        </div>
        {/* Start grid gallery */}
        <div className='grid grid-cols-1 sm:grid-cols-3 content-center items-center'>
            {featuredExhibition.map((featured, id) => (
              <div className='mt-4'>
                <Link href={featured.href}>
                  <Image src={featured.image} alt='' width={300} height={300}/>
                </Link>             
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage;