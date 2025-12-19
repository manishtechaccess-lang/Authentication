import Image from "next/image";
import Sign from "./Signup/page";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-950">
      <div className="flex items-center justify-center main">
        <div className="">
          <Sign />
        </div>
      </div>
    </div>
  );
}
