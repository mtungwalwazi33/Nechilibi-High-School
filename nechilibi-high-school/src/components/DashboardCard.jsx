
function DashboardCard({ title, value, description, icon, color }) {

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </h2>
        </div>

        <div className={`p-3 rounded-xl ${color}`}>
          {icon}
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-4">
        {description}
      </p>

    </div>
  );
}

export default DashboardCard;
