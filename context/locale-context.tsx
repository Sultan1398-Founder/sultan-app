"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useLocale } from "next-intl";

type LocaleContextType = {
  currentLocale: string;
  getLocalizedValue: (translations: { [key: string]: string }) => string;
  getLocalizedField: <T>(item: T, fieldName: string) => string;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();

  const getLocalizedValue = (translations: {
    [key: string]: string;
  }): string => {
    if (!translations) return "";
    return translations[locale] || translations["ar"] || "";
  };

  const getLocalizedField = <T,>(item: T, fieldName: string): string => {
    if (!item || typeof item !== "object") return "";

    const obj = item as Record<string, string>;
    if (obj[fieldName] && typeof obj[fieldName] === "object") {
      return getLocalizedValue(obj[fieldName]);
    }

    return obj[fieldName] || "";
  };

  return (
    <LocaleContext.Provider
      value={{ currentLocale: locale, getLocalizedValue, getLocalizedField }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useAppLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useAppLocale must be used within a LocaleProvider");
  }
  return context;
}
