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
          <div class="card__image">
            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2hpdGUlMjBwdXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
          </div>
          <div class="card__layer1"></div>
          <div class="card__layer2"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;