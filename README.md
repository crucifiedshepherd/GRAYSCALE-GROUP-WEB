# GRAYSCALE BRAND WEBSITE

Зонтичная сущность для двух брендов: **GRAYSCALE** (принты/одежда) и **WORKFORCE** (видео, отложен).
Вход — гейт. Детали стека — `STACK.md`, контекст брендов — `CONTEXT.md`.

## Запуск

pnpm install
pnpm dev:gate # гейт → http://localhost:4321
pnpm dev:gs # grayscale → http://localhost:4322

Оба сразу: Terminal → Run Task → `dev: all` (или два терминала).

## Структура

- `apps/gate` — гейт v1: лого, двери, манифест, форма своих.
- `apps/grayscale` — витрина: стена-интро, «в продаже», архив, страницы принтов.
- `packages/ui` — токены, эффекты, шрифты.
- `.vscode` — конфиги и таски.

## Контент (принты)

Файлы: `apps/grayscale/content/prints/*.md`.
Статусы: `available` (на главной), `sold-out`, `burned` (огонь), `soon` («в разработке», в архиве).
Добавить принт = создать md с frontmatter по схеме из `src/content.config.ts`.
Картинки класть в `apps/grayscale/public/media/`, пути — в `images:`.

## Пасхалки

- 3 клика по «grayscale» справа сверху → xray-негатив; выход — клик по мадонне.
- Стена при входе ломается от 7 ударов.
- Клавиша P — плашка перф-метрик.

## Шрифты с ПК

Лежат в `packages/ui/src/fonts/` (wargate / franklin / garamond), подключены через `fonts.css`.
