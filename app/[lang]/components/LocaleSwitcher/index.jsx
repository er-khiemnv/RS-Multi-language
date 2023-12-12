"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "../../../../i18n-config";

export default function LocaleSwitcher({ lang }) {
  const pathName = usePathname();
  const router = useRouter();
  const redirectedPathName = (e) => {
    const locale = e?.target?.value;
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return router.push(segments.join("/"));
  };

  return (
    <div className="nav-bar">
      <select onChange={(e) => redirectedPathName(e)} value={lang} className="select">
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}
