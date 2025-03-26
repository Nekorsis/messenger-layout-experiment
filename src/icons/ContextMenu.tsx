interface IProps {
  color?: string;
  className?: string;
}

const ContextMenu = (props: IProps) => {
  return (
    <svg
      width="7"
      height="19"
      viewBox="0 0 7 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g opacity="0.3">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.61008 7.875C4.66492 7.875 5.52003 8.70746 5.52003 9.73437C5.52003 10.7613 4.66492 11.5937 3.61008 11.5937C2.55524 11.5937 1.70003 10.7613 1.70003 9.73437C1.70003 8.70746 2.55524 7.875 3.61008 7.875Z"
          fill={props.color || "black"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.61014 1.50001C4.66498 1.50001 5.52009 2.33247 5.52009 3.35938C5.52009 4.38628 4.66498 5.21875 3.61014 5.21875C2.5553 5.21875 1.7001 4.38628 1.7001 3.35938C1.7001 2.33247 2.5553 1.50001 3.61014 1.50001Z"
          fill={props.color || "black"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.61014 14.25C4.66498 14.25 5.52009 15.0825 5.52009 16.1094C5.52009 17.1363 4.66498 17.9687 3.61014 17.9687C2.5553 17.9687 1.7001 17.1363 1.7001 16.1094C1.7001 15.0825 2.5553 14.25 3.61014 14.25Z"
          fill={props.color || "black"}
        />
      </g>
    </svg>
  );
};

export default ContextMenu;
