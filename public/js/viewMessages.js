const getMessages = () => {
    const messagesRef = firebase.database().ref("/messages");
    messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    const messages = data.messages;
    findMessage(messages); 
    });
}

const findMessage = (messages) => {
    const passcodeAttempt = document.querySelector('#passcode').value;
    
    let found = false;
    for (message in messages) {
        const messageData = messages[message];
        
        if (messageData.passcode == passcodeAttempt) {
            renderMessageAsHtml();
            found = true;
        }
    }

    if (found == false)
        alert("Wrong password!");
}

const renderMessageAsHtml = () => {
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.classList.add("is-hidden");
            
    const nextMessage = document.querySelector('#nextMsg');
    nextMessage.classList.remove("is-hidden");

    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = messageData.message;
            
}

const nextMessages = () => {
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.classList.remove("is-hidden");
            
    const nextMessage = document.querySelector('#nextMsg');
    nextMessage.classList.add("is-hidden");

    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = "";        
};


