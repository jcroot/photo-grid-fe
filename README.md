# Photo Gallery Frontend

This project is an image gallery application built with React and TypeScript. It allows users to upload images, view them in a grid, and click on images to view them in a modal.

## Features

- Upload images using drag-and-drop.
- Display images in a grid layout.
- View images in a modal on click.
- Fetch images from an API on load.

## Technologies Used

- React
- TypeScript
- React Dropzone
- Axios

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jcroot/photo-grid-fe.git
    cd photo-grid-fe
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/components/ImageGrid.tsx`: Component to display images in a grid layout.
- `src/components/ImageModal.tsx`: Component to display an image in a modal.
- `src/components/ImageUpload.tsx`: Component to handle image uploads.
- `src/App.tsx`: Main application component.
- `src/lib/api/api.ts`: API utility for making HTTP requests.

## API Endpoints

- `GET /api/images`: Fetches the list of images.
- `POST /api/upload`: Uploads new images.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
