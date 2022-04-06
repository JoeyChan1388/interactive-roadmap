// Create a react component for a line on the page.
// This component will be used to create a line between two points.
// The component will take in a start and end point.
// The component will also take in a color, which will be used to color the line.
// The component will also take in a width, which will be used to set the width of the line.
// The component will also take in a className, which will be used to style the line.
// The component will also take in a strokeDasharray, which will be used to set the strokeDasharray of the line.
// The component will also take in a strokeDashoffset, which will be used to set the strokeDashoffset of the line.


import React from 'react'

const Line = ({ start, end, color, width, className, strokeDasharray, strokeDashoffset, style }) => {
  const styleObj = {
    left: `${start.x}%`,
    top: `${start.y}%`,
    width: `${end.x - start.x}%`,
    height: `${end.y - start.y}%`,
    backgroundColor: color,
    borderWidth: width,
    borderStyle: 'solid',
    position: 'absolute',
    zIndex: 0,
    ...style
  }

  return (
    <div
      className={`line ${className}`}
      style={styleObj}
      strokeDasharray={strokeDasharray}
      strokeDashoffset={strokeDashoffset}
    ></div>
  )
}

export default Line