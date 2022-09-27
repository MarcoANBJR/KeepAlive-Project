import { useEffect, useState } from "react";

// interface ReturnDate {
//     time: string;
//     date: string;
//     wish: string;
// }

export const useDate = () => {
    const locale = 'pt-br';
    const [today, setDate] = useState(new Date());
  
    useEffect(() => {
        const timer = setInterval(
            () => {setDate(new Date()) 
        }, 60 * 1000);
      return () => {
        clearInterval(timer); 
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const year = today.getFullYear().toString()
    const date = `${day}, ${today.getDate()} de ${today.toLocaleDateString(locale, { month: 'long' })} de ${year}`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });
  
    return {
      date,
      time,
      wish,
    };
  };