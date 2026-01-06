import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Props = {
  nameJa: string;
  nameEn: string;
  price: number;
  image: string;
  badge?: string;
};

export function ProductCard({ nameJa, nameEn, price, image, badge }: Props) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={nameJa}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2">
          {badge && (
            <Badge 
                variant={badge === "人気" ? "destructive" : "secondary"}  // 改成 destructive = 紅色背景，白字
                className=
                    {`${badge === "人気" ? "bg-red-500 text-white" : "bg-white/80 text-foreground"} backdrop-blur`}
                >
            {badge}
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">{nameJa}</h3>
        <p className="text-sm text-muted-foreground mt-1">{nameEn}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">¥{price.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">（税込）</p>
        </div>
        <Button size="sm">カートに入れる</Button>
      </CardFooter>
    </Card>
  );
}