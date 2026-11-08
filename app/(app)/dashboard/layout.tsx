import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - NaijaPay",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
