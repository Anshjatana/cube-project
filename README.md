# Customer Details Portal

## Overview

This project is a single-page application developed using React and TypeScript. It provides a customer details portal where users can view a list of customers and their details. The portal features a dynamic layout with a customer list on the left and detailed information on the right. 

## Features

1. **Customer List**: 
   - Displays a list of customers on the left side.
   - Each customer card shows the customer's name and title.
   - The list can handle up to 1000 entries.
   - The selected customer card is highlighted.

2. **Customer Details**:
   - Shows detailed information for the selected customer on the right side.
   - Includes the customer's name, title, address, and a 3x3 grid of 9 photos.

3. **Dynamic Photo Grid**:
   - The 3x3 photo grid updates every 10 seconds with new images fetched from a public API.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static typing and improved developer experience.
- **HTML & CSS**: For layout and styling.
- **Axios**: For making HTTP requests to fetch photos from an API.
