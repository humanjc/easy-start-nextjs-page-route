import Link from "next/link";
import type { GetStaticProps } from "next";

type PageProps = {
  data: { title: string; msg: string };
};

export default function Other({ data }: PageProps) {
  return (
    <main>
      <h1 className="header">{data.title}</h1>
      <p>{data.msg}</p>
      <div>
        <Link href="/">Go Back!!</Link>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  void params;

  const data = {
    title: "Other page",
    msg: "정적 프로퍼티 예제입니다.",
  };

  return {
    props: {
      data: data,
    },
  };
};
