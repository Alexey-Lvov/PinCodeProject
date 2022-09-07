import React from 'react';
import bem from 'utils/bem';
import './style.scss';

const b = bem('header');

function Header() {
  return (
    <div className={b('')}>
      <div className={b('logo')}>
        <span>LOGO</span>
      </div>
    </div>
  );
}

export default Header;
