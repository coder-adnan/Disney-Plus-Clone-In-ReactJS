import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Home() {
  useEffect(() => {
    const moviesRef = collection(db, "movies");
    onSnapshot(moviesRef, snapshot => {
      let tempMovies = snapshot.docs.map(doc => {
        console.log(doc);
        return { id: doc.id, ...doc.data() };
      });
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  min-height: 90vh;
  padding: 0 47.2px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
  }
`;

export default Home;
