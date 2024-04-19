import './App.css';
import {
    Container,
    Row,
    Col,
    Button,
    CloseButton,
    FormControl,
    InputGroup,
    ListGroup,
} from "react-bootstrap";

import React, {useState} from "react";

function App() {
    // controls the chat window visibility state (i.e true/false)
    const [displayChat, setDisplayChat] = useState(false);

    // this controls the chat window closing animation state (i.e. true/false)
    cont [isChatClosing, setIsChatClosing] = useStae(false);

    // this array will store the messages
    const [message, setMessages] = useState([]);
    // this variable stores the most current message
    cont [currentMessage, setCurrentMessage] = useState("");

    // this is a reference to the end of the messages list
    const messageEndReference = React.useRef(null);

    // call this effect when the messages array is updated
    React.useEffect(() => {
        messageEndReference.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [message]);

    // call this function when the close button is clicked
    const closeChat = () => {
        setIsChatClosing(true);
        setTimeout(() => setDisplayChat(false), 500);
    }

    // call this function when the open button is clicked
    
}