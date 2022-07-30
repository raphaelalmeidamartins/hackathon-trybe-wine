import PropTypes from 'prop-types';
import React from 'react';

function SearchCircleIcon({ width, height, viewBox }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      version="1.1"
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
      <path
        fill="#888"
        fillRule="evenodd"
        d="M28 54C13.664 54 2 42.336 2 28 2 13.663 13.664 2 28 2c14.337 0 26 11.663 26 26 0 14.336-11.663 26-26 26zm0-54C12.561 0 0 12.561 0 28s12.561 28 28 28 28-12.561 28-28S43.439 0 28 0zm-4.046 33.744c-5.398 0-9.79-4.393-9.79-9.79 0-5.399 4.392-9.792 9.79-9.792 5.398 0 9.79 4.393 9.79 9.791 0 5.398-4.392 9.791-9.79 9.791zm9.007-2.198a11.736 11.736 0 002.783-7.593c0-6.502-5.289-11.79-11.79-11.79-6.502 0-11.79 5.288-11.79 11.79 0 6.502 5.288 11.791 11.79 11.791 2.892 0 5.54-1.05 7.593-2.784l9.888 9.89a.997.997 0 001.632-.325 1 1 0 00-.217-1.09z"
        clipRule="evenodd"
      />
      <mask width="56" height="56" x="56" y="56" maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M84 112c15.464 0 28-12.536 28-28S99.464 56 84 56 56 68.536 56 84s12.536 28 28 28z"
        />
      </mask>
      <mask width="56" height="56" x="112" y="0" maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M140 56c15.464 0 28-12.536 28-28S155.464 0 140 0s-28 12.536-28 28 12.536 28 28 28z"
          clipRule="evenodd"
        />
      </mask>
      <defs id="defs80">
        <clipPath id="clip0">
          <path
            id="rect77"
            fill="#fff"
            d="M0 0H47V66H0z"
            transform="translate(120 -1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

SearchCircleIcon.defaultProps = {
  width: 56,
  height: 56,
  viewBox: 56,
};

SearchCircleIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.number,
};

export default SearchCircleIcon;
