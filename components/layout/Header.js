import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo.src} alt="imglogo" width={500} height={500} />
          Foodies
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link className={classes.link} href="/meals">
                Browse Meals
              </Link>
            </li>
            <li>
              <Link className={classes.link} href="/community">
                Browse community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
