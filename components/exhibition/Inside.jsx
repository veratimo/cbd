import Image from 'next/image'
import React from 'react'

const Inside = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col align-center justify-center items-center w-full h-100'>
        <Image src="/assets/images/cubo/guanti-cubo.webp" width={500} height={500} className='' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 my-12 pt-12'>
        <div className='mx-4 sm:mx-auto'>
          <h1 className='text-3xl sm:text-6xl'>INSIDE the OUTside</h1>
          <h2>ottobre 2021 / luglio 2022</h2>
          <h3>nylon, colle ad acqua</h3>
          <h4>Dimensioni non misurabili</h4>
        </div>
        <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
          <p>Cosa è tanto potente da portarci in un luogo in cui non ci siamo recati
                    volontariamente e dal quale non possiamo evadere?
                    (Ci siamo mai resi conto di come il sogno ci riporti a situazioni
                    e luoghi a noi conosciuti, ma facendoci vivere esperienze
                    decontestualizzate rispetto ai primi?)
                    “INSIDE the OUTside” propone il sogno come canale, mezzo diretto ed
                    unico nella relazione fra diurno e notturno, in un dialogo tra ciò che
                    conosciamo razionalmente e ciò che è inconscio. Lo fa considerando le
                    innumerevoli percezioni che riceviamo durante il giorno, che prende con
                    sè e integra nell’insconscio, nei livelli più profondi della nostra
                    anima. E’ un infinito sistema di canali, ognuno dei quali apre ad un
                    nuovo, più profondo livello della nostra anima.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Inside