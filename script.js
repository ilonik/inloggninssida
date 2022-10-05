
//prova radera
//localStorage.setItem("myList", JSON.stringify(myArray))


//hämtar html-taggar. Logga in formulär
const form = document.querySelector(".form");
const input1 = document.querySelector(".inputUser");
const input2 = document.querySelector(".inputPassword");
const loginBtn = document.querySelector(".loginBtn");
const logoutBtn = document.querySelector(".logoutBtn");
const welcomeText = document.querySelector(".welcomeText")
//hämtar html-taggar - Skapa användare formulär
const form2 = document.querySelector(".form2");
const inputCreateUser = document.querySelector(".inputCreateUser");
const inputCreatePassword = document.querySelector(".inputCreatePassword");
const newUserBtn = document.querySelector(".newUserBtn");

// const topSecretUserName = "1";
// const topSecretPassword = "2";


//sparade användare
const myArray = [
    {
        userName: "7",
        passWord: "8",
    },
    
    {
        userName: "3",
        passWord: "4",
    },
    {
        userName: "5",
        passWord: "6",
    }
]


// Vi hämtar ner listan i local storage
// vi objektifierar en sträng
const listFromStorage = JSON.parse(localStorage.getItem("myList"))


// eventListener för knapparna. Vid click ska detta hända. CheckPassword osv har fått funktioner längre ner
loginBtn.addEventListener("click", checkPassword)
logoutBtn.addEventListener("click", logout)
newUserBtn.addEventListener("click", creating)


//Funktion för ny användare. NewUser2 är en variabel med objekt med boxarna för skapa ny användare.
function creating() {

    const newUser2 = {
        userName: inputCreateUser.value
        ,
        passWord: inputCreatePassword.value
    }

    myArray.push(newUser2)   
};
localStorage.setItem("myList", JSON.stringify(myArray))
// Vi pushar in det som fylls i formuläret genom variabeln newUser2. Push behöver ligga under funktionen.
//setItem skicar in vår lista i localstorage. Däremot get-item hämtar allt i local storage.
//OBS OVAN. CONST NEWUSER2 OBJEKTET MÅSTE LIGGA INNUTI FUNKTIONEN CREATING. PUSH LETER EFTER NEWUSER2. MEN DEN ÄR LITE DUM SÅ DEN KAN BARA LETA INUTI SIN EGNA FUNKTION. variabeln måste finnas i funktionen. en varienebl som skapas/initieras utanför en funktionen kan inte användas inuti en funktion OM den inte får sina värden innanför funktinen



//en For-loop för att kontrollera om uppgifterna stämmer vid inlogg.
// if satsen ligger innanför loopen. Loopen ska testa de olika usernamesen och passworde
function checkPassword(){
    for (const user of myArray) 
    if (input1.value === user.userName && input2.value === user.passWord) {
        loginSuccessUI() 
    return
 }
    loginFailUI()
};



// vid correct password ska detta ske
function loginSuccessUI() {
    welcomeText.innerText = "så jävla bra, du är inloggad"
    input1.value ="";
    input2.value ="";
    form.style.display= "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
}

// vid fail password ska detta ske
function loginFailUI() {
    welcomeText.innerText = "försök igen din lilla skit"
    input1.value ="";
    input2.value ="";
}

// vid logout ska detta ske
function logout() {
    form.style.display= "inline";
    welcomeText.innerText = "Vill du logga in igen?"
    logoutBtn.style.display = "none";
    loginBtn.style.display ="inline";
    
};



