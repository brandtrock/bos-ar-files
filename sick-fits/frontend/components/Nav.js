import Link from "next/link"; // Use HTML5 Push-State

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
    <Link href="/">
      <a>Home!</a>
    </Link>
  </div>
);

export default Nav;
