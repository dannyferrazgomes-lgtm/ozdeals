import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Menu,
  ShoppingBag,
  Star,
  Flame,
  Copy,
  Check,
  Laptop,
  Smartphone,
  Home,
  Shirt,
  Sparkles,
  Gamepad2,
  Dumbbell,
  Wrench,
  ToyBrick,
  UtensilsCrossed,
  ChevronRight,
  Instagram,
  Youtube,
  Facebook,
  Send,
  Zap,
  Truck,
  BadgePercent,
  Gift,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { products, categories, coupons, banners, type Product } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const iconMap = {
  Laptop, Smartphone, Home, Shirt, Sparkles, Gamepad2, Dumbbell, Wrench, ToyBrick, UtensilsCrossed,
} as const;

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <BannerStrip />
      <Categories />
      <FlashDeals />
      <ProductGrid />
      <Coupons />
      <Newsletter />
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Ofertas", "Shopee", "Mercado Livre", "Tecnologia", "Casa", "Moda", "Contato"];
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="grid place-items-center h-9 w-9 rounded-xl gradient-brand shadow-glow">
              <ShoppingBag className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="font-extrabold text-lg tracking-tight">
              OZ<span className="gradient-brand-text"> Deals</span>
            </div>
          </a>

          <div className="hidden md:flex flex-1 max-w-lg mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Buscar produtos, marcas e categorias..."
                className="w-full h-10 rounded-full bg-secondary pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand/40 transition"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-foreground/80">
            {links.slice(0, 4).map((l) => (
              <a key={l} href="#" className="hover:text-brand transition">{l}</a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="ml-auto lg:hidden p-2 rounded-lg hover:bg-secondary"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 flex flex-col gap-2 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Buscar produtos..."
                className="w-full h-10 rounded-full bg-secondary pl-10 pr-4 text-sm outline-none"
              />
            </div>
            {links.map((l) => (
              <a key={l} href="#" className="px-2 py-2 rounded-lg hover:bg-secondary text-sm">{l}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-brand opacity-95" />
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-70"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold ring-1 ring-white/30">
            <Flame className="h-3.5 w-3.5" /> Atualizado diariamente
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight drop-shadow-sm">
            As melhores ofertas da <span className="text-[#FFD400]">Shopee</span> e{" "}
            <span className="text-[#FFD400]">Mercado Livre</span>.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl">
            Cupons exclusivos, promoções relâmpago e produtos em alta em tecnologia,
            casa, moda e muito mais. Tudo em um só lugar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#produtos" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 font-semibold shadow-card hover:scale-[1.03] transition">
              Ver Ofertas <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#categorias" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/40 text-white px-6 py-3 font-semibold hover:bg-white/20 transition">
              Categorias
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "10K+", l: "Produtos" },
              { n: "70%", l: "Descontos" },
              { n: "24h", l: "Atualizado" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/25 p-3 text-center">
                <div className="text-2xl font-extrabold">{s.n}</div>
                <div className="text-xs text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Banner Strip ---------- */
function BannerStrip() {
  const icons = [Flame, Truck, Gift, Zap];
  return (
    <section className="border-y border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {banners.map((b, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={b.title} className="flex items-center gap-3 rounded-2xl p-4 bg-secondary/60 hover:bg-secondary transition">
              <div className="grid place-items-center h-11 w-11 rounded-xl gradient-brand text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm truncate">{b.title}</div>
                <div className="text-xs text-muted-foreground truncate">{b.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Categories ---------- */
function Categories() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <SectionHeading eyebrow="Explore" title="Categorias em alta" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {categories.map((c) => {
          const Icon = (iconMap as any)[c.icon] ?? ShoppingBag;
          return (
            <a
              key={c.name}
              href="#produtos"
              className="group relative rounded-2xl bg-white border border-border/70 p-5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full gradient-brand opacity-10 group-hover:opacity-20 transition" />
              <div className="grid place-items-center h-11 w-11 rounded-xl gradient-brand text-white shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-semibold text-sm">{c.name}</div>
              <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                Ver ofertas <ChevronRight className="h-3 w-3" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Flash Deals with countdown ---------- */
function FlashDeals() {
  const flash = products.filter((p) => p.flash);
  const [time, setTime] = useState({ h: 5, m: 42, s: 12 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 5; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <div className="rounded-3xl gradient-brand p-6 sm:p-8 text-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold ring-1 ring-white/30">
              <Zap className="h-3.5 w-3.5" /> PROMOÇÃO RELÂMPAGO
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">Termina em breve</h2>
          </div>
          <div className="flex items-center gap-2 font-mono">
            {[pad(time.h), pad(time.m), pad(time.s)].map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-xl bg-black/25 backdrop-blur px-3 py-2 text-2xl font-extrabold tabular-nums min-w-[54px] text-center">
                  {v}
                </div>
                {i < 2 && <span className="text-xl font-bold opacity-70">:</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {flash.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Product Grid with filters ---------- */
function ProductGrid() {
  const [marketplace, setMarketplace] = useState<"all" | "shopee" | "mercadolivre">("all");
  const [sort, setSort] = useState<"discount" | "price" | "sold">("discount");

  const list = useMemo(() => {
    let l = products.filter((p) => (marketplace === "all" ? true : p.marketplace === marketplace));
    if (sort === "discount") {
      l = [...l].sort((a, b) => discount(b) - discount(a));
    } else if (sort === "price") {
      l = [...l].sort((a, b) => a.price - b.price);
    } else {
      l = [...l].sort((a, b) => b.sold - a.sold);
    }
    return l;
  }, [marketplace, sort]);

  return (
    <section id="produtos" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <SectionHeading eyebrow="Ofertas" title="Produtos em destaque" />

      <div className="flex flex-wrap items-center gap-2 mb-6">
        {[
          { k: "all", l: "Todos" },
          { k: "shopee", l: "Shopee" },
          { k: "mercadolivre", l: "Mercado Livre" },
        ].map((f) => (
          <button
            key={f.k}
            onClick={() => setMarketplace(f.k as any)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ring-1 ${
              marketplace === f.k
                ? "gradient-brand text-white ring-transparent shadow-glow"
                : "bg-white ring-border hover:ring-brand/50 text-foreground/80"
            }`}
          >
            {f.l}
          </button>
        ))}
        <div className="ml-auto">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="h-10 rounded-full bg-white ring-1 ring-border px-4 text-sm font-medium outline-none focus:ring-brand/50"
          >
            <option value="discount">Maior desconto</option>
            <option value="price">Menor preço</option>
            <option value="sold">Mais vendidos</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Product Card ---------- */
function discount(p: Product) {
  return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
}
function fmt(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function ProductCard({ product: p, compact = false }: { product: Product; compact?: boolean }) {
  const d = discount(p);
  const isShopee = p.marketplace === "shopee";
  return (
    <a
      href={p.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group relative flex flex-col rounded-2xl bg-white border border-border/70 overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all ${compact ? "" : ""}`}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-2 left-2 rounded-full bg-destructive text-destructive-foreground text-[11px] font-bold px-2 py-1 shadow-soft">
          -{d}%
        </span>
        <span
          className={`absolute top-2 right-2 rounded-full text-[10px] font-bold px-2 py-1 shadow-soft ${
            isShopee ? "bg-[#EE4D2D] text-white" : "bg-[#FFE600] text-black"
          }`}
        >
          {isShopee ? "Shopee" : "Mercado Livre"}
        </span>
      </div>
      <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem] text-foreground">{p.name}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-foreground">{p.rating.toFixed(1)}</span>
          <span>· {p.sold.toLocaleString("pt-BR")} vendidos</span>
        </div>
        <div className="mt-auto">
          <div className="text-xs text-muted-foreground line-through">{fmt(p.oldPrice)}</div>
          <div className="text-lg font-extrabold gradient-brand-text">{fmt(p.price)}</div>
        </div>
        <div className="mt-1 inline-flex items-center justify-center gap-1 rounded-full gradient-brand text-white text-xs font-bold py-2 shadow-glow group-hover:brightness-110 transition">
          Ver Oferta <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </a>
  );
}

/* ---------- Coupons ---------- */
function Coupons() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    toast.success(`Cupom ${code} copiado!`);
    setTimeout(() => setCopied(null), 1800);
  };
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <SectionHeading eyebrow="Economize mais" title="Cupons exclusivos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {coupons.map((c) => (
          <div key={c.code} className="relative rounded-2xl bg-white border border-border p-5 shadow-soft hover:shadow-card transition overflow-hidden">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-background border border-border" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-background border border-border" />
            <div className="flex items-center gap-2">
              <BadgePercent className="h-4 w-4 text-brand" />
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.store}</div>
            </div>
            <div className="mt-2 text-2xl font-extrabold gradient-brand-text">{c.discount}</div>
            <div className="text-xs text-muted-foreground mt-1 min-h-[2.5rem]">{c.desc}</div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 rounded-lg border border-dashed border-brand/60 bg-brand/5 px-3 py-2 font-mono text-sm font-bold text-brand tracking-wider text-center">
                {c.code}
              </div>
              <button
                onClick={() => copy(c.code)}
                className="grid place-items-center h-10 w-10 rounded-lg gradient-brand text-white shadow-glow hover:brightness-110 transition"
                aria-label="Copiar cupom"
              >
                {copied === c.code ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Newsletter ---------- */
function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <div className="relative rounded-3xl overflow-hidden gradient-brand p-8 sm:p-12 text-white shadow-card">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }} />
        <div className="relative grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Receba as melhores ofertas por e-mail</h2>
            <p className="mt-2 text-white/90">Nada de spam. Só as promoções que valem a pena, direto no seu inbox.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.includes("@")) {
                toast.error("Digite um e-mail válido");
                return;
              }
              toast.success("Inscrição confirmada! 🎉");
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-2 bg-white rounded-2xl p-2 shadow-card"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 text-foreground outline-none rounded-xl bg-transparent text-sm"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl gradient-brand text-white px-5 py-3 font-bold text-sm shadow-glow hover:brightness-110 transition">
              <Send className="h-4 w-4" /> Receber
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="mt-10 bg-[#111111] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid place-items-center h-9 w-9 rounded-xl gradient-brand">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <div className="font-extrabold text-lg text-white">OZ Deals</div>
          </div>
          <p className="mt-3 text-sm text-white/60">
            As melhores ofertas da Shopee e Mercado Livre, selecionadas todos os dias.
          </p>
          <div className="mt-4 flex gap-2">
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Categorias" items={["Tecnologia", "Casa", "Moda", "Beleza", "Games"]} />
        <FooterCol title="Marketplaces" items={["Shopee", "Mercado Livre", "Cupons", "Promoções relâmpago"]} />
        <FooterCol title="Sobre" items={["Contato", "Política de privacidade", "Como funciona", "FAQ"]} />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} OZ Deals. Todos os direitos reservados.</div>
          <div>Links de afiliado — recebemos comissão pelas indicações.</div>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-bold text-white mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-white transition">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Utility ---------- */
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="text-xs font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</div>
      <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
    </div>
  );
}
