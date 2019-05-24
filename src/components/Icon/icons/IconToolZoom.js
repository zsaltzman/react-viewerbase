import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
      aria-labelledby="title"
      stroke={color}
      width={width}
      height={height}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <title id="title">{title}</title>
      <path d="m11.5,11.5 4.5,4.5" />
      <circle cx="7" cy="7" r="6" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  title: 'Zoom',
}

export default Icon
