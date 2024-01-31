import { useEffect, useState } from 'react';
import './styles.css';

const InputOtp = ({ length, number }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [isOtpComplete, setIsOtpComplete] = useState(false);

  console.log(otp);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }
    const newOtp = [...otp];

    if (value) {
      newOtp[index] = value[value.length - 1];
    } else {
      newOtp[index] = '';
    }
    setOtp(newOtp);
    // console.log(index);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Sent otp to backend
    console.log('OTP submitted:', otp.join(''));
  };

  useEffect(() => {
    if (otp.toString().length === length) {
      setIsOtpComplete(true);
    }
  }, [otp]);

  return (
    <form className="form otp-form" onSubmit={handleOtpSubmit}>
      <h5>Login with phone</h5>
      <p>Enter otp sent to {number} number </p>
      <div className="otp-field">
        {otp.map((value, index) => {
          return (
            <input
              type="text"
              key={index}
              className="form-input otp-input"
              value={value}
              onChange={(e) => {
                handleInputChange(e, index);
              }}
              onKeyDown={() => {}}
            />
          );
        })}
      </div>
      <button
        type="submit"
        className="btn"
        disabled={!isOtpComplete}
        style={{ cursor: isOtpComplete || 'not-allowed' }}
      >
        submit
      </button>
    </form>
  );
};
export default InputOtp;
