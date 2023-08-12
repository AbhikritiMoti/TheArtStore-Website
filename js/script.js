
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref , set, get, child } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB2DsnszRVxELIyqSqQdEJ_06DgOpvheeg", 
authDomain: "artstore-560f2.firebaseapp.com",
projectId: "artstore-560f2",
storageBucket: "artstore-560f2.appspot.com",
messagingSenderId: "66945441858",
appId: "1:66945441858:web:390903dced1d8b75268ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getDatabase(app);
document.getElementById("submit").addEventListener("click",function(e){
    set(ref(db, 'user/' + document.getElementById("name").value),
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pw: document.getElementById("[pw]").value,

    });
    alert("success")
})





function searchImages() {
    var searchTerm = document.getElementById("search").value.toLowerCase();
    var photoGallery = document.querySelectorAll(".photo-gallery .art");

    photoGallery.forEach(function(artwork) {
        var imageName = artwork.querySelector("img").getAttribute("src").toLowerCase();

        if (imageName.includes(searchTerm)) {
            artwork.style.display = "block";
        } else {
            artwork.style.display = "none";
        }
    });
    
}


function searchAndDisplaySuggestions() {
    var searchTerm = document.getElementById("search").value.toLowerCase();
    var photoGallery = document.querySelectorAll(".photo-gallery .art");
    var suggestionsContainer = document.getElementById("search-suggestions");

    suggestionsContainer.innerHTML = ""; // Clear previous suggestions

    photoGallery.forEach(function(artwork) {
        var imageName = artwork.querySelector("img").getAttribute("src").toLowerCase();

        if (imageName.includes(searchTerm)) {
            artwork.style.display = "block";
            // Display image name as suggestion
            var suggestion = document.createElement("div");
            suggestion.classList.add("suggestion");
            suggestion.textContent = imageName.replace("resources/", "");
            suggestionsContainer.appendChild(suggestion);
        } else {
            artwork.style.display = "none";
        }
    });
}


document.addEventListener("click", function(event) {
    var clickedSuggestion = event.target.closest(".suggestion");

    // Check if a suggestion was clicked
    if (clickedSuggestion) {
        var suggestionText = clickedSuggestion.textContent;
        var searchTerm = suggestionText.trim().toLowerCase();
        
        var photoGallery = document.querySelectorAll(".photo-gallery .art");

        photoGallery.forEach(function(artwork) {
            var imageName = artwork.querySelector("img").getAttribute("src").toLowerCase();

            if (imageName.includes(searchTerm)) {
                artwork.style.display = "block";
            } else {
                artwork.style.display = "none";
            }
        });
    } else {
        // Close the suggestion list when clicking outside of it
        var suggestionsContainer = document.getElementById("search-suggestions");
        var searchInput = document.getElementById("search");
        
        if (event.target !== searchInput && event.target !== suggestionsContainer) {
            suggestionsContainer.style.display = "none";
        }
    }
});








    
