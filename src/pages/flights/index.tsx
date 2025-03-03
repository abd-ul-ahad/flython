"use client";
import Link from "next/link";
import { SearchForm } from "@/components/search-form";

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-5xl">
      <div className="flex items-center gap-2 text-purple-600 mb-4">
        <Link href="/" className="text-lg font-medium">
          Orders
        </Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-lg font-medium">New order</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Create a new order</h1>

      <SearchForm />
    </main>
  );
}
