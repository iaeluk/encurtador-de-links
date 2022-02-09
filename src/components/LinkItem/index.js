import { useState } from 'react'
import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'



export default function LinkItem({ closeModal, content }) {


    const {link, long_url} = content

    async function copyLink () {

        await navigator.clipboard.writeText(link)
        alert('Link Copiado!')
    }

    return (
        <div className="modal-container">
           <div className="modal-header">
            <h2>Link Encurtado</h2>
            <button onClick={closeModal}>
                <FiX size={28} color='#000'/>
            </button>
           </div>

           <span style={{overflow: 'hidden'}}>{long_url}</span>

           <button className="modal-link" onClick={copyLink}>
               {link}
               <FiClipboard size={20} color='#fff'/>
           </button>
          
        </div>
    )
}