import { exhibitionInfo } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const Exhibition = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col align-center justify-center items-center'>
                <Image src="/assets/images/index/targhetta-5.webp" width={400} height={100} />
            </div>
            <div className='grid grid-cols-1 sm:grid-rows-2 mb-12'>
                <div className='mx-4 sm:mx-auto'>
                    <h1 className='text-3xl sm:text-6xl '>Lateralmente</h1>
                    <h2>/la·te·ral·mén·te/</h2>
                    <h3>avverbio</h3>
                    <h4>Di lato, di fianco.</h4>
                </div>
                <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
                    <p>“Lateralmente” è frutto di una ricerca che vuole indagare il rapporto
                    fra ciò che esiste dentro e fuori di sé, nel mondo di oggi.
                    Lateralmente suggerisce il disturbo mentale da tabù, quale lo disegna
                    la società attuale e la fetta più ignorante di essa, nell’opposto di
                    questo. Ciò che si prefigge é mostrare come il disturbo sia qualcosa
                    di unico, da cui chiunque non ne soffra possa, anzichè spaventarsi,
                    imparare. A vedere il mondo sotto una luce speciale, libera dalle
                    aspettative sociali. Quelle da cui tutti noi dipendiamo, secondo le sue
                    regole, che si pretende siano le stesse per tutti, come fossimo l’uno/a
                    uguale all’altro/a. Che non riconosce le proprie capacità, ma ancora
                    prima le proprie sofferenze, insicurezze, angoscie. Come quello che ci
                    hanno insegnato a nascondere sin da bambini e di cui spesso non sappiamo
                    cosa farcene: lo lasciamo ben chiuso dentro di noi, lontano dagli altri
                    e dalle loro aspettative e giudizi nei nostri confronti.
                    Qui, il termine lateralmente viene utilizzato in modo diverso rispetto
                    al suo significato originale, come un omaggio alla diversità. Si
                    riferisce ad un pensiero, una visione che viaggiano a fianco a quelli
                    massificati, secondo un lato differente. Qualcuno parla dei “matti”
                    come degli ultimi a lottare per una società giusta ed equa. Non potrebbe
                    esserci definizione più vera e genuina di coloro che soffrono di
                    disturbo mentale, la stessa sulla quale Chiara Bonetti affonda le radici
                    del suo lavoro, ponendosi domande alla ricerca di un significato più
                    profondo.</p>
                </div>
            </div>
            <div className='mt-20'>
                    {exhibitionInfo.map((el, id) => (
                        <div className='grid grid-cols-1 sm:grid-cols-2 my-12 sm:my-16'>
                            <div className='mx-4'>
                                <h2>{el.title}</h2>
                            </div>
                            <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
                                <p>{el.paragraph}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Exhibition