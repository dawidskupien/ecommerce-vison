# Fullstack E-Commerce Store (Next.js + Strapi)

Nowoczesna, pełnowymiarowa aplikacja sklepowa (e-commerce) wybudowana w architekturze **Headless**, łącząca wydajny frontend w **Next.js** z elastycznym systemem zarządzania treścią **Strapi CMS** oraz integracją płatności **Stripe**.

---

## 🛠️ Stos Technologiczny (Tech Stack)

### **Frontend** (`/frontend`)
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Język:** TypeScript
* **Stylizowanie:** Tailwind CSS + [Shadcn UI](https://ui.shadcn.com/) / Radix UI
* **Zarządzanie Stanem:** Zustand (obsługa koszyka i interfejsu)
* **Baza Danych & ORM:** PostgreSQL / SQLite z [Drizzle ORM](https://orm.drizzle.team/)
* **Autoryzacja:** NextAuth.js
* **Komunikacja z API:** GraphQL (Apollo / GraphQL Code Generator)
* **Płatności:** Stripe SDK

### **Backend** (`/backend`)
* **CMS:** [Strapi v4](https://strapi.io/) (Headless CMS)
* **Język:** TypeScript
* **API:** GraphQL (z customowymi resolverami) & REST
* **Baza Danych:** PostgreSQL / SQLite
* **Media:** Obsługa zoptymalizowanych formatów WebP / MP4

---

## ✨ Główne Funkcjonalności

* **Headless Architecture:** Pełne rozdzielenie warstwy wizualnej (Next.js) od panelu administracyjnego i zarządzania treściami (Strapi).
* **Dynamiczny Katalog Produktów:** Listowanie produktów z podziałem na kategorie, filtrowanie po cenie, kolorach i dostępności oraz sortowanie.
* **Karta Produktu (PDP):** Dedykowany widok z galerią Swiper, selekcją wariantów i ilości, dynamicznymi akordeonami informacyjnymi.
* **Koszyk i Zamówienia:** Interaktywny koszyk w pamięci podręcznej z pełnym procesem zakupowym (Checkout via Stripe Sessions).
* **System Autoryzacji:** Rejestracja i logowanie użytkowników, zarządzanie mailem/hasłem oraz kontem przy użyciu `zsa` i NextAuth.
* **Zarządzanie Treścią (CMS):** Możliwość edycji banerów (Hero Slider), pasków promocyjnych (`announcement-bar`), struktury nawigacji oraz sekcji promocyjnych z poziomu panelu Strapi.
* **Responsywność i Wydajność:** Podejście *Mobile-First*, lekki interfejs użytkownika, szkielety ładowania (Skeletons) oraz kompresja zasobów.

---

## 📁 Struktura Projektu

```text
├── backend/                # Strapi Headless CMS
│   ├── src/
│   │   ├── api/            # Modele danych (product, category, navigation itp.)
│   │   └── graphql/        # Customowe resolvery i schematy GraphQL
│   ├── Dockerfile
│   └── docker-compose.yml
│
└── frontend/               # Aplikacja Next.js
    ├── app/                # Next.js App Router (strony, układy, akcje)
    │   ├── (auth)/         # Strony logowania i rejestracji
    │   ├── (homepage)/     # Strona główna z sekcjami banerów
    │   ├── collections/    # Katalog produktów i kategorie
    │   ├── [productSlug]/  # Karta pojedynczego produktu
    │   ├── cart/           # Widok koszyka
    │   └── checkout/       # Proces płatności Stripe
    ├── components/         # Komponenty UI, nagłówek, stopka, nawigacja
    ├── db/                 # Schematy i konfiguracja Drizzle ORM
    └── store/              # Stan Zustand (koszyk, interfejs)
```

---

## 🚀 Uruchomienie Lokalnie

### Wymagania wstępne
* Node.js (v18 lub nowszy)
* npm / pnpm / yarn
* Docker (opcjonalnie, dla kontenerów backendu/bazy)

### 1. Backend (Strapi)
```bash
cd backend
npm install
npm run build
npm run develop
```
Panel administratora Strapi będzie dostępny pod adresem: `http://localhost:1337/admin`

### 2. Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Aplikacja kliencka wystartuje pod adresem: `http://localhost:3000`

---

## ⚙️ Zmienne Środowiskowe (`.env`)

Przed uruchomieniem upewnij się, że utworzyłeś pliki `.env.local` w katalogu `frontend` oraz `.env` w katalogu `backend` na podstawie dostarczonych szablonów, uzupełniając dane takie jak:
* Klucze API Strapi & GraphQL Endpoint
* Sekret i klucze Stripe (`STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`)
* Zmienne bazy danych PostgreSQL / Drizzle
* Sekrety NextAuth (`NEXTAUTH_SECRET`)
