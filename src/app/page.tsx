import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-red-400 p-4">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Database Error</h2>
          <p className="text-sm mt-2">{error.message}</p>
        </div>
      </main>
    );
  }

  const coursesList = courses || [];

  const avgProgress =
    coursesList.length > 0
      ? coursesList.reduce((a, c) => a + Number(c.progress || 0), 0) /
        coursesList.length
      : 0;

  const topCourse =
    coursesList.length > 0
      ? coursesList.reduce((a, b) =>
          Number(a.progress || 0) > Number(b.progress || 0) ? a : b
        )
      : null;

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#050816] text-white overflow-x-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <section className="flex-1 w-full p-4 sm:p-6 md:p-10 pb-24 md:pb-10 overflow-y-auto">

        {/* HERO */}
        <div className="mt-2 mb-6">
          <HeroTile coursesCount={coursesList.length} />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

          {/* COURSES */}
          {coursesList.length > 0 ? (
            coursesList.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
                iconName={course.icon_name}
              />
            ))
          ) : (
            <div className="text-gray-400">No courses found</div>
          )}

          {/* HEATMAP */}
          <article className="sm:col-span-2 xl:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6 overflow-hidden">

            <h2 className="text-base md:text-lg font-semibold">
              Activity Overview
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Your learning activity (last 5 weeks)
            </p>

            {/* DAYS */}
            <div className="grid grid-cols-7 text-[10px] text-gray-500 mt-4 mb-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 w-full">

              {Array.from({ length: 35 }).map((_, i) => {
                const level = Math.floor(Math.random() * 4);

                return (
                  <div
                    key={i}
                    title={`Day ${i + 1}`}
                    className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-sm transition-all duration-200 hover:scale-110 ${
                      level === 0
                        ? "bg-white/5"
                        : level === 1
                        ? "bg-cyan-900/30"
                        : level === 2
                        ? "bg-cyan-600/50"
                        : "bg-cyan-300"
                    }`}
                  />
                );
              })}

            </div>

          </article>

          {/* STATS */}
          <article className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6">

            <h3 className="text-xs sm:text-sm text-gray-400">
              Average Progress
            </h3>

            <p className="text-2xl sm:text-3xl font-bold text-cyan-300 mt-2 sm:mt-3">
              {avgProgress.toFixed(0)}%
            </p>

          </article>

          <article className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6">

            <h3 className="text-xs sm:text-sm text-gray-400">
              Active Courses
            </h3>

            <p className="text-2xl sm:text-3xl font-bold text-blue-300 mt-2 sm:mt-3">
              {coursesList.length}
            </p>

          </article>

          {/* TOP COURSE */}
          <article className="sm:col-span-2 xl:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6">

            <h3 className="text-xs sm:text-sm text-gray-400">
              Top Course
            </h3>

            <p className="text-base sm:text-xl font-bold mt-2 sm:mt-3 text-cyan-300">
              {topCourse?.title || "N/A"}
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              {topCourse?.progress || 0}% completion
            </p>

          </article>

        </div>
      </section>
    </main>
  );
}