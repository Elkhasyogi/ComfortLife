import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/main.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[20rem]">
      <Image
        src={'/images/logo/logo.png'}
        fill={false}
        width={200}
        height={100}
        className="dark:hidden"
        alt="ComfortLive logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={'/images/logo/logo.png'}
        fill={false}
        width={230}
        height={100}
        className="hidden dark:block"
        alt="ComfortLive logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
