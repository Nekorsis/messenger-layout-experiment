import { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

type TFontSizes = "20" | "14" | "12";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  fontSize: TFontSizes;
  className?: string;
  bold?: boolean;
}

const StyledText = (props: PropsWithChildren<IProps>) => {
  const { fontSize, bold, className, ...defaultTextProps } = props;

  const getClassName = () => {
    let size = "text-sm";
    let fontFamily = "font-[LatoRegular]";

    switch (fontSize) {
      case "12":
        size = "text-xs";
        break;
      case "14":
        size = "text-sm";
        break;
      case "20":
        size = "text-xl";
        break;
      default:
        break;
    }

    switch (bold) {
      case true:
        fontFamily = "font-[LatoBold]";
        break;
      default:
        break;
    }

    return cn(size, fontFamily, className);
  };

  return (
    <p className={getClassName()} {...defaultTextProps}>
      {props.children}
    </p>
  );
};

export default StyledText;
