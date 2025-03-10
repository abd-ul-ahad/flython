"use client";

import { SearchFlight } from "@/functions/SearchFlight";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export function SearchForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="text-lg font-medium">Journey type</div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full border flex items-center justify-center border-gray-300"></div>
            <span>One way</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full border flex items-center justify-center border-gray-300"></div>
            <span>Return</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 rounded-full border flex items-center justify-center border-gray-300"></div>
            <span>Multi-city</span>
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="origin" className="text-lg font-medium">
            Origin
          </label>
          <input
            id="origin"
            type="text"
            className="w-full p-3 border rounded-md"
            readOnly
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="destination" className="text-lg font-medium">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            className="w-full p-3 border rounded-md"
            readOnly
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="departureDate" className="text-lg font-medium">
          Departure date
        </label>
        <input
          id="departureDate"
          type="text"
          className="w-full p-3 border rounded-md"
          readOnly
        />
      </div>

      <div className="flex items-center">
        <button type="button" className="text-purple-600 flex items-center">
          <span>At any time</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="passengers" className="text-lg font-medium">
            Passengers
          </label>
          <div className="relative">
            <select
              id="passengers"
              className="w-full p-3 border rounded-md appearance-none"
              disabled
            >
              <option>1 adult</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="class" className="text-lg font-medium">
            Class
          </label>
          <div className="relative">
            <select
              id="class"
              className="w-full p-3 border rounded-md appearance-none"
              disabled
            >
              <option>Economy</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button type="button" className="text-purple-600" disabled>
          Advanced options
        </button>
      </div>

      <button
        onClick={() =>
          SearchFlight.handleSubmit(
            router,
            "/flights/order",
            {
              origin: "LHE",
              destination: "DXB",
              departureDate: "2025-03-15",
              departureTimeFrom: "08:30",
              departureTimeTo: "23:59",
              arrivalTimeFrom: "06:00",
              arrivalTimeTo: "11:45",
              passengerType: "adult",
              cabinClass: "economy",
            },
            dispatch
          )
        }
        className="w-full bg-black text-white py-4 rounded-md font-medium"
      >
        Find available flights
      </button>
    </div>
  );
}
