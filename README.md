# 🌍 WanderLust

A full-stack travel listing web application built with Node.js, Express, and MongoDB. WanderLust allows users to browse, create, and review travel destinations around the world.

![WanderLust](https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- **🏠 Listing Management**: Create, read, update, and delete travel listings
- **⭐ Reviews & Ratings**: Add reviews and ratings (1-5 stars) to listings
- **🔐 User Authentication**: Secure signup/login with Passport.js
- **👤 User Authorization**: Only listing owners can edit/delete their listings
- **📝 Form Validation**: Server-side validation using Joi
- **⚡ Flash Messages**: User-friendly success and error notifications
- **🎨 Responsive Design**: Built with EJS templating engine
- **🔒 Session Management**: Secure session handling with express-session

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **Passport.js** - Authentication middleware
- **Passport-Local** - Local authentication strategy
- **Passport-Local-Mongoose** - Mongoose plugin for user authentication

### Validation & Error Handling
- **Joi** - Schema validation
- **Custom Error Handling** - ExpressError utility

### View Engine & Styling
- **EJS** - Embedded JavaScript templating
- **EJS-Mate** - Layout support for EJS

### Additional Tools
- **Method-Override** - HTTP verb support (PUT, DELETE)
- **Connect-Flash** - Flash messages
- **Express-Session** - Session management
- **Nodemon** - Development auto-restart

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or MongoDB Atlas account)
- **npm** or **yarn** package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shree-Gowda/WanderLust..git
   cd WanderLust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Make sure MongoDB is running locally on `mongodb://127.0.0.1:27017`
   - Or update the `MONGO_URL` in `app.js` to your MongoDB connection string

4. **Initialize the database (optional)**
   ```bash
   node init/index.js
   ```
   This will populate the database with sample data.

5. **Start the application**
   ```bash
   node app.js
   ```
   Or for development with auto-restart:
   ```bash
   nodemon app.js
   ```

6. **Open your browser**
   Navigate to `http://localhost:8080`

## 📁 Project Structure

```
WanderLust/
├── models/              # Mongoose models
│   ├── listing.js       # Listing schema
│   ├── review.js        # Review schema
│   └── user.js          # User schema
├── routes/              # Express routes
│   ├── listing.js       # Listing routes
│   ├── review.js        # Review routes
│   └── user.js          # User authentication routes
├── views/               # EJS templates
│   ├── listings/        # Listing views
│   ├── users/           # User views
│   └── layouts/         # Layout templates
├── public/              # Static files (CSS, JS, images)
├── utils/               # Utility functions
│   ├── ExpressError.js  # Custom error class
│   └── wrapAsync.js     # Async error wrapper
├── init/                # Database initialization
├── middleware.js        # Custom middleware
├── schema.js            # Joi validation schemas
├── app.js               # Main application file
└── package.json         # Dependencies
```

## 🔑 Key Routes

### Listings
- `GET /listings` - View all listings
- `GET /listings/new` - Show create listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - View single listing
- `GET /listings/:id/edit` - Show edit form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Add review to listing
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Authentication
- `GET /signup` - Show signup form
- `POST /signup` - Register new user
- `GET /login` - Show login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

## 🔒 Environment Variables

For production, consider creating a `.env` file:

```env
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
SESSION_SECRET=mysupersecretecode
PORT=8080
```

> **Note**: Remember to add `.env` to `.gitignore` (already included)

## 🧪 Validation

The application uses Joi for server-side validation:

- **Listing validation**: Title, description, location, country, and price are required
- **Review validation**: Rating (1-5) and comment are required
- **User validation**: Email and username uniqueness

## 🛡️ Security Features

- Password hashing with Passport-Local-Mongoose
- Session-based authentication
- HTTP-only cookies
- CSRF protection ready
- Input validation and sanitization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

## 👤 Author

**Shree Gowda**
- GitHub: [@Shree-Gowda](https://github.com/Shree-Gowda)

## 🙏 Acknowledgments

- Unsplash for placeholder images
- Express.js community
- MongoDB documentation
- Passport.js documentation

---

**Happy Traveling! ✈️🌎**
