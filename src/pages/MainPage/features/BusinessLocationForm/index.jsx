import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";
import ProgressBar from "@/components/ui/ProgressBar";
import Alert from "@/components/ui/Alert";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import WarningIcon from "@/components/icons/WarningIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import BusinessLocationFormFields from "./BusinessLocationFormFields";

const BusinessLocationForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="pl-14 lg:w-full pt-8 flex flex-col gap-8"
    >
      <div className="gap-3 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex gap-2.5 items-center cursor-pointer">
            <ArrowLeftIcon />
            <span className="text-gray500 leading-tight text-sm font-semibold">
              Back
            </span>
          </div>
          <ProgressBar className="w-32 -translate-x-5" progress={50} />
          <div></div>
        </div>
        <h4 className="leading-tight text-2xl font-semibold">
          Specify the business location
        </h4>
      </div>
      <div className="flex flex-col gap-6">
        <BusinessLocationFormFields />
        <div className="flex items-center gap-2">
          <Checkbox id="shopping-mall" />
          <Label inline htmlFor="shopping-mall">
            My business will be located in a shopping mall
          </Label>
        </div>
        <Alert color="failure">
          <span className="flex items-center gap-1">
            <WarningIcon />
            <span className="text-red800 text-base font-semibold">
              You will not be able to perform activities in the specified area
            </span>
          </span>
          <div className="mt-1.5 text-sm font-normal text-red800">
            Select another location or use map based insights to find the best
            one
          </div>
          <Button className="mt-3 items-center flex" color="failure">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">Map Based Insights</span>
              <ShareIcon />
            </div>
          </Button>
        </Alert>
      </div>
      <Button type="submit" className="bg-primary600 text-sm font-medium">
        Continue with restriction acknowledgement
      </Button>
    </form>
  );
};

export default BusinessLocationForm;
