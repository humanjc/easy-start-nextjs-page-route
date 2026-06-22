import Link from "next/link";
import { useRouter } from "next/router";

export default function Name() {
  const router = useRouter();
  return (
    <main>
      <h1>Name page.</h1>
      <p>
        Your name: <b>&quot;{router.query.name}&quot;</b>.
      </p>
      <div>
        <Link href="/">Go Back!!</Link>
      </div>
    </main>
  );
}
