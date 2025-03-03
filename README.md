# Storezaar Backend

Storezaar is a backend built with **NestJS** for an eCommerce platform. It provides authentication, user management, and product handling features.

## Features

- **Authentication**: Google OAuth and JWT-based authentication.
- **User Management**: Register, login, and profile management.
- **Product Management**: CRUD operations for products.
- **Order Management**: Users can place orders.
- **Admin Panel**: Manage products, orders, and users.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/tamjidahmed0/storezaar-backend.git
   cd storezaar-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a **.env** file in the root directory and add your environment variables:
   ```env
   PORT=8000
   DATABASE_URL=mongodb://localhost:27017/storezaar
   JWT_SECRET=your_jwt_secret
   CLIENT_ID=your_google_client_id
   CLIENT_SECRET=your_google_client_secret
   CALLBACK_URL=http://localhost:8000/api/auth/google/callback
   ```

4. Start the server:
   ```sh
   npm run start
   ```

## API Endpoints

### Auth Routes
- `POST /api/auth/google` - Google OAuth login
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/logout` - Logout user

### User Routes
- `GET /api/users/me` - Get current user info
- `PUT /api/users/me` - Update user profile

### Product Routes
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create a new product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Order Routes
- `POST /api/orders` - Place a new order
- `GET /api/orders` - Get user orders

## Technologies Used
- **NestJS** - Backend framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication
- **JWT** - Token-based authentication


