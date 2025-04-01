import React from 'react';

export default function ColorBadge({ color }: { color: string }) {
  return (
    <>
      <div
        style={{ background:  color  }}
        className="h-2 w-2 rounded-full mr-2"
      />
      {color}
    </>
  );
}