import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Index page.</h1>
      <p>This is sample page.</p>
      <div>
        <Link href="/other">Go &quot;Other&quot;.</Link>
      </div>
    </main>
  );
}
