"use client";

import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import ReactCountryFlag from "react-country-flag";
import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { Button } from "../ui/button";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string; code: string }>;
};

export default function LocaleSwitcherPopover({ defaultValue, items }: Props) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  function getNextLocale(): Locale {
    return locale === "ar" ? "en" : "ar";
  }

  function getCurrentLocaleItem() {
    return items.find((item) => item.value === locale) || items[0];
  }

  function handleToggleLocale() {
    const nextLocale = getNextLocale();
    startTransition(async () => {
      await setUserLocale(nextLocale);
      window.location.reload();
    });
  }

  const currentItem = getCurrentLocaleItem();

  return (


    <Button className="rounded-full" disabled={isPending}
      onClick={handleToggleLocale}
      variant="ghost"
       size="icon">
      <ReactCountryFlag
        className="w-full h-full rounded-full text-4xl"
        countryCode={currentItem.code}
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
      />
    </Button>
  );
}
