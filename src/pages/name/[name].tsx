import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type PageProps = {
  data: {
    title: string;
    msg: string;
  };
};

type Params = {
  name: "kim" | "lee" | "park";
};

export default function Name({ data }: PageProps) {
  const router = useRouter();
  return (
    <main>
      <h1 className="header">{data.title}</h1>
      <p>name: {router.query.name}</p>
      <p>message: {data.msg}</p>
      <div>
        <Link href="/">Go Back!!</Link>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const path = ["/name/kim", "/name/lee", "/name/park"];
  return {
    paths: path,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const data: Record<Params["name"], PageProps["data"]> = {
    kim: {
      title: "KIM-web",
      msg: "This is Kim's web site.",
    },
    lee: {
      title: "Lee의 방",
      msg: "여기는 Lee의 방입니다.",
    },
    park: {
      title: "Park의 페이지",
      msg: "안녕! Park의 페이지입니다!",
    },
  };

  return {
    props: {
      data: data[params.name],
    },
  };
};
