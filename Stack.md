# STACK — GRAYSCALE BRAND WEBSITE

## Основа

- Монорепа: pnpm workspaces (`apps/*`, `packages/*`), Node 20+, Git + GitHub.
- Фреймворк: Astro 5 (SSG, content collections, content layer / glob loader), TypeScript (strict через astro/tsconfigs).
- Редактор: VS Code + расширение Astro; конфиги в `.vscode/` (рекомендуемые расширения, форматирование Prettier, таски dev).

## Приложения

- `apps/gate` (порт 4321) — зонтичный гейт: лого, двери брендов, манифест, форма «список своих» (localStorage).
- `apps/grayscale` (порт 4322) — витрина одежды: стена-интро, «в продаже», архив-лента, страницы принтов, заказы в TG.
- `apps/workforce` — отложен (на гейте «в разработке»).

## packages/ui (общее ядро)

- `tokens.css` — палитра v3 (black/paper/gray/red/rust), шрифтовые роли, z-слои, ритм.
- `fx.css` — эффекты платформы: зерно, halftone, хроматическая аберрация, sticker-обводка, ржавый штамп, фирменный огонь (burn: уголь + языки пламени).
- `fonts.css` — @font-face брендовых шрифтов с ПК: Wargate (трафарет), Franklin Gothic Medium (агрессия), Garamond (абзацы).
- fontsource (npm): Old Standard TT (логотип), Oswald (капс), Saira Stencil One (фолбэк трафарета), JetBrains Mono (мета), Golos Text (фолбэк).

## Контент

- MD-коллекция `prints` (`apps/grayscale/content/prints/*.md`), схема: title, status (available / sold-out / burned / soon), sizes, edition, released (формат дд//мм//гггг), order, price, images, desc_ru/desc_en (задел под i18n).

## Фишки

- «4-я стена»: чёрный экран ломается от 7 ударов (трещины, вспышка, тряска, скачущая фраза).
- burn: обугленный слой с рваной кромкой + пламя; по ховеру огонь поднимается.
- xray-пасхалка: 3 клика по тихой «grayscale» → негатив-режим; выход — клик по мадонне.
- Маркейз-лента, вертикальная лента архива со scroll-snap.

## Перф

- web-vitals: FCP / LCP / CLS / INP; своя метрика WALL-BREAK (время до слома стены).
- Вывод: console.table (DevTools), клавиша P — плашка, localStorage `gg-perf`; аудит — Lighthouse.

## Заказы и связь

- Telegram: https://t.me/grayscalebrand (кнопки «заказать», «мы в telegram»).

## Дальше (план)

- i18n RU/EN на desc_ru/desc_en; TG-бот заказов; деплой Cloudflare Pages; анимация лого; WORKFORCE.
