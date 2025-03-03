import Link from "next/link";
import { FlightCard } from "@/components/flight-card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect } from "react";
import FlightSearch from "@/types/FlightSearch";

export default function FlightsPage() {
  const router = useRouter();

  // Get flights data from Redux store
  const flightssearch: FlightSearch | null = useSelector(
    (state: RootState) => state.flightssearch
  ).response;

  const from = "LHE";
  const to = "CAI";
  const date = "2025-03-08";

  useEffect(() => console.log("Flights", flightssearch?.data), []);

  const getStopDuration = (segments: any[]) => {
    if (segments.length <= 1) return null; // No stop duration for non-stop flights
  
    const firstSegmentArrival = new Date(segments[0].arriving_at);
    const nextSegmentDeparture = new Date(segments[1].departing_at);
    const diffMs = nextSegmentDeparture - firstSegmentArrival; // Time difference in milliseconds
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
  
    return `${diffHours}h ${diffMinutes}m`;
  };

  return (
    <main className="container mx-auto p-4 max-w-5xl">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-purple-600 mb-6">
        <Link href="/" className="text-lg">Orders</Link>
        <span className="text-gray-400">&gt;</span>
        <Link href="/" className="text-lg">New order</Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-lg">{from} to {to}</span>
        <span className="text-gray-400">&gt;</span>
        <span className="text-lg text-gray-500">Fare options</span>
      </div>

      {/* Flight Results */}
      <div className="space-y-4">
        {flightssearch?.data?.offers?.length === 0 ? (
          <p className="text-gray-500 text-center">No flights found.</p>
        ) : (
          <div className="space-y-4">
            {flightssearch?.data?.offers?.map((flight, index) => {
              const slice = flight.slices[0]; // Assuming only one slice for one-way flights
              const segment = slice.segments[0]; // First flight segment

              const stopDuration = getStopDuration(slice.segments); 

              console.log("stopDuration",stopDuration);
              

              return (
                <FlightCard
                  key={index}
                  airline={flight.owner.name} // Airline Name
                  flightNumber={segment.marketing_carrier.iata_code + segment.marketing_carrier_flight_number}
                  departureTime={segment.departing_at.slice(11, 16)} // HH:MM format
                  arrivalTime={segment.arriving_at.slice(11, 16)} // HH:MM format
                  duration={slice.duration} // Flight Duration
                  origin={segment.origin.iata_code} // Departure Airport Code
                  destination={segment.destination.iata_code} // Arrival Airport Code
                  price={flight.total_amount} // Price
                  stopType={slice.segments.length > 1 ? `${slice.segments.length - 1} stop` : "Non-stop"} // Stops
                  stopDuration={`${stopDuration}`} // Layover Time
                  logo={flight.owner.logo_symbol_url || "/placeholder.svg?height=50&width=50"} // Airline Logo
                  nextDay={segment.arriving_at.includes("+1")} // Next day arrival
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
