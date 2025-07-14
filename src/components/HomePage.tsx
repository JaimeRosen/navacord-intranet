'use client'

import { 
  Card, 
  CardHeader, 
  CardPreview, 
  CardContent,
  Button,
  Text,
  Title3,
  Subtitle2,
  Body1
} from '@fluentui/react-components'

export default function HomePage() {
  const corporateStructureItems = [
    {
      title: 'Leadership Team',
      description: 'Meet our executive leadership and their key responsibilities in driving our strategic vision.',
      icon: '👥'
    },
    {
      title: 'Regional Offices',
      description: 'Discover our office locations across North America and the services each location provides.',
      icon: '🏢'
    },
    {
      title: 'Department Directory',
      description: 'Find contact information and organizational structure for all departments within Navacord.',
      icon: '📋'
    },
    {
      title: 'Compliance Structure',
      description: 'Understanding our compliance framework and reporting structures across all business units.',
      icon: '⚖️'
    },
    {
      title: 'Innovation Hub',
      description: 'Learn about our technology initiatives and digital transformation projects.',
      icon: '💡'
    },
    {
      title: 'Partnership Network',
      description: 'Explore our strategic partnerships and collaborative relationships in the industry.',
      icon: '🤝'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Navacord</h1>
          <p className="text-xl text-gray-600">NUS Intranet</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <section className="mb-16">
          <Card className="mb-8">
            <CardContent>
              <div className="flex items-center gap-8">
                <div className="w-80 h-48 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <Title3>Introduction to the Intranet</Title3>
                  <Body1 className="mt-4">
                    Your comprehensive portal for accessing all essential resources, documents, and tools. 
                    Find everything you need to support your daily operations and stay connected with the latest updates.
                  </Body1>
                  <Body1 className="mt-2">
                    Access underwriting guidelines, product information, MGA resources, and stay informed about 
                    company news and regulatory changes.
                  </Body1>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Corporate Structure */}
        <section className="mb-16">
          <Title3 className="text-3xl mb-8">Corporate Structure</Title3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateStructureItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <Subtitle2 className="mb-2">{item.title}</Subtitle2>
                    <Body1 className="text-gray-600">{item.description}</Body1>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <Card>
            <CardContent>
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <Title3>Products</Title3>
                  <Body1 className="mt-4">
                    Explore our comprehensive insurance product portfolio designed to meet diverse client needs 
                    across multiple industries and risk profiles.
                  </Body1>
                  <Body1 className="mt-2">
                    From property and casualty to specialty lines, access detailed product information, 
                    underwriting guidelines, and competitive advantages.
                  </Body1>
                  <Button appearance="primary" className="mt-4 navacord-bg-green">
                    Learn More
                  </Button>
                </div>
                <div className="w-80 h-48 bg-gray-200 rounded-lg flex-shrink-0"></div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 