import "./globals.css";

export const metadata = {
  title: "Improving Deploy Previews with the new Xata workflow",
  description:
    "Together we will add a new feature to our Next.JS application. Using Xata, we will add likes to our Posts, submit a PR, view our changes in the Deploy Preview and feel the power of git-like data branches that safely move your production data into a new preview branch! ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
