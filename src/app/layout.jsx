// #region ============================== Imports

// components
import Preloader from "@/components/_SECTIONS/0_Preloader/Preloader";

// fonts
import { font } from "@/lib/helpers/importFonts";

// providers / context
import { MenuStateProvider } from "@/providers/MenuStateProvider/MenuStateProvider";
import {
  AboutActiveItemProvider,
  PortfolioActiveItemProvider,
} from "@/providers/ActiveItemProvider/ActiveItemProvider";

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
      <body>
        <Preloader />
        <MenuStateProvider>
          <AboutActiveItemProvider>
            <PortfolioActiveItemProvider>
              {children}
            </PortfolioActiveItemProvider>
          </AboutActiveItemProvider>
        </MenuStateProvider>
      </body>
    </html>
  );
}
