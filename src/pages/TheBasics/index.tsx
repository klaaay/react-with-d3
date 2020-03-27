import React, { useRef, useEffect } from 'react';

import './index.scss';

const TheBasics = () => {
  const svgRef = useRef();

  return <svg ref={svgRef} className="basic"></svg>;
};

export default TheBasics;
