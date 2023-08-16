import Image from "next/image";
import Post from "../../models/Post";
import getFormattedDate from "@/utils/getDate";

export default function FullBlog({ blog }) {
    const { heading, subheading, createdAt, body, image, structure } = blog;
    console.log(blog);
    const formattedDate = getFormattedDate(createdAt);
    //loop through structure.
    //switch statement.
    return (
        <article className="mx-auto">
            {/* Header - componenet props: first heading, first subheading, createdAt*/}
            <header className="flex flex-col justify-between mb-2 pb-4">
                <div className="title p-4">
                    <h1 className="text-2xl font-bold text-center mb-2 uppercase">
                        {heading.pop()}
                    </h1>
                    <h2 className="text-center text-md uppercase">
                        {subheading.pop()}
                    </h2>
                </div>
                <div className="date p-2">
                    <p className="text-center text-sm font-bold uppercase">
                        {formattedDate}
                    </p>
                </div>
            </header>
            {/* Image component props: imagesrc.  */}
            <div className="img-wrapper relative h-40 mb-4 ml-[-1.6rem] mr-[-1.6rem]">
                <Image src={image.pop()} fill={true} alt="img" />
            </div>
            <div className="content-wrapper">
                <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: body.pop() }}
                ></div>
            </div>
        </article>
    );
}
/* 
I need to dynamically generate the 
blog structure {
    heading: []
    subheading: []
    body: []
    image: [],
    structure: [heading, subheading, image, body]
}
const header = structure.splice(0, 2) This extracts first heading and subheading
header.map((curr) => {
    if(curr = 'heading') {
        return (
            <Heading content={}/>
        )
    }
})
So if I structure.map((curr, i) => {
    
})
 */
