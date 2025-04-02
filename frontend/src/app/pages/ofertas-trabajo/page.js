import jobs from "@/app/data/jobs";

export default function OfertasTrabajo() { 
    return (
      <div className="min-h-screen bg-white p-10">
        <h1 className="text-4xl font-bold text-cyan-800 mb-6">Ofertas de Trabajo</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="p-6 border border-cyan-800 rounded-xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-cyan-700">{job.title}</h2>
              <p className="text-gray-700 font-medium">{job.company} - {job.location}</p>
              <p className="mt-2 text-gray-600">{job.description}</p>
              <button disabled={!job.active} className="mt-4 px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-cyan-900 transition">
                Aplicar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }