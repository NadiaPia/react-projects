import { useEffect } from 'react';

export function useKey(key, action) {
    useEffect(() => {
        function callback(e) {
          if (e.code.toLowerCase() === key.toLowerCase()) {
            action();
          }
        };
    
        document.addEventListener("keydown", callback);
        return function () {
          //to avoid running escape button we need to close event listener on pressing this button:
          document.removeEventListener("keydown", callback);
        };
      }, [action, key]);
}