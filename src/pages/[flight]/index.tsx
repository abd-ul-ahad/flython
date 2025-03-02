import Link from "next/link";
import { FlightCard } from "@/components/flight-card";
import { useRouter } from "next/router";

export default function FlightsPage() {
  const router = useRouter();



  const from = "LHE";
  const to = "CAI";
  const date = "2025-03-08";



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
        <span className="text-lg">
          {from} to {to}
        </span>
        <span className="text-gray-400">&gt;</span>
        <span className="text-lg text-gray-500">Fare options</span>
      </div>

      <div className="space-y-4">
        <FlightCard
          airline="Duffel Airways"
          flightNumber="ZZ0507"
          departureTime="05:25"
          arrivalTime="08:26"
          duration="06h 01m"
          origin={from}
          destination={to}
          price={224.11}
          stopType="Non-stop"
          logo="/placeholder.svg?height=50&width=50"
        />

        <FlightCard
          airline="Turkish Airlines"
          flightNumber="TK0715, TK0694"
          departureTime="06:05"
          arrivalTime="19:55"
          duration="16h 50m"
          origin={from}
          destination={to}
          price={597.19}
          stopType="1 stop"
          stopDuration="07h 40m IST"
          logo="/placeholder.svg?height=50&width=50"
        />

        <FlightCard
          airline="Turkish Airlines"
          flightNumber="TK0745, TK0694"
          departureTime="09:40"
          arrivalTime="19:55"
          duration="13h 15m"
          origin={from}
          destination={to}
          price={597.19}
          stopType="1 stop"
          stopDuration="04h 05m IST"
          logo="/placeholder.svg?height=50&width=50"
        />

        <FlightCard
          airline="Emirates"
          flightNumber="EK0625, EK0921"
          departureTime="09:40"
          arrivalTime="14:15"
          duration="1d 07h 35m"
          origin={from}
          destination={to}
          price={789.99}
          stopType="1 stop"
          stopDuration="23h 50m DXB"
          logo="/placeholder.svg?height=50&width=50"
          nextDay={true}
        />
      </div>
    </main>
  );
}
