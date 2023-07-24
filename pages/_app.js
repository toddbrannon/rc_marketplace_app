// pages/_app.js
import '../styles/globals.css';
import connectDB from '../utils/db';

// Connect to MongoDB
connectDB();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
