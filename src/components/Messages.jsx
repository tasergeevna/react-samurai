import React from "react";

import Contacts from "./Contacts";
import Dialogues from "./Dialogues";


const Messages = (props) => {
    return (
        <div className="messages-container">
            <Contacts />
            <Dialogues />
        </div>
    )
}

export default Messages;