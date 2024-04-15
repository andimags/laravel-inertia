export default function Tweet({ tweet }) {
    const divStyle = 'text-gray-100 border border-gray-800 p-4 max-w-xl';
      
    return (
        <div className={divStyle}>
            <p>{tweet.body}</p>
        </div>
    );
}
