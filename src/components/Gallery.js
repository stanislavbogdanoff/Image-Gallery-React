import React, { useState } from 'react'

function Gallery({ images }) {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleClick = (index) => {
    setSelectedImage(index)
    setIsOpen(!isOpen)
  }

  return (

    <>
      <h1>Image Gallery with React</h1>

      <section className="gallery">

        {images.map((image, index) => {
          return (
            <>

              <div className="image-box" key={index}>

                <img 
                  className='image'
                  src={image.url} 
                  alt={image.alt} 
                  onClick={() => handleClick(index)}
                />

              </div>

              {(isOpen && index === selectedImage) && (
                <dialog className="dialog" open onClick={() => handleClick(null)}>
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    onClick={() => handleClick(null)}
                  />
                </dialog>
              )}

            </>
          )
        })}

      </section>
    </>

  )
}

export default Gallery;