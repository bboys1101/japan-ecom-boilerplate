"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

export function Header() {
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
                0
              </span>
            </button>
          </SheetTrigger>

          {/* 側邊購物車 Drawer（先放空內容，明天再填） */}
          <SheetContent className="w-full sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>ショッピングカート</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingCart className="h-16 w-16 mb-4 opacity-50" />
              <p className="text-lg">カートは空です</p>
              <p className="text-sm mt-2">商品を追加して買い物を始めましょう</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}