

const Blog = () => {
    return (
        <div className="lg:max-w-7xl mx-auto my-24">
            <div>
                <h1 className="text-center my-8 font-bold text-xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="mx-3"><span className="font-bold">Ans : </span> When a user logs into a website, he is given an access token and a refresh token. User login to the site using access token. But this access token gets lost after a certain period of time. The refresh token then sends a request to the server to issue a new access token. After that, the server gives the new access token to the user and he logs in to the site with it. We can store them in local storage and Http-only cookies. But for security Http only cookies are better than local storage.</p>
            </div>
            <div>
                <h1 className="text-center my-8 font-bold text-xl">Compare SQL and NoSQL databases?</h1>
                <div className="flex gap-8">
                    <p className="mx-3"><span className="font-bold">SQL :</span> It is a relational database management system. Here the data is arranged according to row and column and there is a relation between them. To store data here, first create a structure according to row and column and then store data there. And the new data cannot be stored by changing the structure in the middle. Data is less scalable.</p>
                    <p className="mx-3"><span className="font-bold">NoSQL :</span> It is a non relational database management system. Data is in Json/Bson format. Here the data is individualy. It contains kew value and collection base data. Here the data can be stored in a dynamic structure. That is, if you want to add new data in the work, it can be done very easily. Data is more scalable.</p>
                </div>
            </div>
            <div>
                <h1 className="text-center my-8 font-bold text-xl">What is express js? What is Nest JS?</h1>
                <p className="mx-3"><span className="font-bold">Express js : </span> Express.js is a web application framework for Node js. It provides various features that make web application development fast an easy because it adds functions to Node.js is already existing function. Express.js is a minimal and flexible Node Js Framework that provides a robust set of features for web applications like routing, sessions etc. It is easy to use by npm installation</p>
                <p className=" mt-3 mx-3"><span className="font-bold">Nest js : </span> A progressive Node.js framework for building efficient, scalable and enter-prise-grade server-side application on top of TypeScript and JavaScript. Nest.js uses the latest version of typeScript which helps ensure that it will remain relevant in the rapidly changing JavaScript landscape and gives developers less context switching . Components get their own folders . Nest providers a way to define multiple modules under the one root module.</p>
            </div>
            <div>
                <h1 className="text-center my-8 font-bold text-xl">What is MongoDB aggregate and how does it work?</h1>
                <p className="mx-3"><span className="font-bold">Express js : </span> Aggregate is the process of selecting data from a collection to process multiple document and returns computed results . It gives us group values from multiple documents together. Fetching a lot of nested data to perform complex operations. Filter documents and analyze data changes. Aggregation is performed using a pipeline which consists of different stages that can filter, sort, group, reshape and modify documents that pass though the pipline. In this way, a result is given by combining the work of many queries.</p>
            </div>
        </div>
    );
};

export default Blog;