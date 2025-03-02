export function ExtrasSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add extras</h2>

      <div className="space-y-4">
        <div className="border rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 10H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <div className="font-medium">Extra baggage</div>
              <div className="text-gray-600">
                Add any extra baggage you need for your trip
              </div>
            </div>
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M7 7L17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="border rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18V12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12V18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 18H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <div className="font-medium">Seat selection</div>
              <div className="text-gray-600">
                Specify where on the plane you'd like to sit
              </div>
            </div>
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M7 7L17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="border rounded-lg p-4 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16H12.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <div className="font-medium">Cancel for any reason</div>
              <div className="text-gray-600">
                Protect your purchase if you decide to cancel
              </div>
            </div>
          </div>

          <div className="bg-gray-200 px-3 py-1 rounded-md text-sm">
            Not available
          </div>
        </div>
      </div>
    </div>
  );
}
