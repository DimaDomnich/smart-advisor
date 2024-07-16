import { Checkbox as FlowbiteCheckbox } from "flowbite-react";
import { cx } from "@/utils/cx";
import PropTypes from "prop-types";

const Checkbox = ({ className, ...rest }) => {
  return <FlowbiteCheckbox className={cx("bg-white", className)} {...rest} />;
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
