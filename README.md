# Flight Booking App Backend

This repository contains the backend code for a Flight Booking Application developed using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Flight Booking App Backend](#flight-booking-app-backend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Setup](#setup)
  - [Endpoints](#endpoints)
  - [Models](#models)
  - [Controllers](#controllers)
  - [Middleware](#middleware)
  - [Database](#database)
  - [Usage](#usage)

## Overview

This backend provides APIs to manage users, flights, and bookings for a flight booking application. It includes authentication using JWT tokens and MongoDB for data storage.

## Features

- User registration and login
- Password encryption using bcrypt
- Flight creation and search
- Booking creation and retrieval
- JWT token-based authentication
- MongoDB for database storage

## Setup

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```
    PORT=<port_number>
    MONGOCONNECTION=<mongodb_connection_string>
    JWT_SECRET=<jwt_secret_key>
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Endpoints

- **User Routes**: `/api/register`, `/api/login`, `/api/updatepassword/:email`
- **Flight Routes**: `/flight/getflight/:id`, `/flight/createflights`, `/flight/searchflight`
- **Booking Routes**: `/booking/createbooking`, `/booking/bookeddetails/:customerEmail`

## Models

- **UserSchema**: Defines the structure for user data including name, email, password, phone number, date of birth, and role.
- **FlightSchema**: Defines the structure for flight data including flight name, number, start city, destination, total seats, available seats, price per seat, trip start time, end time, and duration.
- **BookedSchema**: Defines the structure for booked flight data including customer name, email, date, flight ID, booking date, booking status, total price, and number of tickets.

## Controllers

- **userController**: Manages user registration, login, and password update.
- **flightController**: Handles flight creation, search, and retrieval.
- **bookedController**: Manages booking creation and retrieval.

## Middleware

- **Auth.middleware**: Implements JWT token-based authentication.

## Database

- **MongoDB**: NoSQL database used for storing user, flight, and booking data.

## Usage

1. Register users using `/api/register` endpoint.
2. Login users using `/api/login` endpoint to obtain JWT tokens.
3. Create flights using `/flight/createflights` endpoint.
4. Search for flights using `/flight/searchflight` endpoint.
5. Create bookings using `/booking/createbooking` endpoint.
6. Retrieve booked details using `/booking/bookeddetails/:customerEmail` endpoint.
