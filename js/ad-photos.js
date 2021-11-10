const avatarInput = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview').childNodes[1];
const imagesInput = document.querySelector('.ad-form__input');
const FILE_TYPES = ['jpeg', 'png'];

avatarInput.addEventListener('change', ()=>{
  const avatarFile = avatarInput.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => avatarFileName.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatarFile);
  }
});

const imagePreview = document.createElement('img');
imagePreview.classList.add('image__preview');
document.querySelector('.ad-form__photo').appendChild(imagePreview);

const addImagePreviewListener = () => {
  const removeImagePreview = () => {
    imagePreview.remove();
    document.querySelector('.ad-form__reset').removeEventListener('click', removeImagePreview);
  };
  document.querySelector('.ad-form__reset').addEventListener('click', removeImagePreview);
};

imagesInput.addEventListener('change', ()=> {
  const imageFile = imagesInput.files[0];
  const imageFileName = imageFile.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => imageFileName.endsWith(it));
  if (matches) {
    imagePreview.width = 69;
    imagePreview.height = 69;
    imagePreview.src = URL.createObjectURL(imageFile);
    addImagePreviewListener();
  }
});

