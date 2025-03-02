import { Check, X } from "lucide-react";

interface FeatureItem {
  label: string;
  value?: string;
  icon: string;
  disabled?: boolean;
}

interface FareOptionProps {
  title: string;
  type: string;
  price: number;
  features: FeatureItem[];
  selected?: boolean;
}

export function FareOption({
  title,
  type,
  price,
  features,
  selected = false,
}: FareOptionProps) {
  return (
    <div
      className={`border rounded-lg p-6 ${
        selected ? "border-purple-500 bg-purple-50" : ""
      }`}
    >
      <div className="mb-4">
        <div className="text-sm text-gray-500">{type}</div>
        <div className="text-xl font-bold">{title}</div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            {feature.disabled ? (
              <X className="h-5 w-5 text-gray-400 mt-0.5" />
            ) : (
              <Check className="h-5 w-5 text-gray-600 mt-0.5" />
            )}
            <div className={feature.disabled ? "text-gray-400" : ""}>
              {feature.label}
              {feature.value && (
                <span className="text-gray-500"> ({feature.value})</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="text-sm text-gray-500">total amount from</div>
      <div className="text-xl font-bold">US${price.toFixed(2)}</div>
    </div>
  );
}
