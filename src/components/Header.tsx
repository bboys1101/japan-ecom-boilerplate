"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"; 
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cartStore"; 
import Image from "next/image";  


export function Header() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / 店名 */}
        <h1 className="text-2xl font-bold tracking-tight">日本雑貨店</h1>

        {/* 購物車圖示 */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="relative p-2 rounded-full hover:bg-accent transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {/* 購物車數量小徽章 */}
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              {itemCount}
            </span>
            </button>
          </SheetTrigger>

          <SheetContent className="w-full sm:max-w-lg flex flex-col">
            <SheetHeader>
              <SheetTitle>ショッピングカート</SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingCart className="h-16 w-16 mb-4 opacity-50" />
                  <p>カートは空です</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                      <div className="aspect-square w-20 relative">
                        <Image src={item.image} alt={item.nameJa} fill className="object-cover rounded" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.nameJa}</p>
                        <p className="text-sm text-muted-foreground">¥{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          disabled={item.quantity === 1}  // ← 數量 1 時變灰，不能點
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => removeItem(item.id)}>削除</Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>合計（税込）</span>
                  <span>¥{totalPrice.toLocaleString()}</span>
                </div>
                <Button className="w-full mt-4" size="lg">レジに進む</Button>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}