import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollBar from 'react-smooth-scrollbar';

export default function SmoothScrollBar({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const { scrollBar } = ref.current;
    scrollBar.setPosition(0, 0);
  }, [pathname]);

  return (
    <ScrollBar ref={ref} damping=".09">
      {children}
    </ScrollBar>
  );
}
