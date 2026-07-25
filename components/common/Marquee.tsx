"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({
  items,
  speed = 25,
}: MarqueeProps) {
  const content = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gray-800 bg-black py-6">
      <div
        className="flex w-max gap-16 whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {content.map((item, index) => (
          <span
            key={index}
            className="text-lg font-semibold text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}