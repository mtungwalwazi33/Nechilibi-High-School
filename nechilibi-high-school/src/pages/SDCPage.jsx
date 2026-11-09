
import {
  Wallet,
  TrendingUp,
  HandCoins,
  ClipboardList,
  CalendarDays,
  Megaphone,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Construction,
} from "lucide-react";

const budget = [
  {
    title: "Total Funds Received",
    amount: "$25,000",
    icon: HandCoins,
    color: "bg-pink-50 text-pink-700",
  },
  {
    title: "Total Expenditure",
    amount: "$12,500",
    icon: Wallet,
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "Available Balance",
    amount: "$12,500",
    icon: TrendingUp,
    color: "bg-green-50 text-green-700",
  },
];

const projects = [
  {
    name: "Classroom Renovations",
    description: "Renovation and improvement of existing classrooms.",
    progress: 75,
    status: "In Progress",
  },
  {
    name: "School Library Development",
    description: "Improving library facilities and learning resources.",
    progress: 45,
    status: "In Progress",
  },
  {
    name: "Water and Sanitation Project",
    description: "Improving access to clean water and sanitation.",
    progress: 100,
    status: "Completed",
  },
];

const announcements = [
  {
    title: "SDC General Meeting",
    date: "Date to be confirmed",
    category: "Meeting",
    description:
      "Parents and guardians are invited to attend the next School Development Committee meeting.",
  },
  {
    title: "School Development Update",
    date: "Date to be confirmed",
    category: "Development",
    description:
      "Updates on ongoing school improvement projects will be shared with the school community.",
  },
  {
    title: "Community Fundraising",
    date: "Date to be confirmed",
    category: "Notice",
    description:
      "More information about upcoming fundraising activities will be announced here.",
  },
];

function SDCPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* PAGE HEADER */}
      <section className="bg-[#171717] px-6 py-12 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-300">
            Nechilibi High School
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            School Development Committee
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
            Promoting transparency, accountability and community
            participation in the development of our school.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-10 md:px-10">
        {/* BUDGET OVERVIEW */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <Wallet className="text-[#C2185B]" size={25} />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Budget Overview
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Financial overview of school development activities.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {budget.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">
                      {item.title}
                    </p>
                    <div className={`rounded-lg p-3 ${item.color}`}>
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-gray-900">
                    {item.amount}
                  </h3>
                </div>
              );
            })}
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Illustrative figures only. Replace with verified school financial
            information before publishing.
          </p>
        </section>

        {/* PROJECT PROGRESS */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <Construction className="text-[#C2185B]" size={25} />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Development Projects
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Follow the progress of our school development projects.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {project.description}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mt-6 flex justify-between text-sm">
                  <span className="font-medium text-gray-600">
                    Project progress
                  </span>
                  <span className="font-bold text-[#C2185B]">
                    {project.progress}%
                  </span>
                </div>

                <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-[#C2185B] transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ANNOUNCEMENTS */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <Megaphone className="text-[#C2185B]" size={25} />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Announcements & News
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Important notices and updates from the SDC.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((announcement) => (
              <article
                key={announcement.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-[#C2185B]">
                    {announcement.category}
                  </span>
                  <CalendarDays size={18} className="text-gray-400" />
                </div>

                <h3 className="mt-5 font-bold text-gray-900">
                  {announcement.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {announcement.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                  <Clock size={14} />
                  {announcement.date}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TRANSPARENCY MESSAGE */}
        <section className="rounded-xl border border-pink-100 bg-pink-50 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 shrink-0 text-[#C2185B]" size={25} />
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Building Our School Together
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                The School Development Committee works with parents,
                guardians, staff and the wider community to support the
                growth and improvement of Nechilibi High School.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SDCPage;
