export function ContactForm() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-3 border rounded-md"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block font-medium">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full p-3 border rounded-md"
          placeholder="+1 617 756 2626"
          required
        />
      </div>
    </div>
  );
}
