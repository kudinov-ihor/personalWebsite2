import React, { useState, useEffect } from "react";
import { storage, db } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject, getStorage } from "firebase/storage";
import { addDoc, collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { Button } from "@mui/material";

const About = () => {
  const storage = getStorage();
  // СТворюємо State для зберігання посилання на фото
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const [galleryItem, setGalleryItem] = useState([]);
  // Створюємо State для додавання заголовку фото
  const [title, setTitle] = useState("");

  // const imagesListRef = ref(storage, "images/");



  // Створюємо функцію для додавання зображення у STORAGE, А також записуємо посилання у Firebase Database
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(collection(db, "gallery"), {
          url: url,
          title: title,
        });
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  // Створюємо UseEffect для виведденя фото на сторінці
  useEffect(() => {
    const q = query(collection(db, "gallery"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let galleryArray = [];
      querySnapshot.forEach((doc) => {
        galleryArray.push({ ...doc.data(), id: doc.id });
      });
      setGalleryItem(galleryArray);
    });
    return () => unsub();
  }, []);


  // Створюємо фунція для видалення колонки з бази даних а також фото з firebase storage
  const handleDelete = async (id, url) => {
    await deleteDoc(doc(db, 'gallery', id));
    const itemRef = ref(storage, url);

    deleteObject(itemRef).then(() => {
      console.log('success')
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <input
        type="text"
        placeholder="Введіть заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {galleryItem.map((item) => (
        <div key={item.id}>
        <p>{item.title}</p>
        <img src={item.url} style={{ maxWidth: "300px" }} />
        <Button onClick={() => handleDelete(item.id, item.url)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default About;
