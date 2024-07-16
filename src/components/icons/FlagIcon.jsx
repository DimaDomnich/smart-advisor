import PropTypes from "prop-types";

const FlagIcon = ({ className, stroke }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.16669 11.6666V17.4999M16.6667 2.49991L15.0579 7.32616C15.0205 7.43835 15.0241 7.56016 15.068 7.66997L16.6667 11.6666L13.7682 12.6327C12.4344 13.0774 10.9728 12.9169 9.76716 12.1935C8.35512 11.3463 6.60809 11.2792 5.13523 12.0156L4.16669 12.4999V4.41611C4.16669 3.75246 4.54164 3.14577 5.13523 2.84897V2.84897C6.60809 2.11254 8.35512 2.17964 9.76716 3.02686C10.9728 3.75025 12.4344 3.91069 13.7682 3.46607L16.6667 2.49991Z"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

FlagIcon.propTypes = {
  className: PropTypes.string,
  stroke: PropTypes.string,
};

export default FlagIcon;
