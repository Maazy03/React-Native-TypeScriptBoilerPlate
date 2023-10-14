import {useEffect, useState} from 'react';

const debounce = (props: {value?: string; delay?: number}) => {
  const {value, delay = 1000} = props;
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>('');

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeOutId);
  }, [value, delay]);

  return debouncedValue;
};

export default debounce;
