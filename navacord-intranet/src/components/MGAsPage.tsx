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
  Persona,
  PersonaSize,
  SearchBox,
  Select,
  Option
} from '@fluentui/react-components'
import { useState } from 'react'

interface MGA {
  id: string
  name: string
  contact: {
    name: string
    email: string
    phone: string
    region: string
  }
  specialties: string[]
  products: string[]
  status: 'active' | 'pending' | 'inactive'
  rating: number
  description: string
}

export default function MGAsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  const mgas: MGA[] = [
    {
      id: '1',
      name: 'Alpha Risk Solutions',
      contact: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@alpharisk.com',
        phone: '(555) 123-4567',
        region: 'Western Canada'
      },
      specialties: ['Construction', 'Manufacturing', 'Technology'],
      products: ['General Liability', 'Workers Compensation', 'Cyber Liability'],
      status: 'active',
      rating: 4.8,
      description: 'Specialized in construction and manufacturing risks with extensive experience in complex projects.'
    },
    {
      id: '2',
      name: 'Beta Insurance Group',
      contact: {
        name: 'Michael Chen',
        email: 'mchen@betainsurance.com',
        phone: '(555) 234-5678',
        region: 'Eastern Canada'
      },
      specialties: ['Healthcare', 'Professional Services', 'Financial Services'],
      products: ['Professional Liability', 'Directors & Officers', 'Cyber Liability'],
      status: 'active',
      rating: 4.6,
      description: 'Leading provider of professional liability coverage for healthcare and financial services sectors.'
    },
    {
      id: '3',
      name: 'Gamma Risk Management',
      contact: {
        name: 'Emily Rodriguez',
        email: 'erodriguez@gammarisk.com',
        phone: '(555) 345-6789',
        region: 'Central Canada'
      },
      specialties: ['Transportation', 'Logistics', 'Retail'],
      products: ['Commercial Auto', 'General Liability', 'Property'],
      status: 'active',
      rating: 4.4,
      description: 'Expert in transportation and logistics insurance with nationwide coverage capabilities.'
    },
    {
      id: '4',
      name: 'Delta Specialty Insurance',
      contact: {
        name: 'David Thompson',
        email: 'dthompson@deltaspecialty.com',
        phone: '(555) 456-7890',
        region: 'Western Canada'
      },
      specialties: ['Energy', 'Mining', 'Environmental'],
      products: ['Environmental Liability', 'Property', 'General Liability'],
      status: 'active',
      rating: 4.7,
      description: 'Specialized in energy and environmental risks with innovative coverage solutions.'
    },
    {
      id: '5',
      name: 'Epsilon Insurance Partners',
      contact: {
        name: 'Lisa Wang',
        email: 'lwang@epsilonpartners.com',
        phone: '(555) 567-8901',
        region: 'Eastern Canada'
      },
      specialties: ['Technology', 'Startups', 'E-commerce'],
      products: ['Cyber Liability', 'Professional Liability', 'Directors & Officers'],
      status: 'active',
      rating: 4.9,
      description: 'Technology-focused MGA providing innovative solutions for startups and digital businesses.'
    }
  ]

  const regions = [
    { value: 'all', text: 'All Regions' },
    { value: 'Western Canada', text: 'Western Canada' },
    { value: 'Eastern Canada', text: 'Eastern Canada' },
    { value: 'Central Canada', text: 'Central Canada' }
  ]

  const specialties = [
    { value: 'all', text: 'All Specialties' },
    { value: 'Construction', text: 'Construction' },
    { value: 'Healthcare', text: 'Healthcare' },
    { value: 'Technology', text: 'Technology' },
    { value: 'Transportation', text: 'Transportation' },
    { value: 'Energy', text: 'Energy' },
    { value: 'Manufacturing', text: 'Manufacturing' },
    { value: 'Financial Services', text: 'Financial Services' }
  ]

  const filteredMGAs = mgas.filter(mga => {
    const matchesSearch = mga.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mga.contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || mga.contact.region === selectedRegion
    const matchesSpecialty = selectedSpecialty === 'all' || mga.specialties.includes(selectedSpecialty)
    
    return matchesSearch && matchesRegion && matchesSpecialty
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge appearance="filled" color="success">Active</Badge>
      case 'pending':
        return <Badge appearance="filled" color="warning">Pending</Badge>
      case 'inactive':
        return <Badge appearance="filled" color="danger">Inactive</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getRatingStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Managing General Agents</h1>
          <p className="text-xl text-gray-600">Strategic Partners in Risk Management</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filters */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SearchBox
                  placeholder="Search MGAs..."
                  value={searchTerm}
                  onChange={(e, newValue) => setSearchTerm(newValue || '')}
                />
                <Select
                  value={selectedRegion}
                  onChange={(e, data) => setSelectedRegion(data.value)}
                >
                  {regions.map(region => (
                    <Option key={region.value} value={region.value}>
                      {region.text}
                    </Option>
                  ))}
                </Select>
                <Select
                  value={selectedSpecialty}
                  onChange={(e, data) => setSelectedSpecialty(data.value)}
                >
                  {specialties.map(specialty => (
                    <Option key={specialty.value} value={specialty.value}>
                      {specialty.text}
                    </Option>
                  ))}
                </Select>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* MGAs Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMGAs.map((mga) => (
              <Card key={mga.id} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Persona
                        size={PersonaSize.size40}
                        name={mga.name}
                        text={mga.name}
                      />
                      <div>
                        <Title3 className="mb-1">{mga.name}</Title3>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500">{getRatingStars(mga.rating)}</span>
                          <span className="text-sm text-gray-600">({mga.rating})</span>
                        </div>
                      </div>
                    </div>
                    {getStatusBadge(mga.status)}
                  </div>
                  
                  <Body1 className="mb-4">{mga.description}</Body1>
                  
                  <div className="mb-4">
                    <Subtitle2 className="mb-2">Specialties:</Subtitle2>
                    <div className="flex flex-wrap gap-2">
                      {mga.specialties.map((specialty, index) => (
                        <Badge key={index} appearance="tint" color="brand">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Subtitle2 className="mb-2">Products:</Subtitle2>
                    <div className="flex flex-wrap gap-2">
                      {mga.products.map((product, index) => (
                        <Badge key={index} appearance="tint" color="informative">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <Subtitle2 className="mb-2">Primary Contact:</Subtitle2>
                    <div className="text-sm">
                      <div><strong>{mga.contact.name}</strong></div>
                      <div className="text-gray-600">{mga.contact.email}</div>
                      <div className="text-gray-600">{mga.contact.phone}</div>
                      <div className="text-gray-600">{mga.contact.region}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button appearance="primary" className="navacord-bg-green">
                      Contact MGA
                    </Button>
                    <Button appearance="outline">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* MGAs Table */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">MGA Directory</Title3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>MGA</TableHeaderCell>
                    <TableHeaderCell>Contact</TableHeaderCell>
                    <TableHeaderCell>Region</TableHeaderCell>
                    <TableHeaderCell>Specialties</TableHeaderCell>
                    <TableHeaderCell>Rating</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Actions</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMGAs.map((mga) => (
                    <TableRow key={mga.id}>
                      <TableCell>
                        <div>
                          <div className="font-semibold">{mga.name}</div>
                          <div className="text-sm text-gray-600">{mga.description.substring(0, 80)}...</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div><strong>{mga.contact.name}</strong></div>
                          <div>{mga.contact.email}</div>
                          <div>{mga.contact.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>{mga.contact.region}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {mga.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} size="small" appearance="tint" color="brand">
                              {specialty}
                            </Badge>
                          ))}
                          {mga.specialties.length > 2 && (
                            <Badge size="small" appearance="tint" color="brand">
                              +{mga.specialties.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500 text-sm">{getRatingStars(mga.rating)}</span>
                          <span className="text-sm">({mga.rating})</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(mga.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="small" appearance="primary" className="navacord-bg-green">
                            Contact
                          </Button>
                          <Button size="small" appearance="outline">
                            Profile
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