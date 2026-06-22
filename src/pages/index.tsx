import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>This is sample page.</p>
      <div>
        <Link href="/other">Go &quot;Other&quot;.</Link>
      </div>
    </main>
  );
}
