export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2 text-blue-600">
        {user.name.firstname} {user.name.lastname}
      </h3>
      <p className="text-gray-600 mb-1">📧 {user.email}</p>
      <p className="text-gray-600 mb-1">🏙️ {user.address.city}</p>
      <p className="text-gray-600 mb-1">📞 {user.phone}</p>
    </div>
  );
}
