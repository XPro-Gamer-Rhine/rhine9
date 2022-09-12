import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase/firebase';

const Portfolio = () => {
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
            >
              <span className="subtitle">
                Visit my Github and Play Store
              </span>
              <h2 className="title">My Portfolio</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
          {posts.map(
            (post, index) =>
              index < 3 && (
                <div
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-once="true"
                  className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                  key={post.id}
                >
                  <div className="rn-portfolio" data-toggle="modal">
                    <div className="inner">
                      <div className="thumbnail">
                        <Link
                          to={`/post/${post.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={post.images?.length > 0
                                          ? post.images[0]
                                          : ''}
                            alt={post.title}
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <Link
                              to={`/post/${post.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {post.title}
                            </Link>
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
  );
};

export default Portfolio;
