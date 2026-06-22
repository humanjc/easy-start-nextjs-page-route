import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Other page.</h1>
      <p>이것은 다른 페이지입니다.</p>
      <div>
        <Link href="/">Go Back!!</Link>
      </div>
    </main>
  );
}
