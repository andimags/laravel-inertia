import Tweet from "../Components/Tweet";

export default function Index({ tweets }) {
    return (
        <>
            <h1 className="text-gray-100">Twitter</h1>
            { tweets && tweets.map( (tweet) => (
                <Tweet tweet={tweet} key={tweet.id}></Tweet>
            )) }
        </>
    )
}