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
  TabValue
} from '@fluentui/react-components'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  targetIndustries: string[]
  status: 'active' | 'pending' | 'discontinued'
}

export default function ProductsPage() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('all')

  const products: Product[] = [
    {
      id: '1',
      name: 'Commercial Property',
      category: 'Property & Casualty',
      description: 'Comprehensive property coverage for commercial buildings, equipment, and business interruption.',
      features: ['Building coverage', 'Business interruption', 'Equipment breakdown', 'Natural disaster protection'],
      targetIndustries: ['Manufacturing', 'Retail', 'Healthcare', 'Technology'],
      status: 'active'
    },
    {
      id: '2',
      name: 'General Liability',
      category: 'Property & Casualty',
      description: 'Protection against third-party claims for bodily injury, property damage, and personal injury.',
      features: ['Bodily injury coverage', 'Property damage', 'Personal injury', 'Advertising injury'],
      targetIndustries: ['Service industries', 'Construction', 'Healthcare', 'Retail'],
      status: 'active'
    },
    {
      id: '3',
      name: 'Workers Compensation',
      category: 'Employee Benefits',
      description: 'Coverage for work-related injuries and illnesses, including medical expenses and lost wages.',
      features: ['Medical expenses', 'Lost wages', 'Rehabilitation', 'Death benefits'],
      targetIndustries: ['Construction', 'Manufacturing', 'Healthcare', 'Transportation'],
      status: 'active'
    },
    {
      id: '4',
      name: 'Cyber Liability',
      category: 'Specialty Lines',
      description: 'Protection against cyber threats, data breaches, and technology-related risks.',
      features: ['Data breach response', 'Cyber extortion', 'Business interruption', 'Regulatory fines'],
      targetIndustries: ['Technology', 'Healthcare', 'Financial Services', 'Retail'],
      status: 'active'
    },
    {
      id: '5',
      name: 'Professional Liability',
      category: 'Specialty Lines',
      description: 'Errors and omissions coverage for professional services and advice.',
      features: ['Professional negligence', 'Defense costs', 'Settlement coverage', 'Prior acts'],
      targetIndustries: ['Legal', 'Healthcare', 'Technology', 'Consulting'],
      status: 'active'
    },
    {
      id: '6',
      name: 'Directors & Officers',
      category: 'Specialty Lines',
      description: 'Protection for company directors and officers against personal liability claims.',
      features: ['Personal liability', 'Defense costs', 'Settlement coverage', 'Regulatory actions'],
      targetIndustries: ['All industries'],
      status: 'active'
    }
  ]

  const categories = [
    { key: 'all', name: 'All Products' },
    { key: 'property-casualty', name: 'Property & Casualty' },
    { key: 'employee-benefits', name: 'Employee Benefits' },
    { key: 'specialty-lines', name: 'Specialty Lines' }
  ]

  const filteredProducts = selectedTab === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === selectedTab)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge appearance="filled" color="success">Active</Badge>
      case 'pending':
        return <Badge appearance="filled" color="warning">Pending</Badge>
      case 'discontinued':
        return <Badge appearance="filled" color="danger">Discontinued</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Products</h1>
          <p className="text-xl text-gray-600">Comprehensive Insurance Solutions</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Product Categories */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">Product Categories</Title3>
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

        {/* Products Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Title3 className="mb-2">{product.name}</Title3>
                      <Subtitle2 className="text-gray-600 mb-2">{product.category}</Subtitle2>
                    </div>
                    {getStatusBadge(product.status)}
                  </div>
                  
                  <Body1 className="mb-4">{product.description}</Body1>
                  
                  <div className="mb-4">
                    <Subtitle2 className="mb-2">Key Features:</Subtitle2>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} appearance="tint" color="brand">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Subtitle2 className="mb-2">Target Industries:</Subtitle2>
                    <div className="flex flex-wrap gap-2">
                      {product.targetIndustries.map((industry, index) => (
                        <Badge key={index} appearance="tint" color="informative">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button appearance="primary" className="navacord-bg-green">
                      View Details
                    </Button>
                    <Button appearance="outline">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Comparison Table */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">Product Comparison</Title3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Product</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Target Industries</TableHeaderCell>
                    <TableHeaderCell>Actions</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div>
                          <div className="font-semibold">{product.name}</div>
                          <div className="text-sm text-gray-600">{product.description.substring(0, 100)}...</div>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {product.targetIndustries.slice(0, 2).map((industry, index) => (
                            <Badge key={index} size="small" appearance="tint" color="informative">
                              {industry}
                            </Badge>
                          ))}
                          {product.targetIndustries.length > 2 && (
                            <Badge size="small" appearance="tint" color="informative">
                              +{product.targetIndustries.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="small" appearance="primary" className="navacord-bg-green">
                            Details
                          </Button>
                          <Button size="small" appearance="outline">
                            Quote
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