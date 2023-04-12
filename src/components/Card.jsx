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
    <div class="card">
      <div class="card__wrapper">
        <div class="card__3d">
          <div class="card__image relative">
            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwcHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">Current Balance SepoliaETH</div>
            <div className="absolute h-0.5 w-full bg-white top-1/2 transform -translate-y-1/2"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">Staking SepoliaETH</div>
          </div>
          <div class="card__layer1"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;