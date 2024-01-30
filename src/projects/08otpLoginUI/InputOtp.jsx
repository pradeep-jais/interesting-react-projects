import { useState } from 'react';
import './styles.css';

const InputOtp = ({ length, number }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  console.log(otp);

  const handleInputChange = (e, index) => {
    console.log(index);
  };

  return (
    <form className="form otp-form">
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
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
};
export default InputOtp;
