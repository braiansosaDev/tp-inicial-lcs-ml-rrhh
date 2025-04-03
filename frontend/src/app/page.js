import Link from "next/link";
import jobs from "@/app/data/jobs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-cyan-800 mb-6">
        Ofertas de Trabajo
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 border border-cyan-800 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-cyan-700">
              {job.title}
            </h2>
            <p className="text-gray-700 font-medium">
              {job.company} - {job.location}
            </p>
            <p className="mt-2 text-gray-600">{job.description}</p>

            <Link href={`/pages/ofertas/${job.id}`} passHref>
              <button
                disabled={!job.active}
                className={`mt-4 px-4 py-2 rounded-lg transition ${
                  job.active
                    ? "bg-cyan-800 text-white hover:bg-cyan-900"
                    : "bg-gray-400 text-gray-300 cursor-not-allowed"
                }`}
              >
                Aplicar Ahora
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
