'use client'

import { 
  Card, 
  CardContent, 
  Button, 
  Title3, 
  Body1,
  Subtitle2,
  Badge,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Tabs,
  Tab,
  TabList,
  TabValue,
  SearchBox,
  Select,
  Option,
  Avatar,
  AvatarGroup
} from '@fluentui/react-components'
import { useState } from 'react'

interface NewsItem {
  id: string
  title: string
  category: 'company' | 'industry' | 'regulatory' | 'product' | 'technology'
  type: 'announcement' | 'update' | 'article' | 'event'
  content: string
  excerpt: string
  author: string
  publishDate: string
  tags: string[]
  priority: 'high' | 'medium' | 'low'
  readTime?: string
  imageUrl?: string
}

export default function NewsPage() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Navacord Announces New Cyber Liability Product Launch',
      category: 'product',
      type: 'announcement',
      content: 'Navacord is excited to announce the launch of our comprehensive cyber liability insurance product, designed to protect businesses from evolving cyber threats and data breaches.',
      excerpt: 'New cyber liability product provides comprehensive protection for businesses against cyber threats and data breaches.',
      author: 'Product Development Team',
      publishDate: '2024-01-20',
      tags: ['Cyber Liability', 'Product Launch', 'Technology'],
      priority: 'high',
      readTime: '3 min read'
    },
    {
      id: '2',
      title: 'Industry Update: Regulatory Changes in Canadian Insurance Market',
      category: 'regulatory',
      type: 'update',
      content: 'Recent regulatory changes in the Canadian insurance market will impact how we conduct business and serve our clients. Key changes include updated compliance requirements and reporting standards.',
      excerpt: 'Important regulatory changes affecting the Canadian insurance market and compliance requirements.',
      author: 'Compliance Department',
      publishDate: '2024-01-18',
      tags: ['Regulations', 'Compliance', 'Market Update'],
      priority: 'high',
      readTime: '5 min read'
    },
    {
      id: '3',
      title: 'New Office Opening in Vancouver',
      category: 'company',
      type: 'announcement',
      content: 'Navacord is expanding its presence in Western Canada with a new office opening in Vancouver. This strategic expansion will enhance our ability to serve clients in the region.',
      excerpt: 'Strategic expansion with new office opening in Vancouver to better serve Western Canadian clients.',
      author: 'Executive Team',
      publishDate: '2024-01-15',
      tags: ['Expansion', 'Vancouver', 'Growth'],
      priority: 'medium',
      readTime: '2 min read'
    },
    {
      id: '4',
      title: 'Technology Innovation: AI-Powered Risk Assessment Tools',
      category: 'technology',
      type: 'article',
      content: 'Our technology team has developed new AI-powered risk assessment tools that will revolutionize how we evaluate and underwrite insurance risks. These tools provide more accurate assessments and faster processing times.',
      excerpt: 'AI-powered risk assessment tools developed to improve underwriting accuracy and efficiency.',
      author: 'Technology Team',
      publishDate: '2024-01-12',
      tags: ['AI', 'Technology', 'Risk Assessment'],
      priority: 'medium',
      readTime: '4 min read'
    },
    {
      id: '5',
      title: 'Industry Trends: Climate Change Impact on Insurance',
      category: 'industry',
      type: 'article',
      content: 'Climate change is significantly impacting the insurance industry, with increased frequency and severity of natural disasters. This article explores how insurers are adapting to these challenges.',
      excerpt: 'Analysis of how climate change is affecting the insurance industry and adaptation strategies.',
      author: 'Research Team',
      publishDate: '2024-01-10',
      tags: ['Climate Change', 'Industry Trends', 'Risk Management'],
      priority: 'medium',
      readTime: '6 min read'
    },
    {
      id: '6',
      title: 'Employee Spotlight: Sarah Johnson, Senior Underwriter',
      category: 'company',
      type: 'article',
      content: 'Meet Sarah Johnson, our Senior Underwriter who has been with Navacord for over 8 years. Learn about her journey, expertise, and contributions to our company success.',
      excerpt: 'Profile of Sarah Johnson, Senior Underwriter, highlighting her expertise and contributions.',
      author: 'HR Department',
      publishDate: '2024-01-08',
      tags: ['Employee Spotlight', 'Underwriting', 'Team'],
      priority: 'low',
      readTime: '3 min read'
    },
    {
      id: '7',
      title: 'Upcoming Webinar: Digital Transformation in Insurance',
      category: 'technology',
      type: 'event',
      content: 'Join us for an informative webinar on digital transformation in the insurance industry. Learn about emerging technologies and their impact on insurance operations.',
      excerpt: 'Webinar on digital transformation and emerging technologies in insurance.',
      author: 'Marketing Team',
      publishDate: '2024-01-05',
      tags: ['Webinar', 'Digital Transformation', 'Technology'],
      priority: 'medium',
      readTime: '1 min read'
    },
    {
      id: '8',
      title: 'Quarterly Financial Results: Strong Performance in Q4 2023',
      category: 'company',
      type: 'announcement',
      content: 'Navacord reports strong financial performance for Q4 2023, with significant growth in premium volume and client retention rates across all business lines.',
      excerpt: 'Strong Q4 2023 financial results with growth in premium volume and client retention.',
      author: 'Finance Department',
      publishDate: '2024-01-03',
      tags: ['Financial Results', 'Q4 2023', 'Growth'],
      priority: 'high',
      readTime: '4 min read'
    }
  ]

  const categories = [
    { key: 'all', name: 'All News' },
    { key: 'company', name: 'Company News' },
    { key: 'industry', name: 'Industry Updates' },
    { key: 'regulatory', name: 'Regulatory' },
    { key: 'product', name: 'Product Updates' },
    { key: 'technology', name: 'Technology' }
  ]

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesTab = selectedTab === 'all' || item.type === selectedTab
    
    return matchesSearch && matchesCategory && matchesTab
  })

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge appearance="filled" color="danger">High Priority</Badge>
      case 'medium':
        return <Badge appearance="filled" color="warning">Medium Priority</Badge>
      case 'low':
        return <Badge appearance="filled" color="success">Low Priority</Badge>
      default:
        return <Badge>{priority}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'announcement':
        return <Badge appearance="filled" color="brand">Announcement</Badge>
      case 'update':
        return <Badge appearance="filled" color="informative">Update</Badge>
      case 'article':
        return <Badge appearance="filled" color="success">Article</Badge>
      case 'event':
        return <Badge appearance="filled" color="warning">Event</Badge>
      default:
        return <Badge>{type}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600">Stay Informed with Latest Updates</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filters */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SearchBox
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e, newValue) => setSearchTerm(newValue || '')}
                />
                <Select
                  value={selectedCategory}
                  onChange={(e, data) => setSelectedCategory(data.value)}
                >
                  <Option value="all">All Categories</Option>
                  <Option value="company">Company News</Option>
                  <Option value="industry">Industry Updates</Option>
                  <Option value="regulatory">Regulatory</Option>
                  <Option value="product">Product Updates</Option>
                  <Option value="technology">Technology</Option>
                </Select>
                <div className="text-sm text-gray-600">
                  {filteredNews.length} articles found
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* News Categories */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">News Categories</Title3>
              <Tabs value={selectedTab} onTabSelect={(e, data) => setSelectedTab(data.value)}>
                <TabList>
                  <Tab value="all">All Types</Tab>
                  <Tab value="announcement">Announcements</Tab>
                  <Tab value="update">Updates</Tab>
                  <Tab value="article">Articles</Tab>
                  <Tab value="event">Events</Tab>
                </TabList>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Featured News */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">Featured News</Title3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredNews.filter(item => item.priority === 'high').slice(0, 2).map((item) => (
                  <Card key={item.id} className="border-2 border-green-200">
                    <CardContent>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Title3 className="mb-2">{item.title}</Title3>
                          <div className="flex gap-2 mb-2">
                            {getTypeBadge(item.type)}
                            {getPriorityBadge(item.priority)}
                          </div>
                        </div>
                      </div>
                      
                      <Body1 className="mb-4">{item.excerpt}</Body1>
                      
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <div>By: {item.author}</div>
                        <div>{formatDate(item.publishDate)}</div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button appearance="primary" className="navacord-bg-green">
                          Read More
                        </Button>
                        <Button appearance="outline">
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* News Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Title3 className="mb-2">{item.title}</Title3>
                      <div className="flex gap-2 mb-2">
                        {getTypeBadge(item.type)}
                        {getPriorityBadge(item.priority)}
                      </div>
                    </div>
                  </div>
                  
                  <Body1 className="mb-4">{item.excerpt}</Body1>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} appearance="tint" color="informative">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div>
                        <div>By: {item.author}</div>
                        <div>{formatDate(item.publishDate)}</div>
                      </div>
                      {item.readTime && (
                        <div>{item.readTime}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button appearance="primary" className="navacord-bg-green">
                      Read More
                    </Button>
                    <Button appearance="outline">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* News Table */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">News Archive</Title3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Article</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Type</TableHeaderCell>
                    <TableHeaderCell>Priority</TableHeaderCell>
                    <TableHeaderCell>Published</TableHeaderCell>
                    <TableHeaderCell>Actions</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredNews.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.excerpt}</div>
                          <div className="text-sm text-gray-500">By: {item.author}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge appearance="tint" color="brand">
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{getTypeBadge(item.type)}</TableCell>
                      <TableCell>{getPriorityBadge(item.priority)}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {formatDate(item.publishDate)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="small" appearance="primary" className="navacord-bg-green">
                            Read
                          </Button>
                          <Button size="small" appearance="outline">
                            Share
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 