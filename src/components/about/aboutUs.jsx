import React from "react";
import casacas from "../../assets/imgs/inicio/casacas.png"
import faldas from "../../assets/imgs/inicio/faldas.png"
import jeans from "../../assets/imgs/inicio/jeans.png"
import shorts from "../../assets/imgs/inicio/shorts.png"


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
            <img src={shorts} alt="about us" style={{height: '180px'}}/>
            <img src={casacas} alt="about us" style={{height: '180px'}}/>
            <img src={jeans} alt="about us" style={{height: '180px'}}/>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default AboutUs;