import React from "react";
import Post from "../components/Post";
const css = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

const AppDevelopment = () => {
  const blogPosts = [
    {
      title: "App development",
      body: `Mobile app development is a process for building mobile 
      applications that run on mobile devices. These applications can either 
      be pre-installed or downloaded and installed by the user later. 
      They use the network capabilities of the device to work computing resources remotely.
      Android Studio is the official integrated development environment for Google's Android operating system, `,
      author: "Monu Kr",
      imgUrl:
        "https://techsharks.af/wp-content/uploads/2019/05/MOBILE.png",
    },
    {
        title: "App development",
        body: `Mobile app development is a process for building mobile 
        applications that run on mobile devices. These applications can either 
        be pre-installed or downloaded and installed by the user later. 
        They use the network capabilities of the device to work computing resources remotely. 
        Android Studio is the official integrated development environment for Google's Android operating system,`,
        author: "Monu Kr",
        imgUrl:
          "https://techsharks.af/wp-content/uploads/2019/05/MOBILE.png",
    },
    {
        title: "App development",
        body: `Mobile app development is a process for building mobile 
        applications that run on mobile devices. These applications can either 
        be pre-installed or downloaded and installed by the user later. 
        They use the network capabilities of the device to work computing resources remotely.
        Android Studio is the official integrated development environment for Google's Android operating system, `,
        author: "Monu Kr",
        imgUrl:
          "https://techsharks.af/wp-content/uploads/2019/05/MOBILE.png",
    },
    {
        title: "App development",
        body: `Mobile app development is a process for building mobile 
        applications that run on mobile devices. These applications can either 
        be pre-installed or downloaded and installed by the user later. 
        They use the network capabilities of the device to work computing resources remotely.
        Android Studio is the official integrated development environment for Google's Android operating system, `,
        author: "Monu Kr",
        imgUrl:
          "https://techsharks.af/wp-content/uploads/2019/05/MOBILE.png",
   },
   {
    title: "App development",
    body: `Mobile app development is a process for building mobile 
    applications that run on mobile devices. These applications can either 
    be pre-installed or downloaded and installed by the user later. 
    They use the network capabilities of the device to work computing resources remotely.
    Android Studio is the official integrated development environment for Google's Android operating system, `,
    author: "Monu Kr",
    imgUrl:
      "https://techsharks.af/wp-content/uploads/2019/05/MOBILE.png",
  },
  {
    title: "App development",
    body: `Mobile app development is a process for building mobile 
    applications that run on mobile devices. These applications can either 
    be pre-installed or downloaded and installed by the user later. 
    They use the network capabilities of the device to work computing resources remotely.
    Android Studio is the official integrated development environment for Google's Android operating system, `,
    author: "Monu Kr",
    imgUrl:
      "https://techsharks.af/wp-content/uploads/2019/05/MOBILE.png",
  }, 
  ];

  return (
    <>
      <div style={css.grid}>
        <div className="container my-4">
          <div className="row">
            {blogPosts.map((post, index) => (
              <Post key={index} index={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDevelopment;
