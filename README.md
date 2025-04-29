
# DBWork

> A Node.js backend project for managing database-related operations.

---

## 📦 Project Structure

- `/controllers` — Business logic for handling requests.
- `/models` — Database schema definitions.
- `/utils` — Helper functions and utilities.
- `app.js` — Express app configuration.
- `index.js` — Server entry point.
- `package.json` — Project dependencies and scripts.



Here's a table with more explanation:
| File | Purpose |
|:---|:---|
| `app.js` | Creates the Express app, connects to MongoDB, sets up routes and middlewares. |
| `index.js` | Starts the server on your computer (listens for requests). |
| `controllers/notes.js` | Contains the API logic (e.g., how to get and save recipes). |
| `models/note.js` | Defines how a "recipe" looks inside MongoDB (fields like name, chef, etc.). |
| `utils/config.js` | Stores database connection info and port number. |
| `utils/logger.js` | Simplified way to log info and errors to the console. |
| `utils/middleware.js` | Contains reusable pieces for error handling and logging requests. |
| `package.json` | Lists your project dependencies (e.g., Express, Mongoose). |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/ny-collins/dbwork.git
   cd dbwork
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add necessary environment variables:
   ```env
   PORT=3000
   DB_URI=your_database_connection_string
   ```

4. Run the server:
   ```bash
   npm start
   ```

   Or for development with auto-reloading:
   ```bash
   npm run dev
   ```

---

## 📚 Usage

After starting the server, access the API via:

```bash
http://localhost:3000/
```

Endpoints should be listed here (add them once you finalize).

---

## 🛠️ Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 🧹 TODO

- Add authentication (if not done yet)
- Write unit tests
- Set up deployment (Heroku, Render, Vercel, etc.)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---
