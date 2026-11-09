
import { useState } from "react";
import {
  Trophy,
  Award,
  Medal,
  Search,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

const artsGallery = [
  {
    id: 1,
    title: "Arts Showcase",
    caption: "Students proudly presenting traditional dance and performance culture.",
    image: "/images/arts-archive-showcase.jpg",
    alt: "Nechilibi High School students in traditional attire performing during an arts showcase",
  },
  {
    id: 2,
    title: "Performance Day",
    caption: "Creative expression and cultural celebration at school events.",
    image: "/images/arts-archive-performance.jpg",
    alt: "A student performing a cultural dance during an arts event at school",
  },
];

const sportsGallery = [
  {
    id: 1,
    title: "Football Glory",
    caption: "A proud school football triumph celebrating teamwork, discipline and victory.",
    image: "/images/football-archive-trophy.jpg",
    alt: "Nechilibi High School football team celebrating with a trophy after winning a match",
  },
];

const sciencesGallery = [
  {
    id: 1,
    title: "Robotics",
    caption: "Students exploring robotics and coding creativity through hands-on innovation.",
    image: "/images/robotics-archive.jpg",
    alt: "Students working on robotics equipment during a science and technology activity",
  },
];

const achievements = [
  {
    id: 1,
    title: "Science Innovation Competition",
    department: "Sciences",
    level: "Zonal",
    year: 2026,
    position: "1st Place",
    description:
      "Recognition for outstanding innovation and scientific creativity.",
  },
  {
    id: 2,
    title: "Provincial Athletics Championship",
    department: "Sports",
    level: "Provincial",
    year: 2026,
    position: "Gold Medal",
    description:
      "Outstanding performance in the provincial athletics competition.",
  },
  {
    id: 3,
    title: "National Schools Debate",
    department: "Arts",
    level: "National",
    year: 2025,
    position: "Finalist",
    description:
      "Recognition for excellence in debating and public speaking.",
  },
  {
    id: 4,
    title: "Young Entrepreneurs Challenge",
    department: "Commercials",
    level: "Zonal",
    year: 2025,
    position: "2nd Place",
    description:
      "Awarded for creativity and entrepreneurship.",
  },
  {
    id: 5,
    title: "Provincial Mathematics Olympiad",
    department: "Sciences",
    level: "Provincial",
    year: 2025,
    position: "1st Place",
    description:
      "Recognition for exceptional mathematical problem-solving.",
  },
  {
    id: 6,
    title: "National Athletics Games",
    department: "Sports",
    level: "National",
    year: 2024,
    position: "Bronze Medal",
    description:
      "Recognition for outstanding sporting achievement.",
  },
];

const levels = ["All", "Zonal", "Provincial", "National"];

const departments = [
  "All Departments",
  "Sciences",
  "Arts",
  "Commercials",
  "Sports",
  "Other",
];

function getLevelStyle(level) {
  const styles = {
    Zonal: "bg-pink-100 text-pink-700",
    Provincial: "bg-purple-100 text-purple-700",
    National: "bg-amber-100 text-amber-700",
  };

  return styles[level] || "bg-gray-100 text-gray-700";
}

function getAchievementIcon(level) {
  if (level === "National") return Trophy;
  if (level === "Provincial") return Medal;
  return Award;
}

export default function AchievementsArchive() {
  const [activeLevel, setActiveLevel] = useState("All");
  const [activeDepartment, setActiveDepartment] =
    useState("All Departments");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAchievements = achievements.filter((achievement) => {
    const matchesLevel =
      activeLevel === "All" || achievement.level === activeLevel;

    const matchesDepartment =
      activeDepartment === "All Departments" ||
      achievement.department === activeDepartment;

    const searchText =
      `${achievement.title} ${achievement.department} ${achievement.position}`.toLowerCase();

    const matchesSearch = searchText.includes(searchTerm.toLowerCase());

    return matchesLevel && matchesDepartment && matchesSearch;
  });

  return (
    <section
      id="achievements"
      className="bg-[#FDF7FA] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#C2185B]">
            Excellence & Recognition
          </span>

          <h2 className="text-3xl font-bold text-[#171717] md:text-4xl">
            Departmental Achievements Archive
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Celebrating the achievements, dedication and outstanding
            performance of Nechilibi High School across different
            departments and competition levels.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[...artsGallery, ...sportsGallery, ...sciencesGallery].map((item) => (
            <div
              key={`${item.title}-${item.id}`}
              className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2185B]">
                  {item.title === "Robotics"
                    ? "Sciences Archive"
                    : item.title.includes("Football")
                      ? "Football Archive"
                      : "Arts Archive"}
                </p>

                <h3 className="mb-2 text-xl font-bold text-[#171717]">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ACHIEVEMENT SUMMARY */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              label: "Zonal Achievements",
              level: "Zonal",
              icon: Award,
            },
            {
              label: "Provincial Achievements",
              level: "Provincial",
              icon: Medal,
            },
            {
              label: "National Achievements",
              level: "National",
              icon: Trophy,
            },
          ].map((item) => {
            const Icon = item.icon;
            const count = achievements.filter(
              (achievement) => achievement.level === item.level
            ).length;

            return (
              <div
                key={item.level}
                className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-pink-100 p-3 text-[#C2185B]">
                    <Icon size={25} />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-[#171717]">
                      {count}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FILTERS */}
        <div className="mb-8 rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">

          <h3 className="mb-4 font-bold text-[#171717]">
            Explore Achievements
          </h3>

          {/* LEVEL FILTER */}
          <p className="mb-3 text-sm font-medium text-gray-500">
            Competition level
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeLevel === level
                    ? "bg-[#C2185B] text-white shadow"
                    : "bg-pink-50 text-gray-700 hover:bg-pink-100"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* DEPARTMENT AND SEARCH FILTERS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-500">
                Department
              </label>

              <select
                value={activeDepartment}
                onChange={(e) => setActiveDepartment(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#C2185B]"
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-500">
                Search achievements
              </label>

              <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 focus-within:border-[#C2185B]">
                <Search size={19} className="text-gray-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title or award..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS COUNT */}
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-bold text-[#171717]">
            Achievement Records
          </h3>

          <span className="text-sm text-gray-500">
            {filteredAchievements.length} record(s) found
          </span>
        </div>

        {/* ACHIEVEMENT CARDS */}
        {filteredAchievements.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAchievements.map((achievement) => {
              const Icon = getAchievementIcon(achievement.level);

              return (
                <article
                  key={achievement.id}
                  className="group rounded-2xl border border-pink-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="rounded-xl bg-pink-100 p-3 text-[#C2185B]">
                      <Icon size={26} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getLevelStyle(
                        achievement.level
                      )}`}
                    >
                      {achievement.level}
                    </span>
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#C2185B]">
                    {achievement.department} Department
                  </p>

                  <h4 className="mb-3 text-lg font-bold text-[#171717]">
                    {achievement.title}
                  </h4>

                  <p className="mb-5 text-sm leading-6 text-gray-600">
                    {achievement.description}
                  </p>

                  <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays size={16} />
                      {achievement.year}
                    </span>

                    <span className="font-bold text-[#C2185B]">
                      {achievement.position}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                    <GraduationCap size={16} />
                    Nechilibi High School
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-pink-200 bg-white px-6 py-16 text-center">
            <Trophy
              size={42}
              className="mx-auto mb-4 text-pink-300"
            />

            <h3 className="mb-2 text-lg font-bold text-[#171717]">
              No achievements found
            </h3>

            <p className="text-sm text-gray-500">
              Try another competition level, department or search term.
            </p>

            <button
              onClick={() => {
                setActiveLevel("All");
                setActiveDepartment("All Departments");
                setSearchTerm("");
              }}
              className="mt-5 rounded-full bg-[#C2185B] px-5 py-2 text-sm font-semibold text-white hover:bg-pink-800"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* DEMO DATA NOTICE */}
        <p className="mt-8 text-center text-xs text-gray-400">
          Demonstration records only. Replace these examples with verified
          school achievements.
        </p>
      </div>
    </section>
  );
}
