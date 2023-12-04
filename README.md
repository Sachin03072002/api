# E-commerce Product Management API

A simple Express.js API for managing e-commerce products with automatic price calculation based on size and color.


## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

## Getting Started

### Prerequisites

- Node.js (version 14.x.x or above)
- npm (version 6.x.x or above)
- MongoDB (optional, if you want to use a database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sachin03072002/api.git
Install dependencies:

bash
Copy code
cd e-commerce-api
npm install
Usage
Running the Server
bash
Copy code
npm start
This command starts the server on http://localhost:8000 by default. You can change the port in the index.js file.

Testing the API
You can use tools like Postman or curl to test your API endpoints.

Endpoints
/api/create_product
Method: POST

Description: Create a new product

Request Body:

json
Copy code
{
    "Name": "XYZ Tshirt",
    "Category": "T-shirt",
    "Size": "L",
    "Color": "Red"
}
Response:

json
Copy code
{
    "message": "Product created successfully",
    "product": {
        "Name": "XYZ Tshirt",
        "Category": "T-shirt",
        "Size": "L",
        "Color": "Red",
        "Price": 100
    }
}
Sample Input and Output
When creating a new product, provide the following JSON data in the request body:

json
Copy code
{
    "Name": "XYZ Tshirt",
    "Category": "T-shirt",
    "Size": "L",
    "Color": "Red"
}
The API will automatically calculate the price based on the provided size and color. The response will include the created product with the calculated price.

Dependencies
Express.js
Mongoose
(List any additional dependencies)
Contributing
If you would like to contribute to the project, please follow the contributing guidelines.

License
This project is licensed under the MIT License.
