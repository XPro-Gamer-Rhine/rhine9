import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ref, getDownloadURL, uploadBytes } from '@firebase/storage';
import { db, storage } from '../Firebase/firebase';

import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';

const Upload = () => {
  const [title, setTitle] = useState<string>('');
  const [framework, setFramework] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  // dropzone starts here
  const baseStyle: any = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };

  const focusedStyle: any = {
    borderColor: '#2196f3',
  };

  const acceptStyle: any = {
    borderColor: '#00e676',
  };

  const rejectStyle: any = {
    borderColor: '#ff1744',
  };

  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const onDrop = useCallback((acceptedFiles: any) => {
    setSelectedImages(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  });

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  // dropzone ends here
  const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

  console.log(selectedImages.length);
  const selected_images = selectedImages?.map(
    (file: any, id: number) => (
      <div key={id}>
        <img
          src={file.preview}
          alt={file.preview}
          style={{ width: '200px', marginBottom: '10px' }}
        />
      </div>
    )
  );

  const uploadRef = async () => {
    const docRef = await addDoc(collection(db, 'posts'), {
      title: title,
      framework: framework,
      language: language,
      description: description,
      link: link,
      category: category,
      timestamp: serverTimestamp(),
    });
    await Promise.all(
      selectedImages.map(async (image: any) => {
        const imageRef = ref(
          storage,
          `posts/${docRef.id}/${image.path}`
        );
        uploadBytes(imageRef, image).then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, 'posts', docRef.id), {
            images: arrayUnion(downloadURL),
          });
        });
      })
    );
    setTitle('');
    setFramework('');
    setLanguage('');
    setDescription('');
    setLink('');
    setCategory('');
    setSelectedImages([]);
  };

  return (
    <div className="row" style={{ zIndex: 5, position: 'relative' }}>
      <div
        data-aos="fade-up"
        data-aos-duration={500}
        data-aos-delay={600}
        data-aos-once="true"
        className="col-lg-7 contact-input"
        style={{
          left: 0,
          right: 0,
          margin: 'auto',
          marginTop: '70px',
        }}
      >
        <div className="contact-form-wrapper">
          <div className="introduce">
            <div
              className="rnt-contact-form rwt-dynamic-form row"
              id="contact-form"
            >
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="contact-name">Title</label>
                  <input
                    className="form-control form-control-lg"
                    name="contact-name"
                    id="contact-name"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="contact-name">Framework</label>
                  <input
                    className="form-control form-control-lg"
                    name="contact-name"
                    id="contact-name"
                    type="text"
                    value={framework}
                    onChange={(e) => setFramework(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="contact-name">Language</label>
                  <input
                    className="form-control form-control-lg"
                    name="contact-name"
                    id="contact-name"
                    type="text"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="contact-name">Link</label>
                  <input
                    className="form-control form-control-lg"
                    name="contact-name"
                    id="contact-name"
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="contact-name">Category</label>
                  <input
                    className="form-control form-control-lg"
                    name="contact-name"
                    id="contact-name"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="contact-message">Description</label>
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    cols={30}
                    rows={10}
                    defaultValue={''}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>
                        Drag n drop some files here, or click to
                        select files
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="rn-btn rn-button btn-primary"
                  onClick={uploadRef}
                >
                  <span>Upload</span>
                  <i data-feather="arrow-right" />
                </button>
              </div>
            </div>
            <div
              className="col-lg-2"
              style={{ position: 'relative' }}
            ></div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-name">Images</label>
            {selected_images}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
