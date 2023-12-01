import { useState, useRef } from 'react'
import './App.css'
import alan from '../src/assets/alan.png'
import almendra from '../src/assets/almendra.png'
import annieyhallie from '../src/assets/annieyhallie.png'
import asiaa from '../src/assets/asiaa.png'
import cane from '../src/assets/cane.png'
import carozo from '../src/assets/carozo.png'
import cata from '../src/assets/cata.png'
import coli from '../src/assets/coli.png'
import cora from '../src/assets/cora.png'
import feli from '../src/assets/feli.png'
import foster from '../src/assets/foster.png'
import freyayodin from '../src/assets/freyayodin.png'
import friynoah from '../src/assets/freyayodin.png'
import jairoyvenecia from '../src/assets/jairoyvenecia.png'
import kaiser from '../src/assets/kaiser.png'
import locky from '../src/assets/locky.png'
import lunaypaton from '../src/assets/lunaypaton.png'
import marycielo from '../src/assets/marycielo.png'
import mikee from '../src/assets/mikee.png'
import mora from '../src/assets/mora.png'
import nanuk from '../src/assets/nanuk.png'
import oliver from '../src/assets/oliver.png'
import pancho from '../src/assets/pancho.png'
import perla from '../src/assets/perla.png'
import pol from '../src/assets/pol.png'
import rocky from '../src/assets/rocky.png'
import sandroylennon from '../src/assets/sandroylennon.png'
import thor from '../src/assets/thor.png'
import vicky from '../src/assets/vicky.png'
import alegra from '../src/assets/alegra.png'

function Sarmiento() {
  const imagesData = [
    {
      url: alan
    },
    {
      url: almendra
    },
    {
      url: annieyhallie
    },
    {
      url: asiaa
    },
    {
      url: cane
    },
    {
      url: carozo
    },
    {
      url: cata
    },
    {
      url: coli
    },
    {
      url: cora
    },
    {
      url: feli
    },
    {
      url: foster
    },
    {
      url: freyayodin
    },
    {
      url: friynoah
    },
    {
      url: jairoyvenecia
    },
    {
      url: kaiser
    },
    {
      url: locky
    },
    {
      url: lunaypaton
    },
    {
      url: marycielo
    },
    {
      url: mikee
    },
    {
      url: mora
    },
    {
      url: nanuk
    },
    {
      url: oliver
    },
    {
      url: pancho
    },
    {
      url: perla
    },
    {
      url: pol
    },
    {
      url: rocky
    },
    {
      url: sandroylennon
    },
    {
      url: thor
    },
    {
      url: vicky
    },

    {
      url: alegra
    }
  ]
  return (
    <div className='containerImg'>
      {imagesData.map((image, index) => (
        <img key={index} src={image.url} />
      ))}
    </div>
  )
}

function App() {
  const [showInfo, setShowInfo] = useState(false)
  const [showSarmiento, setShowSarmiento] = useState(false)
  const infoRef = useRef(null)
  const sarmientoRef = useRef(null)

  const handleInfoClick = () => {
    setShowInfo(true)
    infoRef.current.scrollIntoView({ behavior: smooth })
  }

  const handleSarmientoClick = () => {
    setShowSarmiento(true)
    sarmientoRef.current.scrollIntoView({ behavior: smooth })
  }

  return (
    <div className='container'>
      <div className='main'>
        <div className='navBar'>
          <h1>Protectora Sarmiento</h1>
        </div>
        <div className='containerButtons'>
          <div>
            <button className='button' onClick={handleInfoClick}>
              ¿Cómo ayudar?
            </button>
          </div>
          <div>
            <button className='button' onClick={handleSarmientoClick}>
              Nuestros Sarmientos
            </button>
          </div>
          <div>
            <a href='https://www.instagram.com/protectorasarmiento_oficial/'>
              <img src='https://ugc.production.linktr.ee/b7Wc9tTRceWxB9ymlT69_ARbdB8Ak69T85Vtz?io=true&size=avatar-v1_0' />
            </a>
          </div>
        </div>
      </div>
      {showInfo && (
        <div className='containerInfo' ref={infoRef}>
          <div className='datosCont'>
            <ul>
              <li>
                Se voluntario: Podes venir a ayudarnos con las tareas del
                refugio los sábados, domingos y feriados
              </li>
              <li>Juntando bolsas vacías de OldPrince</li>
              <li>Donando alimentos, articulos de limpieza o medicamentos</li>
              <li>
                <a href='https://linktr.ee/protectorasarmiento'>
                  Realizando donaciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showSarmiento && (
        <div className='infoSarmientos' ref={sarmientoRef}>
          <Sarmiento />
        </div>
      )}
    </div>
  )
}

export default App
