import React, { useEffect } from 'react';

function ImagePopup({ url, alt, handleClick }) {

  useEffect(() => {
    let popup = document.querySelector('.dialog')
    let popupImage = document.querySelector('.dialog-box')
    popupImage.classList.add('active')
    popup.classList.add('active')
  })

  return (
    <dialog className="dialog" open onClick={() => handleClick()}>

      <div className="dialog-box">
        <img 
          className='dialog-img'
          src={url} 
          alt={alt}
          onClick={() => handleClick()}
        />
      </div>

    </dialog>
  )
}

export default ImagePopup