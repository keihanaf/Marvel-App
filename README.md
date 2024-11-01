# Marvel App

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">

This project is a Marvel-themed web application built using React and Vite. It provides a rich user experience with features such as character, comic, series, and story exploration, along with a favorites system for users to save their preferred items.

## Features

- **Dynamic Routing**: The application uses React Router for seamless navigation between different pages, including:
  - Home Page
  - Characters Page
  - Comics Page
  - Series Page
  - Stories Page
  - Favorites Page
  - Explore Page
  - Detailed views for each character, comic, series, and story.

- **Data Fetching**: The app utilizes **React Query** for efficient data fetching and caching from the Marvel API. This ensures that the application remains responsive and provides a smooth user experience.

- **Responsive Design**: The application is designed to be fully responsive, adapting to various screen sizes using **Tailwind CSS** for styling.

- **Animations**: The app incorporates animations using **Framer Motion**, enhancing the user experience with smooth transitions and interactive elements.

- **Favorites System**: Users can like and save their favorite characters, comics, series, and stories. This feature is implemented using a **Higher-Order Component (HOC)** to manage the liked items state.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **React Router**: For routing and navigation.
- **React Query**: For data fetching and state management.
- **Framer Motion**: For animations and transitions.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## API Integration

The application interacts with the **Marvel API**, which provides a wealth of data about characters, comics, series, and stories. The API requires an API key for access, which is managed securely in the application. Key features of the API integration include:

- **Authentication**: The app uses a combination of public and private keys along with a timestamp to authenticate requests to the Marvel API. This is achieved through the `generateMarvelAuth` utility function, which generates a hash using the MD5 algorithm. The hash is created by concatenating the timestamp, private key, and public key.

- **Environment Variables**: The API keys and base URL are stored in environment variables for security. The `.env` file contains:
  ```env
  VITE_MARVEL_PUBLIC_KEY=your_public_key
  VITE_MARVEL_PRIVATE_KEY=your_private_key
  VITE_MARVEL_BASE_URL=https://gateway.marvel.com/v1/public
  ```

- **Axios Configuration**: The application uses Axios for making HTTP requests. The `api.js` file configures an Axios instance with the base URL and default headers:
  ```javascript
  import axios from "axios";

  export const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  export const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  export const api = axios.create({
    baseURL: import.meta.env.VITE_MARVEL_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  ```

- **Error Handling**: The application includes error handling mechanisms to gracefully manage API errors, providing feedback to users when data cannot be fetched.

- **Data Normalization**: The fetched data is normalized and structured to fit the application's state management, ensuring efficient rendering and updates.

## Higher-Order Component (HOC) - `withLike`

The application utilizes a Higher-Order Component (HOC) named `withLike` to manage the state of liked items across different categories, including comics, characters, series, and stories. This HOC enhances the wrapped component by providing it with the following functionalities:

- **State Management**: It maintains separate state variables for liked comics, characters, series, and stories using React's `useState` hook.

- **Local Storage Integration**: The HOC loads the liked items from the browser's local storage when the component mounts, ensuring that user preferences persist across sessions.

- **Toggle Like Functionality**: The `toggleLike` function allows users to like or unlike items. It updates the state and local storage accordingly, ensuring that the UI reflects the current liked status.

- **Props Injection**: The HOC injects the liked items and the `toggleLike` function as props into the wrapped component, allowing it to access and manipulate the liked items easily.

This design pattern promotes code reusability and separation of concerns, making it easier to manage the liked items functionality across different components in the application.

## File Structure

- **src/**: Contains all the source code for the application.
  - **components/**: Reusable components such as buttons, loaders, and lists.
  - **hooks/**: Custom hooks for data fetching and state management.
  - **layouts/**: Layout components that define the structure of pages.
  - **pages/**: Individual pages of the application, each representing a different route.
  - **router/**: Contains the routing logic for the application.
  - **services/**: API service functions for fetching data from the Marvel API.
  - **utils/**: Utility functions for various purposes, such as string manipulation.
  - **assets/**: Static assets like images and icons.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/keihanaf/Marvel-App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Marvel-App
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## Languages and Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,vite,tailwind,vscode" />
  </a>
</p>

## License

This project is licensed under the MIT License.
