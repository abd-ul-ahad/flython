interface PolicyCardProps {
  title: string;
  description: string;
  icon: "change" | "refund";
}

export function PolicyCard({ title, description, icon }: PolicyCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-2 text-teal-600 mb-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon === "change" ? (
            <path
              d="M9 14L4 9L9 4M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M19 7L12 14L5 7M5 17H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
        <div className="font-medium">{title}</div>
      </div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}
