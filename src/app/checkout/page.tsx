"use client";

import { useCart } from "@/lib/cartStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Checkout() {
    const { items, getTotalPrice } = useCart();
    const totalPrice = getTotalPrice();
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // 10% 消費稅

    return (
        <main className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-2xl">
                <h1 className="text-3xl font-bold mb-8">お支払い</h1>

                {/* 訂單摘要 */}
                <div className="border rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">注文内容</h2>
                    {items.map((item) => (
                        <div key={item.id} className="flex justify-between mb-2 text-sm">
                            <span>{item.nameJa} x {item.quantity}</span>
                            <span>¥{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    ))}
                    <div className="border-t mt-4 pt-4">
                        <div className="flex justify-between mb-2">
                            <span>小計</span>
                            <span>¥{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-2 text-muted-foreground">
                            <span>消費税（10%）</span>
                            <span>¥{tax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>合計</span>
                            <span>¥{totalPrice.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* 配送資訊佔位 */}
                <div className="border rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">配送先</h2>
                    <div className="grid gap-4">
                        <div>
                            <Label htmlFor="zip">郵便番号</Label>
                            <Input id="zip" placeholder="〒123-4567" />
                        </div>
                        <div>
                            <Label htmlFor="address">住所</Label>
                            <Input id="address" placeholder="都道府県、市区町村、番地" />
                        </div>
                        <div>
                            <Label htmlFor="delivery-date">希望配達日時</Label>
                            <Input id="delivery-date" type="datetime-local" />
                        </div>
                    </div>
                </div>

                {/* 支付方式佔位 */}
                <div className="border rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">お支払い方法</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <Button variant="outline" className="h-16 flex items-center justify-center">
                            <Image src="/images/PayPay.svg" alt="PayPay" width={120} height={40} className="object-contain" />
                        </Button>
                        <Button variant="outline" className="h-16 flex items-center justify-center">
                            <Image src="/images/Line.svg" alt="LINE Pay" width={120} height={40} className="object-contain" />
                        </Button>
                        <Button variant="outline" className="h-16 flex items-center justify-center">
                            <Image src="/images/Rakuten.svg" alt="Rakuten Pay" width={120} height={40} className="object-contain" />
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">Pro 版內建 Shopify Payment Gateway 整合</p>
                </div>

                <Button className="w-full" size="lg">注文を確定する</Button>
            </div>
        </main>
    );
}