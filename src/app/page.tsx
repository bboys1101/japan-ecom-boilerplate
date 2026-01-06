import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header /> 
      <main className="min-h-screen bg-background">
        <section className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-12">商品一覧</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}