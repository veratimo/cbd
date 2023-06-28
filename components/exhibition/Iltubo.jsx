import Image from 'next/image'
import React from 'react'

const Iltubo = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col align-center justify-center items-center w-full h-100'>
          <Image src="/assets/images/tubo/tubo-guanto.webp" width={500} height={500} className='' />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 my-12 pt-12'>
          <div className='mx-4 sm:mx-auto'>
            <h1 className='text-3xl sm:text-6xl'>Il tubo</h1>
            <h2>Aprile/luglio 2022</h2>
            <h3>ottone, argento</h3>
            <h4>Misure variabili</h4>
          </div>
          <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
            <p>Tubi sono i nostri capillari, i vasi sanguigni, l’intestino: non sono
              altro che tubi ripiegati su loro stessi.
              I tubi sono nelle nostre case, convogliano l’aria fredda e calda.
              Sono idraulici, del gas. Sono nelle strade, nei palazzi, sopra e
              sotto terra.
              I tubi sono dentro come fuori di noi, determinano e organizzano la
              nostra esistenza in tutto e per tutto.
              Questi tubi tagliati, sezionati, cosa possono volerci dire? La
              preziosità dell’argento presente sulle giunzioni è quella del
              tentativo, speranza di ricongiungere le diverse parti di noi, far
              rivivere collegamenti ormai perduti.
              Al tempo stesso l’importanza della rottura e della divisione stessa
              di queste parti è qualcosa che ci permette di vivere il mondo
              vedendolo da diverse angolazioni, lateralmente. Una volta che ci
              si rompe non si torna mai più davvero come prima. Il coraggio e la
              capacità di accettarlo è estremamente valoroso.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iltubo