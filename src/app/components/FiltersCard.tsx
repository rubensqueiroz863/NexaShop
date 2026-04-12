import Link from "next/link";
import { ProductProps } from "../types/product";
import CategoriesCard from "./CategoriesCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FiltersCardProps = {
  query: string;
  decodedQuery: string;
  results: ProductProps[];
}

export default function FiltersCard({ query, decodedQuery, results }: FiltersCardProps ) {
  const [priceMin, setPriceMin] = useState("0");
  const [priceMax, setPriceMax] = useState("100");

  const router = useRouter();

    const handlePrice = () => {
    const min = Number(priceMin);
    const max = Number(priceMax);

    // valida se são números válidos
    if (isNaN(min) || isNaN(max)) return;

    // evita valores negativos
    if (min < 0 || max < 0) return;

    // evita min maior que max
    if (min > max) return;

    // evita vazio
    if (!priceMin || !priceMax) return;

    router.push(`/search/${min}to${max}/${query}`);
  };

  return (
    <div className="w-full max-w-xs flex flex-col gap-6">

      {/* Header */}
      <div className="px-3">
        <h1 className="text-lg font-semibold text-[var(--text-dark)]">
          {decodedQuery || "Busca"}
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          {results.length === 0
            ? "0 resultados"
            : `${results.length} ${results.length !== 1 ? "resultados" : "resultado"}`
          }
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Categories */}
      <div className="px-3">
        <h2 className="text-sm font-semibold text-[var(--text-dark)] mb-3 uppercase tracking-wide">
          Categorias
        </h2>
        <div className="rounded-xl border border-gray-200 p-3 hover:shadow-sm transition">
          <CategoriesCard simple={true} />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Price */}
      <div className="px-3">
        <h2 className="text-sm font-semibold text-[var(--text-dark)] mb-3 uppercase tracking-wide">
          Preço
        </h2>

        <div className="flex flex-col gap-2 text-(--text-muted) text-sm">

          <button
            onClick={() => router.push(`/search/upto60/${query}`)}
            className="text-left cs hover:opacity-70 px-2 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Up to $60
          </button>

          <button
            onClick={() => router.push(`/search/65to150/${query}`)}
            className="text-left cs hover:opacity-70 px-2 py-1 rounded-md hover:bg-gray-100 transition"
          >
            $65 - $150
          </button>

          <button
            onClick={() => router.push(`/search/over150/${query}`)}
            className="text-left cs hover:opacity-70 px-2 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Over $150
          </button>

          {/* Custom range */}
          <form className="mt-3" onSubmit={handlePrice}>
            <div className="flex items-center gap-2">
              <input
                placeholder="min"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                className="w-full min-w-14 py-1 border rounded-md text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
                type="text"
              />

              <span className="text-sm text-black">to</span>

              <input
                placeholder="max"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                className="w-full min-w-14 py-1 border rounded-md text-center focus:outline-none focus:ring-1 focus:ring-gray-300"
                type="text"
              />
              <button type="submit" className="border text-(--primary-color) opacity-90 hover:opacity-50 cs rounded-full">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}