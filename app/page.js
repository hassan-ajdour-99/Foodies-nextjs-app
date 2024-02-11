import Link from "next/link";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <Link href="/meals"> Meals </Link>
      <Link href="/meals/share"> Meals share </Link>
      <Link href="/meals/meals-1"> Meals 1 Details </Link>
      <Link href="/community"> community </Link>
    </main>
  );
}
