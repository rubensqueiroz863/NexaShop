"use client";

import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { SubCategoryProps } from "./types/subCategory";
import SubCategory from "./components/SubCategory";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [subCategories, setSubCategories] = useState<SubCategoryProps[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://sticky-charil-react-blog-3b39d9e9.koyeb.app/subcategories");
        const data = await res.json();
        setSubCategories(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // 👈 IMPORTANTE

  function search(query: string) {
    router.push(`/search/${query}`)
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
          overflow-x-auto
          px-2
          py-2
          scrollbar-thin
        "
      >
        {subCategories.map(subCategory => (
          <SubCategory
            key={subCategory.id}
            id={subCategory.id}
            name={subCategory.name}
            slug={subCategory.slug}
          />
        ))}
      </ul>
    </div>

  );
}
