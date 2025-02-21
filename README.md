# HireMinds

HireMinds is a recruitment Website designed to streamline the hiring process by matching job seekers with employers efficiently.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express.js
- **Database**: MongoDB

## Installation
### Prerequisites
1. Install Node.js 16+
2. Create Your MongoDB Cluster and mange that from MongoDB Atlas software.
3. Create a `config.env` file in the `config` folder and add the following details:
   ```env
   PORT=<your_port>
   CLOUDINARY_CLIENT_NAME=<your_cloudinary_client_name>
   CLOUDINARY_CLIENT_API=<your_cloudinary_client_api>
   CLOUDINARY_CLIENT_SECRET=<your_cloudinary_client_secret>
   MONGO_URI=<your_mongo_uri>
   FRONTEND_URL=<your_frontend_url>
   JWT_SECRET_KEY=<your_jwt_secret_key>
   JWT_EXPIRES=<your_jwt_expiration_time>
   COOKIE_EXPIRE=<your_cookie_expiration_time>
   ```

### Backend Setup
```sh
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

## Usage
1. Employers can post job listings and set hiring criteria.
2. Job seekers can upload resumes and apply for jobs.


## Contributing
We welcome contributions! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

## Contact
For inquiries, please reach out to [debatoshofficial85@gmail.com].
