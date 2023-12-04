import React, { useState } from "react";
import { Header } from "../components/HomePage/Header";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import blog1 from "../image/inner_blog_img01.jpg";
import blog2 from "../image/inner_blog_img02.jpg";
import blog3 from "../image/inner_blog_img03.jpg";
import rc1 from "../image/rc_post_img01.jpg";
import rc2 from "../image/rc_post_img02.jpg";
import rc3 from "../image/rc_post_img03.jpg";
import sn from "../image/sn_icon.png";
import { Bottom } from "../components/HomePage/Bottom";
import { useEffect } from "react";
import Banner from "../components/HomePage/Banner";
import { BASEURL } from "../components/BaseUrl";
import axios from "axios";

function Blog() {
  const [blog, setblog] = useState([]);
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const handleall = () => {
    axios.get(`${BASEURL}/blog`, { headers }).then((res) => {
      console.log(res.data);
      setblog(res.data);
    });
  };

  useEffect(() => {
    handleall();
  }, []);
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  return (
    <>
      <Header />
      {/* <section className="breadcrumb-area-two breadcrumb-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="breadcrumb-content text-center">
                <h2 className="title text-white">Latest News</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item ">
                      <a href="index.html" className="text-white fw-bold fs-5">
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item active  fw-bold fs-5"
                      aria-current="page"
                    >
                      Our Blog
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Banner /> */}

      <section className="blog space mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="">
                {blog?.map((item, index) => {
                  return (
                    <>
                      <div className="inner-blog-item">
                        <div className="inner-blog-thumb">
                          <a href="">
                            <img
                              className="rounded-3 img-fluid"
                              src={
                                item.image ? `${BASEURL}/${item.image}` : blog1
                              }
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="inner-blog-content">
                          <div className="blog-meta">
                            <ul className="p-0">
                              <li className="tags">
                                <i className="fa-regular fa-bookmark text-orange me-2"></i>
                                <a href="#">{item.subheading} </a>
                              </li>

                              <li>
                                <i className="fa-regular fa-bell me-2"></i>
                                {new Date(item.createdAt)?.toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </li>
                            </ul>
                          </div>
                          <h2 className="title fw-bold ">
                            <a href=" ">{item.title}</a>
                          </h2>
                          {/* <p
                            className="mt-4"
                            style={{ wordWrap: "break-word" }}
                          >
                            {item.description}
                          </p> */}
                          <div
                            className="mt-4"
                            style={{ wordWrap: "break-word" }}
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="">Share This Page</h3>
              <div className="footer">
                <div className="share-buttons ">
                  <ul className="d-flex align-items-center gap-4 socialicons">
                    <li>
                      <FacebookShareButton
                        url={`http://mytravelsarthi.com/blog`}
                      >
                        <i class="fa-brands fa-facebook"></i>
                      </FacebookShareButton>
                    </li>
                    <li>
                      <TwitterShareButton
                        url={`http://mytravelsarthi.com/blog`}
                        title={`your-blog-post-title`}
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </TwitterShareButton>
                    </li>
                    <li>
                      <LinkedinShareButton
                        url={`http://mytravelsarthi.com/blog`}
                        title={`your-blog-post-title`}
                        summary={`your-blog-post-summary`}
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </LinkedinShareButton>
                    </li>
                    <li>
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          "Check out this blog post: http://mytravelsarthi.com/blog"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>

                  {/* <a
                  href={`https://www.instagram.com/share?url=${encodeURIComponent(
                    "http://mytravelsarthi.com/blog"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i> Share on Instagram
                </a> */}
                </div>
              </div>
              <aside className="blog-sidebar w-100 ">
                <div className="blog-widget w-100">
                  <h4 className="sidebar-title">Search</h4>
                  <div className="sidebar-search w-100">
                    <form action="#" className="position-relative">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search ..."
                          className="form-control"
                        />
                        <button type="submit" className="btn shadow rounded-0">
                          <i className="fa-solid fa-magnifying-glass text-white"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="blog-widget w-100">
                  <h4 className="sidebar-title">Categories</h4>
                  <div className="sidebar-cat-list">
                    <ul className="p-0">
                      <li>
                        <a href="#">
                          Insureance{" "}
                          <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Destinations{" "}
                          <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Flights <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Top Airlines{" "}
                          <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="blog-widget w-100">
                  <h4 className="sidebar-title">Recent Post</h4>
                  <div
                    className="rc-post-list"
                    style={{ height: "500", overflow: "auto" }}
                  >
                    {blog?.reverse()?.map((item) => {
                      return (
                        <>
                          <div className="rc-post-item d-flex align-items-center mb-4 ">
                            <div className="rc-post-thumb me-4">
                              <a href="">
                                <img
                                  className="rounded-2 img-fluid"
                                  src={
                                    item.image
                                      ? `${BASEURL}/${item.image}`
                                      : blog1
                                  }
                                  style={{ width: "100px" }}
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="rc-post-content">
                              <span className="date grey">
                                <i className="fa-regular fa-bell"></i>
                                {new Date(item.createdAt)?.toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                              <h4 className="title fs-5 mt-1">
                                <a className="text-dark fw-bold" href="">
                                  {item.title}
                                </a>
                              </h4>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                {/* <div className="letter">
                  <div className="text-center ">
                    <div className="icon ">
                      <img src={sn} className="img-fluid" alt="" />
                    </div>
                    <div className="content text-white mt-4">
                      <h3>Subscribe Newsletter</h3>
                      <h6>Sign up For latest News</h6>
                    </div>

                    <form action=" " className="mt-3">
                      <input
                        type="email"
                        className="form-control text-center rounded-3 py-3"
                        placeholder="Enter your E-mail"
                      />
                      <button className="bg-orange text-white w-100 b-none mt-3 py-3 fw-bold rounded-3">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div> */}
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Bottom />
    </>
  );
}

export default Blog;
