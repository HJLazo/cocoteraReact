import React from 'react';
import photo1 from '../../assets/imgs/inicio/oferta1.jpeg';
import photo2 from '../../assets/imgs/inicio/oferta2.jpeg';
import photo3 from '../../assets/imgs/inicio/oferta3.jpeg';

const Collection = () => {
  const pictures = [photo2, photo1, photo3];

  return (
    <div className='d-flex justify-content-between my-5 px-3'>
      {pictures.map((picture, index) => {
        return (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img src={picture} className="card-img-top" alt="Collection item" />
          </div>
        );
      })}
    </div>
  );
}

export default Collection;
