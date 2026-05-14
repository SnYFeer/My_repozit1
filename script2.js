
const gallery = document.getElementById('gallery');

if (gallery) {
    lightGallery(gallery, {
        selector: '.card',     
        plugins: [lgZoom, lgThumbnail],
        
        speed: 400,             
        
   
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: false,
        
  
        zoom: true,
        
       
        mobileSettings: {
            controls: true,
            showCloseIcon: true,
            download: false,
        }
    });
}


