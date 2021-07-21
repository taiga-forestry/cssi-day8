const getMessages = () => {
 const messagesRef = firebase.database().ref();
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);

    const passcodeAttempt = document.querySelector('#passcode').value;

    const messages = data.messages;
    let found = false;
    for (message in messages) {
        const messageData = messages[message];
        // console.log(messageData);
        // console.log(messageData.passcode);
        // console.log(messageData.passcode);
        
        if (messageData.passcode == passcodeAttempt) {
            const passcodeInput = document.querySelector('#passcodeInput');
            passcodeInput.classList.add("is-hidden");
            
            const nextMessage = document.querySelector('#nextMsg');
            nextMessage.classList.remove("is-hidden");

            const messageDiv = document.querySelector('#message');
            messageDiv.innerHTML = messageData.message;
            
            found = true;
        }
    }

    if (found == false)
    {
        alert("Wrong password!");
    }
 });
}

const nextMessages = () => {
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.classList.remove("is-hidden");
            
    const nextMessage = document.querySelector('#nextMsg');
    nextMessage.classList.add("is-hidden");

    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = "";        
});


