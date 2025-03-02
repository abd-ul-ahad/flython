export function PassengerForm() {
  return (
    <div>
      <div className="text-lg font-medium mb-4">Personal details</div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="title" className="block font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="title"
              className="w-full p-3 border rounded-md appearance-none"
              defaultValue="mr"
              required
            >
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="ms">Ms.</option>
              <option value="dr">Dr.</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="givenName" className="block font-medium">
            Given name <span className="text-red-500">*</span>
          </label>
          <input
            id="givenName"
            type="text"
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="familyName" className="block font-medium">
            Family name <span className="text-red-500">*</span>
          </label>
          <input
            id="familyName"
            type="text"
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label htmlFor="dob" className="block font-medium">
            Date of birth <span className="text-red-500">*</span>
          </label>
          <input
            id="dob"
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="DD / MM / YYYY"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="gender" className="block font-medium">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="gender"
              className="w-full p-3 border rounded-md appearance-none"
              defaultValue="male"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="text-lg font-medium mb-4">Passport details</div>

      <div className="space-y-2 mb-6">
        <label htmlFor="country" className="block font-medium">
          Country of issue
        </label>
        <div className="relative">
          <select
            id="country"
            className="w-full p-3 border rounded-md appearance-none"
            defaultValue=""
          >
            <option value="">--</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="passportNumber" className="block font-medium">
            Passport number
          </label>
          <input
            id="passportNumber"
            type="text"
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="passportExpiry" className="block font-medium">
            Expiry date
          </label>
          <input
            id="passportExpiry"
            type="text"
            className="w-full p-3 border rounded-md"
            placeholder="DD / MM / YYYY"
          />
        </div>
      </div>
    </div>
  );
}
