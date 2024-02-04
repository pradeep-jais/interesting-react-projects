import { useEffect, useRef, useState } from 'react';
import './styles.css';

const InputOtp = ({ length, number }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const inputRefs = useRef([]);
  // console.log(inputRefs);

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
    // focus to next input after current value is filled
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
    // console.log(index);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Sent otp to backend
    console.log('OTP submitted:', otp.join(''));
    // setOtp(
    //   Array.from({ length }, (_, i) => {
    //     return '';
    //   })
    // );

    setIsOtpSubmitted(true);
  };

  const handleKeyDown = (e, index) => {
    // move focus to prev input on backspace
    if (e.key === 'Backspace' && index != 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional advance ux
    if (index > 0 && otp.indexOf('') + 1) {
      inputRefs.current[otp.indexOf('')].focus();
    }
  };
  useEffect(() => {
    if (otp.join('').length === length) {
      setIsOtpComplete(true);
    } else {
      setIsOtpComplete(false);
    }
  }, [otp]);

  // Default focus on first input field
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

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
              ref={(input) => {
                inputRefs.current[index] = input;
              }}
              value={value}
              onChange={(e) => {
                handleInputChange(e, index);
              }}
              onKeyDown={(e) => {
                handleKeyDown(e, index);
              }}
              onClick={() => {
                handleClick(index);
              }}
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
        {isOtpSubmitted ? 'submitted' : 'submit'}
      </button>
    </form>
  );
};
export default InputOtp;
