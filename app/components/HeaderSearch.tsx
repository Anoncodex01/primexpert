"use client";

import { useState, useRef, useEffect } from "react";

type Variant = "light" | "dark" | "pill";

export default function HeaderSearch({ variant = "light" }: { variant?: Variant }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const isDark = variant === "dark";
  const isPill = variant === "pill";

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    } else if (!isPill) {
      setIsOpen(false);
    }
  }

  if (isPill) {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex w-full min-w-0 max-w-[200px] items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 focus-within:border-stone-400 focus-within:ring-1 focus-within:ring-stone-200 md:max-w-[220px]"
      >
        <svg className="h-4 w-4 shrink-0 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-0"
          aria-label="Search"
        />
      </form>
    );
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
        className={`h-10 flex-1 min-w-0 border-0 bg-transparent px-0 focus:outline-none focus:ring-0 md:h-11 ${
          isDark ? "text-white placeholder:text-white/60" : "text-stone-800 placeholder:text-stone-500"
        } ${isOpen ? "px-3 opacity-100" : "w-0 overflow-hidden p-0 opacity-0"}`}
        aria-label="Search"
      />
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition md:h-11 md:w-11 ${
          isDark ? "text-amber-400 hover:text-amber-300" : "text-stone-600 hover:text-stone-900"
        }`}
        aria-label={isOpen ? "Close search" : "Open search"}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
