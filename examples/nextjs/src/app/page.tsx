import { Demo } from "@repo/shared";
import { LandingPage } from "@repo/shared/dist/server";
import type { ReactNode } from "react";
import MyButton from "./button";

export const metadata = {
  title: "Tiptap Extension Mermaid",
};

/** next.js landing page */
export default function Page(): ReactNode {
  return (
    <LandingPage title="Next.js Example">
      <Demo />
      <MyButton />
    </LandingPage>
  );
}
