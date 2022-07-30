import React from 'react';
import PropTypes from 'prop-types';

function ProfileFilledIcon({ width, height, viewBox }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      version="1.1"
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
      <mask width="56" height="56" x="56" y="56" maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M84 112c15.464 0 28-12.536 28-28S99.464 56 84 56 56 68.536 56 84s12.536 28 28 28z"
        />
      </mask>
      <mask
        id="mask1"
        width="56"
        height="56"
        x="112"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M140 56c15.464 0 28-12.536 28-28S155.464 0 140 0s-28 12.536-28 28 12.536 28 28 28z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#f6b554"
        fillRule="evenodd"
        d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z"
        clipRule="evenodd"
      />
      <g mask="url(#mask1)" transform="translate(-112)">
        <g clipPath="url(#clip0)">
          <path
            stroke="#404040"
            strokeWidth="0.5"
            d="M147 5c-.207-1.824-3.415-3-7-3s-6.937 1.176-7 3"
          />
          <mask
            id="mask2"
            width="41"
            height="52"
            x="120"
            y="4"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" d="M120 56h40V4h-40z" />
          </mask>
          <g mask="url(#mask2)">
            <path fill="#c2977c" d="M120 56h40V4h-40z" />
            <path
              fill="#eb8930"
              fillRule="evenodd"
              d="M153.093 51.726l-8.655-5.212 11.71-20.563 8.655 5.212z"
              clipRule="evenodd"
            />
            <path
              fill="#5cb79f"
              fillRule="evenodd"
              d="M120 37.899v22.199h3.207l13.514-23.944-11.718-7.119z"
              clipRule="evenodd"
            />
            <path
              fill="#df3378"
              fillRule="evenodd"
              d="M140.58 53.234l11.129 6.643h7.553l1.468-2.556-16.753-10z"
              clipRule="evenodd"
            />
            <path
              fill="#b71277"
              fillRule="evenodd"
              d="M146.569 40.711l-8.348-5.011 2.8-4.902 8.348 5.011z"
              clipRule="evenodd"
            />
            <path
              fill="#f75f75"
              fillRule="evenodd"
              d="M154.085 52.28l19.936 11.673 41.802-4.957-50.042-27.317z"
              clipRule="evenodd"
            />
            <path
              fill="#df3378"
              fillRule="evenodd"
              d="M120 24.767l17.234 10.436 3.774-6.665L120 15.817z"
              clipRule="evenodd"
            />
            <path
              fill="#f75f75"
              fillRule="evenodd"
              d="M120 34.122l.683.42 3.39-6.084L120 25.95z"
              clipRule="evenodd"
            />
            <path
              fill="#f5b554"
              fillRule="evenodd"
              d="M137.613 56.573l-8.395-5.054 8.54-14.994 8.395 5.054z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#222"
            fillRule="evenodd"
            d="M152.966 16.848c-.359.062-.797.173-2.134.173-1.46 0-2.594-.432-2.594-2.53v-2.598c0-2.1 1.135-2.531 2.595-2.531 1.336 0 1.774.11 2.134.172.168.025.225.087.225.26v.79c0 .136-.102.247-.225.247h-2.291c-.652 0-.888.247-.888 1.062v.493h3.044c.124 0 .225.111.225.247v.89c0 .135-.101.246-.225.246h-3.044v.721c0 .815.236 1.062.887 1.062h2.291c.124 0 .225.111.225.247v.79c0 .173-.056.235-.225.26z"
            clipRule="evenodd"
          />
          <path
            fill="#222"
            fillRule="evenodd"
            d="M139.473 10l-1.051 6.786c-.021.124-.107.235-.215.235h-.108c-.097 0-.15-.087-.15-.186v-.05l1.05-6.785c.022-.124.108-.235.215-.235h.108c.097 0 .151.087.151.186z"
            clipRule="evenodd"
          />
          <path
            fill="#222"
            fillRule="evenodd"
            d="M136.805 9.973l-.945 6.057c-.104.77-.44.991-1.041.991h-.625c-.521 0-.798-.269-.96-.979l-.915-3.045c-.023-.11-.023-.134-.069-.134-.046 0-.058.024-.081.134l-.914 3.045c-.162.71-.44.98-.96.98h-.625c-.602 0-.937-.221-1.041-.992l-.969-6.057v-.037c0-.11.092-.171.196-.171h1.227c.092 0 .185.086.196.22l.715 5.372c.011.11.011.183.058.183.046 0 .046-.073.069-.183l.995-3.302c.07-.294.232-.55.729-.55h.799c.497 0 .659.256.729.55l.995 3.302c.023.11.023.183.069.183.046 0 .046-.073.058-.183l.69-5.372c.012-.134.105-.22.197-.22h1.226c.105 0 .197.061.197.171z"
            clipRule="evenodd"
          />
          <path
            fill="#222"
            fillRule="evenodd"
            d="M146.555 9.765h-.137c-.113 0-.192.111-.215.235l-1.028 6.402c-.011.05-.068.1-.08.1l-.004-.002c-.004 0-.006-.002-.009-.003-.033-.007-.045-.04-.054-.083l-1.852-6.265c-.068-.21-.215-.384-.51-.384-.015 0-.03 0-.046.002v-.002l-.022.002v-.002c-.225.026-.484.186-.556.602l-1.045 6.419v.05c0 .098.057.185.159.185h.113c.114 0 .204-.111.227-.235l1.045-6.418c.01-.053.036-.078.057-.084v.002l.011-.003.011.002v.002a.11.11 0 01.091.085l1.852 6.253c.09.309.237.396.519.396H145.091c.28-.003.527-.226.594-.619L146.713 10v-.05c0-.098-.045-.185-.158-.185z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <path fill="#c2977c" d="M8 9h40V4H8z" />
      <defs id="defs332">
        <clipPath id="clip0">
          <path
            id="rect329"
            fill="#fff"
            d="M0 0H47V66H0z"
            transform="translate(120 -1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

ProfileFilledIcon.defaultProps = {
  width: 56,
  height: 56,
  viewBox: 56,
};

ProfileFilledIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.number,
};

export default ProfileFilledIcon;
