import { useState, useRef } from 'react'
import './App.css'

function Sarmiento() {
  const imagesData = [
    {
      url: '../src/assets/alan.png'
    },
    {
      url: '../src/assets/almendra.png'
    },
    {
      url: '../src/assets/annieyhallie.png'
    },
    {
      url: '../src/assets/asiaa.png'
    },
    {
      url: '../src/assets/cane.png'
    },
    {
      url: '../src/assets/carozo.png'
    },
    {
      url: '../src/assets/cata.png'
    },
    {
      url: '../src/assets/coli.png'
    },
    {
      url: '../src/assets/cora.png'
    },
    {
      url: '../src/assets/feli.png'
    },
    {
      url: '../src/assets/foster.png'
    },
    {
      url: '../src/assets/freya y odin.png'
    },
    {
      url: '../src/assets/friynoah.png'
    },
    {
      url: '../src/assets/jairo y venecia.png'
    },
    {
      url: '../src/assets/kaiser.png'
    },
    {
      url: '../src/assets/locky.png'
    },
    {
      url: '../src/assets/luna y paton.png'
    },
    {
      url: '../src/assets/mar y cielo.png'
    },
    {
      url: '../src/assets/mikee.png'
    },
    {
      url: '../src/assets/mora.png'
    },
    {
      url: '../src/assets/nanuk.png'
    },
    {
      url: '../src/assets/oliver.png'
    },
    {
      url: '../src/assets/pancho.png'
    },
    {
      url: '../src/assets/perla.png'
    },
    {
      url: '../src/assets/pol.png'
    },
    {
      url: '../src/assets/rocky.png'
    },
    {
      url: '../src/assets/sandroylennon.png'
    },
    {
      url: '../src/assets/thor.png'
    },
    {
      url: '../src/assets/vicky.png'
    },

    {
      url: '../src/assets/alegra.png'
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
    infoRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSarmientoClick = () => {
    setShowSarmiento(true)
    sarmientoRef.current.scrollIntoView({ behavior: 'smooth' })
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
              <img
                src='https://ugc.production.linktr.ee/b7Wc9tTRceWxB9ymlT69_ARbdB8Ak69T85Vtz?io=true&size=avatar-v1_0'
                alt=''
              />
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
