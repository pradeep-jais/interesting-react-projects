import { useState } from 'react';

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const generatePassword = (length, checkboxData) => {
    let charset = '',
      password = '';

    checkboxData.forEach((checkbox) => {
      if (checkbox.state) {
        switch (checkbox.title) {
          case 'Include Uppercase Letters':
            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
          case 'Include Lowercase Letters':
            charset += 'abcdefghijklmnopqrstuvwxyz';
            break;
          case 'Include Numbers':
            charset += '1234567890';
            break;
          case 'Include Symbols':
            charset += '~!#$%^&*_+-';
            break;
          default:
            charset = '';
            break;
        }
      }
    });

    // password algorithm
    if (!charset) {
      setError(true);
      setPassword('');
      return;
    }

    for (let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(password);
    setError(false);
  };
  return { error, password, generatePassword };
};
export default usePasswordGenerator;
