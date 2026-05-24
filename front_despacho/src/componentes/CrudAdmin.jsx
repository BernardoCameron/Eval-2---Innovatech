import { useState } from "react";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

import { PruebaCards } from "./CrudAdmin/PruebaCards";
import { TableCompras } from "./CrudAdmin/TableCompras";
import { TableDespachos } from "./CrudAdmin/TableDespachos";
import { FormCrearVenta } from "./CrudAdmin/FormCrearVenta";
import Reviews from "./Layouts/Reviews";

export const CrudAdmin = () => {
  const [currentView, setView] = useState("dashboard"); // 'dashboard', 'ventas', 'despachos'

  return (
    <>
      <div className="grid grid-cols-[auto_1fr] min-h-screen bg-gray-50">
        <div className="col-span-1">
          {/* Columna 1: Navbar (ancho fijo) */}
          <Navbar currentView={currentView} setView={setView} />
        </div>

        {/* Columna 2: Contenido principal (ocupa el espacio restante) */}
        <div className="overflow-y-auto p-6 flex flex-col justify-between min-h-screen">
          <div className="mb-6 flex-grow">
            {currentView === "dashboard" && <PruebaCards setView={setView} />}
            {currentView === "ventas" && (
              <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-teal-700 border-b pb-3">Consultar Órdenes de Compra</h1>
                <TableCompras />
              </div>
            )}
            {currentView === "despachos" && (
              <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-teal-700 border-b pb-3">Revisar Órdenes de Despacho</h1>
                <TableDespachos />
              </div>
            )}
            {currentView === "registrar-venta" && (
              <div className="max-w-6xl mx-auto">
                <FormCrearVenta setView={setView} />
              </div>
            )}
            {currentView === "dashboard" && <Reviews />}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

