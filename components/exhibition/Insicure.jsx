import Image from 'next/image'
import React from 'react'

const Insicure = () => {
    return (
        <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col align-center justify-center items-center w-full h-100'>
              <Image src="/assets/images/index/sicure-inst-off-2.webp" width={500} height={500} className='' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 my-12 pt-12'>
              <div className='mx-4 sm:mx-auto'>
                <h1 className='text-3xl sm:text-6xl'>In-sicure stabilità</h1>
                <h2>Gennaio 2022</h2>
                <h3>Ferro, ruota multidirezionale</h3>
                <h4>190.5 x 42 x 10.5 cm</h4>
              </div>
              <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
                <p>Qual’è il rapporto che vige fra una persona affetta da disturbo mentale e
                    le medicine che deve assumere?
                    Cosa accomuna questo con un’asta porta flebo che, anziché avere 3 o 4 ruote
                    alla base, ne ha solo una e per giunta multidirezionale?
                    Perchè un oggetto che nasce per dare stabilità e libertà ad una persona in
                    difficoltà dovrebbe trasformarsi in uno che gliene priva?
                </p>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Insicure