import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import './index.scss';

const TheBasics = () => {
  const [data, setData] = useState([36, 28, 45, 60, 20]);

  const svgRef = useRef();
  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join(
        enter => enter.append('circle'),
        update => update.attr('class', 'updated')
      )
      .attr('r', value => value)
      .attr('cx', value => value * 2)
      .attr('cy', value => value * 2)
      .attr('stroke', 'red');
  }, [data]);

  return (
    <>
      <svg ref={svgRef} className="basic"></svg>
      <br />
      <button
        onClick={() => {
          setData(data.map(value => value + 5));
        }}>
        Update data
      </button>
      <button
        onClick={() => {
          setData(data.filter(value => value < 35));
        }}>
        Filter data
      </button>
    </>
  );
};

export default TheBasics;
