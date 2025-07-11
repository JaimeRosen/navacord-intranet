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
  Link
} from '@fluentui/react-components'
import { useState } from 'react'

interface Resource {
  id: string
  title: string
  category: string
  type: 'document' | 'video' | 'tool' | 'template' | 'guide'
  description: string
  tags: string[]
  lastUpdated: string
  author: string
  fileSize?: string
  downloadUrl?: string
  viewUrl?: string
}

export default function ResourcesPage() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Underwriting Guidelines - Commercial Property',
      category: 'Underwriting',
      type: 'document',
      description: 'Comprehensive underwriting guidelines for commercial property insurance, including risk assessment criteria and coverage limits.',
      tags: ['Commercial Property', 'Underwriting', 'Guidelines'],
      lastUpdated: '2024-01-15',
      author: 'Risk Management Team',
      fileSize: '2.3 MB',
      downloadUrl: '#'
    },
    {
      id: '2',
      title: 'Claims Processing Best Practices',
      category: 'Claims',
      type: 'guide',
      description: 'Step-by-step guide for efficient claims processing, including documentation requirements and approval workflows.',
      tags: ['Claims', 'Process', 'Best Practices'],
      lastUpdated: '2024-01-10',
      author: 'Claims Department',
      downloadUrl: '#'
    },
    {
      id: '3',
      title: 'New Employee Onboarding Training',
      category: 'Training',
      type: 'video',
      description: 'Comprehensive training video covering company policies, systems, and procedures for new employees.',
      tags: ['Training', 'Onboarding', 'HR'],
      lastUpdated: '2024-01-20',
      author: 'HR Department',
      viewUrl: '#'
    },
    {
      id: '4',
      title: 'Quote Calculator Tool',
      category: 'Tools',
      type: 'tool',
      description: 'Interactive tool for calculating insurance quotes based on risk factors and coverage options.',
      tags: ['Calculator', 'Quotes', 'Tool'],
      lastUpdated: '2024-01-05',
      author: 'IT Department',
      viewUrl: '#'
    },
    {
      id: '5',
      title: 'Client Presentation Template',
      category: 'Templates',
      type: 'template',
      description: 'Professional PowerPoint template for client presentations with Navacord branding and standard sections.',
      tags: ['Template', 'Presentation', 'Marketing'],
      lastUpdated: '2024-01-12',
      author: 'Marketing Team',
      fileSize: '1.8 MB',
      downloadUrl: '#'
    },
    {
      id: '6',
      title: 'Compliance Requirements Guide',
      category: 'Compliance',
      type: 'document',
      description: 'Updated guide covering all regulatory compliance requirements for insurance brokers in Canada.',
      tags: ['Compliance', 'Regulations', 'Legal'],
      lastUpdated: '2024-01-18',
      author: 'Legal Department',
      fileSize: '3.1 MB',
      downloadUrl: '#'
    },
    {
      id: '7',
      title: 'Product Knowledge Training Series',
      category: 'Training',
      type: 'video',
      description: 'Series of training videos covering all insurance products, features, and competitive advantages.',
      tags: ['Training', 'Products', 'Knowledge'],
      lastUpdated: '2024-01-08',
      author: 'Product Team',
      viewUrl: '#'
    },
    {
      id: '8',
      title: 'Risk Assessment Checklist',
      category: 'Underwriting',
      type: 'template',
      description: 'Comprehensive checklist for conducting thorough risk assessments across different insurance lines.',
      tags: ['Risk Assessment', 'Checklist', 'Underwriting'],
      lastUpdated: '2024-01-14',
      author: 'Risk Management Team',
      downloadUrl: '#'
    }
  ]

  const categories = [
    { key: 'all', name: 'All Resources' },
    { key: 'underwriting', name: 'Underwriting' },
    { key: 'claims', name: 'Claims' },
    { key: 'training', name: 'Training' },
    { key: 'tools', name: 'Tools' },
    { key: 'templates', name: 'Templates' },
    { key: 'compliance', name: 'Compliance' }
  ]

  const types = [
    { value: 'all', text: 'All Types' },
    { value: 'document', text: 'Documents' },
    { value: 'video', text: 'Videos' },
    { value: 'tool', text: 'Tools' },
    { value: 'template', text: 'Templates' },
    { value: 'guide', text: 'Guides' }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedTab === 'all' || resource.category.toLowerCase() === selectedTab
    const matchesType = selectedType === 'all' || resource.type === selectedType
    
    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'document':
        return <Badge appearance="filled" color="brand">Document</Badge>
      case 'video':
        return <Badge appearance="filled" color="success">Video</Badge>
      case 'tool':
        return <Badge appearance="filled" color="informative">Tool</Badge>
      case 'template':
        return <Badge appearance="filled" color="warning">Template</Badge>
      case 'guide':
        return <Badge appearance="filled" color="danger">Guide</Badge>
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600">Knowledge Base & Tools</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filters */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SearchBox
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e, newValue) => setSearchTerm(newValue || '')}
                />
                <Select
                  value={selectedType}
                  onChange={(e, data) => setSelectedType(data.value)}
                >
                  {types.map(type => (
                    <Option key={type.value} value={type.value}>
                      {type.text}
                    </Option>
                  ))}
                </Select>
                <div className="text-sm text-gray-600">
                  {filteredResources.length} resources found
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resource Categories */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">Resource Categories</Title3>
              <Tabs value={selectedTab} onTabSelect={(e, data) => setSelectedTab(data.value)}>
                <TabList>
                  {categories.map(category => (
                    <Tab key={category.key} value={category.key}>
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Resources Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Title3 className="mb-2">{resource.title}</Title3>
                      <Subtitle2 className="text-gray-600 mb-2">{resource.category}</Subtitle2>
                    </div>
                    {getTypeBadge(resource.type)}
                  </div>
                  
                  <Body1 className="mb-4">{resource.description}</Body1>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} appearance="tint" color="informative">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div>
                        <div>Updated: {formatDate(resource.lastUpdated)}</div>
                        <div>By: {resource.author}</div>
                      </div>
                      {resource.fileSize && (
                        <div>{resource.fileSize}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {resource.downloadUrl && (
                      <Button appearance="primary" className="navacord-bg-green">
                        Download
                      </Button>
                    )}
                    {resource.viewUrl && (
                      <Button appearance="outline">
                        View
                      </Button>
                    )}
                    <Button appearance="outline">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources Table */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">Resource Library</Title3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Resource</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Type</TableHeaderCell>
                    <TableHeaderCell>Tags</TableHeaderCell>
                    <TableHeaderCell>Updated</TableHeaderCell>
                    <TableHeaderCell>Actions</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredResources.map((resource) => (
                    <TableRow key={resource.id}>
                      <TableCell>
                        <div>
                          <div className="font-semibold">{resource.title}</div>
                          <div className="text-sm text-gray-600">{resource.description.substring(0, 80)}...</div>
                          <div className="text-sm text-gray-500">By: {resource.author}</div>
                        </div>
                      </TableCell>
                      <TableCell>{resource.category}</TableCell>
                      <TableCell>{getTypeBadge(resource.type)}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {resource.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} size="small" appearance="tint" color="informative">
                              {tag}
                            </Badge>
                          ))}
                          {resource.tags.length > 2 && (
                            <Badge size="small" appearance="tint" color="informative">
                              +{resource.tags.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {formatDate(resource.lastUpdated)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {resource.downloadUrl && (
                            <Button size="small" appearance="primary" className="navacord-bg-green">
                              Download
                            </Button>
                          )}
                          {resource.viewUrl && (
                            <Button size="small" appearance="outline">
                              View
                            </Button>
                          )}
                          <Button size="small" appearance="outline">
                            Details
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