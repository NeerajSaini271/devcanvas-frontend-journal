import Image from "next/image";
import Link from "next/link";

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="brand" aria-label="DevCanvas home">
      <Image
        className="brand-logo-image"
        src="/devcanvas-mark.svg"
        alt=""
        width={44}
        height={44}
        priority
      />
      {!compact && <span>DevCanvas</span>}
    </Link>
  );
}
