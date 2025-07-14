'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import ProductsPage from '@/components/ProductsPage'
import MGAsPage from '@/components/MGAsPage'
import ResourcesPage from '@/components/ResourcesPage'
import NewsPage from '@/components/NewsPage'
import SupportPage from '@/components/SupportPage'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'products':
        return <ProductsPage />
      case 'mgas':
        return <MGAsPage />
      case 'resources':
        return <ResourcesPage />
      case 'news':
        return <NewsPage />
      case 'support':
        return <SupportPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  )
} 