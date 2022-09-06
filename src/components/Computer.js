import React from "react";
import Post from "../components/Post";
const css = {
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  };
  
const Computer = () => {
const blogPosts = [
    {
        title: "Computer Network",
        body: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can
        also include multiple devices/mediums which
        help in the communication between two different
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
        author: "Sonu Kr",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        
        },
        {
            title: "Computer Network",
            body: `An interconnection of multiple devices,
            also known as hosts, that are connected using
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can
            also include multiple devices/mediums which
            help in the communication between two different
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges. `,
            author: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
            
        },
        {
            title: "Computer Network",
            body: `An interconnection of multiple devices,
            also known as hosts, that are connected using
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can
            also include multiple devices/mediums which
            help in the communication between two different
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges. `,
            author: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
            
        },
        {
            title: "Computer Network",
            body: `An interconnection of multiple devices,
            also known as hosts, that are connected using
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can
            also include multiple devices/mediums which
            help in the communication between two different
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges. `,
            author: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
            
        },
        {
            title: "Computer Network",
            body: `An interconnection of multiple devices,
            also known as hosts, that are connected using
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can
            also include multiple devices/mediums which
            help in the communication between two different
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges. `,
            author: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
            
        },
        {
            title: "Computer Network",
            body: `An interconnection of multiple devices,
            also known as hosts, that are connected using
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can
            also include multiple devices/mediums which
            help in the communication between two different
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges. `,
            author: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
            
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

export default Computer;
