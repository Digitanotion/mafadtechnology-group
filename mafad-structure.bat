@echo off
echo Creating MAFAD Technology Group Professional Folder Structure...
echo.


:: ============================================
:: APP DIRECTORY - MAIN ROUTES
:: ============================================

mkdir app\\(group\)
mkdir app\\(group\\)\\about
mkdir app\\(group\\)\\about\\vision-mission
mkdir app\\(group\\)\\about\\leadership
mkdir app\\(group\\)\\about\\governance

mkdir app\\(group\\)\\nigeria
mkdir app\\(group\\)\\nigeria\\mafad-technology
mkdir app\\(group\\)\\nigeria\\coca-cola
mkdir app\\(group\\)\\nigeria\\fashion-retail
mkdir app\\(group\\)\\nigeria\\ict-academy
mkdir app\\(group\\)\\nigeria\\logistics
mkdir app\\(group\\)\\nigeria\\solar-energy
mkdir app\\(group\\)\\nigeria\\general-trading

mkdir app\\(group\\)\\united-kingdom
mkdir app\\(group\\)\\united-kingdom\\mafadtech-services
mkdir app\\(group\\)\\united-kingdom\\it-consulting
mkdir app\\(group\\)\\united-kingdom\\training
mkdir app\\(group\\)\\united-kingdom\\logistics-haulage
mkdir app\\(group\\)\\united-kingdom\\import-export

mkdir app\\(group\\)\\investor-relations
mkdir app\\(group\\)\\investor-relations\\financials
mkdir app\\(group\\)\\investor-relations\\compliance

mkdir app\\(group\\)\\careers
mkdir app\\(group\\)\\careers\\nigeria
mkdir app\\(group\\)\\careers\\united-kingdom

mkdir app\\(group\\)\\contact
mkdir app\\(group\\)\\partners

:: ============================================
:: COMPONENTS DIRECTORY - SHARED UI
:: ============================================

mkdir components\\ui\\Button
mkdir components\\ui\\Card
mkdir components\\ui\\Container
mkdir components\\ui\\Section
mkdir components\\ui\\TrustBadge

mkdir components\\layout\\Header
mkdir components\\layout\\Footer
mkdir components\\layout\\Navigation
mkdir components\\layout\\MobileMenu

:: ============================================
:: MODULES DIRECTORY - BUSINESS LOGIC
:: ============================================

:: Home Module
mkdir modules\\home\\components\\Hero
mkdir modules\\home\\components\\BusinessPortfolio
mkdir modules\\home\\components\\KeyMetrics
mkdir modules\\home\\components\\TrustSignals

:: About Module
mkdir modules\\about\\components\\GroupOverview
mkdir modules\\about\\components\\VisionMissionValues
mkdir modules\\about\\components\\DirectorBiography
mkdir modules\\about\\components\\CorporateStructure
mkdir modules\\about\\components\\GlobalPresence

:: Nigeria Module
mkdir modules\\nigeria\\components\\NigeriaOverview
mkdir modules\\nigeria\\components\\MafadTechnology\\Services
mkdir modules\\nigeria\\components\\MafadTechnology\\TargetMarkets
mkdir modules\\nigeria\\components\\MafadTechnology\\Certifications

mkdir modules\\nigeria\\components\\CocaColaDistribution\\Overview
mkdir modules\\nigeria\\components\\CocaColaDistribution\\Products
mkdir modules\\nigeria\\components\\CocaColaDistribution\\Operations
mkdir modules\\nigeria\\components\\CocaColaDistribution\\CompetitiveAdvantage

mkdir modules\\nigeria\\components\\FashionRetail\\Overview
mkdir modules\\nigeria\\components\\FashionRetail\\Collections
mkdir modules\\nigeria\\components\\FashionRetail\\SalesChannels

mkdir modules\\nigeria\\components\\ExpansionBusinesses

:: United Kingdom Module
mkdir modules\\united-kingdom\\components\\UKOverview
mkdir modules\\united-kingdom\\components\\MafadtechServices\\Services
mkdir modules\\united-kingdom\\components\\MafadtechServices\\SICCodes
mkdir modules\\united-kingdom\\components\\MafadtechServices\\OccupationCodes
mkdir modules\\united-kingdom\\components\\TargetMarkets

:: Investors Module
mkdir modules\\investors\\components

:: Careers Module
mkdir modules\\careers\\components

:: ============================================
:: LIB DIRECTORY - DATA & CONTENT
:: ============================================

mkdir lib\\constants
mkdir lib\\content
mkdir lib\\data

:: ============================================
:: PUBLIC DIRECTORY - ASSETS
:: ============================================

mkdir public\\images\\brand
mkdir public\\images\\nigeria\\owo
mkdir public\\images\\nigeria\\akure
mkdir public\\images\\nigeria\\technology
mkdir public\\images\\united-kingdom\\hull
mkdir public\\images\\team
mkdir public\\images\\trust

:: ============================================
:: CREATE EMPTY INDEX.JS FILES FOR MODULES
:: ============================================

echo // Home module exports > modules\home\index.js
echo // About module exports > modules\about\index.js
echo // Nigeria module exports > modules\nigeria\index.js
echo // United Kingdom module exports > modules\united-kingdom\index.js
echo // Investors module exports > modules\investors\index.js
echo // Careers module exports > modules\careers\index.js

:: ============================================
:: CREATE BASIC PAGE.JS FILES
:: ============================================

echo export default function HomePage() { return ^<div^>Home Page^</div^> } > app\\(group\\)\\page.js
echo export default function AboutPage() { return ^<div^>About Page^</div^> } > app\\(group\\)\\about\\page.js
echo export default function NigeriaPage() { return ^<div^>Nigeria Page^</div^> } > app\\(group\\)\\nigeria\\page.js
echo export default function UKPage() { return ^<div^>UK Page^</div^> } > app\\(group\\)\\united-kingdom\\page.js
echo export default function InvestorsPage() { return ^<div^>Investor Relations^</div^> } > app\\(group\\)\\investor-relations\\page.js
echo export default function CareersPage() { return ^<div^>Careers^</div^> } > app\\(group\\)\\careers\\page.js
echo export default function ContactPage() { return ^<div^>Contact^</div^> } > app\\(group\\)\\contact\\page.js
echo export default function PartnersPage() { return ^<div^>Partners^</div^> } > app\\(group\\)\\partners\\page.js

:: ============================================
:: CREATE BASIC COMPONENT FILES
:: ============================================

echo // Button component > components\ui\Button\index.js
echo // Card component > components\ui\Card\index.js
echo // Container component > components\ui\Container\index.js
echo // Section component > components\ui\Section\index.js
echo // TrustBadge component > components\ui\TrustBadge\index.js

echo // Header component > components\layout\Header\index.js
echo // Footer component > components\layout\Footer\index.js
echo // Navigation component > components\layout\Navigation\index.js
echo // MobileMenu component > components\layout\MobileMenu\index.js

:: ============================================
:: CREATE CONTENT FILES
:: ============================================

echo // Company registration details > lib\constants\company.js
echo // Nigeria business data > lib\constants\nigeria.js
echo // UK business data > lib\constants\united-kingdom.js

echo // About page content from document > lib\content\about.js
echo // Nigeria operations content (Section 3.1, 3.2, 3.3, 3.4) > lib\content\nigeria.js
echo // UK operations content (Section 4.1) > lib\content\united-kingdom.js
echo // Financial projections (Section 7) > lib\content\financials.js
echo // Compliance alignment (Section 8) > lib\content\compliance.js

echo // Products catalog > lib\data\products.js
echo // Services catalog > lib\data\services.js
echo // Certifications > lib\data\certifications.js

:: ============================================
:: DONE
:: ============================================

echo.
echo ✅ MAFAD Technology Group folder structure created successfully!
echo.
echo 📁 Location: %cd%
echo.
echo 🚀 Run 'npm run dev' to start the development server
echo.

pause