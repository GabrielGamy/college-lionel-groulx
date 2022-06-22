// ======================================
// Exemple Arrow Functions
// ======================================

// 1- Déclaration - Arrow function

function logMessage_1() {
    console.log("logMessage_1: simple message");
}

const logMessage_2 = () => {
    console.log("logMessage_2: simple message");
}

const logMessage_3 = (message) => {
    console.log(`logMessage_3: ${message}`);
}

// Uniquement pour un seul argument.
const logMessage_4 = message => {
    console.log(`logMessage_4: ${message}`);
}

const getMessage = message => `getMessage: ${message}`;

logMessage_1();
logMessage_2();
logMessage_3("simple message");
logMessage_4("simple message");
console.log(getMessage("simple message"));


// 2-  Que fait ce bout de code ?
function Logger() {
    this.message = "Logger Message";
    this.logMessage = function(message) {
        this.message = message;
        setTimeout(function() {
            console.log(this.message);
        }, 2000);
    }
}

// new Logger().logMessage("My message!");

// 3- Une alternative possible en utilisant une variable intermediaire
// let self = this;
// console.log(self.message);

// 4- Changer la fonction annonyme dans setTimeout par une arrow function
