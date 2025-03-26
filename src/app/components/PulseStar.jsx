"use client";

const PulseStar = () => {

  return (
      <svg
        width="214"
        height="214"
        viewBox="0 0 214 214"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="107" cy="103" r="102.5" stroke="#65E1F1" className="animate-pulseCircle"/>
          <path
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            className="animate-pulseStar"
            d="M106.062 85.5345C106.384 84.6639 107.616 84.6639 107.938 85.5345L112.242 97.1669C112.344 97.4407 112.559 97.6565 112.833 97.7578L124.465 102.062C125.336 102.384 125.336 103.616 124.465 103.938L112.833 108.242C112.559 108.344 112.344 108.559 112.242 108.833L107.938 120.465C107.616 121.336 106.384 121.336 106.062 120.465L101.758 108.833C101.656 108.559 101.441 108.344 101.167 108.242L89.5345 103.938C88.6639 103.616 88.6639 102.384 89.5345 102.062L101.167 97.7578C101.441 97.6565 101.656 97.4407 101.758 97.1669L106.062 85.5345Z"
            fill="#65E1F1"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="214"
            height="214"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
  );
};

export default PulseStar;
