import { useEffect, useState } from 'react';
import axios from 'axios';

export default function (url) {
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.get(url);
        if (data.response_code === 1) {
          throw new Error(
            'Questions not available for your selected category.'
          );
        }
        setQuestions(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(error.message);
      }
    };
    getQuestions();
  }, []);

  return { questions, isLoading, error };
}
