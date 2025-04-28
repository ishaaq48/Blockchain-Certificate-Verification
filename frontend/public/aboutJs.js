// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("About page loaded!");
});
function openModal(name, role, details, image) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalRole").innerText = role;
    document.getElementById("modalDetails").innerText = details;
    document.getElementById("modalImage").src = image;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
