import { Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@gorth/primitive/lib/utils";
import { ThemeProvider } from "@/providers/theme";
import { ToasterProvider } from "@gorth/primitive/providers/toaster";
import { TooltipProvider } from "@gorth/primitive/default/tooltip";
import { Navbar } from "@/components/navbar";
import { portfolioConfig } from "@/configs/portfolio.config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,

  // added new keywords for seo
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/og-image.png`],
    creator: portfolioConfig.seo.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "light font-sans antialiased",
        fontMono.variable,
        inter.variable,
      )}
    >
      <body>
        <ThemeProvider
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          themes={["light"]}
        >
          <TooltipProvider>
            <main
              className={cn(
                "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#EC6683_1px,transparent_1px)] [background-size:16px_16px]",
                { "bg-white": "#E6E7EB" },
              )}
            >
              <Navbar />
              {children}
              <ToasterProvider />
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
