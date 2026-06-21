import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground — Tanmay Mathur",
  description:
    "A collection of experiments, curiosities, and happy accidents. Things I built because they were too fun — or too interesting — to leave unbuilt.",
  openGraph: {
    title: "Playground — Tanmay Mathur",
    description:
      "Experiments, curiosities, and happy accidents from an engineer who genuinely enjoys building things.",
    type: "website",
  },
};

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
