import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveCardinal } from 'd3';
import './index.scss';

const CurvedLineChart = () => {
  const [data, setData] = useState([36, 28, 45, 60, 20]);

  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value: any, index) => index * 50)
      .y((value: any) => 150 - value)
      .curve(curveCardinal);

    svg
      .selectAll('path')
      .data([data])
      .join('path')
      .attr('d', value => myLine(value as any))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
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

export default CurvedLineChart;
