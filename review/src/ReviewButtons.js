import React from 'react';

const ReviewButtons = ({ onEmailClick }) => {
  const handleTextClick = () => {
    window.location.href = 'sms:?&body=Thanks for leaving a quick review for Lee Blue. Sharing your experience helps us reach and serve our community. Click Here >> https://ThankAndRank.com/DoubleStack';
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handleTextClick} style={{ margin: '10px', padding: '10px 20px' }}>Send By Text</button>
      <button onClick={onEmailClick} style={{ margin: '10px', padding: '10px 20px' }}>Send By Email</button>
    </div>
  );
};

export default ReviewButtons;
