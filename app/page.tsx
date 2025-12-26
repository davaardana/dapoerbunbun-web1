"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Heart, ShoppingBag, Sparkles, ChefHat, Clock, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

// Product data
const products = [
  {
    id: 1,
    name: "Fudgy Brownies Original",
    description: "Brownies coklat lembut dengan tekstur fudgy yang kaya rasa",
    image: "/products/fudgy-brownies-original.png",
    category: "Kue",
  },
  {
    id: 2,
    name: "Choux Cream Vanilla",
    description: "Sus lembut isi krim vanilla yang creamy dan lezat",
    image: "/products/choux-cream-vanilla.png",
    category: "Pastry",
  },
  {
    id: 3,
    name: "Marble Choux",
    description: "Sus marmer dengan perpaduan vanilla dan coklat yang elegan",
    image: "/products/marble-choux.png",
    category: "Pastry",
  },
  {
    id: 4,
    name: "Nastar Cake",
    description: "Kue nastar premium dengan selai nanas pilihan",
    image: "/products/nastar-cake.png",
    category: "Kue",
  },
  {
    id: 5,
    name: "Bolu Ketan Hitam",
    description: "Bolu lembut dengan cita rasa ketan hitam yang khas",
    image: "/products/bolu-ketan-hitam.png",
    category: "Kue",
  },
  {
    id: 6,
    name: "Tasoka",
    description: "Gorengan tradisional dengan isian yang gurih dan lezat",
    image: "/products/tasoka.png",
    category: "Snack",
  },
]

export default function HomePage() {
  const heroAnim = useScrollAnimation()
  const featuresAnim = useScrollAnimation()
  const menuAnim = useScrollAnimation()
  const aboutAnim = useScrollAnimation()
  const servicesAnim = useScrollAnimation()
  const contactAnim = useScrollAnimation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-background to-cream-dark">
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 animate-fadeInUp">
        <div className="glass rounded-full px-8 py-4 shadow-xl">
          <div className="flex items-center gap-8">
            <a href="#home" className="font-serif text-sm font-semibold text-brown transition-colors hover:text-gold">
              Beranda
            </a>
            <a href="#menu" className="font-serif text-sm font-semibold text-brown transition-colors hover:text-gold">
              Menu
            </a>
            <a href="#about" className="font-serif text-sm font-semibold text-brown transition-colors hover:text-gold">
              Tentang
            </a>
            <a
              href="#services"
              className="font-serif text-sm font-semibold text-brown transition-colors hover:text-gold"
            >
              Layanan
            </a>
            <a
              href="#contact"
              className="font-serif text-sm font-semibold text-brown transition-colors hover:text-gold"
            >
              Kontak
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-brown/10 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div
          ref={heroAnim.ref}
          className={`container relative z-10 mx-auto px-4 text-center transition-all duration-1000 ${
            heroAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12 flex justify-center">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gold/20 via-gold-light/20 to-gold/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Image
                src="/logo-dapoer-bun-bun.png"
                alt="Dapoer Bun-Bun Logo"
                width={500}
                height={250}
                className="relative rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          <h1
            className="mb-6 text-balance font-serif text-5xl font-bold text-brown md:text-7xl lg:text-8xl animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Fresh Taste,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
              Warm Heart
            </span>
          </h1>

          <p
            className="text-pretty mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Makanan rumahan dengan rasa khas dan selalu fresh. Setiap pesanan dibuat langsung setelah dipesan — tanpa
            stok, tanpa sisa, semua serba baru dan lezat.
          </p>

          <div
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold-dark text-brown-light shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a
                href="https://wa.me/6287875027002?text=Halo%20Dapoer%20Bun-Bun,%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span className="relative z-10">Pesan Sekarang</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-brown bg-transparent text-brown hover:bg-brown hover:text-cream transition-all duration-300"
              asChild
            >
              <a href="#menu">Lihat Menu</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="relative py-24 md:py-32">
        <div ref={featuresAnim.ref} className="container mx-auto px-4">
          <h2
            className={`mb-16 text-center font-serif text-4xl font-bold text-brown md:text-5xl transition-all duration-1000 ${
              featuresAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Mengapa Memilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
              Dapoer Bun-Bun?
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature Card 1 */}
            <div
              className={`group transition-all duration-700 ${
                featuresAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              <Card className="relative h-full overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/40">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark p-6 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Sparkles className="h-10 w-10 text-cream" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-brown">Selalu Fresh</h3>
                  <p className="font-body leading-relaxed text-muted-foreground">
                    Dibuat langsung setelah dipesan, tanpa stok, tanpa sisa. Setiap hidangan disajikan dalam kondisi
                    paling segar.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Feature Card 2 */}
            <div
              className={`group transition-all duration-700 ${
                featuresAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <Card className="relative h-full overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/40">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark p-6 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Heart className="h-10 w-10 text-cream" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-brown">Made with Heart</h3>
                  <p className="font-body leading-relaxed text-muted-foreground">
                    Dibuat dengan cinta menggunakan bahan berkualitas terbaik dan resep khas yang turun temurun.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Feature Card 3 */}
            <div
              className={`group transition-all duration-700 ${
                featuresAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <Card className="relative h-full overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/40">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark p-6 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <ShoppingBag className="h-10 w-10 text-cream" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold text-brown">Custom Menu</h3>
                  <p className="font-body leading-relaxed text-muted-foreground">
                    Bisa custom menu sesuai selera dan kebutuhan. Tinggal sampaikan keinginan Anda!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* New Menu Section */}
      <section id="menu" className="relative bg-gradient-to-b from-background to-cream py-24 md:py-32">
        <div ref={menuAnim.ref} className="container mx-auto px-4">
          <h2
            className={`mb-6 text-center font-serif text-4xl font-bold text-brown md:text-5xl transition-all duration-1000 ${
              menuAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Menu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">Spesial Kami</span>
          </h2>
          <p
            className={`mb-16 text-center font-body text-lg text-muted-foreground transition-all duration-1000 ${
              menuAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Dibuat fresh setiap hari, penuh cita rasa dan kehangatan
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group transition-all duration-700 ${
                  menuAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <Card className="relative h-full overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/40">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-gold/90 px-3 py-1 backdrop-blur-sm">
                        <span className="font-serif text-xs font-semibold text-brown">{product.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-serif text-xl font-bold text-brown">{product.name}</h3>
                      <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                        {product.description}
                      </p>
                      <Button
                        className="w-full bg-gradient-to-r from-gold to-gold-dark text-brown hover:from-gold-dark hover:to-gold transition-all duration-300"
                        asChild
                      >
                        <a
                          href={`https://wa.me/6287875027002?text=Halo%20Dapoer%20Bun-Bun,%20saya%20mau%20pesan%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Pesan Sekarang
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 text-center transition-all duration-1000 ${
              menuAnim.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <p className="mb-6 font-body text-lg text-muted-foreground">
              Tidak menemukan yang Anda cari? Kami bisa custom menu sesuai keinginan Anda!
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gold bg-transparent text-brown hover:bg-gold hover:text-cream transition-all duration-300"
              asChild
            >
              <a
                href="https://wa.me/6287875027002?text=Halo%20Dapoer%20Bun-Bun,%20saya%20mau%20custom%20menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Tanya Custom Menu
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-gradient-to-b from-cream-dark to-cream py-24 md:py-32">
        <div ref={aboutAnim.ref} className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`mb-12 text-center font-serif text-4xl font-bold text-brown md:text-5xl transition-all duration-1000 ${
                aboutAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Tentang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                Dapoer Bun-Bun
              </span>
            </h2>

            <Card
              className={`overflow-hidden border-2 border-gold/30 bg-background/50 backdrop-blur shadow-2xl transition-all duration-1000 ${
                aboutAnim.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <CardContent className="p-10 md:p-14">
                <div className="space-y-6 font-body text-lg leading-relaxed text-foreground">
                  <p className="text-pretty">
                    <span className="font-serif text-2xl font-bold text-brown">Dapoer Bun-Bun</span> hadir untuk Anda
                    yang mencintai cita rasa autentik makanan rumahan dengan sentuhan khas yang tak terlupakan.
                  </p>

                  <p className="text-pretty">
                    Setiap pesanan kami buat langsung setelah dipesan —{" "}
                    <span className="font-semibold text-gold-dark">tanpa stok, tanpa sisa</span>, semua serba baru dan
                    lezat. Sempurna untuk acara keluarga, berkumpul dengan teman, atau sekadar mengganjal lapar harian
                    dengan makanan berkualitas.
                  </p>

                  <div className="my-8 rounded-2xl border-l-4 border-gold bg-gold/5 p-6 shadow-lg">
                    <p className="text-pretty font-serif text-xl leading-relaxed text-brown">
                      "Kami percaya bahwa makanan terbaik adalah yang dibuat dengan hati, bahan berkualitas, dan
                      disajikan dalam keadaan baru matang."
                    </p>
                  </div>

                  <p className="text-pretty">
                    Dengan cita rasa rumahan yang autentik, Dapoer Bun-Bun siap menemani setiap momen Anda — dari santai
                    di rumah, acara kecil, hingga pesanan spesial untuk orang tersayang.
                  </p>

                  <p className="text-pretty">
                    Di sini, setiap menu bisa Anda sesuaikan sesuai selera dan kebutuhan. Jangan ragu untuk bertanya dan
                    berbagi preferensi Anda!
                  </p>

                  <div className="pt-6 text-center">
                    <p className="font-serif text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
                      Dapoer Bun-Bun — Fresh taste, warm heart!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-24 md:py-32">
        <div ref={servicesAnim.ref} className="container mx-auto px-4">
          <h2
            className={`mb-12 text-center font-serif text-4xl font-bold text-brown md:text-5xl transition-all duration-1000 ${
              servicesAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">Kami</span>
          </h2>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Service Card 1 */}
            <Card
              className={`group overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                servicesAnim.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-gold to-gold-dark p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <ChefHat className="h-6 w-6 text-cream" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brown">Menu Rumahan & Camilan</h3>
                </div>
                <p className="text-pretty font-body leading-relaxed text-muted-foreground">
                  Terima pesanan untuk berbagai menu rumahan dan camilan yang dibuat dengan resep spesial dan bahan
                  pilihan berkualitas tinggi.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card
              className={`group overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                servicesAnim.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-gold to-gold-dark p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Award className="h-6 w-6 text-cream" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brown">Custom Menu</h3>
                </div>
                <p className="text-pretty font-body leading-relaxed text-muted-foreground">
                  Bisa custom menu sesuai selera dan kebutuhanmu. Sampaikan preferensi atau alergi makanan — kami siap
                  menyesuaikan!
                </p>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card
              className={`group overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                servicesAnim.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-gold to-gold-dark p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Clock className="h-6 w-6 text-cream" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brown">Made by Order</h3>
                </div>
                <p className="text-pretty font-body leading-relaxed text-muted-foreground">
                  Setiap pesanan dibuat fresh setelah order masuk. Tidak ada stok lama, dijamin kesegaran maksimal untuk
                  setiap hidangan.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 4 */}
            <Card
              className={`group overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-cream to-background transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                servicesAnim.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-gold to-gold-dark p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Heart className="h-6 w-6 text-cream" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brown">Acara Spesial</h3>
                </div>
                <p className="text-pretty font-body leading-relaxed text-muted-foreground">
                  Cocok untuk acara keluarga, arisan, gathering, atau momen spesial lainnya. Hubungi kami untuk paket
                  khusus!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-gradient-to-b from-brown to-brown-light py-24 text-cream md:py-32">
        <div ref={contactAnim.ref} className="container mx-auto px-4">
          <h2
            className={`mb-4 text-center font-serif text-4xl font-bold md:text-5xl transition-all duration-1000 ${
              contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Hubungi Kami
          </h2>
          <p
            className={`mb-16 text-center font-body text-lg text-cream/80 transition-all duration-1000 ${
              contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Kami siap melayani pesanan Anda dengan sepenuh hati
          </p>

          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
            {/* Contact Card 1 */}
            <div
              className={`group flex flex-col items-center text-center transition-all duration-700 ${
                contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark p-6 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <MapPin className="h-10 w-10 text-brown" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold">Alamat</h3>
              <p className="text-pretty font-body text-sm leading-relaxed text-cream/90">
                Jl. Pisang Ambon IV No.28
                <br />
                RT 004 RW 017
              </p>
            </div>

            {/* Contact Card 2 */}
            <div
              className={`group flex flex-col items-center text-center transition-all duration-700 ${
                contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark p-6 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Phone className="h-10 w-10 text-brown" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold">WhatsApp</h3>
              <a
                href="https://wa.me/6287875027002"
                className="font-body text-sm text-cream/90 transition-colors hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                087875027002
              </a>
            </div>

            {/* Contact Card 3 */}
            <div
              className={`group flex flex-col items-center text-center transition-all duration-700 ${
                contactAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="mb-6 rounded-full bg-gradient-to-br from-gold to-gold-dark p-6 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Mail className="h-10 w-10 text-brown" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold">Email</h3>
              <a
                href="mailto:ika.kriswandari76@gmail.com"
                className="text-pretty font-body text-sm text-cream/90 transition-colors hover:text-gold"
              >
                ika.kriswandari76@gmail.com
              </a>
            </div>
          </div>

          <div
            className={`mt-16 text-center transition-all duration-1000 ${
              contactAnim.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold shadow-2xl hover:shadow-gold/50 transition-all duration-300"
              asChild
            >
              <a
                href="https://wa.me/6287875027002?text=Halo%20Dapoer%20Bun-Bun,%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5 text-brown" />
                <span className="relative z-10 font-serif font-bold text-brown">Pesan via WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-brown-light py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-sm text-cream/70">
            &copy; 2025 Dapoer Bun-Bun. Dibuat dengan <Heart className="inline h-4 w-4 text-gold" /> untuk Anda yang
            mencintai makanan rumahan.
          </p>
        </div>
      </footer>
    </div>
  )
}
