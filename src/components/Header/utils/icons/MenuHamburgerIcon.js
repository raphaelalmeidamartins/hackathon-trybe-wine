import React from 'react';
import PropTypes from 'prop-types';

function MenuHambugerIcon({ width, height, viewBox }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
      <path
        fill="#1D1D1B"
        fillRule="evenodd"
        d="M19.894 17H1.104C.494 17 0 16.553 0 16.001V15c0-.553.494-1 1.104-1h18.79c.61 0 1.106.447 1.106 1v1.001c0 .552-.496.999-1.106.999m0-7H1.104C.494 10 0 9.552 0 8.999V8c0-.552.494-1 1.104-1h18.79C20.504 7 21 7.448 21 8v.999C21 9.552 20.504 10 19.894 10m0-7H1.104C.494 3 0 2.551 0 2V1c0-.552.494-1 1.104-1h18.79C20.504 0 21 .448 21 1v1c0 .551-.496 1-1.106 1"
      />
    </svg>
  );
}

MenuHambugerIcon.defaultProps = {
  width: 56,
  height: 56,
  viewBox: 56,
};

MenuHambugerIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.number,
};

export default MenuHambugerIcon;
