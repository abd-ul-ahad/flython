import Image from "next/image";

export function FlightSummary() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 flex items-center gap-4">
        <Image
          src="/placeholder.svg?height=50&width=50"
          alt="Duffel Airways"
          width={50}
          height={50}
          className="rounded-md"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-medium">Sat, 8 Mar 2025</div>
            <div className="text-lg font-medium">05:25 - 08:26</div>
          </div>

          <div className="text-gray-600">Basic · Duffel Airways</div>
        </div>

        <div className="text-right">
          <div className="text-lg font-medium">06h 01m</div>
          <div className="text-lg font-medium">LHE - CAI</div>
        </div>
      </div>

      <div className="border-t px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="text-gray-600">Sat, 8 Mar 2025, 05:25</div>
          <div>
            Depart from Allama Iqbal International Airport (LHE), Terminal 2
          </div>
        </div>

        <div className="ml-1 h-8 border-l border-dashed border-gray-300 my-1"></div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="text-gray-600">Sat, 8 Mar 2025, 08:26</div>
          <div>Arrive at Cairo International Airport (CAI), Terminal 1</div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-3 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Economy</span>
          <span className="text-gray-400">·</span>
          <span>Duffel Airways</span>
          <span className="text-gray-400">·</span>
          <span>ZZ0507</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 14L4 9L9 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>1 carry-on bag</span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              width="16"
              height="16"
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
            <span>1 checked bag</span>
          </div>
        </div>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-2 text-teal-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 14L4 9L9 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="font-medium">Flight change policy</div>
        </div>
        <div className="ml-6 text-gray-600">
          Make changes to this flight up until the departure date (a change
          penalty of £30.00 will apply)
        </div>
      </div>
    </div>
  );
}
