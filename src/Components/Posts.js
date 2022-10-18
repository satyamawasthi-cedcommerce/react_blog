import React, { useState } from "react";
import Addpostmodal from "./Addpostmodal";
import Header from "./Header";

export default function Posts(props) {
  const [openModal, setopenModal] = useState(false);

  // delete blog functionality
  const delBlogs = (flag) => {
    console.log(flag);
    var tempPost = props.postArr;
    tempPost.splice(flag, 1);
    props.setPostArr([...tempPost]);
  };
  const commenceLike = (flag) => {
    let tempLike = props.postArr;
    tempLike[flag].like = !tempLike[flag].like;
    props.setPostArr([...tempLike]);
    console.log(props.postArr);
  };
  return (
    <div>
      <Header login={props.login} setLogin={props.setLogin} />
      <div id="action">
        <img src="./8.png" alt="..." style={{ width: "30%" }} />
        <div>
          <h1 style={{ marginTop: "29%", width: "100%" }}>
            Welcome {props.login.name}
            <br />
            Share,Learn &amp; Contribute
          </h1>

          <div>
            <button id="addPostbtn" onClick={() => setopenModal(true)}>
              Add Blog <i className="fa-solid fa-plus"></i>
            </button>
            {openModal && (
              <Addpostmodal
                setopenModal={setopenModal}
                postArr={props.postArr}
                setPostArr={props.setPostArr}
                login={props.login}
              />
            )}
            <p>Be a part of community.</p>
          </div>
        </div>
      </div>
      <h1>Discovring the tech-trends</h1>
      <div id="mainDiv">
        <div id="postDiv">
          {props.postArr.map((item, index) => (
            <>
              <div id="posts">
                <h3 style={{ textDecoration: "underline" }}>
                  {" "}
                  <i className="fa-regular fa-user"></i> {item.username}
                </h3>
                <h4>{item.usermail}</h4>
                <img
                  src={item.image}
                  alt="..."
                  style={{
                    width: "50%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                />
                <p>{item.desc}</p>
                {item.like ? (
                  <>
                    <i
                      className="fa-solid fa-thumbs-up fa-2xl"
                      style={{ color: "#1c7ed6" }}
                      onClick={() => commenceLike(index)}
                    ></i>
                  </>
                ) : (
                  <>
                    <i
                      className="fa-solid fa-thumbs-up fa-2xl"
                      style={{ marginLeft: "2%" }}
                      onClick={() => commenceLike(index)}
                    ></i>
                  </>
                )}
                <button onClick={() => delBlogs(index)} className="btnDel">
                  Delete Blog
                </button>
                <i
                  className="fa-solid fa-share-nodes fa-2xl"
                  style={{ marginLeft: "2%" }}
                ></i>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
