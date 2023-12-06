import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { featuredExhibition } from '@/constants/constants';


const Homepage = () => {
  return (
    <div className='container mx-auto py-0 sm:py-6 lg:py-8'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex flex-row items-center justify-center sm:justify-between h-[50vh] sm:h-auto'>
          <div className='flex-col'>
            <h1 className='text-3xl sm:text-5xl'>Chiara Bonetti</h1>
            <h2>Contemporary Artist</h2>
            {/* <h3>avverbio</h3>
            <p className='mt-2'>Di lato, di fianco.</p>
            <p className='mt-6 sm:mt-3 underline'><Link href="/exhibition">Leggi di più</Link></p> */}
          </div>
          <Image 
            src="/assets/images/index/braccio-guanto.webp" 
            alt=""
            width={700}
            height={700}
            className='hidden sm:block max-w-full h-auto'
          />
        </div>
        {/* end of hero and start p Lateralmente */}
        <div className='mx-auto my-9 py-9'>
          <div className="flex items-center h-20 flex-row justify-center py-4 sm:py-8 my-4 sm:my-8">
              <hr style={{width:"50%"}} />
          </div>

          <div className='flex flex-col items-center mx-2 sm:mx-auto my-4 sm:my-8 w-full sm:w-[50vw]'>
              <p className='text-center'>
                  “Lateralmente” è frutto di una ricerca che vuole indagare il rapporto fra ciò che esiste dentro e fuori di sé, nel mondo di oggi.
                  Lateralmente suggerisce il disturbo mentale da tabù, quale lo disegna la società attuale e la fetta più ignorante di essa, nell’opposto di questo.
              </p>
              <Link className="text-black" href="/exhibition">
                        <p className="pt-2 underline">Scopri di più</p>
              </Link>
          </div>

          <div className="flex items-center h-20 flex-row justify-center py-4 sm:py-8 my-4 sm:my-8">
              <hr style={{width:"50%"}} />
          </div>
        </div>
        {/* Start grid gallery */}
        <div className='grid grid-cols-1 place-items-center sm:grid-cols-3'>
            {featuredExhibition.map((featured, id) => (
              <div className='p-4 '>
                <Link href={featured.href}>
                  <Image src={featured.image} key={id} alt='' width={500} height={500}/>
                </Link>             
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage;