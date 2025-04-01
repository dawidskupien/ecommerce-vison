interface ProgressCircleProps {
    progress: number;
    variant: string;
}

export default function ProgressCircle ({ progress, variant }: ProgressCircleProps) {
    const strokeColor = variant === "black" ? "#000" : "#fff";
    const circumference = 56.55;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
  
    return (
      <div className="absolute top-0 right-0  h-[3rem] pr-[20px] pt-[20px] z-50">
        <svg height="20" width="20" viewBox="0 0 20 20">
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke={strokeColor}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeWidth="1.5"
            fill="transparent"
            transform="rotate(-90, 10, 10)"
          />
        </svg>
      </div>
    );
  }