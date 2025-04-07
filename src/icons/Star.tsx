interface IProps {
  color?: string;
  className?: string;
}

const Star = (props: IProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={props.color || "none"}
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0585 9.99215L12.9613 15.375L8.23154 12.8325L3.50179 15.375L4.40452 9.99215L0.591553 6.19155L5.86229 5.40875L8.23154 0.500061L10.6009 5.40875L15.8715 6.19155L12.0585 9.99215ZM10.0087 6.22554L8.23154 2.50468L6.43852 6.22554L2.30751 6.74864L5.36137 9.78337L4.68432 13.69L8.23154 11.7539L11.734 13.7046L11.1016 9.79797L14.1257 6.7941L10.0087 6.22554Z"
        fill={props.color || "black"}
      />
    </svg>
  );
};

export default Star;
