"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export function LeadershipSection() {
    const t = useTranslations("LeadershipSection")
    const leaders = t.raw("leaders") as Array<{ name: string; role: string }>
    return (
        <section className="relative w-full px-5 py-20 md:py-32  flex justify-center items-center ">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[hsl(25,100%,50%)]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[hsl(25,100%,50%)]/3 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col gap-16 md:gap-24">
                {/* Section Header - Large Statement Typography */}
                <div className="text-center space-y-6 px-4">


                    <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
                        {t("title")}
                    </h2>

                    <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

              

                {/* Leadership Grid - Premium Card Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {leaders.map((leader, index) => (
                        <div key={index} className="group relative">
                            {/* Card Container */}
                            <div className="relative h-full overflow-hidden rounded-3xl bg-accent/40 backdrop-blur-md transition-all duration-500 hover:border-[hsl(25,100%,50%)]/50 hover:bg-accent/60">
                                {/* Image Section */}
                                <div className="relative w-full aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={"/placeholder.svg"}
                                        alt={leader.name}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110"
                                    />
                                    {/* Dark Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                                    {/* Accent Border on Hover */}
                                    <div className="absolute inset-0 border-2 border-[hsl(25,100%,50%)]/0 group-hover:border-[hsl(25,100%,50%)]/30 rounded-3xl transition-all duration-500" />
                                </div>
                                {/* <div className="inline-flex absolute top-4 left-4 items-center gap-2 px-3 py-1.5 rounded-full bg-background backdrop-blur-sm border border-primary/30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs font-medium tracking-wide" dir="rtl">
                                        {leader.role}
                                    </span>
                                </div> */}
                                {/* Content Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 space-y-3">
                                    {/* Title - Name */}
                                    <p className="text-xl text-muted-foreground font-light tracking-wide uppercase">{leader.name}</p>

                                    {/* Decorative Line */}
                                    <div className="pt-2">
                                        <div className="h-[1px] w-0 bg-gradient-to-r from-[hsl(25,100%,50%)] to-transparent group-hover:w-full transition-all duration-700" />
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[hsl(25,100%,50%)]/0 group-hover:border-[hsl(25,100%,50%)]/50 rounded-tr-2xl transition-all duration-500" />
                            </div>

                            {/* Glow Effect on Hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(25,100%,50%)]/20 via-[hsl(25,100%,50%)]/10 to-[hsl(25,100%,50%)]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}
