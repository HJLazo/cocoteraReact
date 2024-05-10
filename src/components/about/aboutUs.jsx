import React from "react";

const AboutUs = () => {
  return (
    <div className="d-flex flex-grow-1">
      <div className="m-5 products">
        <div className="d-flex gap-5">
          <div className="">
            <h2>La Cocotera</h2>
            <p style={{ fontSize: '30px'}}>
              En Brunella, nuestra esencia Peruana se fusiona con la pasión por la moda 
              para ofrecerte prendas confeccionadas en <strong>French Terry</strong>. Cada pieza es diseñada 
              pensando en la mujer moderna que busca combinar
              <strong> comodida y calidad</strong> en su vestuario 
              diario. Nuestra colección refleja no sólo belleza, sino también sensualidad, 
              permitiéndote lucir y sentirte espectacular en cada momento. Únete a la revolución de 
              estilo que <strong>Brunella</strong> trae para ti.
            </p>
          </div>
          <div>
            <img src='https://res.cloudinary.com/wusinho1/image/upload/v1715382595/casacas_uf9u25.png' alt="about us" style={{height: '180px'}}/>
            <img src='https://res.cloudinary.com/wusinho1/image/upload/v1715382596/faldas_jflbph.png' alt="about us" style={{height: '180px'}}/>
            <img src='https://res.cloudinary.com/wusinho1/image/upload/v1715382596/faldas_jflbph.png' alt="about us" style={{height: '180px'}}/>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default AboutUs;