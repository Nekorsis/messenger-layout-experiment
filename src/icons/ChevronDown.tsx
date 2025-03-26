interface IProps {
  color?: string;
  className?: string;
}

const ChevronDown = (props: IProps) => {
  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        opacity="0.7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1993 0.991883L5.75891 5.70267L1.3186 0.991883C1.14938 0.827376 0.874877 0.827376 0.705659 0.991883C0.536165 1.15645 0.536165 1.42314 0.705659 1.58764L5.43067 6.60049C5.52103 6.68823 5.64079 6.72568 5.75891 6.71975C5.87712 6.72568 5.99699 6.68823 6.08725 6.60049L10.8124 1.58764C10.9818 1.42314 10.9818 1.15645 10.8124 0.991883C10.6431 0.827376 10.3687 0.827376 10.1993 0.991883Z"
        fill={props.color || "white"}
      />
    </svg>
  );
};

export default ChevronDown;
