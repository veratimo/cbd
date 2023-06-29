'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const About = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='container mx-auto pb-0 sm:pb-6 lg:pb-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col align-center justify-center items-center w-full h-100'>
          <Image src="/assets/images/index/chiara-cubo.webp" width={600} height={500} className='' />
        </div>
        <div className='grid grid-cols-1 mt-12 pt-12'>
          <div className='mx-4 sm:mx-auto'>
            <h1 className='text-3xl sm:text-5xl'>Chiara Bonetti</h1>
          </div>
          <div className='mt-12 mx-4 text-[12px] leading-6 sm:text-[16px]'>
            <p>Laureata a Firenze in industrial and interior design, Chiara Bonetti ha scelto un percorso decisamente più libero e artistico di quello che aveva prefigurato a vent'anni.
              Dopo un'istruzione tecnica sulla gestione geometrica dello spazio, ha deciso di sfruttare le sue conoscenze per ribaltare la percezione del proprio fondamento, i sensi.

              È proprio attraverso di loro che mostra, della realtà, di cosa è sempre quasi impossibile accorgersi delle sfaccettature.
              Si tratta di ciò che non vediamo, tralasciamo, dimentichiamo perché crediamo che non ci riguardi.
              Questa patina cade a terra come un panno impolverato che ricopre un guardaroba dimenticato nei suoi pezzi, mostrando la loro vera natura. Quella di un essere umano non più in grado di ascoltare, ma solo di giudicare ciò che vede fuori di sé, pensando di conseguenza di conoscerlo pienamente. Una natura fatta di connessioni, nella mente, nel corpo, dentro e fuori di noi.

              Ma cosa succede quando le connessioni alla base della nostra esistenza cessano di esistere?

              Questa è la domanda che più assilla questo giovane artista che, attraverso alcuni archetipi capaci di parlare alla coscienza collettiva, parla del disturbo mentale come di una metafora che parla, invece di qualcosa di strano, diverso, meravigliosamente unico ed essenziale per l'evoluzione personale e sociale, ormai fossilizzato nello standard totale del concetto infondato di 'normalità'.
              Una normalità che ci vuole separati, fuori, incapaci di accogliere noi e gli altri nella nostra unicità.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full border-white border-4 p-8 xs:p-4 rounded-2xl mt-20 pt-20">
          <p className="font-normal text-myParagraph text-[18px] sm:text-[30px] leading-[30.8px]">
            Scrivimi
          </p>
          <form
            action=""
            method="post"
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">Nome</span>
              <input
                required
                type="text"

                placeholder="What's your name?"
                className="outline outline-stone-100 focus:outline-black focus:ring focus:ring-white py-4 px-6 placeholder:text-secondary text-tertiary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">Email</span>
              <input
                required
                type="email"
                name="email"

                placeholder="What's your email?"
                className="outline outline-stone-100 focus:outline-black focus:ring focus:ring-white py-4 px-6 placeholder:text-secondary text-tertiary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-tertiary font-medium mb-4">Messaggio</span>
              <textarea
                required
                rows="7"
                name="message"

                placeholder="What do you want to say?"
                className="outline outline-stone-100 focus:outline-black focus:ring focus:ring-white py-4 px-6 placeholder:text-secondary text-tertiary rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-white focus:outline-none focus:ring focus:ring-white py-3 px-8 outline-none w-fit text-tertiary font-bold shadow-md shadow-secondary rounded-xl"
            >
              {loading ? 'Inviando...' : 'Invia'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default About