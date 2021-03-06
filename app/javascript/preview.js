if (document.URL.match(/new/) || document.URL.match(/edit/)){
  document.addEventListener('DOMContentLoaded',() => {
    const ImageList = document.getElementById('image-list');

    const createHTML = (blob) => {
      const imageElement = document.createElement('div');
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
  
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    };

    document.getElementById('tweet_image').addEventListener('change', (e) => {
      const imageContent = document.querySelector('img');
      if (imageContent){
        imageContent.remove();
      }

      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createHTML(blob);
    });
  });
}