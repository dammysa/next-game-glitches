import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className="flex justify-between items-center mb-4 border-2 p-2
      "
    >
      <h1 className="text-2xl font-bold">Game Glitch Central</h1>
      <ul>
        <li>
          <Link href="/" className="text-blue-400 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/posts" className="text-blue-400 hover:underline">
            All Glitches
          </Link>
        </li>
        <li>
          <Link href="/posts/new" className="text-blue-400 hover:underline">
            Submit a Glitch
          </Link>
        </li>
      </ul>
    </nav>
  );
}
