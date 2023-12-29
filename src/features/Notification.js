// Notification.js
import React, { useEffect } from 'react';

export const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0', backgroundColor: '#e0e0e0' }}>
      {message}
    </div>
  );
};
