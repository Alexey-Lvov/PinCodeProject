import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import bem from 'utils/bem';
import Header from 'components/Header';
import './style.scss';

const b = bem('main-page');

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const pinCode = sessionStorage.getItem('pinCode');
    if (!pinCode) {
      navigate('/pin-code');
    }
  }, []);

  return (
    <div className={b('')}>
      <Header />
      <div className={b('content')}>
        It is Main Page
      </div>
    </div>
  );
}

export default MainPage;
