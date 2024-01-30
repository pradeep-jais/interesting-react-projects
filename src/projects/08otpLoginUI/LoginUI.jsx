import InputOtp from './InputOtp';
import './styles.css';

import { useState } from 'react';

const LoginUI = () => {
  const [otpPage, setOtpPage] = useState(false);
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    setNumber(value);
  };

  const SendOtp = (e) => {
    // sending otp from backend to the number

    e.preventDefault();
    setOtpPage(true);
  };
  return (
    <section className="login-ui">
      <div className="section-center">
        <div className="login-container">
          {!otpPage ? (
            <form className="form" onSubmit={SendOtp}>
              <h5>Enter your phone number to login</h5>
              <div className="form-field">
                <label htmlFor="phoneNumber" className="form-label">
                  phone number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="your number"
                  className="form-input"
                  value={number}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className=" get-otp-btn btn">
                get otp
              </button>
            </form>
          ) : (
            <InputOtp length={4} number={number} />
          )}
        </div>
      </div>
    </section>
  );
};
export default LoginUI;
