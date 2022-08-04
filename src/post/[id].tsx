/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Key, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Post = () => {
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState<any>();
  useEffect(() => {
    const collectionRef = doc(db, 'posts', String(id));
    getDoc(collectionRef)
      .then((doc) => {
        const response = {
          title: doc.data()?.title,
          category: doc.data()?.category,
          description: doc.data()?.description,
          images: doc.data()?.images,
          link: doc.data()?.link,
          language: doc.data()?.language,
          framework: doc.data()?.framework,
        };
        setPost(response);
      })
      .catch((error) => {});
  }, []);
  return (
    <>
      <main className="main-page-wrapper" style={{ zIndex: 5 }}>
        <div
          className="rn-portfolio-area rn-section-gap section-separator"
          id="portfolio"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  data-aos="fade-up"
                  data-aos-duration={500}
                  data-aos-delay={100}
                  data-aos-once="true"
                  className="section-title text-center"
                ></div>
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="content">
                  <div className="inner">
                    <h1
                      data-aos="fade-left"
                      data-aos-duration={500}
                      data-aos-delay={100}
                      data-aos-once="true"
                      className="title"
                    >
                      <span className="header-caption" id="page-top">
                        <span className="cd-headline clip is-full-width">
                          <span
                            className="cd-words-wrapper"
                            style={{ width: 200, color: 'red' }}
                          >
                            <b className="is-visible">
                              {post?.title}
                            </b>
                          </span>
                        </span>
                      </span>
                    </h1>
                    <div
                      data-aos="fade-left"
                      data-aos-duration={500}
                      data-aos-delay={300}
                      data-aos-once="true"
                    >
                      <p className="description">
                        {post?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="category-info">
                <div className="category-list">
                  <p style={{ marginTop: '20px', color: 'red' }}>
                    LANGUAGE:{' '}
                    <p style={{ marginTop: '20px', color: 'white' }}>
                      {post?.language}
                    </p>
                  </p>
                  <p style={{ marginTop: '20px', color: 'red' }}>
                    Framework:{' '}
                    <p style={{ marginTop: '20px', color: 'white' }}>
                      {post?.framework}
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
              {post?.images.map(
                (image: any, index: Key | null | undefined) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                    key={index}
                  >
                    <div
                      className="rn-portfolio"
                      data-toggle="modal"
                      data-target="#c1"
                    >
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src={image}
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href={image}>Image-1</a>
                            </div>
                            <div className="meta">
                              <span>
                                <a href="javascript:void(0)">
                                  <i className="feather-heart" />
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="c1"
                      tabIndex={-1}
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">
                                <i data-feather="x" />
                              </span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="row align-items-center">
                              <div className="portfolio-popup-thumbnail">
                                <div className="image">
                                  <img
                                    className="w-100"
                                    src={image}
                                    alt="slide"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
      <div
        className="rn-footer-area rn-section-gap section-separator"
        style={{ zIndex: 5 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area text-center">
                <div className="logo">
                  <a
                    href={post?.link}
                    className="rn-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>VIEW PROJECT</span>
                    <i data-feather="chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
