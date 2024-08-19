"use client";
import styles from './App.module.css'
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import FlashCards from './components/FlashCards/FlashCards';



export default function App() {
  return (
    <div className={styles.SuperContainer}>
      <Header />
      <Form />
      <FlashCards />
      <Footer />
   </div>
  );
}
