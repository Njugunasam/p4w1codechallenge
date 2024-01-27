The Superheroes API is a Flask-based application that allows you to track information about heroes and their superpowers. This API serves as the backend for a larger project that includes a React frontend for interactive testing.
Setup:
1.Install Dependencies:
Run pipenv install to install Python dependencies.
Run npm install --prefix client to install frontend dependencies.
2.Run Flask Server:
Start the Flask API server: python app.py.
Access the API at localhost:5555.
Models and Migrations:The project includes models for Hero, Power, and HeroPower. Run the following commands to set up the database

flask db upgrade
python app/seed.py

Validations:
The API includes validations for HeroPower and Power. Ensure that strength has valid values and description is at least 20 characters long.

Routes:
GET /heroes: Retrieve information about all heroes.
GET /heroes/:id: Retrieve information about a specific hero by ID.
GET /powers: Retrieve information about all powers.
GET /powers/:id: Retrieve information about a specific power by ID.
PATCH /powers/:id: Update the description of a specific power.
POST /hero_powers: Create a new HeroPower associated with an existing Power and Hero.

Testing:
You can test the application using pytest Postman


