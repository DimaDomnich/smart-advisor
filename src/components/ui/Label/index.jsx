import { Label as FlowbiteLabel } from "flowbite-react";
import { cx } from "@/utils/cx";
import PropTypes from "prop-types";

const Label = ({ children, className, inline, ...rest }) => {
  return (
    <FlowbiteLabel
      className={cx(
        {
          "text-sm font-medium": !inline,
          "leading-none text-sm font-normal": inline,
        },
        className
      )}
      {...rest}
    >
      {children}
    </FlowbiteLabel>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

export default Label;
