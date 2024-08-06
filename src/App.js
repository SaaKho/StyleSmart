import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store"; // Importing named exports

import PrivateRoute from "./Routes/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";
import Signup from "./components/sign-up/Signup";
import CreateWardrobe from "./pages/AsGuest/createWardrobe/CreateWardrobe";
import GeneratedResult from "./pages/AsGuest/genratedWardrobe/GenratedResult";
import FavoritesProduct from "./pages/Favorites/FavoritesProduct";

import WardrobeOneResult from "./components/WardrobeResult/WardrobeOneResult";
import GuestGenrateForm from "./components/genrateForm/GuestGenrateForm";
import GuestCreateWardrobe from "./pages/AsGuest/createWardrobe/guestCreateWardrobe";
import AddProduct from "./components/Modals/AddProduct";
import HomePage from "./pages/Home/HomePage";
import WardrobeOne from "./pages/Wardrobe/WardrobeOne";
import LoginModal from "./components/Modals/LoginModal";
import WardrobesCollecions from "./pages/Wardrobe/WardrobesCollecions";
import UpdateWardrobe from "./pages/AsGuest/UpdateWardrobe/UpdateWardrobe";
import DraftOne from "./pages/Wardrobe/DraftOne";
import DraftOneResult from "./components/WardrobeResult/DraftOneResult";

function App() {
  
  return (
    <Provider store={store}>
       
      <Router>
        <Routes>
       
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/createwardrobe" element={<CreateWardrobe />} />
          <Route path="/guestresult" element={<GeneratedResult />} />
          <Route path="/favourite" element={<FavoritesProduct />} />
          <Route path="/wardrobe/:wardrobeId" element={<WardrobeOne />} />
          <Route path="/wardrobe-one-result" element={<WardrobeOneResult />} />
          <Route path="/GuestGeneratedForm" element={<GuestGenrateForm />} />
          <Route path="/GuestCreateWardrobe" element={<GuestCreateWardrobe />} />
          <Route path="/Add" element={<AddProduct/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/WardrobesCollection" element={<WardrobesCollecions/>} />
          
          <Route path="/wardrobe/:wardrobeId/UpdateWardrobe" element={<UpdateWardrobe/>} />
          <Route path="/draft/:wardrobeId" element={<DraftOne/>} />
          <Route path="/draft-one-result" element={<DraftOneResult />} />

          <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
