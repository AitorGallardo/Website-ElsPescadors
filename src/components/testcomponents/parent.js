import React, { Fragment, useEffect, useRef, useState } from 'react';
import Sticky from './child';

const Parent = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    console.log('top', ref.current.getBoundingClientRect().top);
    console.log('bottom', ref.current.getBoundingClientRect().bottom);
    console.log('window-height', window.innerHeight);
    
    if (ref.current) {
      setSticky(Math.abs(ref.current.getBoundingClientRect().top) >= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Sticky />
      </div>
    </Fragment>
  );
};

export default Parent