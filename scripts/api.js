let dataImg = [];

const getGallery = async _ => {
    await fetch('https://pixabay.com/api/?key=19575010-945f75826fb34243a66762412&q=car +service&image_type=photo')
    .then(response => {
        
        return response.json();
    })
    .then(result => {
        dataImg = result.hits;
        console.log(result)
        showGallery();
    });
};

getGallery();

const popupImage = function(src) {
    console.log(src);

    const popCon = document.createElement('div');
    
    popCon.classList.add('popGal_wrap');

    popCon.innerHTML = `
    
    <div class="popupGal">
    <div class="popupGal_close"><i class="fa fa-close"></i></div>
    <img class="img_gallery" src="${src}" alt="picture"></img>
	
    </div>
    
    `;

    document.body.appendChild(popCon);

    const popupContactsClose = function() {
        const btn_close = document.querySelector(".popupGal_close")
        btn_close.addEventListener('click', function(event) {
            popCon.remove();
            
        });

        
    }();

}

const showGallery = _ => {        
    const gallEngine = document.createElement('div');
    const gall = document.getElementById('dataGall');
    
    gallEngine.classList.add('portfolio_gallery_section');
    

    dataImg.forEach(product => {
        const itemGall = document.createElement('div');
        const a = document.createElement('a');
        a.setAttribute('href', product.largeImageURL);

        itemGall.appendChild(a);

        a.innerHTML = `
        <img class=portf_img_gal src="${product.webformatURL}" alt="${product.tags}" />
        `;

        gallEngine.appendChild(itemGall);

        a.addEventListener('click', function(event) {
            event.preventDefault();

            popupImage(this.href);
        });
    }); 

    gall.appendChild(gallEngine);
};