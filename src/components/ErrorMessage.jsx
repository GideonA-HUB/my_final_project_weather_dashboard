import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="text-2xl">⚠️</div>
        <div className="text-red-100 font-medium">{message}</div>
      </div>
    </div>
  );
};

export default ErrorMessage;
