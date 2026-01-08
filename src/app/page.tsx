"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">日本雑貨店<br />Next.js ボイラープレート</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            モバイルファーストの極致体験<br />
            和風デザイン・消費税対応・主要決済アイコン完備<br />
            Shopify Headless 専用スターターキット
          </p>
          <div className="flex gap-4 justify-center mb-20">
            <Button size="lg" asChild>
              <Link href="/checkout">デモを見る</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="你的Gumroad連結" target="_blank">
                Pro版を購入 ¥14,900
              </a>
            </Button>
          </div>

          <h2 className="text-3xl font-bold mb-12">商品一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}