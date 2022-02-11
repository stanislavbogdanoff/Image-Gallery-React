import React, { useState } from 'react';
import ImagePopup from './ImagePopup';

function Gallery({ images }) {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState()

  const handleClick = (index) => {
    setSelectedImage(index)
    setIsOpen(!isOpen)
  }

  return (

    
    <section className="gallery">

      <h1>Image Gallery with React</h1>

      <div className="gallery-box">

        {images.map((image, index) => {
          return (
            <div className="image-box" key={index}>
              <img 
                className='image'
                src={image.url} 
                alt={image.alt} 
                onClick={() => handleClick(index)}
              />
            </div>
          )
        })}

      </div>

      {isOpen && (

        <ImagePopup 
          url={images[selectedImage].url} 
          alt={images[selectedImage].alt}
          handleClick={handleClick}
        />

      )}

    </section>

  )
}

export default Gallery;