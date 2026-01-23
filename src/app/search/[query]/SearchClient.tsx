"use client";

import { useEffect, useState } from "react";
import { ProductProps } from "@/app/types/product";
import Product from "@/app/components/Product";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/NavBar";

type Props = {
  query: string;
};

export default function SearchClient({ query }: Props) {
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<ProductProps[]>([]);
  
  const router = useRouter();

  useEffect(() => {
    async function findProducts() {
      setLoading(true);
      setSearched(false);

      const res = await fetch(
        `https://sticky-charil-react-blog-3b39d9e9.koyeb.app/produtos/buscar?name=${query}`
      );

      const data = await res.json();

      setResults(data);
      setSearched(true);
      setLoading(false);
    }

    findProducts();
  }, []);

  function search(query: string) {
    router.push(`/search/${query}`)
  }

  return (
    <div>
      <NavBar onSearch={search}/>
      <div className="w-full h-px bg-(--hover-border)"></div>
      {loading && !searched ? (
        <p className="px-2 md:px-4 my-2 md:my-4 text-(--text-main) font-bold">Buscando...</p>
      ) : searched ? (
        <div className="flex my-2 md:my-4 px-2 md:px-4 flex-col">
          <p className="text-xl text-(--text-main) font-bold">{query}</p>
          <p className="text-sm text-(--text-secondary)">{results.length} resultados.</p>
        </div>
      ) : (
        <p></p>
      )}
      <ul
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-4
          px-4
          md:px-4
          overflow-x-auto
        "
      >
        {results.map(product => (
          <Product
            width=""
            key={product.id}
            query={query}
            id={product.id}
            name={product.name}
            price={product.price}
            photo={product.photo}
          />
        ))}
      </ul>
    </div>
  );
}
