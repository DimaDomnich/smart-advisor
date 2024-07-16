import { Alert as FlowbiteAlert } from "flowbite-react";
import { cx } from "@/utils/cx";
import PropTypes from "prop-types";

const Alert = ({ className, children, ...rest }) => {
  return (
    <FlowbiteAlert className={cx("rounded-md p-4", className)} {...rest}>
      {children}
    </FlowbiteAlert>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Alert;
