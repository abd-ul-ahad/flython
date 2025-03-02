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
  price: number;
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
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center">
        <div className="flex items-center gap-4">
          <Image
            src={logo || "/placeholder.svg"}
            alt={airline}
            width={50}
            height={50}
            className="rounded-md"
          />
          <div>
            <div className="text-lg font-medium">
              {departureTime} - {arrivalTime}
              {nextDay && <sup>+1</sup>}
            </div>
            <div className="text-gray-600">
              {airline} · {flightNumber}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center gap-2 md:gap-8">
          <div className="text-lg font-medium">{duration}</div>
          <div className="text-lg font-medium">
            {origin} - {destination}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-600 mb-1">From</div>
          <div className="text-xl font-bold mb-2">US${price.toFixed(2)}</div>
          <Link
            href={`/flights/${flightNumber.replace(/, /g, "-")}/fare-options`}
            className="bg-black text-white px-6 py-2 rounded-md font-medium"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}
