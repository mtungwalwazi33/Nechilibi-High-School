import AchievementsArchive from "../components/AchievementsArchive";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Trophy,
  FlaskConical,
  Palette,
  BriefcaseBusiness,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

const schoolImage = "/nechilibi-students.png";

function LandingPage({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    {
      title: "Students",
      description: "Access student registration, profiles and attendance.",
      icon: GraduationCap,
      section: "Students",
    },
    {
      title: "Parents",
      description: "Follow your child's academic progress and activities.",
      icon: Users,
      section: "Parents",
    },
    {
      title: "Staff",
      description: "Access staff information and attendance.",
      icon: BookOpen,
      section: "Staff",
    },
    {
      title: "Departments",
      description: "Explore academic departments and student performance.",
      icon: FlaskConical,
      section: "Departments",
    },
    {
      title: "Sports",
      description: "Explore school sports and student participation.",
      icon: Trophy,
      section: "Sports",
    },
    {
      title: "Administration",
      description: "Manage student applications and school records.",
      icon: BriefcaseBusiness,
      section: "Administration",
    },
  ];

  const goToDashboard = (section = "Dashboard") => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#171717]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center justify-center gap-3">
            <img
              src="/images/nechilibi-logo.png"
              alt="Nechilibi High School logo"
              className="h-14 w-14 rounded-full border-2 border-[#C2185B] bg-white object-cover shadow-sm"
            />

            <div className="text-center">
              <h1 className="text-lg font-bold text-[#C2185B]">
                NECHILIBI
              </h1>
              <p className="text-xs tracking-widest text-gray-600">
                HIGH SCHOOL
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="font-medium hover:text-[#C2185B]">
              Home
            </a>

            <a href="#about" className="font-medium hover:text-[#C2185B]">
              About
            </a>

            <a href="#activities" className="font-medium hover:text-[#C2185B]">
              Activities
            </a>

            <a href="#achievements" className="font-medium hover:text-[#C2185B]">
              Achievements
            </a>

            <a href="#categories" className="font-medium hover:text-[#C2185B]">
              Categories
            </a>

            <button
              onClick={() => goToDashboard()}
              className="rounded-lg bg-[#C2185B] px-5 py-3 font-semibold text-white transition hover:bg-[#9D174D]"
            >
              School Dashboard
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t bg-white px-6 py-6 md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
            <a onClick={() => setMenuOpen(false)} href="#about">About</a>
            <a onClick={() => setMenuOpen(false)} href="#activities">Activities</a>
            <a onClick={() => setMenuOpen(false)} href="#categories">Categories</a>

            <button
              onClick={() => goToDashboard()}
              className="rounded-lg bg-[#C2185B] px-5 py-3 font-semibold text-white"
            >
              School Dashboard
            </button>
          </div>
        )}
      </nav>

     
{/* HERO SECTION */}
<section
  id="home"
  className="relative flex min-h-[750px] items-center bg-cover bg-center bg-no-repeat px-6 pt-24 text-white md:bg-top"
  style={{ backgroundImage: `url(${schoolImage})` }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl py-24">
    <div className="max-w-3xl">

      <p className="mb-5 font-semibold uppercase tracking-[4px] text-pink-200">
        Education • Excellence • Future
      </p>

      <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
        Welcome to
        <span className="block text-[#F4C2D7]">
          Nechilibi High School
        </span>
      </h1>

      <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-100 md:text-xl">
        Empowering learners through quality education, discipline,
        creativity and opportunities to achieve their full potential.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => goToDashboard()}
          className="flex items-center gap-2 rounded-lg bg-[#C2185B] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#9D174D]"
        >
          Explore Dashboard
          <ArrowRight size={20} />
        </button>

        <a
          href="#about"
          className="rounded-lg border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#C2185B]"
        >
          Discover Our School
        </a>
      </div>

    </div>
  </div>
</section>


      {/* ABOUT SECTION */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-[#C2185B]">
              About Us
            </p>

            <h2 className="mb-6 text-4xl font-extrabold">
              Building a Strong Foundation for the Future
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              Nechilibi High School is committed to creating an environment
              where learners can develop academically, socially and personally.
            </p>

            <p className="leading-8 text-gray-600">
              Through academic learning, sports, creativity and teamwork,
              we encourage every learner to discover their strengths and
              work towards a brighter future.
            </p>

            <button
              onClick={() => goToDashboard("Principal")}
              className="mt-8 flex items-center gap-2 font-bold text-[#C2185B]"
            >
              Explore School Information <ArrowRight size={18} />
            </button>
          </div>

          <div className="rounded-3xl bg-[#FCEAF2] p-12 text-center">
            <img
              src="/images/nechilibi-logo.png"
              alt="Nechilibi High School logo"
              className="mx-auto mb-5 h-32 w-32 rounded-full border-4 border-[#C2185B] bg-white object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold">
              Education for Every Learner
            </h3>
            <p className="mt-3 text-gray-600">
              Developing knowledge, skills and character.
            </p>
          </div>

        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section id="activities" className="bg-[#F8F5F7] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 font-bold uppercase tracking-widest text-[#C2185B]">
              School Life
            </p>
            <h2 className="text-4xl font-extrabold">
              Activities at Nechilibi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Learning goes beyond the classroom. Explore the different
              opportunities available to our learners.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {[
              {
                title: "Academic Excellence",
                description: "Developing knowledge through classroom learning and academic activities.",
                icon: BookOpen,
              },
              {
                title: "Sports & Athletics",
                description: "Building teamwork, discipline and confidence through sport.",
                icon: Trophy,
              },
              {
                title: "Arts & Creativity",
                description: "Encouraging learners to express themselves and develop their talents.",
                icon: Palette,
              },
            ].map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.title}
                  className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-[#FCEAF2] p-4 text-[#C2185B]">
                    <Icon size={35} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {activity.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {activity.description}
                  </p>

                  <button
                    onClick={() => goToDashboard("Sports")}
                    className="mt-6 font-semibold text-[#C2185B]"
                  >
                    Explore More →
                  </button>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 font-bold uppercase tracking-widest text-[#C2185B]">
              School Portals
            </p>

            <h2 className="text-4xl font-extrabold">
              Explore Our Categories
            </h2>

            <p className="mt-4 text-gray-600">
              Select a category to access the relevant school dashboard.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.title}
                  onClick={() => goToDashboard(category.section)}
                  className="rounded-2xl border border-gray-100 bg-white p-8 text-left shadow-sm transition hover:-translate-y-2 hover:border-[#C2185B] hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#FCEAF2] p-4 text-[#C2185B]">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {category.title}
                  </h3>

                  <p className="mb-5 leading-7 text-gray-600">
                    {category.description}
                  </p>

                  <span className="flex items-center gap-2 font-bold text-[#C2185B]">
                    Open Portal <ArrowRight size={18} />
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      <AchievementsArchive />

      {/* FOOTER */}
      <footer className="bg-[#171717] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-[#F4C2D7]">
              NECHILIBI HIGH SCHOOL
            </h2>
            <p className="mt-3 text-gray-400">
              Education • Excellence • Future
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#activities" className="hover:text-white">Activities</a>
              <a href="#categories" className="hover:text-white">Categories</a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-bold">School Portal</h3>
            <button
              onClick={() => goToDashboard()}
              className="text-[#F4C2D7] hover:text-white"
            >
              Enter Dashboard →
            </button>
          </div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nechilibi High School. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;
