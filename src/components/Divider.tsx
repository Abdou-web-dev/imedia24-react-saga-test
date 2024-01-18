import { FunctionComponent } from "react";

interface DividerProps {
  smallDivider?: boolean; //optional prop
}

const Divider: FunctionComponent<DividerProps> = ({ smallDivider }) => {
  return (
    <div
      className={`flex items-center justify-center my-10 ${
        smallDivider ? "my-1" : ""
      }`}
    >
      <hr
        className={`w-60 border-t border-gray-300 ${
          smallDivider ? "small-d w-32 " : ""
        }`}
      />
    </div>
  );
};

export default Divider;
