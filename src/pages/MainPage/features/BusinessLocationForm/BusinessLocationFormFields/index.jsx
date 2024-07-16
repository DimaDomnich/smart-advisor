import Label from "@/components/ui/Label";
import TextInput from "@/components/ui/TextInput";
import SelectInput from "@/components/ui/SelectInput";

const BusinessLocationFormFields = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label value="Amana" />
        </div>
        <SelectInput>
          <option>Riyadh</option>
          <option>Jassim</option>
        </SelectInput>
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Municipality" />
        </div>
        <SelectInput>
          <option>Great Municipality</option>
          <option>The Greatest Municipality</option>
        </SelectInput>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col basis-full">
          <div className="mb-2 block">
            <Label value="District" />
          </div>
          <TextInput placeholder="Enter District" />
          <span className="mt-2 leading-tight text-sm font-normal text-gray500">
            Optional
          </span>
        </div>
        <div className="flex flex-col basis-full">
          <div className="mb-2 block">
            <Label value="Street" />
          </div>
          <TextInput placeholder="Enter street" />
          <span className="mt-2 leading-tight text-sm font-normal text-gray500">
            Optional
          </span>
        </div>
      </div>
    </div>
  );
};

BusinessLocationFormFields.propTypes = {};

export default BusinessLocationFormFields;
