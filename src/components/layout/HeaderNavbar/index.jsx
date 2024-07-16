import AccountInfo from "./AccountInfo";
import Button from "@/components/ui/Button";
import Stepper from "@/components/ui/Stepper";
import { useState } from "react";

const HeaderNavbar = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  return (
    <nav className="p-6 pl-14 gap-3 flex justify-between border-b border-gray200">
      <div className="flex justify-center items-center">
        <Stepper
          steps={["Basics", "Activities", "Premise", "Results"]}
          activeStepIndex={activeStepIndex}
          onStepChange={setActiveStepIndex}
        />
      </div>
      <div className="flex items-start">
        <div className="flex gap-8 items-center">
          <AccountInfo />
          <Button outline color="light" className="border-gray200">
            Leave
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
