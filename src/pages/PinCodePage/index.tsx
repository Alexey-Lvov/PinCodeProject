import React, { useEffect, useState } from 'react';
import { sha256 } from 'js-sha256';
import { useNavigate } from 'react-router-dom';

import bem from 'utils/bem';
import Header from 'components/Header';
import './style.scss';

const b = bem('pin-code-page');

const PIN_CODE_ARRAY = [
  {
    number: '1',
    text: '',
  },
  {
    number: '2',
    text: 'ABC',
  }, {
    number: '3',
    text: 'DEF',
  },
  {
    number: '4',
    text: 'GHI',
  },
  {
    number: '5',
    text: 'JKL',
  },
  {
    number: '6',
    text: 'MNO',
  },
  {
    number: '7',
    text: 'PQRS',
  },
  {
    number: '8',
    text: 'TUV',
  }, {
    number: '9',
    text: 'WXYZ',
  },
  { number: '' },
  { number: '0' },
  { number: '<-' },
];
const ARRAY_INPUT = ['', '', '', '', '', ''];

function PinCodePage() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const onSubmit = () => {
    const localPinCode = localStorage.getItem('pinCode');

    if (!localPinCode) {
      localStorage.setItem('pinCode', sha256(inputValue));
      sessionStorage.setItem('pinCode', sha256(inputValue));
      navigate('/');
      return;
    }
    if (localPinCode === sha256(inputValue)) {
      sessionStorage.setItem('pinCode', sha256(inputValue));
      navigate('/');
      return;
    }
    sessionStorage.clear();
    setIsError(true);
    setInputValue('');
  };

  useEffect(() => {
    if (inputValue.length === 6) {
      onSubmit();
    }
  }, [inputValue]);

  const clickButton = (value:string) => {
    if ((inputValue + value).length <= 6 || value === '<-') {
      if (value === '<-') {
        setInputValue(inputValue.slice(0, inputValue.length - 1));
        return;
      }
      if (isError) {
        setIsError(false);
      }
      setInputValue(inputValue + value);
    }
  };

  return (
    <div className={b('')}>
      <Header />
      <div className={b('content')}>
        <div className={b('pin-code-block')}>
          <div className={b('title')}>Enter Passcode</div>
          <div className={b('input-block')}>
            {ARRAY_INPUT.map((item, index) => (
              <div className={b('input-item', { fill: inputValue.length > index })} />
            ))}
          </div>
          <div className={b('error-block')}>
            {isError ? 'No valide code!' : ''}
          </div>
          <div className={b('buttons-block')}>
            {PIN_CODE_ARRAY.map((item) => (
              <button
                className={b('item-btn', { 'no-visible': !item.number })}
                type="button"
                onClick={() => clickButton(item.number)}
              >
                <span className={b('item-btn-number')}>{item.number}</span>
                <span className={b('item-btn-text')}>{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PinCodePage;
