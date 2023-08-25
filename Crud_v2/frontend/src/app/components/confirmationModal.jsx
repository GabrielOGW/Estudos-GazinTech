export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 w-1/2 rounded-md">
        <h1 className=" text-center  text-2xl font-semibold mb-4">Deseja Excluir as pessoas selecionadas?</h1>
        <p className="text-center mb-4">Esta ação não pode ser desfeita.</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-md mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
