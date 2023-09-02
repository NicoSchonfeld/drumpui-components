import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="bg-gray-100">
            <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
              Cliente
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
              Correo
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
              Estado
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
              Importe
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
              Felix Saldaña
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              felix@saldana.com
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              Enviado
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              $76.999,00
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
              Lucas Gallego
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              lucas@saldana.com
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              Enviado
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              $20.009,00
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
              Oihane Torralba
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              oihane@saldana.com
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              Enviado
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
              $7.000,00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
