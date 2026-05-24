import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

export const FormCrearVenta = ({ setView }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      direccionCompra: "",
      valorCompra: 10000,
      fechaCompra: new Date().toISOString().split("T")[0] // Fecha de hoy por defecto
    }
  });

  const onSubmit = async (data) => {
    const jsonData = {
      direccionCompra: data.direccionCompra,
      valorCompra: parseInt(data.valorCompra),
      fechaCompra: data.fechaCompra,
      despachoGenerado: false
    };

    try {
      await axios.post("/api/v1/ventas", jsonData, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      
      Swal.fire({
        title: "¡Venta Registrada! 💰",
        text: "La orden de compra se ha creado exitosamente y está lista para despacho.",
        icon: "success",
        confirmButtonText: "Ver Órdenes",
        confirmButtonColor: "#0d9488" // Color teal-600
      }).then(() => {
        reset();
        setView("ventas"); // Redirigir a la lista de órdenes de compra
      });
    } catch (error) {
      console.error("Error al crear la venta:", error);
      Swal.fire({
        title: "Error ❌",
        text: "No se pudo registrar la venta. Verifica la conexión con el servidor.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#e11d48"
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-8 max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center text-center">
        <h2 className="text-3xl font-bold mb-8 text-teal-700">Registrar Nueva Venta (OC)</h2>
        
        <div className="mb-5 text-left text-lg">
          <label className="block font-bold mb-2 text-teal-800">Dirección de Entrega</label>
          <input
            type="text"
            placeholder="Ej. Av. Siempre Viva 742"
            className="border border-gray-300 rounded-lg block w-full p-2 text-gray-700 focus:border-teal-500 focus:outline-none"
            {...register("direccionCompra", { required: true })}
          />
        </div>

        <div className="mb-5 text-left text-lg">
          <label className="block font-bold mb-2 text-teal-800">Valor de la Compra ($)</label>
          <input
            type="number"
            min="1"
            placeholder="Ej. 15990"
            className="border border-gray-300 rounded-lg block w-full p-2 text-gray-700 focus:border-teal-500 focus:outline-none"
            {...register("valorCompra", { required: true })}
          />
        </div>

        <div className="mb-5 text-left text-lg">
          <label className="block font-bold mb-2 text-teal-800">Fecha de Compra</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg block w-full p-2 text-gray-700 focus:border-teal-500 focus:outline-none"
            {...register("fechaCompra", { required: true })}
          />
        </div>

        <button
          className="mt-4 py-3 px-8 rounded-lg bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 transition-all duration-300 shadow-md"
          type="submit"
        >
          Registrar Venta
        </button>
      </form>
    </div>
  );
};
