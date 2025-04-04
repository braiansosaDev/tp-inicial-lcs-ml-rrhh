import postulantes from "@/app/data/postulantes";
import { IoSparklesOutline } from "react-icons/io5";

export default function AplicantesOfertaTable() {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <h1 className="text-4xl font-bold text-gray-600 mb-6">Postulantes</h1>
        <button className="px-4 py-4 flex items-center gap-2 rounded-full border border-cyan-700 text-cyan-700 hover:bg-gray-100 hover:cursor-pointer">
          Evaluar con IA
          <IoSparklesOutline />
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-cyan-700">
          <tr className="text-white font-semibold text-center">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Años de experiencia</th>
            <th className="px-4 py-2">Nivel educativo</th>
            <th className="px-4 py-2">Habilidades</th>
            <th className="px-4 py-2">Idiomas</th>
            <th className="px-4 py-2">Expectativa salarial</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Apto</th>
          </tr>
        </thead>
        <tbody>
          {postulantes.map((postulante, index) => (
            <tr className="border-b border-gray-200 text-gray-600">
              <td className="text-center px-4 py-2">
                {postulante.id}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.nombre}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.anios_experiencia}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.nivel_educativo}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.habilidades}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.idiomas}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.expectativa_salarial}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.email}
              </td>
              <td className="text-center px-4 py-2">
                {postulante.es_apto ? (
                  <div className="rounded-full ml-2 flex justify-center items-center bg-green-100 py-0.5 px-2.5 border border-transparent text-sm text-green-800 transition-all shadow-sm">
                    Es apto
                  </div>
                ) : postulante.es_apto == false ? (
                  <div className="rounded-full ml-2 flex justify-center items-center bg-red-100 py-0.5 px-2.5 border border-transparent text-sm text-red-800 transition-all shadow-sm">
                    No es apto
                  </div>
                ) : (
                  <div className="rounded-full ml-2 flex justify-center items-center bg-gray-100 py-0.5 px-2.5 border border-transparent text-sm text-gray-800 transition-all shadow-sm">
                    Desconocido
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
