"use client";

import { useState, useRef, useEffect } from "react";

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    } else {
      setIsOpen(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center overflow-hidden rounded-full transition-[width] duration-200 ${
        isOpen ? "w-44 md:w-56" : "w-10 md:w-11"
      }`}
    >
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={() => !query.trim() && setIsOpen(false)}
        placeholder="Search..."
        className={`h-10 flex-1 min-w-0 border-0 bg-transparent px-0 text-stone-800 placeholder:text-stone-500 focus:outline-none focus:ring-0 md:h-11 ${
          isOpen ? "px-3 opacity-100" : "w-0 overflow-hidden p-0 opacity-0"
        }`}
        aria-label="Search"
      />
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-stone-600 transition hover:text-stone-900 md:h-11 md:w-11"
        aria-label={isOpen ? "Close search" : "Open search"}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
