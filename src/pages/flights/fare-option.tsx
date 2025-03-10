import Link from "next/link";
import Image from "next/image";
import { FareOption } from "@/components/fare-option";

export default function FareOptionsPage() {
  const flightId = "ZZ0507";
  const isNonStop = flightId.includes("ZZ0507");

  // Determine flight details based on flightId
  const flightDetails = {
    airline: isNonStop ? "Duffel Airways" : "Turkish Airlines",
    flightNumber: isNonStop ? "ZZ0507" : "TK0715, TK0694",
    departureTime: isNonStop ? "05:25" : "06:05",
    arrivalTime: isNonStop ? "08:26" : "19:55",
    duration: isNonStop ? "06h 01m" : "16h 50m",
    origin: "LHE",
    destination: "CAI",
    date: "8 Mar 2025",
    logo: "/placeholder.svg?height=50&width=50",
  };

  return (
    <main className="container mx-auto p-4 max-w-5xl">
      <div className="flex items-center gap-2 text-purple-600 mb-6">
        <Link href="/" className="text-lg">
          Orders
        </Link>
        <span className="text-gray-400">&gt;</span>
        <Link href="/" className="text-lg">
          New order
        </Link>
        <span className="text-gray-400">&gt;</span>
        <Link href="/flights" className="text-lg">
          LHE to CAI
        </Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-lg text-gray-500">Fare options</span>
      </div>

      <div className="mb-8">
        <div className="text-lg font-medium mb-2">
          Flight to CAI{" "}
          <span className="text-gray-500">{flightDetails.date}</span>
        </div>

        <div className="flex items-center gap-4 border-b pb-4">
          <Image
            src={flightDetails.logo || "/placeholder.svg"}
            alt={flightDetails.airline}
            width={50}
            height={50}
            className="rounded-md"
          />

          <div className="grid grid-cols-[auto_1fr_auto] gap-x-8 items-center w-full">
            <div>
              <div className="text-xl font-medium">
                {flightDetails.departureTime}
              </div>
              <div className="text-lg">{flightDetails.origin}</div>
            </div>

            <div className="text-center">
              <div className="text-sm text-gray-500">
                {flightDetails.duration}
              </div>
              <div className="relative h-0.5 bg-gray-300 my-2">
                <div className="absolute left-0 right-0 top-1/2 flex justify-center">
                  <span className="bg-white px-2 transform -translate-y-1/2 text-gray-500">
                    Direct
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xl font-medium">
                {flightDetails.arrivalTime}
              </div>
              <div className="text-lg">{flightDetails.destination}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <FareOption
          title="Basic"
          type="ECONOMY"
          price={224.11}
          features={[
            { label: "Changeable", value: "£30.00 fee", icon: "change" },
            { label: "Refundable", value: "£30.00 fee", icon: "refund" },
            { label: "Hold price", value: "& space", icon: "hold" },
            { label: "Includes carry-on bags", icon: "baggage" },
            { label: "Includes checked bags", icon: "baggage" },
          ]}
          selected={true}
        />

        <FareOption
          title="Comfort"
          type="PREMIUM ECONOMY"
          price={324.4}
          features={[
            { label: "Changeable", value: "£40.00 fee", icon: "change" },
            { label: "Not refundable", icon: "refund", disabled: true },
            { label: "Hold price", value: "& space", icon: "hold" },
            { label: "Includes carry-on bags", icon: "baggage" },
            { label: "Includes checked bags", icon: "baggage" },
          ]}
        />

        <FareOption
          title="Premium"
          type="BUSINESS"
          price={1024.99}
          features={[
            { label: "Changeable", value: "£170.00 fee", icon: "change" },
            { label: "Refundable", value: "£170.00 fee", icon: "refund" },
            { label: "Hold price", value: "& space", icon: "hold" },
            { label: "Includes carry-on bags", icon: "baggage" },
            { label: "Includes checked bags", icon: "baggage" },
          ]}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href="/checkout"
          className="bg-black text-white px-6 py-3 rounded-md font-medium flex items-center gap-2"
        >
          Go to checkout
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
