"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">日本 Shopify 賣家專用<br />Next.js Headless Boilerplate</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            極致手機體驗、日式美學、高性能獨立站<br />
            內建購物車、結帳流程、日本稅率 & 支付佔位<br />
            快速部署，Pro 版支援 Shopify Storefront API
          </p>
          <div className="flex gap-4 justify-center mb-20">
            <Button size="lg" asChild>
              <Link href="/checkout">查看 Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://your-gumroad-link.gumroad.com/l/japan-shopify-boilerplate" target="_blank">
                購買 Pro 版 ¥14,900
              </a>
            </Button>
          </div>

          <h2 className="text-3xl font-bold mb-12">商品展示</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}