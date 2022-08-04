/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase/firebase';

const Projects = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const collectionRef = collection(db, 'posts');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const response = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return response;
  }, []);

  return (
    <div
      className="rn-client-area rn-section-gap section-separator"
      id="projects"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={100}
              data-aos-once="true"
              className="section-title"
            >
              <h2 className="title">My Projects</h2>
            </div>
          </div>
        </div>
        <div
          className="row row--25 mt--50 mt_md--40 mt_sm--40"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-delay={300}
          data-aos-once="true"
        >
          <div className="col-lg-4">
            <div className="d-flex flex-wrap align-content-start h-100">
              <div className="position-sticky clients-wrapper sticky-top rbt-sticky-top-adjust">
                <div
                  className="nav tab-navigation-button flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-style "
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#unity3d"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    UNITY 3D
                  </button>
                  <button
                    className="nav-style "
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#webdevelopment"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    WEB DEVELOPMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-area">
              <div className="d-flex align-items-start">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="unity3d"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="client-card">
                      {posts.map(
                        (post, index) =>
                          post.category === 'game' && (
                            <div className="main-content" key={index}>
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <Link
                                    to={`/post/${post.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img
                                      src={post.images[0]}
                                      alt={post.title}
                                    />
                                  </Link>
                                </div>
                                <div className="seperator" />
                                <div className="client-name">
                                  <span>
                                    <Link
                                      to={`/post/${post.id}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {post.title}
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="webdevelopment"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="client-card">
                      {posts.map(
                        (post, index) =>
                          post.category === 'web' && (
                            <div className="main-content" key={index}>
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <Link
                                    to={`/post/${post.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img
                                      src={post.images[0]}
                                      alt={post.title}
                                    />
                                  </Link>
                                </div>
                                <div className="seperator" />
                                <div className="client-name">
                                  <span>
                                    <Link
                                      to={`/post/${post.id}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {post.title}
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
