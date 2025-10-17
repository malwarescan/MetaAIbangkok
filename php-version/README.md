# MetaEsthAI PHP Version

A complete transformation of the MetaEsthAI application from React/Node.js to PHP with Preline.co design components.

## Features

- **AI-Powered Chat Interface**: Interactive consultation system
- **Multi-language Support**: English, Thai, and Korean
- **Responsive Design**: Mobile-first approach with Preline.co components
- **Modern PHP Architecture**: MVC pattern with clean separation of concerns
- **Real-time Chat**: AJAX-powered chat functionality
- **Professional UI**: Beautiful gradient designs and smooth animations

## Requirements

- PHP 8.0 or higher
- Web server (Apache/Nginx) or PHP built-in server
- Modern web browser with JavaScript enabled

## Installation

1. **Clone or download the project**
   ```bash
   cd /Users/malware/Desktop/metaEsthAI/php-version
   ```

2. **Start the PHP development server**
   ```bash
   php server.php
   ```

3. **Access the application**
   Open your browser and navigate to: `http://localhost:8000`

## Project Structure

```
php-version/
├── public/                 # Web-accessible files
│   └── index.php          # Main entry point
├── src/                   # Application source code
│   ├── controllers/       # MVC Controllers
│   ├── models/           # Data models
│   └── views/            # Templates and views
│       ├── components/    # Reusable components
│       ├── layouts/       # Layout templates
│       └── home/          # Home page views
├── config/               # Configuration files
├── assets/               # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── images/           # Images and icons
├── includes/             # Include files
└── server.php            # Development server script
```

## Key Components

### Controllers
- `HomeController.php`: Handles main page routes and language switching
- `ApiController.php`: Manages chat API endpoints and AI responses

### Views
- `main.php`: Main layout template with Preline.co components
- `header.php`: Navigation header with language selector
- `footer.php`: Site footer with contact information
- `index.php`: Home page with hero section and chat interface

### Assets
- `style.css`: Custom styles with animations and responsive design
- `main.js`: JavaScript for chat functionality and UI interactions

## API Endpoints

### Chat API
- **POST** `/api/chat`
  - Body: `{"message": "user message", "language": "en"}`
  - Response: `{"response": "AI response"}`

### Language API
- **POST** `/api/language`
  - Body: `{"language": "en|th|ko"}`
  - Updates session language and reloads page

## Configuration

Edit `config/config.php` to customize:
- Database settings
- API keys
- Application URLs
- Language settings
- Theme colors

## Features Implemented

### ✅ Completed
- [x] PHP MVC architecture
- [x] Preline.co UI components integration
- [x] Multi-language support (EN/TH/KO)
- [x] Responsive design
- [x] Chat interface with AI responses
- [x] Language switcher
- [x] Mobile navigation
- [x] Smooth animations
- [x] Professional styling

### 🔄 In Progress
- [ ] Database integration
- [ ] User authentication
- [ ] Appointment booking system
- [ ] Admin panel
- [ ] Email notifications

## Development

### Running Locally
```bash
# Start PHP development server
php server.php

# Access at http://localhost:8000
```

### File Structure Notes
- All PHP files use proper MVC separation
- Views are template-based with reusable components
- JavaScript handles client-side interactions
- CSS uses Tailwind classes with custom styles

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing

1. Follow PSR-12 coding standards
2. Use meaningful commit messages
3. Test on multiple browsers
4. Ensure mobile responsiveness

## License

This project is part of the MetaEsthAI application suite.

## Support

For technical support or questions, please contact the development team.
