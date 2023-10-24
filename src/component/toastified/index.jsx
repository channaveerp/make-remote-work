// ToastifiedAlert.js
import React, { useState, useEffect } from 'react';
import './index.css';

const ToastifiedAlert = ({ message }) => {
    console.log(message);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return visible ? (
    <div className='toastified-alert'>
      <div className='toastified-message'>{message}</div>
    </div>
  ) : null;
};

export default ToastifiedAlert;
