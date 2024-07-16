import PropTypes from "prop-types";
import { cx } from "@/utils/cx";
import { Select as FlowbiteSelect } from "flowbite-react";

const SelectInput = ({ className, ...rest }) => {
  return (
    <FlowbiteSelect
      className={cx("[&_select]:border-gray200 [&_select]:bg-white", className)}
      {...rest}
    />
  );
};

SelectInput.propTypes = {
  className: PropTypes.string,
};

export default SelectInput;
