// app/head.tsx
export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />

      {/* Cache‑busted favicon */}
      <link rel="icon" href="/nanotechnology.png?v=4" type="image/png" />
      <link rel="apple-touch-icon" href="/nanotechnology.png?v=4" />
      <link
        rel="shortcut icon"
        href="/nanotechnology.png?v=4"
        type="image/png"
      />

      <link rel="manifest" href="/site.webmanifest" />

      {/* Your JSON‑LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ganiyu Mubarak",
            url: "https://gamak-07.vercel.app",
            image: "https://gamak-07.vercel.app/preview.png",
            sameAs: [
              "https://github.com/gamak07",
              "https://www.linkedin.com/in/ganiyu-mubarak/",
            ],
            jobTitle: "Frontend Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          }),
        }}
      />
    </>
  );
}
