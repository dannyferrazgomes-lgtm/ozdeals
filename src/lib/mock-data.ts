export type Marketplace = "shopee" | "mercadolivre";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  sold: number;
  marketplace: Marketplace;
  category: string;
  affiliateUrl: string;
  featured?: boolean;
  flash?: boolean;
}

const img = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/600/600`;

export const products: Product[] = [
  { id: "1", name: "Fone Bluetooth TWS Pro com Cancelamento de Ruído", image: img("fone-tws"), price: 89.9, oldPrice: 249.9, rating: 4.8, sold: 12483, marketplace: "shopee", category: "Tecnologia", affiliateUrl: "https://shopee.com.br", featured: true, flash: true },
  { id: "2", name: "Smartwatch W59 Série 9 Tela Amoled 2.1'", image: img("smartwatch"), price: 129.9, oldPrice: 399.9, rating: 4.7, sold: 8912, marketplace: "mercadolivre", category: "Tecnologia", affiliateUrl: "https://mercadolivre.com.br", featured: true },
  { id: "3", name: "Air Fryer 5L Digital 1500W Preta", image: img("airfryer"), price: 279, oldPrice: 599, rating: 4.9, sold: 5432, marketplace: "mercadolivre", category: "Casa", affiliateUrl: "https://mercadolivre.com.br", featured: true, flash: true },
  { id: "4", name: "Kit 3 Camisetas Dry Fit Masculinas Esporte", image: img("camiseta"), price: 59.9, oldPrice: 149.9, rating: 4.6, sold: 21045, marketplace: "shopee", category: "Moda", affiliateUrl: "https://shopee.com.br" },
  { id: "5", name: "Teclado Mecânico Gamer RGB ABNT2", image: img("teclado"), price: 179.9, oldPrice: 349.9, rating: 4.8, sold: 3210, marketplace: "shopee", category: "Games", affiliateUrl: "https://shopee.com.br", featured: true },
  { id: "6", name: "Mouse Sem Fio Recarregável Silencioso", image: img("mouse"), price: 39.9, oldPrice: 99.9, rating: 4.7, sold: 15678, marketplace: "shopee", category: "Tecnologia", affiliateUrl: "https://shopee.com.br" },
  { id: "7", name: "Tênis Esportivo Corrida Ultra Leve", image: img("tenis"), price: 149.9, oldPrice: 349.9, rating: 4.5, sold: 9820, marketplace: "mercadolivre", category: "Esporte", affiliateUrl: "https://mercadolivre.com.br", flash: true },
  { id: "8", name: "Organizador de Cozinha Multiuso 5 Peças", image: img("organizador"), price: 49.9, oldPrice: 119.9, rating: 4.6, sold: 6541, marketplace: "shopee", category: "Casa", affiliateUrl: "https://shopee.com.br" },
  { id: "9", name: "Perfume Importado Masculino 100ml Amadeirado", image: img("perfume"), price: 199, oldPrice: 449, rating: 4.9, sold: 4321, marketplace: "mercadolivre", category: "Beleza", affiliateUrl: "https://mercadolivre.com.br", featured: true },
  { id: "10", name: "Furadeira Parafusadeira Bateria 12V Bivolt", image: img("furadeira"), price: 189.9, oldPrice: 399.9, rating: 4.8, sold: 2876, marketplace: "mercadolivre", category: "Ferramentas", affiliateUrl: "https://mercadolivre.com.br" },
  { id: "11", name: "Notebook 15.6' Intel Core i5 8GB 256GB SSD", image: img("notebook"), price: 2499, oldPrice: 3499, rating: 4.7, sold: 1290, marketplace: "mercadolivre", category: "Notebooks", affiliateUrl: "https://mercadolivre.com.br", featured: true },
  { id: "12", name: "Kit Skincare Facial Vitamina C 3 Passos", image: img("skincare"), price: 79.9, oldPrice: 159.9, rating: 4.9, sold: 1876, marketplace: "shopee", category: "Beleza", affiliateUrl: "https://shopee.com.br" },
];

export const categories = [
  { name: "Tecnologia", icon: "Laptop" },
  { name: "Celulares", icon: "Smartphone" },
  { name: "Casa", icon: "Home" },
  { name: "Moda", icon: "Shirt" },
  { name: "Beleza", icon: "Sparkles" },
  { name: "Games", icon: "Gamepad2" },
  { name: "Esporte", icon: "Dumbbell" },
  { name: "Ferramentas", icon: "Wrench" },
  { name: "Brinquedos", icon: "ToyBrick" },
  { name: "Cozinha", icon: "UtensilsCrossed" },
];

export const coupons = [
  { code: "OZSHOPEE15", discount: "15% OFF", store: "Shopee", desc: "Válido para primeira compra no app" },
  { code: "MELIVRE20", discount: "R$ 20 OFF", store: "Mercado Livre", desc: "Em compras acima de R$ 100" },
  { code: "FRETEGRATIS", discount: "Frete Grátis", store: "Shopee", desc: "Em milhares de produtos selecionados" },
  { code: "TECH10", discount: "10% OFF", store: "Mercado Livre", desc: "Categoria tecnologia" },
];

export const banners = [
  { title: "Até 70% OFF", subtitle: "Semana de promoções relâmpago", emoji: "🔥" },
  { title: "Frete Grátis", subtitle: "Em milhares de produtos", emoji: "📦" },
  { title: "Cupons Exclusivos", subtitle: "Descontos direto no checkout", emoji: "🎁" },
  { title: "Mega Ofertas Tech", subtitle: "Eletrônicos com preços insanos", emoji: "💥" },
];
