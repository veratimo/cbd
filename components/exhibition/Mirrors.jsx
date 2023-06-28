import Image from 'next/image'
import React from 'react'

const Mirrors = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col align-center justify-center items-center w-full h-100'>
        <Image src="/assets/images/mirrors/mirrors-1.webp" width={500} height={500} className='' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 my-12 pt-12'>
        <div className='mx-4 sm:mx-auto'>
          <h1 className='text-3xl sm:text-6xl'>Mirror/s</h1>
          <h2>Settembre 2022</h2>
          <h3>Mobile da bagno, specchio rotto, psicofarmaci</h3>
          <h4>58 X 55.8 X 23 cm</h4>
        </div>
        <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
          <p>Che sensazione abbiamo quando ci guardiamo allo specchio?
                    Cosa vediamo riflesso?
                    Capita almeno una volta al giorno di vederci riflessi dall’esterno, ma
                    quante volte ci guardiamo dentro?
                    Non sei una sola entità, unica, compatta ed integra come credi. Non sei
                    l’immagine che la società ci impone di mostrare, che gli altri hanno di
                    noi e che pensavamo noi stessi di avere.
                    Sei un insieme di tante piccole parti che creano un’immagine più ampia e
                    complessa di quella che ci rimanda uno specchio.
                    Se la nostra personalità inizia a sgretolarsi in maniera patologica
                    l’unica via percorribile è quella verso il mobile dei medicinali, quello
                    ricolmo di ansiolitici, antidepressivi, antipsicotici e via dicendo,
                    a cui affidiamo la nostra esistenza quando non sappiamo più che cosa
                    farcene.
                    Queste porzioni di noi non meritano di venire considerate singolarmente,
                    noi non meritiamo di sgretolarci. Meritiamo che le nostre parti più forti
                    e stabili possano fare un pò di spazio a quelle più fragili, così da
                    poterle proteggerle. E’ solo se e quando accoglieremo ogni più piccolo
                    angolo dentro di noi che conosceremo autenticamente noi stessi e potremo
                    mostrarci agli altri.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Mirrors