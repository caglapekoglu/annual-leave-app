
import List from "./components/List";
import { persistor } from "../src/Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from "./pages/Auth";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import {  useSelector } from "react-redux";
import Details from "./pages/Details";

function App() {
  const token = useSelector(state => state.auth.token);

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    console.log(contacts)
  }, [contacts]);
  return (
    <PersistGate persistor={persistor}>
      <div>
        <BrowserRouter className="App">
          <Routes>
            {!token&&
            <Route path="/" exact element={<div>
              <Navbar />
              <Form addContact={setContacts} contacts={contacts} />
            
            </div>} />}
            <Route path="/auth" element={<Auth />} />
            {token&&  <Route path="/" element={<List contacts={contacts} />} />}
          
            <Route path="*" element={<PageNotFound />} />
            <Route path="/detaylar/:id" element={<Details />} />

          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </PersistGate>
  );
}

export default App;
