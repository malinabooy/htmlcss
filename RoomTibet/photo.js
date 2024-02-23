function expandImage(clickedImage) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('expanded-image');
    modal.style.display = "block";
    modalImg.src = clickedImage.src;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}