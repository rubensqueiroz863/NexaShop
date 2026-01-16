"use client";

import { useState } from "react";
import NavBar from "./components/NavBar";
import { Product } from "./types/product";

export default function HomePage() {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  async function find(query: string) {
    setLoading(true)

    console.log(query);

    const res = await fetch(`https://sticky-charil-react-blog-3b39d9e9.koyeb.app/produtos/buscar?name=${query}`)
    const data = await res.json()

    setResults(data)
    setLoading(false)

    console.log(data);
  }

  return (
    <div>
      <NavBar onSearch={find}/>
      <div className="w-full h-px bg-(--hover-border)"></div>
      {loading && <p>Buscando...</p>}

      <ul>
        {results.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
