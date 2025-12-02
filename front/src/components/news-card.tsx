import { formatDistanceToNow } from "date-fns"
import { ExternalLink, Clock, Newspaper } from "lucide-react"

interface Article {
  title: string
  link: string
  published: string | null
  source: string
}

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  const sourceColors: Record<string, { bg: string; text: string; accent: string }> = {
    BBC: { bg: "from-red-600 to-red-700", text: "text-red-400", accent: "bg-red-500/20" },
    CNN: { bg: "from-red-700 to-red-800", text: "text-red-400", accent: "bg-red-500/20" },
    Reuters: { bg: "from-orange-600 to-orange-700", text: "text-orange-400", accent: "bg-orange-500/20" },
    "Al Jazeera": { bg: "from-purple-600 to-purple-700", text: "text-purple-400", accent: "bg-purple-500/20" },
  }

  const getSourceColor = (source: string) =>
    sourceColors[source] || { bg: "from-blue-600 to-blue-700", text: "text-blue-400", accent: "bg-blue-500/20" }

  const colors = getSourceColor(article.source)

  const publishedDate = article.published ? new Date(article.published) : null
  const timeAgo =
    publishedDate && !isNaN(publishedDate.getTime())
      ? formatDistanceToNow(publishedDate, { addSuffix: true })
      : "Unknown time"

  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer" className="group h-full block">
      <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 flex flex-col">

        <div className={`bg-gradient-to-r ${colors.bg} p-3 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4" />
            <span className="font-bold text-sm">{article.source}</span>
          </div>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-slate-100 line-clamp-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
            {article.title}
          </h3>

          <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            {timeAgo}
          </div>
        </div>
      </div>
    </a>
  )
}
