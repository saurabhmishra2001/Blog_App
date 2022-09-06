import React from "react";
import Post from "../components/Post";
const css = {
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  };
  
const Algorithm = () => {
const blogPosts = [
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
        title: "Algorithm",
        body: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”. Therefore
        Algorithm refers to a set of rules/instructions
        that step-by-step define how a work is to be
        executed upon in order to get the expected
        results. `,
        author: "Monu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
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

export default Algorithm;