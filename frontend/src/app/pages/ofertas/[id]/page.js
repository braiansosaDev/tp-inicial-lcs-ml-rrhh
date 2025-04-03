import OfertaDetail from "@/app/components/OfertaDetail";

export default function OfertaDetailPage({params}) {
  return (
    <div className="min-h-screen bg-white p-10">
      <OfertaDetail id={params.id} />
    </div>
  );
}
