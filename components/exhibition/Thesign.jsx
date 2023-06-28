import Image from 'next/image'
import React from 'react'

const Thesign = () => {
  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col align-center justify-center items-center w-full h-100'>
        <Image src="/assets/images/sign/sign-01.webp" width={500} height={500} className='' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 my-12 pt-12'>
        <div className='mx-4 sm:mx-auto'>
          <h1 className='text-3xl sm:text-6xl'>The Sign</h1>
          <h2>Aprile / Settembre 2022</h2>
          <h3>Argento, vetro borosilicato</h3>
          <h4>Misure variabili</h4>
        </div>
        <div className='mt-6 sm:mt-0 mx-4 text-[12px] leading-5 sm:text-[16px]'>
          <p>The Sign racchiude ogni livello precentemente nominato, volendolo
                    racchiudere in un oggetto che funga da simbolo. Simbolo della
                    consapevolezza dell’esistenza del disturbo mentale, di parte delle sue
                    sfaccettature e della sua unicità. Simbolo di comprensione profonda di
                    chi ne è affetto in forma più o meno grave, del fatto che il disturbo
                    non possa limitarsi a spaventare, ma che sia qualcosa di cui poter
                    parlare liberamente al fine di conoscerlo e poterlo accogliere. Con la
                    conoscenza, con più strumenti possibili e con il fine che ad indossarlo
                    sia in primis chi non ne soffre che viceversa, perchè possiamo
                    mescolarci fra noi senza più distinguere qualcuno poichè appartenente
                    a un gruppo e quindi simile a coloro che lo compongono. Bensì poichè
                    simile solo a se stesso/a, per questo unico al mondo seppure parte di
                    una comunità.
                    La lente ci parla del concetto di disturbo mentale: da un lato richiama
                    l’analisi scientifica, essenziale nella ricerca ed analisi del disturbo;
                    dall’altro lato una lente non è altro che un filtro visivo volto
                    a decodificare la realtà circostante, proprio come è un filtro il
                    disturbo stesso. Esso modifica la visione della realtà di chi ne soffre,
                    restituendogli dati, informazioni e sensazioni sfalsati rispetto a
                    quelli che ricevono coloro che non ne sono affetti.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Thesign