'use strict'

const GALLERY_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
const GALLERY_ITEM_CLASS = 'gallery-item';
const FULL_IMAGE_BACKGROUND_CLASS = 'full-image-backgroud';
const FULL_IMAGE_VISIBLE_CLASS = 'full-image-visible';

const container = document.getElementById('container');
const fullImage = document.getElementById('fullImage');
const gallery = document.getElementById('gallery');
const galleryItemTemplate = document.getElementById('galleryItemTemplate').innerHTML;

container.addEventListener('click', onContainerClick);

fetch(GALLERY_URL)
    .then((resp) => {
        resp.json().then(renderGaleryItems)
    });

function onContainerClick(e){
    switch (true){
        case e.target.classList.contains(GALLERY_ITEM_CLASS):
            showFullImage(e.target.dataset.fullImageUrl);
            break;
        case e.target.classList.contains(FULL_IMAGE_BACKGROUND_CLASS):
            hideFullImage();
            break;
    }
}

function renderGaleryItems(list){
    console.log(list);
    const 
    const imagesHtml = list.map(elem => {
        return galleryItemTemplate.replace('{{url}}', elem.thumbnailUrl)
                                    .replace('{{title}}', elem.title)
                                    .replace('{{fullImageUrl}}', elem.url);
    });
    gallery.innerHTML = imagesHtml.join('\n');

}

function showFullImage(url){
    fullImage.src = url;
    container.classList.add(FULL_IMAGE_VISIBLE_CLASS);
}

function hideFullImage(){
    container.classList.remove(FULL_IMAGE_VISIBLE_CLASS);
}
