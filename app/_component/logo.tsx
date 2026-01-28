import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className={"flex items-center justify-between rounded-lg overflow-hidden"}
    >
      <Image
        src={"/logo-sm.PNG"}
        width={200}
        height={200}
        alt="AAD"
        className=" aspect-square h-32 w-auto"
      />
    </Link>
  );
};
