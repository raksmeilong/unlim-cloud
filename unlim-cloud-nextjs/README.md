# UnlimCloud Next.js Web App

<div align="center">
  <img src="./public/assets/unlim-clear.png" alt="UnlimCloud Logo" width="200"/> 
  <h1>UnlimCloud Web Application</h1>
</div>

A modern Next.js web application version of the UnlimCloud Desktop App, providing the same functionality with a responsive web interface.

## About UnlimCloud <img src="./public/assets/unlim-clear.png" alt="UnlimCloud Logo" width="30"/> 

UnlimCloud offers a unique cloud storage solution, utilizing your Telegram ID as a secure and private storage identifier. Enjoy unlimited cloud storage for your files, accessible through this modern web application.

## Features

- **Version Checking:** 🔄 Automatically checks for updates and notifies users
- **Responsive Design:** 📱 Modern, mobile-friendly interface built with Tailwind CSS
- **Donation Support:** 💝 Integrated donation options to support development
- **Fast Performance:** ⚡ Built with Next.js 15 and React 19 for optimal performance
- **TypeScript:** 🔒 Full type safety and better developer experience

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom React components
- **Animations:** CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/inulute/unlim-cloud.git
   cd unlim-cloud-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── components/
    ├── Header.tsx       # Header with logo
    ├── Logo.tsx         # Animated logo component
    ├── VersionChecker.tsx # Version checking logic
    ├── DonationSection.tsx # Donation options
    └── Footer.tsx       # Footer component
```

## Features Implementation

### Version Checking
- Fetches latest version from GitHub repository
- Compares with current version
- Shows update notification if newer version available
- Redirects to main app if no updates needed

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Smooth animations and transitions
- Modern gradient backgrounds
- Hover effects and interactive elements

### Donation Integration
- Multiple payment options (Ko-fi, PayPal, UPI)
- Animated donation section
- Support for different regions

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify:** Use `npm run build` and deploy the `out` folder
- **Railway:** Connect your GitHub repository
- **Docker:** Use the included Dockerfile

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support and Donations ❣️

<div align=center>
<img src="./public/assets/dunno2.svg" alt="UnlimCloud Logo" width="80"/> 
</div>

If you find this project helpful, consider supporting us by making a donation. Your contributions help maintain and improve UnlimCloud.

<div align="center">
  <a href="https://ko-fi.com/inulute"><img height='41' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' alt='Buy Me a Coffee at ko-fi.com'></a>
  <a href="https://paypal.me/inulute"><img src="./public/assets/payment/paypal.svg" alt="PayPal" height="41" width="174"></a>
  <a href="https://upi-inulute.vercel.app/"><img src="./public/assets/payment/upi.svg" alt="UPI" height="41" width="174"></a>
</div>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original UnlimCloud Desktop App by [inulute](https://github.com/inulute)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Icons and assets from the original project

---

<div align="center">
  [![Made with ❤️ by inulute](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F%20by%20inulute-black?style=flat-square)](https://inulute.github.io/linkme/)
</div>