import PropTypes from "prop-types";
import { cx } from "@/utils/cx";
import CheckmarkIcon from "../../icons/CheckmarkIcon";
import FlagIcon from "../../icons/FlagIcon";

const Stepper = ({ steps, activeStepIndex, onStepChange }) => {
  if (!steps.length) {
    return null;
  }

  return (
    <ol
      className={cx(
        "flex flex-col lg:flex-row w-full lg:items-center gap-3 lg:gap-0 text-primary700"
      )}
    >
      {steps.map((step, i) => (
        <li
          key={`${step}-${i}`}
          className={cx(
            `after:border-1 flex items-center lg:after:mx-6 after:mx-2 after:hidden after:h-[1px] after:w-full after:min-w-16 after:max-w-16 after:border-b after:border-gray300 lg:after:inline-block lg:after:content-[''] lg:w-full xl:after:mx-6`,
            { "text-gray400": activeStepIndex !== i },
            { "text-primary700": i <= activeStepIndex },
            { "after:!hidden": i === steps.length - 1 }
          )}
          onClick={() => onStepChange(i)}
        >
          <span className="flex gap-1.5 items-center cursor-pointer">
            {i === steps.length - 1 ? (
              <FlagIcon
                stroke={activeStepIndex === i ? "#18908D" : "#ADA8A8"}
                className="w-5 h-5"
              />
            ) : i < activeStepIndex ? (
              <CheckmarkIcon className="w-5 h-5" />
            ) : (
              <span
                className={cx(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-xl border border-gray400 text-xs font-semibold leading-tight",
                  { "border-primary700": i === activeStepIndex }
                )}
              >
                {i + 1}
              </span>
            )}
            <span className="text-sm leading-tight font-medium">{step}</span>
          </span>
        </li>
      ))}
    </ol>
  );
};

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStepIndex: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default Stepper;
