export default interface FlightSearch {
  data: {
    offers: Offer[];
  };
}

export type Offer = {
  id: string;
  total_emissions_kg: string;
  payment_requirements: PaymentRequirements;
  available_services: string | null;
  supported_passenger_identity_document_types: string[];
  passenger_identity_documents_required: boolean;
  tax_currency: string;
  base_currency: string;
  base_amount: string;
  supported_loyalty_programmes: string[];
  private_fares: string[];
  tax_amount: string;
  total_currency: string;
  created_at: string;
  live_mode: boolean;
  total_amount: string;
  slices: Slice[];
  passengers: Passenger[];
  conditions: Conditions;
  updated_at: string;
  expires_at: string;
  partial: boolean;
  owner: Airline;
};

type PaymentRequirements = {
  requires_instant_payment: boolean;
  price_guarantee_expires_at: string | null;
  payment_required_by: string | null;
};

type Slice = {
  id: string;
  comparison_key: string;
  ngs_shelf: number;
  destination_type: string;
  origin_type: string;
  fare_brand_name: string;
  segments: Segment[];
  conditions: SliceConditions;
  duration: string;
  destination: Place;
  origin: Place;
};

export type Segment = {
  id: string;
  origin_terminal: string | null;
  destination_terminal: string | null;
  aircraft: Aircraft | null;
  departing_at: string;
  arriving_at: string;
  operating_carrier: Airline;
  marketing_carrier: Airline;
  stops: string[];
  operating_carrier_flight_number: string;
  marketing_carrier_flight_number: string;
  distance: string | null;
  passengers: SegmentPassenger[];
  media: string[];
  duration: string;
  destination: Place;
  origin: Place;
};

type SegmentPassenger = {
  passenger_id: string;
  fare_basis_code: string;
  cabin_class: string;
  cabin_class_marketing_name: string;
  cabin: Cabin;
  baggages: Baggage[];
};

type Cabin = {
  name: string;
  marketing_name: string;
  amenities: CabinAmenities;
};

type CabinAmenities = {
  wifi: {
    cost: string;
    available: boolean;
  };
  seat: {
    pitch: string;
    legroom: string;
    type: string | null;
  };
  power: {
    available: boolean;
  };
};

type Baggage = {
  quantity: number;
  type: string;
};

type Aircraft = {
  id: string;
  iata_code: string;
  name: string;
};

type Airline = {
  id: string;
  iata_code: string;
  name: string;
  logo_symbol_url: string;
  logo_lockup_url: string | null;
  conditions_of_carriage_url: string | null;
};

type Place = {
  id: string;
  name: string;
  city_name: string;
  icao_code: string;
  iata_country_code: string;
  iata_code: string;
  iata_city_code: string;
  latitude: number | null;
  longitude: number | null;
  city: City | null;
  time_zone: string | null;
  type: string;
};

type City = {
  id: string;
  name: string;
  city_name: string | null;
  icao_code: string | null;
  iata_country_code: string;
  iata_code: string;
  iata_city_code: string;
  latitude: number | null;
  longitude: number | null;
  time_zone: string | null;
  type: string;
};

type Passenger = {
  id: string;
  type: string;
  fare_type: string | null;
  loyalty_programme_accounts: string[];
  family_name: string | null;
  given_name: string | null;
  age: number | null;
};

type Conditions = {
  refund_before_departure: ChangeOrRefundCondition | null;
  change_before_departure: ChangeOrRefundCondition | null;
};

type SliceConditions = {
  priority_check_in: string | null;
  priority_boarding: string | null;
  advance_seat_selection: string | null;
  change_before_departure: ChangeOrRefundCondition | null;
};

type ChangeOrRefundCondition = {
  allowed: boolean;
  penalty_currency: string;
  penalty_amount: string;
};
