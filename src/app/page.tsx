
export default function Home() {
  return (
    <div className="p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-semibold">Welcome to the News App</h1>
        <p className="text-lg mt-2">Stay updated with the latest headlines from around the world.</p>
      </header>

      <section className="mt-6 text-center">
        <h2 className="text-2xl font-semibold">Explore the Latest News</h2>
        <p className="mt-2">Browse through various categories and discover top stories.</p>
        <div className="mt-4">
          {/* <Link href="/news" className="text-blue-500 hover:text-blue-700">
            Go to News Section
          </Link> */}
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">Feedback</h2>
        <p className="mt-2">We value your opinion! Let us know your thoughts about the app.</p>
        <div className="mt-4">
          {/* <Link href="/feedback" className="text-blue-500 hover:text-blue-700">
            Give Feedback
          </Link> */}
        </div>
      </section>
    </div>
  );
}
