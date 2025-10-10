# Renart Case

A full-stack web application for browsing and filtering products. The project consists of a React frontend and an Express.js backend API.

Live Demo: [Frontend on Vercel](https://renart-frontend-five.vercel.app) | [Backend on Vercel](https://renart-ten.vercel.app)

## Project Structure

```
renart-case/
├── backend/          # Express.js REST API
├── frontend/         # React + Vite application
└── DEPLOYMENT.md     # Deployment guide
```

## Frontend

Built with React 19 and Vite, providing a modern and responsive user interface for product browsing and filtering.

### Technologies

- React 19.1.1
- Vite 7.1.7
- ESLint for code quality

### Setup

```bash
cd frontend
npm install
npm run dev        # Start development server
npm run build      # Build for production
```

## Backend

A RESTful API built with Express.js that serves product data with filtering capabilities.

### Technologies

- Node.js
- Express.js 5.1.0
- CORS enabled for cross-origin requests

### Setup

```bash
cd backend
npm install
npm start          # Start server on port 3000
```

### API Endpoints

#### 1. Get All Products

**Endpoint:** `GET /products`

**Description:** Retrieves all available products from the database.

**Request:**

```http
GET /products
```

**Response:**

```json
[
  {
    "name": "Engagement Ring 2",
    "popularityScore": 0.51,
    "weight": 3.4,
    "images": {
      "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-Y.jpg?v=1707727068",
      "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-R.jpg?v=1707727068",
      "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-W.jpg?v=1707727068"
    },
    "price": 1499.99
  }
]
```

**Status Codes:**

- `200 OK` - Successfully retrieved products
- `500 Internal Server Error` - Error fetching products

---

#### 2. Filter Products

**Endpoint:** `POST /products/filter`

**Description:** Filters products based on provided criteria (Price range, popularity score).

**Request:**

```http
POST /products/filter
Content-Type: application/json

{
  "minPrice": 50,
  "maxPrice": 200,
  "minPopularity": 0.2,
  "maxPopularity": 0.8
}
```

**Response:**

```json
[
  {
    "name": "Engagement Ring 2",
    "popularityScore": 0.51,
    "weight": 3.4,
    "images": {
      "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-Y.jpg?v=1707727068",
      "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-R.jpg?v=1707727068",
      "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-W.jpg?v=1707727068"
    },
    "price": 1499.99
  }
]
```

**Status Codes:**

- `200 OK` - Successfully retrieved filtered products
- `500 Internal Server Error` - Error fetching filtered products

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## License

ISC
