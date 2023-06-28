import Image from 'next/image'
import React from 'react'

const Thebelly = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col align-center justify-center items-center w-full h-100'>
        <Image src="/assets/images/index/the-belly-ombre.webp" width={500} height={500} className='' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 my-12 pt-12'>
        <div className='mx-4 sm:mx-auto'>
          <h1 className='text-3xl sm:text-6xl'>The Belly</h1>
          <h2>Sistema digestivo emozionale 2.0</h2>
          <h3>Ottobre 2021 / settembre 2022</h3>
          <h4>Vetro borosilicato, bronzo, ottone, argento, legno</h4>
          <h5>127 x 100.5 x 14.5 cm</h5>
        </div>
        <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
          <p>La psicologia della Gestalt concepisce il disturbo mentale come
                    un blocco energetico, che rende impossibile il naturale fluire
                    di informazioni al livello emozionale e, di conseguenza, la loro
                    elaborazione e “digestione”.
                    Essendo il tubo il collegamento fra due o più punti, elementi distanti
                    fra loro, cosa accadrebbe ad esso se al suo interno la sezione, lo
                    spazio si gonfiasse, creando così una bolla? Cosa accadrebbe ai liquidi,
                    ai gas, alla sostenza o informazione che il tubo dovrebbe trasportare da
                    un punto all’altro del sistema?
                    Questo rigonfiamento, questa “bolla” farebbe sì che creasse al suo
                    interno una quantità di sostanze, informazioni, emozioni. Queste
                    ristagnerebbero, impedendo al nostro apparato razionale ed emozionale
                    di comunicare fra loro, creando una disconnessione incolmabile.
                    Questa bolla, questa disconnessione, questo vuoto (pieno) impedisce la
                    digestione di ciò che accade fuori, dentro di noi ed é alla base del
                    disturbo mentale.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Thebelly