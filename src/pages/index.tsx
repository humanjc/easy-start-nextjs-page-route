import Link from "next/link";
import { GetServerSideProps } from "next";

type PageProps = {
  data?: {
    title?: string;
    msg?: string;
  };
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const data = {
    title: "Index page",
    msg: "시작페이지입니다.",
  };
  return { props: { data } };
};

export default function Home({ data }: PageProps) {
  return (
    <main>
      <p>{data?.msg ?? ""}</p>
      <div>
        <Link href="/other">Go &quot;Other&quot;.</Link>
      </div>
    </main>
  );
}
