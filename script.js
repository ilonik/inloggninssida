//hämtar html-taggar. Logga in formulär
const form = document.querySelector(".form");
const input1 = document.querySelector(".inputUser");
const input2 = document.querySelector(".inputPassword");
const loginBtn = document.querySelector(".loginBtn");
const logoutBtn = document.querySelector(".logoutBtn");
const welcomeText = document.querySelector(".welcomeText")
//hämtar html-taggar - Skapa användare formulär
const areYouNewBtn = document.querySelector(".areYouNewBtn");
const form2 = document.querySelector(".form2");
const inputCreateUser = document.querySelector(".inputCreateUser");
const inputCreatePassword = document.querySelector(".inputCreatePassword");
const newUserBtn = document.querySelector(".newUserBtn");


//sparade användare
const myArray = [
    {
        userName: "1",
        passWord: "2",
    },
    
    {
        userName: "3",
        passWord: "4",
    },
    {
        userName: "fredrik",
        passWord: "12345",
    }   
]


// Om inte getItem finns så vill vi setItem ska köras. På detta sätt undviker vi att listan uppdateras och ersätts hela tiden. 
if (!localStorage.getItem("myList")) { 

localStorage.setItem("myList", JSON.stringify(myArray))

}


// eventListener för knapparna. Vid click ska detta hända. CheckPassword osv har fått funktioner längre ner
loginBtn.addEventListener("click", checkPassword)
logoutBtn.addEventListener("click", logout)
newUserBtn.addEventListener("click", creating)
areYouNewBtn.addEventListener("click", formGetsVissible)

//Vid klick på Är du ny? - knapp
function formGetsVissible() {
    inputCreateUser.style.display = "inline";
    inputCreatePassword.style.display = "inline";
    newUserBtn.style.display = "inline";
    areYouNewBtn.style.display = "none";
    input1.style.display = "none";
    input2.style.display = "none";
    loginBtn.style.display ="none";
}


//Funktion för ny användare. NewUser2 är en variabel med objekt userName och passWord
//
function creating() {
    const listFromStorage = JSON.parse(localStorage.getItem("myList"))
    //vi har hämtar listan här ovan. 
    //get-item hämtar allt i local storage till vår kod
    const newUser2 = {
        userName: inputCreateUser.value
        ,
        passWord: inputCreatePassword.value
    }

    listFromStorage.push(newUser2)  
    input1.style.display = "inline";
    input2.style.display = "inline";
    loginBtn.style.display ="inline"; 
    form2.style.display = "none";
    localStorage.setItem("myList", JSON.stringify(listFromStorage))
    //här skickar vi in listan igen
}; 


// Vi pushar in det som fylls i formuläret genom variabeln newUser2. Push behöver ligga under funktionen.
//setItem skicar in vår lista i localstorage. Däremot get-item hämtar allt i local storage till vår kod
//OBS OVAN. CONST NEWUSER2 OBJEKTET MÅSTE LIGGA INNUTI FUNKTIONEN CREATING. PUSH LETAR EFTER NEWUSER2. MEN DEN ÄR LITE DUM SÅ DEN KAN BARA LETA INUTI SIN EGNA FUNKTION. variabeln måste finnas i funktionen. en varienebl som skapas/initieras utanför en funktionen kan inte användas inuti en funktion OM den inte får sina värden innanför funktionen



//en For-loop för att kontrollera om uppgifterna stämmer vid inlogg.
// if satsen ligger innanför loopen. Loopen ska testa de olika usernamesen och passworde
function checkPassword(){
    const listFromStorage = JSON.parse(localStorage.getItem("myList"))
    //vi vill att den kollar den Uppdaterade listan
    for (const user of listFromStorage) 
    if (input1.value === user.userName && input2.value === user.passWord)  {
        loginSuccessUI()
    return
 }
    loginFailUI()
};

//myList jobbar jag inte med de bara datajag skickar in och ut saker

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



