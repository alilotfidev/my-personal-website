import Image from "next/image";
import Avatar from "@/public/images/Avatar.png";

export default function Profile() {
  return (
    <div className="Profile flex items-center gap-8">
      <Image
        className="rounded-full"
        src={Avatar}
        alt="Ali Lotfi"
        width={82}
        height={82}
        placeholder="blur"
      />
      <div className="profile-info flex flex-col">
        <h1 className="text-2xl font-semibold">Ali Lotfi</h1>
        <h4 className="secondary-text">Front-end Developer</h4>
      </div>
    </div>
  );
}
