import Link from "next/link";
import Image from "next/image";

interface FlightCardProps {
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  origin: string;
  destination: string;
  price: string;
  stopType: string;
  stopDuration?: string;
  logo: string;
  nextDay?: boolean;
}

export function FlightCard({
  airline,
  flightNumber,
  departureTime,
  arrivalTime,
  duration,
  origin,
  destination,
  price,
  stopType,
  stopDuration,
  logo,
  nextDay = false,
}: FlightCardProps) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
      <div className="p-4 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center">
        {/* Airline & Flight Details */}
        <div className="flex items-center gap-4">
          <Image
            src={logo || "/placeholder.svg"}
            alt={airline}
            width={50}
            height={50}
            className="rounded-md"
          />
          <div>
            <p className="text-lg font-semibold">
              {departureTime} - {arrivalTime}{" "}
              {nextDay && <sup className="text-xs">+1</sup>}
            </p>
            <p className="text-gray-600">
              {airline} · {flightNumber}
            </p>
          </div>
        </div>

        {/* Flight Duration & Route */}
        <div className="text-center md:text-left">
          <p className="text-lg font-medium">{duration}</p>
          <p className="text-gray-600">
            {origin} - {destination}
          </p>

          <p className="text-sm text-gray-500">
            {stopType}{" "}
            {stopType !== "Non-stop" && stopDuration ? `· ${stopDuration}` : ""}
          </p>
        </div>

        {/* Price & Select Button */}
        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-600">From</p>
          <p className="text-xl font-bold">US${price}</p>
          <Link
            href={`/flights/${flightNumber.replace(/, /g, "-")}/fare-options`}
            className="bg-black text-white px-6 py-2 rounded-md font-medium mt-2"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}
