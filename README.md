# Sentiment-Insights

Fastify-based sentiment analysis API leveraging Python AI on Google Cloud Platform (GCP). Offers high scalability and performance for analyzing text sentiment in real-time.

## Services Diagram

![Services Diagram](docs/diagrams/images/services.png)

### Services Description:

| Service                | Description                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------|
| Users Service          | Manages user accounts, profiles, and related information. Responsible for user authentication and authorization. |
| Authorization Service  | Ensures secure access to resources within the application. Handles authentication, authorization, and session management. |
| Email Service          | Sends transactional emails for account verification, password reset, and other user communications.             |
| Model Service          | Hosts the Python-based sentiment analysis model. Exposes an interface for real-time sentiment analysis of text inputs. |
| Payments Service       | Handles user payments for accessing premium features or subscriptions. Integrates with payment gateways for transaction processing. |
| Cart Service           | Manages shopping carts and processes orders. Typically used in e-commerce applications.                           |
| Registration/Login Service | Handles user registration, login, and authentication. Allows users to create accounts and access restricted features. |
| Analysis Service       | Performs sentiment analysis on text inputs in real-time. Utilizes the sentiment analysis model hosted in the Model Service. |
| Frontend Service       | Represents the user interface of the application. Provides web pages, forms, and UI components for user interaction. |

Additional services such as database, CDN, analytics, and notification services may be required based on specific application requirements.
