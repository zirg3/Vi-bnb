'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType,
  label: string;
  selected?: boolean;
  query: string,
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  query,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  
  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    
    const updatedQuery: any = {
      ...currentQuery,
      category: query
    }

    if (params?.get('category') === query) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });
    
    router.push(url);
  }, [router, params, query]);

  return ( 
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-[#6be1c4]' : 'border-transparent'}
        ${selected ? 'text-[#6be1c4]' : 'text-neutral-500'}
      `}
    >
      <Icon size={26} color={selected ? '#6be1c4' : 'gray'} />
      <div className="font-medium text-sm">
        {label}
      </div>
    </div>
  );
}

export default CategoryBox;