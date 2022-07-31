import { useState } from 'react';

export default function useElevation() {
  const [elevation, setElevation] = useState(2);

  const handleMouseOver = () => {
    setElevation(6);
  };

  const handleMouseOut = () => {
    setElevation(2);
  };

  return {
    elevation,
    handleMouseOver,
    handleMouseOut,
  };
}
