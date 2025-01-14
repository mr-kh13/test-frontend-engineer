import { useState, useEffect } from 'react';

interface UseLocalStorageOptions<T> {
  key: string;
  initialValue: T;
}

export function useLocalStorage<T>(
  options: UseLocalStorageOptions<T>
): [T, (value: T) => void, () => void] {
  const { key, initialValue } = options;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error storing data in localStorage:', error);
    }
  }, [storedValue, key]);

  const clear = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from localStorage:', error);
    }
  };

  return [storedValue, setStoredValue, clear];
}
