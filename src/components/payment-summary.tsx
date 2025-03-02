export function PaymentSummary() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payment</h2>

      <div className="border-t border-b py-4 mb-6">
        <div className="grid grid-cols-2 mb-2">
          <div className="font-medium">Description</div>
          <div className="text-right font-medium">Price (USD)</div>
        </div>

        <div className="grid grid-cols-2 py-2 bg-gray-50">
          <div>Fare</div>
          <div className="text-right">189.92</div>
        </div>

        <div className="grid grid-cols-2 py-2">
          <div>Fare taxes</div>
          <div className="text-right">34.19</div>
        </div>

        <div className="grid grid-cols-2 pt-4 font-bold">
          <div>Total (USD)</div>
          <div className="text-right">224.11</div>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-black text-white py-4 rounded-md font-medium">
          Pay with Balance
        </button>

        <button className="w-full bg-gray-100 text-gray-800 py-4 rounded-md font-medium">
          Pay with Credit Card
        </button>
      </div>
    </div>
  );
}
