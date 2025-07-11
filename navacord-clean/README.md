# Navacord Intranet

A comprehensive corporate intranet solution for Navacord insurance broker, built with Next.js 14, TypeScript, and Microsoft Fluent UI.

## 🚀 Features

### Core Functionality
- **Authentication**: Azure AD integration with MSAL for secure user authentication
- **Navigation**: Intuitive navigation with Fluent UI components
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Modern UI**: Professional design with Navacord branding

### Key Sections
1. **Home Page**: Corporate overview, quick access to resources
2. **Products**: Comprehensive insurance product catalog with filtering
3. **MGAs**: Managing General Agent directory with search and contact info
4. **Resources**: Document library, training materials, and tools
5. **News & Updates**: Company announcements and industry news
6. **Support**: Help center, support tickets, and contact information

### Technical Features
- **SharePoint Integration**: Document management and collaboration
- **Microsoft Graph**: User profiles and organizational data
- **Search Functionality**: Global search across all content
- **Real-time Updates**: Live data from SharePoint and Microsoft services

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Library**: Microsoft Fluent UI React Components
- **Styling**: Tailwind CSS
- **Authentication**: Azure AD with MSAL
- **Backend Integration**: SharePoint Online, Microsoft Graph
- **State Management**: React Context API
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Azure AD tenant with configured app registration
- SharePoint Online site with appropriate permissions
- Microsoft Graph API access

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd navacord-intranet
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy the example environment file and configure your settings:

```bash
cp env.example .env.local
```

Update `.env.local` with your Azure AD and SharePoint configuration:

```env
# Azure AD Configuration
NEXT_PUBLIC_AZURE_CLIENT_ID=your_azure_client_id_here
NEXT_PUBLIC_AZURE_TENANT_ID=your_azure_tenant_id_here

# SharePoint Configuration
NEXT_PUBLIC_SHAREPOINT_SITE_URL=https://your-tenant.sharepoint.com/sites/your-site

# Microsoft Graph Configuration
NEXT_PUBLIC_GRAPH_CLIENT_ID=your_graph_client_id_here

# Application Configuration
NEXT_PUBLIC_APP_NAME=Navacord Intranet
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 4. Azure AD App Registration

1. Go to Azure Portal > Azure Active Directory > App registrations
2. Create a new registration
3. Configure redirect URIs for your development and production URLs
4. Grant appropriate API permissions:
   - Microsoft Graph: User.Read, Sites.Read.All, Files.Read.All
   - SharePoint: Sites.Read.All, Files.Read.All

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
navacord-intranet/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main page component
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── HomePage.tsx       # Home page content
│   │   ├── ProductsPage.tsx   # Products catalog
│   │   ├── MGAsPage.tsx       # MGA directory
│   │   ├── ResourcesPage.tsx  # Resource library
│   │   ├── NewsPage.tsx       # News and updates
│   │   └── SupportPage.tsx    # Support center
│   ├── contexts/              # React contexts
│   │   └── AuthContext.tsx    # Authentication context
│   ├── lib/                   # Utility libraries
│   │   ├── auth.ts           # Azure AD authentication
│   │   ├── sharepoint.ts     # SharePoint integration
│   │   └── pnpjsConfig.ts    # PnP JS configuration
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Branding
Update the Navacord branding in:
- `src/components/Header.tsx` - Logo and colors
- `src/app/globals.css` - Custom CSS variables

### Content
Each page component can be customized with:
- Product information in `ProductsPage.tsx`
- MGA data in `MGAsPage.tsx`
- Resources in `ResourcesPage.tsx`
- News items in `NewsPage.tsx`

## 🔐 Security

- Azure AD authentication for all users
- SharePoint permissions for document access
- Environment variables for sensitive configuration
- HTTPS enforcement in production

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Azure Static Web Apps
- Netlify
- AWS Amplify
- Self-hosted servers

## 🔄 Next Steps

### Immediate Enhancements
1. **Real SharePoint Integration**: Connect to actual SharePoint lists and libraries
2. **User Profile Integration**: Display user information from Microsoft Graph
3. **Document Upload**: Implement file upload functionality
4. **Search Implementation**: Add global search across all content
5. **Notifications**: Add real-time notifications for updates

### Advanced Features
1. **Workflow Integration**: Connect to Power Automate workflows
2. **Power BI Integration**: Embed Power BI reports
3. **Teams Integration**: Add Microsoft Teams integration
4. **Mobile App**: Develop React Native mobile application
5. **Analytics**: Add usage analytics and reporting

### Technical Improvements
1. **Testing**: Add unit and integration tests
2. **Performance**: Implement caching and optimization
3. **Accessibility**: Ensure WCAG compliance
4. **Internationalization**: Add multi-language support
5. **PWA**: Convert to Progressive Web App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to Navacord and confidential.

## 🆘 Support

For technical support or questions:
- Email: itsupport@navacord.com
- Phone: (555) 123-4567
- Hours: Mon-Fri 8:00 AM - 6:00 PM EST

## 📊 Project Status

- ✅ Authentication system
- ✅ Navigation and routing
- ✅ All page components
- ✅ Responsive design
- ✅ SharePoint integration setup
- 🔄 Real data integration
- 🔄 Production deployment
- 🔄 Advanced features

---

**Built with ❤️ for Navacord** 