import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KinDNA — Family DNA Scanner | Compare Resemblance Feature by Feature",
  description:
    "Scan and compare body features between family members. Eyes, nose, ears, hands, feet — see your DNA connection with AI-powered resemblance scoring. Free family comparison tool.",
  keywords: [
    "DNA comparison",
    "family resemblance",
    "face comparison",
    "baby looks like",
    "who does my baby look like",
    "family DNA scanner",
    "resemblance app",
    "face DNA",
    "body comparison",
    "paternity resemblance",
  ],
  openGraph: {
    title: "KinDNA — See Your DNA Connection",
    description: "Scan body features and discover family resemblance with AI. Feature by feature. Head to toe.",
    url: "https://kindna.app",
    siteName: "KinDNA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KinDNA — Family DNA Scanner",
    description: "Scan. Compare. See your DNA connection.",
  },
  verification: {
    google: "utsHYzQrEbgCXI3_CWTL0kL4dh67-efxnhinzrdVPC0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}

