import Image from 'next/image'
import React from 'react'

const Ilcubo = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col align-center justify-center items-center w-full h-100'>
        <Image src="/assets/images/cubo/guanti-cubo.webp" width={500} height={500} className='' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 my-12 pt-12'>
        <div className='mx-4 sm:mx-auto'>
          <h1 className='text-3xl sm:text-6xl'>Il cubo</h1>
          <h2>Giugno 2021 / luglio 2022</h2>
          <h3>Rame, argento</h3>
          <h4>Misure variabili</h4>
        </div>
        <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
          <p>Siamo portati ad accostare ad ogni cosa un’unica immagine archetipa.
                    Cosa accade se questa inizia ad avere una sfumatura lievamente diversa,
                    anzichè come nuova, forse più interessante, versione della stessa?
                    Questi sistemi di parallelepipedi non sono altro che insiemi di altri
                    tubi, con una sezione diversa da quella che accostiamo normalmente
                    all’idea di tubo.
                    Non è che ciò che chiamiamo disturbo mentale in realtà non usi il
                    medesimo principio?
                    Il cubo è un omaggio a sistemi di collegamenti esterni al corpo
                    umano, altresì essenziali per la sua esistenza. Intere strutture di
                    collegamenti, tubazioni, canali, tutti soggetti ad intemperie e lasciate
                    sole in condizioni a loro avverse e per un tempo prolungato.
                    La nostra pelle è ciò che divide il dentro di noi da ciò che esiste
                    al di fuori. Proteggendo noi, essa, non è capace di proteggere sé
                    stessa mostrandosi così, inevitabilmente, in tutta la sua sofferenza e
                    vulnerabilità; le stesse ad aver scalfito e ricoperto la pelle di questi
                    pezzi, reduci di una vita difficile. Il fatto di essere sopravvissute
                    le rende lucenti e preziose in alcuni angoli di loro, dove la lucentezza
                    dell’argento prevale sull’ossido del rame.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ilcubo