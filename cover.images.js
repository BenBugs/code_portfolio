// Get element.
const bgImage = document.getElementsByClassName("body-image");

// Random image.
const randomImage = () => {

    let coverImages = new Array();

    // Add images to the array.
    coverImages[0] = "images/shark.jpg";
    coverImages[1] = "images/architecture.jpg";
    coverImages[2] = "images/space.jpg";
    coverImages[3] = "images/forest.jpg";
    // coverImages[4] = "images/dog.jpg";
    // coverImages[5] = "images/lego.jpg";

    const newImageIndex = Math.floor(Math.random() * coverImages.length);
    const newImage = coverImages[newImageIndex];
    return newImage;
}

$('.body-image').css('background-image', 'url(' + randomImage() + ')');