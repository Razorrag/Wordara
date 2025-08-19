// src/pages/_app.js

import '../styles/globals.css'; // Correct path for Pages Router

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
