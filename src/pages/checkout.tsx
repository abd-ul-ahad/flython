import Link from "next/link";
import { FlightSummary } from "@/components/flight-summary";
import { PolicyCard } from "@/components/policy-card";
import { PaymentOptions } from "@/components/payment-options";
import { ContactForm } from "@/components/contact-form";
import { PassengerForm } from "@/components/passenger-form";
import { ExtrasSection } from "@/components/extras-section";
import { MetadataSection } from "@/components/metadata-section";
import { PaymentSummary } from "@/components/payment-summary";

export default function CheckoutPage() {
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
          Select flights
        </Link>
        <span className="text-gray-400">&gt;</span>
        <span className="text-lg text-gray-500">Checkout</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          One way
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          Sat, 8 Mar 2025
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          1 Passenger
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          Economy
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="text-2xl font-bold">LHE</div>
        <svg
          width="24"
          height="24"
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
        <div className="text-2xl font-bold">CAI</div>
      </div>

      <div className="text-gray-600 mb-8">
        This offer will expire on 01/03/2025, 18:29
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Selected flights</h2>
        <FlightSummary />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <PolicyCard
          title="Order change policy"
          description="Make changes to this order up until the initial departure date (a change penalty of £30.00 will apply)"
          icon="change"
        />
        <PolicyCard
          title="Order refund policy"
          description="This order is refundable up until the initial departure date (a refund penalty of £30.00 will apply)"
          icon="refund"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Paying now, or later?</h2>
        <p className="text-gray-600 mb-4">
          Decide whether you want to pay for your trip now in its entirety, or
          whether you'd like to put a hold on the order, and pay at a later
          date. Be aware that you cannot currently select seats or baggage when
          holding an order.
        </p>
        <PaymentOptions />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact details</h2>
        <ContactForm />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Passengers</h2>
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm inline-block mb-4">
          Adult 1
        </div>
        <PassengerForm />
      </div>

      <div className="mb-8">
        <ExtrasSection />
      </div>

      <div className="mb-8">
        <MetadataSection />
      </div>

      <div className="mb-8">
        <PaymentSummary />
      </div>
    </main>
  );
}
