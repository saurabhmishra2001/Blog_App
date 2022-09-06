import React from "react";
// import "../styles/Posts.css"
import Post from "../components/Post";
const css = {
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  };
  
const DataStructure = () => {
const blogPosts = [
    {
        title: "Data Structure ",
        body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
       
    },
    {
        title: "Data Structure ",
        body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
       
    },
    {
        title: "Data Structure ",
        body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
       
    },
    {
        title: "Data Structure ",
        body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
       
    },
    {
        title: "Data Structure ",
        body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
       
    },
    {
        title: "Data Structure ",
        body: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen. The plate
        which is at the top is the first one to be
        removed, i.e. the plate which has been placed
        at the bottommost position remains in the
        stack for the longest period of time. So, it
        can be simply seen to follow LIFO(Last In
        First Out)/FILO(First In Last Out) order.`,
        author: "Suresh Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
       
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

export default DataStructure;