let currentSlideIndex = 0;

// Store image sources and captions separately
const images = [
    '../images/lightingAlien1.jpg',
    '../images/lightingAlien2.jpg',
    '../images/lightingAlien3.jpg',
    '../images/lightingAlien20.jpg',
    '../images/lightingAlien10.jpg',
    '../images/lightingAlien30.jpg',
    '../images/lightingWheel1.jpg',
    '../images/lightingWheel2.jpg',
    '../images/lightingWheel3.jpg',
    '../images/lightingWheel10.jpg',
    '../images/lightingWheel20.png'
];

const captions = [
    'A stylized approach to lighting. The intent is to use light to help build the intensity of the scene. Made using Autodesk Maya, Arnold render, and free to use assets from the internet.',
    'A blue spotlight is being used as a key light. The aiAtmosphereVolume effect is turned on in the render settings to aid the visual style of the abduction beam. Point lights with a warm color temperature are being used to light the church stairs.',
    'Green and Blue area lights are being used as fill/bounce lights to help illuminate the surrounding assets such as the trees and church. The area lights have the volume set to 0 so they will not be affected by the aiAtmosphereVolume effect.',
    'Layout 1',
    'Layout 2',
    'Light Editor',
    'A somber mood. No practical lights are used. The intent is to light the room as if only natural light were coming in from the windows in an otherwise dark room. Made using Autodesk Maya, Arnold render, and free to use assets from the internet.',
    'Window glass has no material to allow the directional light to pierce the room  creating long shadows.',
    'The plane outside of the windows has a Maya surface shader material applied with an image set as the color to create luminance.',
    'Layout',
    'Light Editor'
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
