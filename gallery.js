
//photo gallery JS
// Updated previousSlide and nextSlide functions to navigate through the slideshow
let currentSlideIndex = 0;

// Store image sources and captions separately
const images = [
    '../images/photoArmy.jpg',
    '../images/photoStaples.jpg',
    '../images/photoSquad.jpg',
    '../images/photoTree.jpg',
    '../images/photoChief.jpg',
    '../images/photoFlashlight.jpg',
    '../images/photoMotoCop.jpg',
    '../images/photoCrowd.jpg',
    '../images/photoBird.jpg',
    '../images/photoCreep.jpg',
    '../images/photoTent.jpg',
    '../images/photoLines.jpg'
];

const captions = [
    'Protestor and U.S Army soldier in Downtown Los Angeles, CA. (2020)',
    'Protestors outside Staples Center. (2020)',
    'Los Angeles County Sheriff takes photo of his own, South Central Los Angeles, CA. (2020)',
    'Federal and local authorities guard a courthouse in Downtown Los Angeles, CA. (2020)',
    'LAPD Chief of Police Michel Moore answers tough questions outside police HQ. (2020)',
    'Los Angeles County Sheriff points flashlight. (2020)',
    'Parade of LAPD motorcycle police officers. (2020)',
    'Protestors overflow the streets of Downtown Los Angeles, CA. (2020)',
    'Seagull in Santa Monica, CA. (2018)',
    'Lady drops letter off in mailbox at Union Station, Los Angeles, CA. (2018)',
    'Camper escapes city life by pitching tent near city, Pasadena, CA. (2018)',
    'Utility interfaces against a blue concrete wall. (2018)'
];

function openSlideshow(imageSrc, caption) {
    document.getElementById('slideshowImg').src = imageSrc;
    document.getElementById('caption').innerHTML = caption;
    document.getElementById('slideshowModal').style.display = 'block';
    // Set current slide index based on image source
    currentSlideIndex = images.indexOf(imageSrc);
}

function closeSlideshow() {
    document.getElementById('slideshowModal').style.display = 'none';
}

function previousSlide() {
    // Move to previous image
    currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
    // Update image source and caption
    document.getElementById('slideshowImg').src = images[currentSlideIndex];
    document.getElementById('caption').innerHTML = captions[currentSlideIndex];
}

function nextSlide() {
    // Move to next image
    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    // Update image source and caption
    document.getElementById('slideshowImg').src = images[currentSlideIndex];
    document.getElementById('caption').innerHTML = captions[currentSlideIndex];
}

