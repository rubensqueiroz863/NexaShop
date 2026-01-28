"use client";

import { useEffect, useState, useCallback } from "react";
import NavBar from "./components/NavBar";
import { SubCategoryProps } from "./types/subCategory";
import SubCategory from "./components/SubCategory";
import { useRouter } from "next/navigation";
import { useMenu } from "@/lib/menu";
import MenuDrawer from "./components/MenuDrawer";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type PageResponse<T> = {
  data: T[];
  hasMore: boolean;
};

export default function HomePage() {
  const [subCategories, setSubCategories] = useState<SubCategoryProps[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const menu = useMenu();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchSubCategories = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://sticky-charil-react-blog-3b39d9e9.koyeb.app/subcategories?page=${page}&size=6`
      );

      const data: PageResponse<SubCategoryProps> = await res.json();

      setSubCategories(prev => [...prev, ...data.data]);
      setHasMore(data.hasMore);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    fetchSubCategories();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchSubCategories();
    }
  }, [inView, fetchSubCategories]);

  function search(query: string) {
    router.push(`/search/${query}`);
  }

  return (
    <div className="w-full">
      <NavBar onSearch={search} />

      <ul
        className="
          flex
          flex-col
          gap-3
          w-full
          px-2
          py-2
        "
      >
        <AnimatePresence>
          {subCategories.map(subCategory => (
            <SubCategory
              key={subCategory.id}
              id={subCategory.id}
              name={subCategory.name}
              slug={subCategory.slug}
            />
          ))}
        </AnimatePresence>
      </ul>

      {/* 🔽 SENTINELA DO INFINITE SCROLL */}
      {hasMore && (
        <div ref={ref} className="py-4 text-center text-sm text-gray-400">
          {loading ? "Carregando..." : "Carregando mais..."}
        </div>
      )}

      <AnimatePresence>
        {menu.isOpen && <MenuDrawer />}
      </AnimatePresence>
    </div>
  );
}
