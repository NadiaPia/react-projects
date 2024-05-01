import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState, key) {
    
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key); 
        //console.log(storedValue) //initially, we don't have a items in LocalStorage => to avoid mapimg througth the null, we need:
        return storedValue ? JSON.parse(storedValue) : initialState;
      });


      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value, key]);

      return [value, setValue]
    
}