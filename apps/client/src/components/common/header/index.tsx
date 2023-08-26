import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <header className="js-page-header page-header--transparent z-20 w-full bg-white/[.15] backdrop-blur transition-colors">
      <div className="flex items-center px-3 py-3">

        <Link href="/" passHref legacyBehavior>
          <a>
            <Image
              src="logo.svg"
              height={40}
              width={40}
              alt="Commit Flow History"
            />
          </a>
        </Link>

        <h1>
          <Link href="/" passHref legacyBehavior>
            <a className="ml-2 text-lg font-bold">
              Commit History
            </a>
          </Link>
        </h1>

        <div className="ml-auto flex">
          <DarkMode />
        </div>

      </div>
    </header>
  );
}
