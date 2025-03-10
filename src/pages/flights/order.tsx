import Link from "next/link";
import { FlightCard } from "@/components/flight-card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect, useMemo } from "react";
import FlightSearch, { Offer, Segment } from "@/types/FlightSearch";

export default function FlightsPage() {
  const router = useRouter();

  // Get flights data from Redux store
  const flightssearch: FlightSearch | null = useSelector(
    (state: RootState) => state.flightssearch
  ).response;

  const from = "LHE";
  const to = "CAI";
  const date = "2025-03-08";

  useEffect(() => {
    console.log("Flights", flightssearch?.data);
  }, [flightssearch]);

  // Function to calculate stop duration
  const getStopDuration = (segments: Segment[]): string | null => {
    if (segments.length <= 1) return null; // No stop duration for non-stop flights

    const firstSegmentArrival = new Date(segments[0].arriving_at);
    const nextSegmentDeparture = new Date(segments[1].departing_at);
    const diffMs =
      nextSegmentDeparture.getTime() - firstSegmentArrival.getTime();

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);

    return `${diffHours}h ${diffMinutes}m`;
  };

  return (
    <main className="container mx-auto p-4 max-w-5xl">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-purple-600 mb-6">
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
      </nav>

      {/* Flight Results */}
      <section className="space-y-4">
        {flightssearch?.data?.offers?.length ? (
          flightssearch.data.offers.map((flight: Offer, index: number) => {
            const slice = flight.slices[0];
            const segments = slice.segments;
            const firstSegment = segments[0];
            const lastSegment = segments[segments.length - 1];

            return (
              <FlightCard
                key={index}
                airline={flight.owner.name}
                flightNumber={`${firstSegment.marketing_carrier.iata_code}${firstSegment.marketing_carrier_flight_number}`}
                departureTime={firstSegment.departing_at.slice(11, 16)}
                arrivalTime={lastSegment.arriving_at.slice(11, 16)}
                duration={slice.duration}
                origin={firstSegment.origin.iata_code}
                destination={lastSegment.destination.iata_code}
                price={` ${flight.total_amount}`}
                stopType={
                  segments.length > 1
                    ? `${segments.length - 1} stop`
                    : "Non-stop"
                }
                stopDuration={getStopDuration(segments) ?? "—"}
                logo={
                  flight.owner.logo_symbol_url ||
                  "/placeholder.svg?height=50&width=50"
                }
                nextDay={lastSegment.arriving_at.includes("+1")}
              />
            );
          })
        ) : (
          <p className="text-gray-500 text-center">No flights found.</p>
        )}
      </section>
    </main>
  );
}
