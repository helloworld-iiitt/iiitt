"use client";

import Fuse from "fuse.js";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import nextConfig from "../../../next.config";

interface SearchItem {
  title: string;
  url: string;
  description?: string;
}

const fuseOptions = {
  keys: ["title", "description"],
  threshold: 0.2,
};

const Header: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [allItems, setAllItems] = useState<SearchItem[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const fuseRef = useRef<Fuse<SearchItem> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/json/navigation/navbar_data.json");
      const json = await res.json();

      const flatItems: SearchItem[] = [];
      json.data.forEach((section: any) => {
        if (section.submenu) {
          section.submenu.forEach((item: any) => {
            flatItems.push({
              title: item.text,
              url: item.link,
              description: section.text,
            });
          });
        } else if (section.link) {
          flatItems.push({
            title: section.text,
            url: section.link,
            description: section.text,
          });
        }
      });

      setAllItems(flatItems);
      fuseRef.current = new Fuse(flatItems, fuseOptions);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFocusedIndex(-1);
  }, [results]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);

    if (q.trim().length > 0 && fuseRef.current) {
      const fuseResults = fuseRef.current.search(q);
      setResults(fuseResults.map((res) => res.item));
    } else {
      setResults([]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < results.length) {
        window.location.href = results[focusedIndex].url;
        setQuery("");
        setResults([]);
      }
    } else if (e.key === "Escape") {
      setResults([]);
    }
  };

  const onClickResult = (url: string) => {
    window.location.href = url;
    setQuery("");
    setResults([]);
    inputRef.current?.blur();
  };

  return (
    <div>
    <div className="hidden sm:block p-6 bg-white shadow-lg relative">
      <center>
        <div className="w-[80%] max-w-[600px] min-w-[200px]">
          <Image
            src={`${nextConfig.env?.IMAGE}/logo-iiit-new.png`}
            alt="IIITT Logo"
            width={1080}
            height={150}
            layout="responsive"
            className="w-full h-auto"
            priority
          />
        </div>
      </center>
      </div>
      <div className="flex flex-wrap content-end justify-end">
        <div className="max-w-[300px]">
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <input
              type="search"
              ref={inputRef}
              value={query}
              onChange={onChange}
              onKeyDown={onKeyDown}
              placeholder="Search the site..."
              aria-label="Search the site"
              aria-autocomplete="list"
              aria-controls="search-results-list"
              aria-activedescendant={
                focusedIndex >= 0 ? `result-item-${focusedIndex}` : undefined
              }
              autoComplete="off"
              style={{display:"flex",justifyContent:"flex-end"}}
            />
          </div>

          {query && (
            <ul
              id="search-results-list"
              role="listbox"
              ref={resultsRef}
              className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-72 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            >
              {results.length === 0 ? (
                <li
                  className="px-4 py-3 text-gray-500 select-none"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  No results found.
                </li>
              ) : (
                results.map((item, idx) => (
                  <li
                    id={`result-item-${idx}`}
                    key={idx}
                    role="option"
                    tabIndex={-1}
                    aria-selected={focusedIndex === idx}
                    className={`cursor-pointer px-4 py-3 transition-colors duration-150 ${
                      focusedIndex === idx
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-100 hover:text-blue-900"
                    }`}
                    onClick={() => onClickResult(item.url)}
                    onMouseEnter={() => setFocusedIndex(idx)}
                  >
                    <span className="font-semibold">{item.title}</span>
                    {item.description && (
                      <p className="text-sm text-gray-400 truncate">{item.description}</p>
                    )}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
