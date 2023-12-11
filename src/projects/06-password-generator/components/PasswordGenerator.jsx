import { useState } from 'react';
import { characterData } from '../data/characterData';
import '../styles.css';
import usePasswordGenerator from '../hooks/usePasswordGenerator';
import StrengthChecker from './StrengthChecker';
import Button from './Button';
import Checkbox from './Checkbox';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [checkboxData, setCheckboxData] = useState(characterData);
  const [copied, setCopied] = useState(false);

  // custom hook
  const { error, password, generatePassword } = usePasswordGenerator();

  // inputs handle functions
  const handleLength = (e) => {
    const length = e.target.value;
    setPasswordLength(length);
  };

  const handleCheckboxData = (index) => {
    const checkboxData = [...characterData];
    checkboxData[index].state = !checkboxData[index].state;
    setCheckboxData(checkboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <section className="pwg-app section">
      <div className="section-center">
        {/* project title */}
        <div className="title pwd-app-title">
          <h3>Password generator</h3>
          <div className="underline"></div>
        </div>

        <div className="container">
          {/* password */}
          {password && (
            <header className="password">
              <p className="pwd">{password}</p>
              <Button
                text={copied ? 'copied' : 'copy'}
                onClick={handleCopy}
                customClass={'btn copyBtn'}
              />
            </header>
          )}

          {/* password length */}
          <div className="length">
            <span>
              <label>character length:</label>
              <label>{passwordLength}</label>
            </span>
            <input
              type="range"
              min={4}
              max={20}
              value={passwordLength}
              onChange={handleLength}
            />
          </div>
          {/* checkboxes */}
          <div className="checkboxes">
            {checkboxData.map((checkbox, index) => {
              return (
                <Checkbox
                  key={index}
                  state={checkbox.state}
                  onChange={() => {
                    handleCheckboxData(index);
                  }}
                  title={checkbox.title}
                />
              );
            })}
          </div>
          {/* strength or error*/}
          {error ? (
            <p className="error-msg">Select at least one checkbox</p>
          ) : (
            <StrengthChecker password={password} checkboxData={checkboxData} />
          )}

          {/* generate button */}
          <Button
            text={'generate password'}
            onClick={() => {
              generatePassword(passwordLength, checkboxData);
            }}
            customClass={'btn generateBtn'}
          />
        </div>
      </div>
    </section>
  );
};
export default PasswordGenerator;
