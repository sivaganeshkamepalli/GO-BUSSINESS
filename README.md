# Go Business — Referral Dashboard

A responsive Referral Dashboard web app built with **React + Vite**. It shows referral statistics, lets users copy their referral link and code, and displays a searchable, paginated table of referral data fetched from a live API.

---

## 📸 Preview

| Desktop | Mobile |
|---|---|
| Full navbar, 4-column stat cards, table with pagination | Hamburger menu, 2-column cards, stacked layout |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed on your computer:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

### Installation

**Step 1** 


cd go-business


**Step 2** — Install dependencies

```bash
npm install
```

**Step 3** — Start the development server

```bash
npm run dev
```

**Step 4** — Open your browser and go to:

```
http://localhost:5173
```

---

## 🏗️ Project Structure

```
go-business/
├── index.html                  ← Main HTML file (app entry point)
├── vite.config.js              ← Vite build configuration
├── package.json                ← Project dependencies & scripts
└── src/
    ├── main.jsx                ← Mounts the React app into index.html
    ├── App.jsx                 ← Root component, assembles all sections
    ├── App.css                 ← Layout styles for the whole page
    ├── index.css               ← Global reset, CSS variables (colors, fonts)
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx      ← Top navigation bar
        │   └── Navbar.css
        ├── Dashboard/
        │   ├── Dashboard.jsx   ← Page header, search bar, user avatar
        │   └── Dashboard.css
        ├── StatsCards/
        │   ├── StatsCards.jsx  ← 8 colourful statistics cards
        │   └── StatsCards.css
        ├── ReferralSection/
        │   ├── ReferralSection.jsx  ← Referral link, code, copy buttons
        │   └── ReferralSection.css
        ├── ReferralTable/
        │   ├── ReferralTable.jsx   ← API table with search & pagination
        │   └── ReferralTable.css
        └── Footer/
            ├── Footer.jsx      ← Footer with links and social icons
            └── Footer.css
```

---

## 🧩 Components Explained

### `Navbar`
The top navigation bar that appears on every page.
- Displays the **Go Business logo** on the left
- Shows navigation links: Home, About Us, Courses, Projects, Contact
- Has a **"Try for free"** button on the right
- On **mobile**, links collapse into a **hamburger menu** that toggles open/closed

### `Dashboard`
The main page header section directly below the navbar.
- Shows the **"Referral Dashboard"** title
- Contains the **search bar** with a Search button
- Displays the **user avatar, name, and role** (Admin) on the right
- On mobile, the layout stacks vertically

### `StatsCards`
A grid of 8 cards, each showing one referral statistic.
- Cards: Total Balance, Discount Percentage, Total Referral, Discount Amount, Commission Amount, Total Earning, Commission Discount, Total Bank Transfer
- Each card has a **purple gradient background**, a circular icon, and a value
- Layout is **4 columns** on desktop, **2 columns** on tablet/mobile
- Data is **mocked** (hardcoded) as no API is required for stats

### `ReferralSection`
Three parts stacked vertically:
1. **Service summary row** — shows Service, Your Referrals, Active Referrals, Total Ref. Earnings in a dashed box
2. **"Refer Friends And Earn More !!"** banner
3. **Your Referral Link** and **Your Referral Code** — each with an input field and a **Copy** button that copies to clipboard and shows "Copied!" feedback for 2 seconds

### `ReferralTable`
The main data table, powered by a live API.
- **Fetches data** from the provided S3 API on page load
- Displays columns: **Name, Service Name, Date, Profit**
- **Search box** filters rows by name in real-time (case-insensitive). Shows "No matching data" if nothing is found
- **Entries selector** lets you choose 10, 25, or 50 rows per page
- **Pagination** with Previous / Next buttons and page number buttons
- Shows **"Showing X to Y of Z entries"** count at the bottom
- If the API does not return a name field, realistic names are shown from a built-in name pool

### `Footer`
The bottom section of the page.
- Five columns of links: Company, Help and Support, Learning, Resources, Legal
- Centred logo and copyright notice at the bottom
- Three social media icon buttons: LinkedIn, Facebook, Instagram

---

## 🌐 API

**Endpoint:**
```
https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json
```

- The app fetches this URL automatically when the page loads
- No API key or authentication is needed
- Returns a JSON array of referral records used to populate the table
- All other data (stats cards, referral link/code) is static/mocked

---

## 📱 Responsive Design

| Screen Size | Behaviour |
|---|---|
| Desktop (> 900px) | Full navbar, 4-column stat cards, side-by-side referral inputs |
| Tablet (600–900px) | 2-column stat cards, stacked referral inputs |
| Mobile (< 600px) | Hamburger menu, 2-column cards, single-column layout throughout |

---

## 🛠️ Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the local development server at `localhost:5173` |
| `npm run build` | Builds the app for production into the `dist/` folder |
| `npm run preview` | Previews the production build locally |

---

## 🎨 Design Decisions

- **Color theme**: Purple gradient (`#6C5CE7` family) matching the Figma design
- **Font**: Poppins (loaded from Google Fonts) for a clean, modern look
- **CSS**: Each component has its own `.css` file — no global style leakage
- **CSS Variables**: All colors and fonts are defined as variables in `index.css`, making it easy to retheme the whole app by changing one file
- **No CSS framework**: Pure CSS only, so the code is easy to read and understand without needing to know Tailwind or Bootstrap

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` | The UI library — builds the component tree |
| `react-dom` | Renders React components into the browser |
| `vite` | Fast development server and build tool |
| `@vitejs/plugin-react` | Lets Vite understand React JSX syntax |

No other third-party libraries are used — everything (icons, copy logic, pagination) is built from scratch.

---

## 💡 How to Customise

**Change the stats card values** → Edit the `STATS` array in `src/components/StatsCards/StatsCards.jsx`

**Change the referral link/code** → Edit `REFERRAL_LINK` and `REFERRAL_CODE` constants at the top of `src/components/ReferralSection/ReferralSection.jsx`

**Change colours** → Edit the CSS variables inside `:root {}` in `src/index.css`

**Add more nav links** → Edit the `navLinks` array in `src/components/Navbar/Navbar.jsx`

---

## 👨‍💻 Built With

- [React 18](https://react.dev/)
- [Vite 4](https://vitejs.dev/)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)
- Figma Design: [React Assessment 1](https://www.figma.com/design/sEhmlKh4YsMaKl9J0yoDyL/React-Assessment-1)
