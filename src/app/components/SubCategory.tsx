"use client";

import { useEffect, useState } from "react";
import { SubCategoryProps } from "../types/subCategory";
import { ProductProps } from "../types/product";
import Product from "./Product";

export default function SubCategory({ name, slug }: SubCategoryProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://sticky-charil-react-blog-3b39d9e9.koyeb.app/produtos/subcategoria/${slug}`
        );

        const data: ProductProps[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // 🔹 Enquanto carrega
  if (loading) {
    return (
      <div className="px-10 w-full mt-10">
        <h2 className="text-xl font-bold mb-4">{name}</h2>
        <p className="animate-pulse text-gray-400">Carregando...</p>
      </div>
    );
  }

  // 🔹 Se não tem produtos, não renderiza nada
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="px-10 w-full mt-10">
      <h2 className="text-xl font-bold mb-4">{name}</h2>

      <div className="flex gap-4 overflow-x-auto">
        {products.map(product => (
          <Product
            width="min-w-xs max-w-xs"
            key={product.id}
            query=""
            id={product.id}
            name={product.name}
            price={product.price}
            photo={product.photo}
          />
        ))}
      </div>
    </div>
  );
}
