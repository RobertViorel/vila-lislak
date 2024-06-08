document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('imageGallery');
    const imageFolderPath = 'path/to/your/images/';
    const imageList = [
        '',
        'image2.jpg',
        'image3.jpg',
        // List all your images or use a naming convention
    ];

    imageList.forEach(imageName => {
        const imgElement = document.createElement('img');
        imgElement.src = `${imageFolderPath}${imageName}`;
        imgElement.alt = imageName;
        imgElement.loading = 'lazy'; // Lazy loading
        imgElement.onerror = () => { // Show a loading GIF if image is not yet loaded
            imgElement.src = 'public/loading.gif';
        };
        gallery.appendChild(imgElement);
    });
});
