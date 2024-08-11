EscrowAnalytics/
│
├── README.md
├── package.json
├── .gitignore
├── public/
│ ├── index.html
│ └── favicon.ico
│
├── src/
│ ├── index.js
│ ├── App.js
│ ├── App.css
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── EscrowDashboard.js
│ │ ├── TransactionSummary.js
│ │ ├── EscrowDetails.js
│ │ └── ...
│ │
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Reports.js
│ │ ├── Analytics.js
│ │ └── ...
│ │
│ ├── styles/
│ │ ├── variables.css
│ │ ├── mixins.css
│ │ ├── dashboard.css
│ │ └── ...
│ │
│ ├── services/
│ │ ├── api.js # Handles API calls
│ │ ├── escrowService.js # Business logic for escrow data
│ │ └── reportService.js # Business logic for generating reports
│ │
│ ├── utils/
│ │ ├── formatDate.js # Utility functions for date formatting
│ │ └── calculateMetrics.js # Utility functions for calculating metrics
│ │
│ ├── context/
│ │ ├── AppContext.js # Context for global state
│ │ └── EscrowContext.js # Context for escrow-related state
│ │
│ ├── hooks/
│ │ ├── useFetchEscrowData.js # Custom hook for fetching escrow data
│ │ └── ...
│ │
│ └── backend/
│ ├── server.js # Entry point for backend API
│ ├── routes/
│ │ ├── escrowRoutes.js # Routes for escrow-related API calls
│ │ └── reportRoutes.js # Routes for report generation
│ │
│ ├── controllers/
│ │ ├── escrowController.js # Controller logic for escrow data
│ │ ├── reportController.js # Controller logic for reports
│ │ └── ...
│ │
│ ├── models/
│ │ ├── Escrow.js # Mongoose or Sequelize model for escrow data
│ │ └── ...
│ │
│ ├── services/
│ │ ├── escrowService.js # Business logic for processing escrow data
│ │ ├── reportService.js # Business logic for generating reports
│ │ └── ...
│ │
│ └── config/
│ ├── db.js # Database connection configuration
