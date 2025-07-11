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
  Textarea,
  Input,
  Label,
  Field
} from '@fluentui/react-components'
import { useState } from 'react'

interface SupportTicket {
  id: string
  title: string
  category: 'technical' | 'product' | 'billing' | 'general'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  description: string
  submittedBy: string
  submittedDate: string
  assignedTo?: string
  lastUpdated: string
}

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

export default function SupportPage() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('help')
  const [searchTerm, setSearchTerm] = useState('')
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [ticketForm, setTicketForm] = useState({
    title: '',
    category: 'general',
    priority: 'medium',
    description: ''
  })

  const supportTickets: SupportTicket[] = [
    {
      id: '1',
      title: 'Unable to access SharePoint documents',
      category: 'technical',
      priority: 'high',
      status: 'in-progress',
      description: 'I am unable to access certain SharePoint documents that I should have permission to view. This is affecting my ability to complete underwriting tasks.',
      submittedBy: 'John Smith',
      submittedDate: '2024-01-20',
      assignedTo: 'IT Support',
      lastUpdated: '2024-01-21'
    },
    {
      id: '2',
      title: 'Product information not loading in system',
      category: 'product',
      priority: 'medium',
      status: 'open',
      description: 'When trying to access product information in the system, the pages are not loading properly. This happens consistently across different browsers.',
      submittedBy: 'Sarah Johnson',
      submittedDate: '2024-01-19',
      lastUpdated: '2024-01-19'
    },
    {
      id: '3',
      title: 'Billing inquiry for client account',
      category: 'billing',
      priority: 'low',
      status: 'resolved',
      description: 'Need clarification on billing charges for client account #12345. The charges seem to be higher than expected.',
      submittedBy: 'Mike Chen',
      submittedDate: '2024-01-15',
      assignedTo: 'Billing Team',
      lastUpdated: '2024-01-18'
    }
  ]

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". You will receive an email with a link to reset your password. If you continue to have issues, contact IT Support.',
      category: 'Account Management',
      tags: ['Password', 'Login', 'Security']
    },
    {
      id: '2',
      question: 'How do I submit a new insurance quote?',
      answer: 'To submit a new quote, navigate to the Products section, select the appropriate product, and use the quote calculator tool. Fill in all required information and submit through the system.',
      category: 'Products',
      tags: ['Quotes', 'Products', 'Calculator']
    },
    {
      id: '3',
      question: 'What are the system requirements for the intranet?',
      answer: 'The intranet works best with Chrome, Firefox, Safari, or Edge browsers. JavaScript must be enabled, and you need a stable internet connection. For optimal performance, use a modern browser version.',
      category: 'Technical',
      tags: ['System Requirements', 'Browser', 'Performance']
    },
    {
      id: '4',
      question: 'How do I contact an MGA?',
      answer: 'You can find MGA contact information in the MGAs section. Use the search and filter options to find the right MGA for your needs. Each MGA profile includes contact details and specialties.',
      category: 'MGAs',
      tags: ['Contact', 'MGAs', 'Partnership']
    },
    {
      id: '5',
      question: 'Where can I find training materials?',
      answer: 'Training materials are available in the Resources section under the Training category. You can filter by type (video, document, guide) and search for specific topics.',
      category: 'Training',
      tags: ['Training', 'Resources', 'Learning']
    },
    {
      id: '6',
      question: 'How do I report a system issue?',
      answer: 'To report a system issue, use the "Submit Ticket" button on this Support page. Provide detailed information about the problem, including steps to reproduce and any error messages.',
      category: 'Technical',
      tags: ['Support', 'Issues', 'Tickets']
    }
  ]

  const contactInfo = [
    {
      department: 'IT Support',
      phone: '(555) 123-4567',
      email: 'itsupport@navacord.com',
      hours: 'Mon-Fri 8:00 AM - 6:00 PM EST'
    },
    {
      department: 'Product Support',
      phone: '(555) 234-5678',
      email: 'productsupport@navacord.com',
      hours: 'Mon-Fri 9:00 AM - 5:00 PM EST'
    },
    {
      department: 'Billing Support',
      phone: '(555) 345-6789',
      email: 'billing@navacord.com',
      hours: 'Mon-Fri 8:30 AM - 5:30 PM EST'
    },
    {
      department: 'General Inquiries',
      phone: '(555) 456-7890',
      email: 'info@navacord.com',
      hours: 'Mon-Fri 9:00 AM - 5:00 PM EST'
    }
  ]

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge appearance="filled" color="danger">Urgent</Badge>
      case 'high':
        return <Badge appearance="filled" color="danger">High</Badge>
      case 'medium':
        return <Badge appearance="filled" color="warning">Medium</Badge>
      case 'low':
        return <Badge appearance="filled" color="success">Low</Badge>
      default:
        return <Badge>{priority}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge appearance="filled" color="danger">Open</Badge>
      case 'in-progress':
        return <Badge appearance="filled" color="warning">In Progress</Badge>
      case 'resolved':
        return <Badge appearance="filled" color="success">Resolved</Badge>
      case 'closed':
        return <Badge appearance="filled" color="informative">Closed</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const handleSubmitTicket = () => {
    // TODO: Implement ticket submission logic
    console.log('Submitting ticket:', ticketForm)
    setShowTicketForm(false)
    setTicketForm({
      title: '',
      category: 'general',
      priority: 'medium',
      description: ''
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Support</h1>
          <p className="text-xl text-gray-600">Help & Resources</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Support Categories */}
        <section className="mb-8">
          <Card>
            <CardContent>
              <Title3 className="mb-4">Support Categories</Title3>
              <Tabs value={selectedTab} onTabSelect={(e, data) => setSelectedTab(data.value)}>
                <TabList>
                  <Tab value="help">Help Center</Tab>
                  <Tab value="tickets">Support Tickets</Tab>
                  <Tab value="contact">Contact Information</Tab>
                </TabList>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Help Center */}
        {selectedTab === 'help' && (
          <section className="mb-8">
            <Card>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <Title3>Frequently Asked Questions</Title3>
                  <Button 
                    appearance="primary" 
                    className="navacord-bg-green"
                    onClick={() => setShowTicketForm(true)}
                  >
                    Submit Ticket
                  </Button>
                </div>
                
                <SearchBox
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e, newValue) => setSearchTerm(newValue || '')}
                  className="mb-6"
                />

                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <Card key={faq.id} className="hover:shadow-md transition-shadow">
                      <CardContent>
                        <div className="mb-3">
                          <Title3 className="mb-2">{faq.question}</Title3>
                          <div className="flex gap-2 mb-3">
                            <Badge appearance="tint" color="brand">{faq.category}</Badge>
                            {faq.tags.map((tag, index) => (
                              <Badge key={index} appearance="tint" color="informative">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Body1>{faq.answer}</Body1>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Support Tickets */}
        {selectedTab === 'tickets' && (
          <section className="mb-8">
            <Card>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <Title3>Support Tickets</Title3>
                  <Button 
                    appearance="primary" 
                    className="navacord-bg-green"
                    onClick={() => setShowTicketForm(true)}
                  >
                    New Ticket
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>Ticket</TableHeaderCell>
                      <TableHeaderCell>Category</TableHeaderCell>
                      <TableHeaderCell>Priority</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                      <TableHeaderCell>Submitted</TableHeaderCell>
                      <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {supportTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell>
                          <div>
                            <div className="font-semibold">{ticket.title}</div>
                            <div className="text-sm text-gray-600">{ticket.description.substring(0, 80)}...</div>
                            <div className="text-sm text-gray-500">By: {ticket.submittedBy}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge appearance="tint" color="brand">
                            {ticket.category.charAt(0).toUpperCase() + ticket.category.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                        <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {formatDate(ticket.submittedDate)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="small" appearance="primary" className="navacord-bg-green">
                              View
                            </Button>
                            <Button size="small" appearance="outline">
                              Update
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
        )}

        {/* Contact Information */}
        {selectedTab === 'contact' && (
          <section className="mb-8">
            <Card>
              <CardContent>
                <Title3 className="mb-6">Contact Information</Title3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent>
                        <Title3 className="mb-3">{contact.department}</Title3>
                        <div className="space-y-2 text-sm">
                          <div><strong>Phone:</strong> {contact.phone}</div>
                          <div><strong>Email:</strong> {contact.email}</div>
                          <div><strong>Hours:</strong> {contact.hours}</div>
                        </div>
                        <Button appearance="primary" className="navacord-bg-green mt-4">
                          Contact
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Ticket Form Modal */}
        {showTicketForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl mx-4">
              <CardContent>
                <Title3 className="mb-6">Submit Support Ticket</Title3>
                
                <div className="space-y-4">
                  <Field label="Title">
                    <Input
                      value={ticketForm.title}
                      onChange={(e, data) => setTicketForm({...ticketForm, title: data.value})}
                      placeholder="Brief description of the issue"
                    />
                  </Field>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Category">
                      <Select
                        value={ticketForm.category}
                        onChange={(e, data) => setTicketForm({...ticketForm, category: data.value})}
                      >
                        <Option value="technical">Technical</Option>
                        <Option value="product">Product</Option>
                        <Option value="billing">Billing</Option>
                        <Option value="general">General</Option>
                      </Select>
                    </Field>
                    
                    <Field label="Priority">
                      <Select
                        value={ticketForm.priority}
                        onChange={(e, data) => setTicketForm({...ticketForm, priority: data.value})}
                      >
                        <Option value="low">Low</Option>
                        <Option value="medium">Medium</Option>
                        <Option value="high">High</Option>
                        <Option value="urgent">Urgent</Option>
                      </Select>
                    </Field>
                  </div>
                  
                  <Field label="Description">
                    <Textarea
                      value={ticketForm.description}
                      onChange={(e, data) => setTicketForm({...ticketForm, description: data.value})}
                      placeholder="Please provide detailed information about your issue..."
                      rows={5}
                    />
                  </Field>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <Button appearance="primary" className="navacord-bg-green" onClick={handleSubmitTicket}>
                    Submit Ticket
                  </Button>
                  <Button appearance="outline" onClick={() => setShowTicketForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
} 