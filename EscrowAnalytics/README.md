# Escrow Analytics and Reporting Tool

## Overview

The Escrow Analytics and Reporting Tool is a web application designed to provide comprehensive analytics and reporting for escrow transactions. It features a user-friendly React frontend and a robust Node.js backend. Key features include real-time data updates, advanced analytics, customizable dashboards, and export capabilities.

## Features

- **User Authentication and Authorization**: Secure login and role-based access control.
- **Real-Time Data Updates**: Live updates of transaction data using WebSocket.
- **Advanced Analytics**: Visualizations and trend analysis for escrow metrics.
- **Customizable Dashboards**: Draggable and resizable widgets for a personalized user experience.
- **Export Capabilities**: Export reports and data to CSV and PDF formats.
- **Search and Filtering**: Search and filter transaction details.
- **Responsive Design**: Mobile-friendly interface with dark mode support.

## Technologies

- **Frontend**: React, React Router, Chart.js, CSS
- **Backend**: Node.js, Express, MongoDB, Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **Real-Time Communication**: Socket.io
- **Data Export**: json2csv, pdfmake

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mayuras7685/XRPflow.git/
   ```

2. Navigate to the frontend directory:

   ```bash
   cd EscrowAnalytics
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd ../backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory with the following content:
     ```
     MONGO_URI=mongodb://localhost:27017/escrowdb
     PORT=5000
     ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Usage

1. **Frontend**: Open your browser and navigate to `http://localhost:3000` to access the React application.

2. **Backend**: The API will be accessible at `http://localhost:5000/api`.

## API Endpoints

- **GET /api/escrow/metrics**: Fetches escrow metrics.
- **GET /api/escrow/transactions**: Fetches transaction details with optional filters.
- **GET /api/escrow/analytics**: Fetches analytics data for visualization.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a new Pull Request.

---

Feel free to adjust the content to better fit your project specifics or preferences.
