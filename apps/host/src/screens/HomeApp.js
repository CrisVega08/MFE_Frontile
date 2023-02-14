import React, { useEffect, useRef } from 'react';

import { renderLanding } from 'landingRemote/LandingApp'

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    renderLanding(ref.current)
  }, []);

  return <div ref={ref} />
}
