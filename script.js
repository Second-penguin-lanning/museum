function openModal(element, title, size, year, description) {
    const modal = document.getElementById("artModal");
    const img = document.getElementById("modalImg");
    
    img.src = element.querySelector('img').src;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalSize").innerText = size;
    document.getElementById("modalYear").innerText = year;
    document.getElementById("modalDesc").innerText = description;
    
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("artModal").style.display = "none";
}
