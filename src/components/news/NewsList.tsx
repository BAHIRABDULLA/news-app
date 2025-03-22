"use client"

import fetchNews from '@/lib/newsService'
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import {
  Pagination, PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const NewsList = ({ viewMode }: { viewMode: string }) => {
  console.log(viewMode, 'view mode in new lsigt')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchNews()
      setNews(newsData)
      setLoading(false)
    }
    getNews()
  }, [])

  if (loading) {
    return <div>Loading....</div>
  }

  const totalPages = Math.ceil(news.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedNews = news.slice(startIndex, endIndex)

  return (
    <div>
      <div className={viewMode == 'card' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : ''}>
        {displayedNews.map((article, index) => (
          <NewsCard key={index} article={article} viewMode={viewMode} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pb-6 pt-2 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={currentPage > 1 ? "#" : undefined}
                onClick={currentPage > 1 ? () => setCurrentPage((prev) => prev - 1) : undefined}
                className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={currentPage < totalPages ? "#" : undefined}
                onClick={currentPage < totalPages ? () => setCurrentPage((prev) => prev + 1) : undefined}
                className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default NewsList