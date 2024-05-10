import React from 'react';

const Collection = () => {
  const pictures = ['https://res.cloudinary.com/wusinho1/image/upload/v1715382595/oferta1_bqasik.jpg',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715382595/oferta2_x6ockf.jpg',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715382596/oferta3_ldkpdx.jpg'];

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
