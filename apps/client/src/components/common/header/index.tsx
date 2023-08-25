import Image from "next/image";
import Link from "next/link";
import DarkMode from "./DarkMode";
import { useTheme } from "next-themes";

const LightLogo = "/logo-light.svg"
const DarkLogo = "/logo-dark.svg"

export default function Header() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="js-page-header page-header--transparent z-20 w-full bg-white/[.15] backdrop-blur transition-colors">
      <div className="flex items-center px-3 py-3">

        <Link href="/" passHref legacyBehavior>
          <a>
            <Image
              src={isDark ? LightLogo : DarkLogo}
              height={7}
              width={31}
              alt="Soowys "
            />
          </a>
        </Link>

        <h1>
          <Link href="/" passHref legacyBehavior>
            <a className="ml-2 text-lg font-bold text-white">
              Commit Flow History
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
