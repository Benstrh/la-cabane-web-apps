import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar absolute bottom-0 flex h-12 w-full items-center justify-center bg-primary-base font-decorative">
      <div className="p-4 text-xs text-gray-700 sm:text-lg">
        <div className="flex gap-x-20">
          <Link href={"/"}>ABOUT </Link>
          <Link href={"/"}>CABINS</Link>
          <Link href={"/"}>CONTACT</Link>
        </div>
      </div>
    </div>
  );
}
