// #region ============================== Imports

// fonts
import { font } from "@/lib/helpers/importFonts";

// styles
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/fonts.css";
import "@/styles/tokens/tokens.colors.css";
import "@/styles/tokens/tokens.spacing.css";
import "@/styles/tokens/tokens.fonts.css";

// #endregion ===========================

export const metadata = {
  title: "Forge",
  description: "Precision CNC Parts Shipped as Fast as Tomorrow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
