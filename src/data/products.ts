export type Product = {
  id: number;
  nameJa: string;
  nameEn: string;
  price: number;
  image: string;
  badge?: string; 
};

export const products: Product[] = [
  {
    id: 1,
    nameJa: "手作り陶器マグカップ",
    nameEn: "Handmade Ceramic Mug",
    price: 3200,
    image: "https://i.etsystatic.com/23850237/r/il/f93d3f/4880177367/il_570xN.4880177367_5l2h.jpg", // 溫潤手工陶杯
    badge: "送料無料"
  },
  {
    id: 2,
    nameJa: "抹茶茶器セット",
    nameEn: "Matcha Tea Set",
    price: 5800,
    image: "https://m.media-amazon.com/images/I/71lhY3kYFzL._AC_UF894,1000_QL80_.jpg", // 經典抹茶套組
    badge: "人気"
  },
  {
    id: 3,
    nameJa: "ミニマリストトートバッグ",
    nameEn: "Minimalist Tote Bag",
    price: 4200,
    image: "https://cdn01.pinkoi.com/product/enTZiidX/0/1/640x530.jpg", // 簡約帆布包
    badge: "新着"
  },
  {
    id: 4,
    nameJa: "和風ノートブック",
    nameEn: "Japanese Style Notebook",
    price: 1800,
    image: "https://images.prismic.io/milligram/584fc7f5-eeea-41a3-92f7-23160c44cb5e_15269006_e.jpeg?auto=compress,format", // 和紙風筆記本
    badge: "限定"
  },
];