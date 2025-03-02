export function MetadataSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add metadata</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-4">
        <div className="space-y-2">
          <label htmlFor="metadataKey" className="block font-medium">
            Key <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="metadataKey"
            type="text"
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="metadataValue" className="block font-medium">
            Value <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="metadataValue"
            type="text"
            className="w-full p-3 border rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button type="button" className="text-purple-600">
          Add another key/value pair
        </button>
      </div>
    </div>
  );
}
