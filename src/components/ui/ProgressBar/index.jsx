import { cx } from "@/utils/cx";
import PropTypes from "prop-types";
import { Progress as ProgressFlowbite } from "flowbite-react";

const ProgressBar = ({ className, ...rest }) => {
  return (
    <ProgressFlowbite
      className={cx("[&_div]:text-primary600 [&_div]:h-1.5 h-1.5", className)}
      {...rest}
    />
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
};

export default ProgressBar;
