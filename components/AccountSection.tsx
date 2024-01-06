import type { NextPage } from "next";

const AccountSection: NextPage = () => {
  return (
    <div className="shrink-0 flex flex-row items-center justify-center gap-[12px]">
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0 hidden md:flex"
        alt=""
        src="/notification.svg"
      />
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/notification1.svg"
      />
      <img
        className="rounded-19xl w-9 h-9 object-cover"
        alt=""
        src="/top_avatar@2x.png"
      />
    </div>
  );
};

export default AccountSection;
