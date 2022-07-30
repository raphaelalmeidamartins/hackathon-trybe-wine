import PropTypes from 'prop-types';
import React from 'react';

function SearchIcon({ width = 56, height = 56, viewBox = 56 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
      <path
        fillRule="evenodd"
        d="M10.184 19.242c-4.937 0-8.955-4.018-8.955-8.955 0-4.938 4.018-8.954 8.955-8.954s8.954 4.016 8.954 8.954c0 4.937-4.017 8.955-8.954 8.955m16.29 6.63l-8.865-8.867c-.019-.019-.042-.027-.063-.042a9.902 9.902 0 002.592-6.676c0-5.488-4.466-9.954-9.954-9.954C4.695.333.23 4.8.23 10.287c0 5.49 4.466 9.955 9.955 9.955 2.57 0 4.908-.987 6.677-2.593.014.021.022.044.041.063l8.865 8.866a.498.498 0 00.707 0 .5.5 0 000-.707"
      />
    </svg>
  );
}

SearchIcon.defaultProps = {
  width: 56,
  height: 56,
  viewBox: 56,
};

SearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.number,
};

export default SearchIcon;
