import Search from "../../icons/Search";
import { cn } from "../../utils/cn";

type IProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const SearchInput = (props: IProps) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={cn(
          "text-[#8D8D8D] text-sm border border-[#00000040] py-2 pl-4 pr-8 rounded-[6px] focus:outline-0",
          props.className
        )}
        placeholder="Search..."
      />
      <Search className="absolute right-3.5 top-0 bottom-0 m-auto" />
    </div>
  );
};

export default SearchInput;
