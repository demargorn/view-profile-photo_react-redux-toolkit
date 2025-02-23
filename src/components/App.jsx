import { useDispatch, useSelector } from 'react-redux';
import { addPhoto } from '../store/photo.slice';
import './App.css';

const App = () => {
   const photos = useSelector((s) => s.photos);
   const dispatch = useDispatch();

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.addEventListener('load', () => dispatch(addPhoto(reader.result)));
         reader.readAsDataURL(file);
      }
   };

   return (
      <main className='container app-container'>
         <h2 className='h2'>Загрузите фото</h2>
         <input type='file' accept='image/*' onChange={handleImageChange} className='input-file' />
         <section className='photo-container'>
            {photos.length > 0 && (
               <div className='last-photo'>
                  <h4 className='h4'>Последнее фото:</h4>
                  <img
                     src={photos[photos.length - 1]}
                     alt='last uploaded photo'
                     className='photo'
                  />
               </div>
            )}
            <div className='other-photos'>
               {photos.length > 1 && <h4 className='h4'>Другие фото:</h4>}
               {photos.slice(0, photos.length - 1).map((photo, i) => (
                  <img key={i} src={photo} alt='other uploaded photos' className='photo' />
               ))}
            </div>
         </section>
      </main>
   );
};

export default App;
