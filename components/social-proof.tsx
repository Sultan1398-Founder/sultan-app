"use client"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Marquee } from "@/components/ui/marquee"

export function SocialProof() {
  const t = useTranslations("SocialProof")
  
  const logos: Array<{ src: string; alt: string; href: string }> = Array.from({ length: 8 }).map((_, i) => ({
    src: `/logos/logo0${i + 1}.svg`,
    alt: `شعار شريك رقم ${i + 1}`,
    href: "#",
  }))

  return (
    <section className="py-24 overflow-hidden" dir="ltr">
      <h2 className="mx-4 mb-12 text-center text-2xl font-medium md:text-4xl">
        {t("title")}
      </h2>
      <div className="overflow-hidden bg-white">
        <Marquee className="[--duration:50s]" pauseOnHover>
          <LogoItems logos={logos} />
        </Marquee>
      </div>
      <div className="overflow-hidden bg-white">
        <Marquee className="[--duration:50s]" reverse pauseOnHover>
          <LogoItems logos={logos} />
        </Marquee>
      </div>
    </section>
  )
}

const LogoItems = ({ logos }: { logos: Array<{ src: string; alt: string; href: string }> }) => (
  <>
    {logos.map((logo, i) => (
      <LogoItem key={i} src={logo.src} alt={logo.alt} href={logo.href} />
    ))}
  </>
)

const LogoItem = ({ src, alt, href }: { src: string; alt: string; href: string }) => {
  return (
    <a href={href} target="_blank" className="flex items-center w-80 justify-center px-4 py-4 text-blue-600 transition-colors hover:bg-blue-50 md:py-6">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={60}
        className="h-12 w-full object-contain md:h-16"
      />
    </a>
  )
}
