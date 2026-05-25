import { FaHome, FaPlusCircle, FaShoppingCart, FaTruck } from "react-icons/fa";

function Navbar({ currentView, setView }) {
  const menuItems = [
    { id: "dashboard", label: "Inicio / Dashboard", icon: <FaHome className="text-lg" /> },
    { id: "registrar-venta", label: "Registrar Venta", icon: <FaPlusCircle className="text-lg" /> },
    { id: "ventas", label: "Órdenes de Compra", icon: <FaShoppingCart className="text-lg" /> },
    { id: "despachos", label: "Órdenes de Despacho", icon: <FaTruck className="text-lg" /> },
  ];

  return (
    <nav className="rounded-2xl w-[260px] min-h-[880px] bg-teal-600 text-white sticky top-0 p-5 m-4 shadow-xl border border-teal-500/20">
      {/* Logo o título */}
      <div className="mb-10 text-center pb-4 border-b border-teal-500/30">
        <h2 className="text-2xl font-black tracking-wider text-teal-50 cursor-pointer" onClick={() => setView("dashboard")}>
          ITPCARGO--
        </h2>
        <p className="text-xs text-teal-200 mt-1 font-medium">Despacho Dashboard</p>
      </div>

      {/* Menú de navegación */}
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => setView(item.id)}
                className={`w-full flex items-center gap-3 font-semibold py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-teal-800 text-white shadow-inner font-bold"
                    : "text-teal-100 hover:bg-teal-700/50 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
