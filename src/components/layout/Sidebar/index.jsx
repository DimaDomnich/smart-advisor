import { cx } from "@/utils/cx";
import Logo from "@/assets/logo.png";
import NoiseBg from "@/assets/noise-bg.jpeg";
import BlocksBg from "@/assets/blocks-bg.png";

const Sidebar = () => {
  return (
    <aside
      className={cx(
        `max-w-[250px] bg-black relative flex flex-col justify-between`
      )}
    >
      <div className="p-6 gap-7 flex flex-col z-10 relative">
        <img src={Logo} className="max-h-10 w-[94px]" />
        <div className="flex flex-col gap-0.5 text-white">
          <h3 className="text-2xl font-semibold">Smart Advisor</h3>
          <span className="text-sm font-normal text-moon400">
            Commercial licensing: <br /> starting, modifying or closing business
          </span>
        </div>
      </div>
      <img
        src={NoiseBg}
        className="absolute top-0 left-0 w-full h-full opacity-[0.16] z-10 pointer-events-none"
      />
      <div className="relative">
        <img src={BlocksBg} className="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-white/0"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
