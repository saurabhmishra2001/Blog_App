import React from "react";
import Post from "../components/Post";
const css = {
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  };
  
const Javascript = () => {
const blogPosts = [
    {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
     },
     {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
        title: "JAVASCRIPT",
        body: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. It is also known as scripting
        language for web pages. It is well-known for
        the development of web pages, many non-browser
        environments also use it. JavaScript can be
        used for Client-side developments as well as
        Server-side developments`,
        author: "Nishant Singh ",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
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

export default Javascript;