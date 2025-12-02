import { useState, useEffect } from "react"
import { NewsCard } from "./news-card"

interface Article {
  title: string
  link: string
  published: string | null
  source: string
}

export function NewsGrid() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSource, setSelectedSource] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const res = await fetch("/api/news")
        if (!res.ok) throw new Error("Failed to fetch news")

        const data: Article[] = await res.json() // tell TS the type
        setArticles(data)
        setError(null)
      } catch (err: unknown) {
        // TypeScript doesn't know the type of err
        setError(err instanceof Error ? err.message : "Unknown error")
        setArticles([])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
    const interval = setInterval(fetchNews, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const sources = [...new Set(articles.map((a) => a.source))]
  const filtered = selectedSource ? articles.filter((a) => a.source === selectedSource) : articles

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-96">
        <div className="animate-spin w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full"></div>
        <p className="text-slate-400 mt-4">Loading fresh news...</p>
      </div>
    )

  if (error)
    return (
      <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-center">
        <p className="text-red-400">Error loading news: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    )

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedSource(null)}
          className={`px-4 py-2 rounded-full transition-all ${
            selectedSource === null
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          All Sources
        </button>

        {sources.map((source) => (
          <button
            key={source}
            onClick={() => setSelectedSource(source)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedSource === source
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {source}
          </button>
        ))}
      </div>

      <div className="text-sm text-slate-400">
        Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filtered.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-400">No articles found.</div>
      )}
    </div>
  )
}
