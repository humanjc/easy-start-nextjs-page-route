import { ReactNode } from "react";

type LayoutData = {
  title?: string;
};

type LayoutProps = {
  children: ReactNode;
  data?: LayoutData;
};

export default function Layout({ children, data }: LayoutProps) {
  return (
    <>
      <h1 className="header">{data?.title ?? "Next.js"}</h1>
      <main>{children}</main>
      <hr className="footer" />
      <p className="footer">copyright 2023 SYODA-Tuyano.</p>
    </>
  );
}
