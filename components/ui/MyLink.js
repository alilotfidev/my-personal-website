import Image from "next/image";
import Link from "next/link";

export default function MyLink({ href, children }) {
  return (
    <Link className="items-center" href={href}>
      <div className="inline hover:underline">{children}</div>
      <Image
        className="ml-1 inline"
        src="/images/arrow-link.svg"
        alt="arrow"
        width={14}
        height={14}
      />
    </Link>
  );
}
