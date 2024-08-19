"use client";
import styles from './App.module.css'
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className={styles.SuperContainer}>
      <Header />
      <Form />
      <Footer />
   </div>
  );
}
