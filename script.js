let imgBox = document.getElementById("imgBox");
let QRImage = document.getElementById("QRImage");
let QRText = document.getElementById("QRText");

function GenerateQR() {
  if (QRText.value.length > 0) {
    QRImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      QRText.value;
    imgBox.classList.add("show-img");
  } else {
    QRText.classList.add("error");
    setTimeout(() => {
      QRText.classList.remove("error");
    }, 2000);
  }
}
