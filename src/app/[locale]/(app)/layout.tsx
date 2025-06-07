import { ReactNode } from "react";
import Layout from "@/components/layout";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <Layout.Header />
        <Layout.Sidebar/>
        <Layout.Navbar/>
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>

        <Layout.Footer />
      </body>
  );
}
