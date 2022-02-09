import { useState } from 'react'
import {FiLink} from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home() {

  const [link, setLink] = useState()
  const [showModal, setShowModal] = useState(false)

  const [data, setData] = useState({})

  async function handleShorLink() {
    try {

      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink('@encurtaLink', response.data)

      setLink('')
      
    } catch (error) {
      alert('Ops, parece que algo deu errado.')
      setLink('')
    }
  }

    return (
      <>
      <Menu />
      <div className="container-home">
        
        <div className="logo">
          <img src="/logo.png" alt="logo"/>
          <h1>MeusLinks</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff"/>
            <input 
            value={link}
            onChange={(e) =>{setLink(e.target.value)}}
            placeholder="Cole seu link aqui..."
            />
          </div>
          <button onClick={handleShorLink}>Encurtar Link</button>
        </div>

      {showModal && (
        <LinkItem content={data} closeModal={() => {setShowModal(false)}}/>
      )}
      </div>
      </>
    )
  }