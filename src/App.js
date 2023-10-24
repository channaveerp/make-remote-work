import React, { useState } from 'react';
import ToastifiedAlert from './component/toastified';
import Chat from './component/chat/Chat';

function App() {
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Changed the duration to 3000ms
  };

  return (
    <div>
      <h1 onClick={showToastMessage}>Click to show toast</h1>
      {/* {showToast && <ToastifiedAlert message='message' />} */}
      <Chat />
    </div>
  );
}

export default App;
