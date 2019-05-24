import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 21"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M14 7L13 7 13 5C13 2.2 10.8 0 8 0 5.2 0 3 2.2 3 5L3 7 2 7C0.9 7 0 7.9 0 9L0 19C0 20.1 0.9 21 2 21L14 21C15.1 21 16 20.1 16 19L16 9C16 7.9 15.1 7 14 7L14 7ZM11.1 7L4.9 7 4.9 5C4.9 3.3 6.3 1.9 8 1.9 9.7 1.9 11.1 3.3 11.1 5L11.1 7 11.1 7Z" />
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
  title: 'Status Lock',
}

export default Icon
