# Theological Education Platform

A comprehensive interactive platform for exploring Christian history, theology, and religious movements. This educational tool provides detailed information about denominations, heresies, independent churches, theological concepts, authority structures, and arguments for God's existence through interactive visualizations and rich content.

## Features

### 🏛️ Church History & Denominations
- **Interactive Timeline**: Hierarchical tree visualization showing the branching history from Early Church to modern denominations
- **Zoom & Pan**: Navigate through the timeline with smooth controls
- **Detailed Information**: Click any denomination to see comprehensive details including:
  - Historical context and founding year
  - Key beliefs and theological distinctives
  - Reasons for separation from parent denominations
  - Geographic origins and current follower counts
  - Key historical figures and notable events

### ⚠️ Historical Heresies
- **Hub-and-Spoke Layout**: Interactive visualization with central "Heresies" node connecting to all individual heresies
- **Comprehensive Coverage**: 10 major heresies including Arianism, Nestorianism, Pelagianism, and more
- **Orthodox Responses**: Each heresy includes the orthodox Christian response and historical impact
- **Categories**: Organized by Christological, Trinitarian, Soteriological, Ecclesiological, and Eschatological heresies

### 🏛️ Independent Churches & Religious Movements
- **Hub-and-Spoke Layout**: Central "Independent Churches" node connecting to all modern religious groups
- **Modern Religious Groups**: Churches and movements that don't trace origins to traditional church history
- **Diverse Coverage**: Includes Seventh-day Adventists, Jehovah's Witnesses, Mormonism, Christian Science, and more
- **Unique Practices**: Detailed information about distinctive beliefs and practices
- **Categories**: Adventist, Restorationist, New Religious Movement, Christian Science, and Unification groups

### 💡 Theological Concepts & Terms
- **Card-Based Layout**: Easy-to-browse grid of essential theological concepts
- **Importance Levels**: Essential, Important, and Secondary classifications
- **Biblical Basis**: Each concept includes relevant biblical references
- **Denominational Views**: How different traditions understand each concept
- **Categories**: Doctrine, Sacrament, Practice, Philosophy, History, and Ethics

### 🏗️ Pyramid of Authority
- **Hierarchical Layout**: Pyramid structure showing levels of theological authority from Scripture to individual conscience
- **Authority Levels**: 6 levels from Scripture (Level 1) to Individual Conscience (Level 6)
- **Comprehensive Coverage**: Includes Scripture, Ecumenical Creeds, Reformed Confessions, Catholic Teaching, Orthodox Tradition, and more
- **Detailed Examples**: Each authority source includes specific examples and historical context
- **Categories**: Scripture, Ecumenical, Reformed, Denominational, and Local authority sources

### 🧠 Arguments for God's Existence
- **Grid Layout**: Visual grid of 10 major arguments for God's existence from the past 2500 years
- **Comprehensive Coverage**: Includes Cosmological, Moral, Teleological, Ontological, Mind, Personal Experience, Pascal's Wager, Transcendental, Mathematical, and Evidential arguments
- **Detailed Analysis**: Each argument includes key points, proponents, criticisms, and historical context
- **Categories**: Classical, Modern, Personal, and Philosophical arguments
- **Interactive Icons**: Each argument has a distinctive icon and color coding

### 🔍 Advanced Search & Filtering
- **Real-time Search**: Search across all content including names, descriptions, and beliefs
- **Category Filtering**: Filter by denomination type, heresy category, church type, concept category, authority level, or argument type
- **Importance Filtering**: Filter theological concepts by importance level
- **Dynamic Results**: See filtered results with count indicators

### 📱 Responsive Design
- **Mobile-Friendly**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional UI**: Clean, modern interface with intuitive navigation
- **Accessibility**: Designed for users with no prior theological knowledge

## Content Coverage

### Denominations (15 major groups)
- **Ancient Period**: Early Church, Catholic-Orthodox Church
- **Catholic Tradition**: Roman Catholic Church
- **Orthodox Tradition**: Eastern Orthodox Church
- **Protestant Reformation**: Lutheranism, Calvinism, Anglicanism, Anabaptism, Presbyterianism, Quakerism
- **Baptist Tradition**: Baptist
- **Methodist Tradition**: Methodism
- **Modern Movements**: Pentecostalism, Evangelicalism, Charismatic Movement

### Heresies (10 major controversies)
- **Christological**: Nestorianism, Monophysitism, Apollinarianism
- **Trinitarian**: Arianism, Sabellianism
- **Soteriological**: Pelagianism, Gnosticism
- **Ecclesiological**: Donatism, Marcionism
- **Eschatological**: Montanism

### Independent Churches (10 groups)
- **Adventist**: Seventh-day Adventist Church
- **Restorationist**: Jehovah's Witnesses, Mormonism, Christadelphians, Churches of Christ, Quakers
- **New Religious Movement**: Scientology, Bahá'í Faith
- **Christian Science**: Christian Science
- **Unification**: Unification Church

### Theological Concepts (16 essential terms)
- **Essential**: Trinity, Incarnation, Salvation, Justification, Sin, Grace, Faith, Scripture
- **Important**: Baptism, Eucharist, Predestination, Church, Prayer, Worship, Mission
- **Secondary**: Eschatology

### Authority Pyramid (9 authority sources)
- **Level 1**: Holy Scripture (Bible)
- **Level 2**: Ecumenical Creeds (Apostles', Nicene, Athanasian, Chalcedonian)
- **Level 3**: Reformed Confessions, Lutheran Confessions, Catholic Teaching, Orthodox Tradition
- **Level 4**: Denominational Confessions
- **Level 5**: Local Church Authority
- **Level 6**: Individual Conscience

### Arguments for God (10 major arguments)
- **Classical**: Cosmological, Teleological, Ontological
- **Modern**: Moral, Mind, Mathematical, Evidential
- **Personal**: Personal Experience
- **Philosophical**: Pascal's Wager, Transcendental

## Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **Visualization**: D3.js for interactive graphs, force-directed layouts, and hierarchical structures
- **Styling**: Tailwind CSS for modern, responsive design
- **Icons**: Lucide React for consistent iconography
- **Data**: Structured TypeScript interfaces for type safety

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd theology
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Usage Guide

### Navigation
- **Tab Navigation**: Use the top navigation tabs to switch between different sections
- **Search**: Use the search box to find specific content across all sections
- **Filters**: Use category and importance filters to narrow down results
- **Interactive Elements**: Click on nodes, cards, or items to view detailed information

### Understanding the Visualizations
- **Denominations**: Tree structure shows historical relationships and branching
- **Heresies**: Hub-and-spoke layout with central "Heresies" node
- **Independent Churches**: Hub-and-spoke layout with central "Independent Churches" node
- **Concepts**: Card grid shows theological terms with importance color coding
- **Authority Pyramid**: Hierarchical pyramid showing levels of theological authority
- **God Arguments**: Grid layout showing philosophical arguments with icons and categories

### Educational Value

This platform is designed to help users understand:

- **Historical Context**: When and why different groups emerged
- **Theological Differences**: Key beliefs that distinguish each tradition
- **Historical Relationships**: How denominations are connected through history
- **Orthodox Responses**: How the church responded to heresies
- **Modern Diversity**: The variety of religious movements today
- **Essential Concepts**: Core theological terms and their meanings
- **Authority Structures**: How different traditions understand theological authority
- **Philosophical Arguments**: Major arguments for God's existence and their strengths/weaknesses

## Contributing

Contributions are welcome! Areas for improvement include:

- Adding more denominations, heresies, and religious movements
- Expanding theological concepts and terms
- Adding more authority sources and levels
- Including additional arguments for God's existence
- Improving visualizations and interactions
- Adding more educational content and explanations
- Enhancing accessibility features
- Adding multilingual support
- Including more historical details and primary sources

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Historical research and theological information compiled from academic sources
- D3.js community for excellent documentation and examples
- Next.js team for the powerful React framework
- Tailwind CSS for the beautiful design system

---

**Note**: This platform is designed for educational purposes. While every effort has been made to ensure historical accuracy, users should consult primary sources for academic research. The platform presents information from a neutral, educational perspective and does not endorse or promote any particular religious viewpoint.
