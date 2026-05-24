import { CardComponent } from "./CardComponent";

export const PruebaCards = ({ setView }) => {
  return (
    <section className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-teal-800 tracking-tight">
          Panel de Administración de Despachos
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          Gestiona las compras entrantes y controla el estado de las entregas logísticas.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto px-4">
        <CardComponent
          title="Consultar Ordenes de compra 💰"
          description="Revisa las últimas oc realizadas para generar su despacho"
          buttonText="Consultar"
          onClick={() => setView("ventas")}
        />
        <CardComponent
          title="Revisar Ordenes de despacho 🚚"
          description="Consulta los despachos realizados, modifica los registros de intentos o cierra la orden"
          buttonText="Consultar"
          onClick={() => setView("despachos")}
        />
      </div>
    </section>
  );
};

