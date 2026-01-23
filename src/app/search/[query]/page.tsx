import { SearchProps } from "@/app/types/search";
import SearchClient from "./SearchClient";

export default async function Page({ params }: SearchProps) {
  const { query } = await params;

  return <SearchClient query={query} />;
}
