import logo from './logo.svg';
import React from "react";
import {Redirect, Route, Routes} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Topic from "./components/topics/topic";
import Header from "./components/header/header";
import './App.css';
import Topics from "./components/topics/topics";


function App() {
    const navigate = useNavigate();
    const redirectToTopics = () => {
        navigate('./topics');
    }
    const redirectToTopic = (props) => {
        navigate('/topics/:productId');
    }
  return (
    <div>
        <Header className="App-header" onClick={redirectToTopics}></Header>
        <Routes>
            <Route path="/topics" element={<Topics onClick={redirectToTopic}> Please select a topic </Topics>}/>
            <Route path="/topics/:productId" element={<Topic/>}/>
        </Routes>
    </div>

  );
}

export default App;
