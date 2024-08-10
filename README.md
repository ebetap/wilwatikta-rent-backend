### Wilwa-Tikta Rent

**Wilwa-Tikta Rent** is an online rental application allowing users to rent items such as properties, vehicles, tools, clothing, accessories, technology, electronics, and services. It features rental management, reviews and ratings, payments, and notifications.

### Key Features
- **User Authentication:** Secure login and registration with JWT protection.
- **CRUD Operations:** Manage rental items.
- **Order Management:** Handle rentals.
- **Payment & Refunds:** Stripe integration.
- **Review & Rating System:** User feedback on rented items.
- **Notifications:** Activity alerts for users.
- **Security:** Helmet for web security.
- **API Documentation:** Swagger for API docs.

### Requirements
- Node.js
- MongoDB
- Stripe Account

### Installation & Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ebetap/wilwatikta-rent-backend.git
   cd wilwa-tikta-rent
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:** Create a `.env` file with:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the Server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

### Project Structure
- `src/`
  - `config/` - Database and other configurations.
  - `controllers/` - API route logic.
  - `models/` - MongoDB models.
  - `routes/` - API routes definitions.
  - `services/` - Notifications and other services.
  - `middleware/` - Application middleware.
  - `utils/` - Utility functions.

### Contribution
Contributions are welcome. Please create a pull request or open an issue.

### License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

### Contact
For questions or assistance, contact us at [beta.priyoko@students.amikom.ac.id](mailto:alwaysworkwithbeta@gmail.com).
