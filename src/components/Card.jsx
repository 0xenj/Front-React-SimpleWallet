import React, { useEffect } from 'react';

const Card = () => {
  useEffect(() => {
    const el = document.querySelector('.card');
    const wrap = document.querySelector('.card__wrapper');
    let w = el.clientWidth;
    let h = el.clientHeight;
    let b = el.getBoundingClientRect();

    const handleMouseMove = (e) => {
      let X = (e.clientX - b.left) / w;
      let Y = (e.clientY - b.top) / h;

      let rX = -(X - 0.5) * 26;
      let rY = (Y - 0.5) * 26;

      let bgX = 40 + 20 * X;
      let bgY = 40 + 20 * Y;

      console.log(X, Y);
      document.documentElement.style.setProperty('--x', 100 * X + '%');
      document.documentElement.style.setProperty('--y', 100 * Y + '%');

      document.documentElement.style.setProperty('--bg-x', bgX + '%');
      document.documentElement.style.setProperty('--bg-y', bgY + '%');

      document.documentElement.style.setProperty('--r-x', rX + 'deg');
      document.documentElement.style.setProperty('--r-y', rY + 'deg');
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__3d">
          <div className="card__image relative">
            <img src="https://img.freepik.com/free-photo/white-concrete-textures_74190-6994.jpg?size=626&ext=jpg&ga=GA1.1.1238656915.1681375468&semt=ais" alt="" />
            <h1 className='text-2xl justify-center absolute -translate-y-52 translate-x-16 text-black font-bold'>Balance</h1>
            <span className='text-xl justify-center absolute -translate-y-40 left-1/2 transform -translate-x-1/2 text-black font-bold'>00</span>
            <div className="absolute h-0.5 w-full bg-white top-24 transform -translate-y-1/2"></div>
            <h1 className='text-xl justify-center absolute -translate-y-28 translate-x-10 text-black font-bold'>Staking Balance</h1>
            <span className='text-xl justify-center absolute -translate-y-20 left-1/2 transform -translate-x-1/2 text-black font-bold'>00000000</span>
          </div>
          <div className="card__layer1"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;