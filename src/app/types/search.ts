export type SearchPageProps = {
  params: Promise<{
    query: string;
    args: string;
  }>
}

export type SearchProps = {
  query: string;
  args: string;
};