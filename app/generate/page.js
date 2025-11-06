import GenerateClient from "./GenerateClient";

// 👇 This disables static generation & caching
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

export default function Page() {
  return <GenerateClient />;
}
