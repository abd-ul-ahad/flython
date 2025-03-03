import { AppDispatch } from "@/store";
import { setFlightsSearch } from "@/store/slices/FlightsSearchSlices";
import axios from "axios";
import { NextRouter } from "next/router";

// Define a type for search parameters
type SearchParams = {
  origin: string;
  destination: string;
  departureDate: string;
  departureTimeFrom: string;
  departureTimeTo: string;
  arrivalTimeFrom: string;
  arrivalTimeTo: string;
  passengerType: string;
  cabinClass: string;
};

export class SearchFlight {
  static async handleSubmit(
    router: NextRouter,
    route: string,
    data: SearchParams,
    dispatch: AppDispatch
  ) {
    try {
      const response = await SearchFlight.search(data);
      console.log("Flight Search Response:", response);

      dispatch(setFlightsSearch(response));

      router.push(route);

      return response;
    } catch (error: any) {
      console.error("Error in handleSubmit:", error.message || error);
      throw new Error("Failed to submit flight search. Please try again.");
    }
  }

  static async search(data: SearchParams) {
    const url = "http://localhost:3000/api/flights/search";

    try {
      const response = await axios.post(url, data, {
        headers: { "Content-Type": "application/json" },
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
        throw new Error(
          `Flight search failed: ${
            error.response?.data?.message || "Unknown error"
          }`
        );
      } else {
        console.error("Unexpected Error:", error);
        throw new Error(
          "An unexpected error occurred while searching for flights."
        );
      }
    }
  }
}
