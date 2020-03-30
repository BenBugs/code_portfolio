// get element

const bgImage = document.getElementsByClassName("body-image");

// random image
const randomImage = () => {

    let coverImages = new Array();

    //add images to the array in a modular way
    coverImages[0] = "images/shark.jpg";
    coverImages[1] = "images/architecture.jpg";
    coverImages[2] = "images/space.jpg";
    coverImages[3] = "images/windows.jpg";
    coverImages[4] = "images/lego.jpg";
    coverImages[5] = "images/forest.jpg";

    const newImageIndex = Math.floor(Math.random() * coverImages.length);
    console.log(newImageIndex);

    // write matching function in here

    let creditImages = new Array();

    //add images to the array in a modular way
    creditImages[0] = "https://bit.ly/2WXfSbT";
    creditImages[1] = "https://bit.ly/3apv4SM";
    creditImages[2] = "https://bit.ly/2WQpZPn";
    creditImages[3] = "https://bit.ly/2y8RSrF";
    creditImages[4] = "https://bit.ly/3dF4TJI";
    creditImages[4] = "https://bit.ly/2wCA204";
 
    const matchImage = coverImages.slice()[newImageIndex];
    console.log(matchImage);


    const newImage = coverImages[newImageIndex];
    console.log(newImage);

    return newImage;
}

$('.body-image').css('background-image', 'url(' + randomImage() + ')');









//const credit1 = 'Greg Jeanneau';
//const credit2 = 'Aideal Hwa';
//const credit3 = 'Aperture Vintage';


    //create credits array
    //let coverCredits = new Array();

    //add credit links
    //coverCredits[0] = "https://bit.ly/2WXfSbT";
    //coverCredits[0] = "https://bit.ly/3apv4SM";
    //coverCredits[0] = "https://bit.ly/2WQpZPn";