import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  checkin: string;
  checkout: string;
  grouped_adults: string;
  grouped_children: string;
  no_rooms: string;
};

async function SearchPage({ searchParams }: Props) {
  console.log(searchParams);
  if (!searchParams.url) return notFound();
  const results = await fetchResults(searchParams);

  if (!results) return <div>No Results...</div>;

  console.log(results);
  return <div>SearchPage</div>;
}

export default SearchPage;
