import { useEffect, useState } from 'react';

const StrengthChecker = ({ length, checkboxData }) => {
  const [strength, setStrength] = useState('');

  useEffect(() => {
    const charTypeCount = checkboxData.reduce((acc, curr) => {
      if (curr.state) {
        acc++;
      }
      return acc;
    }, 0);

    if (length < 5 && charTypeCount === 1) {
      setStrength('very weak');
    } else if (length < 7 && charTypeCount <= 2) {
      setStrength('weak');
    } else if (length < 9 && charTypeCount <= 2) {
      setStrength('good');
    } else if (length <= 9 && charTypeCount <= 3) {
      setStrength('very good');
    } else if (length <= 15 && charTypeCount <= 1) {
      setStrength('good');
    } else if (length <= 15 && charTypeCount <= 3) {
      setStrength('Excellent');
    } else if (length <= 20 && charTypeCount <= 4) {
      setStrength('super strong');
    } else {
      setStrength('');
    }
  }, [length, checkboxData]);
  return (
    <div className="strength">
      <span>strength:</span>
      <span>{strength}</span>
    </div>
  );
};
export default StrengthChecker;
