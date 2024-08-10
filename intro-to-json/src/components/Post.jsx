export default function Post({ title, body }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <hr className="mb-4"/>
            <p className="text-gray-700">{body}</p>
        </div>
    );
}