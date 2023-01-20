import React from "react";

type ProgressBarProps = {
  title: string;
  progress: number;
  isComplete: boolean;
  variant?: "h1" | "h2" | "bold";
};

const ProgressBar = ({
  title,
  progress,
  variant,
  isComplete = false,
}: ProgressBarProps) => {
  const currentProgress = Math.floor(progress);
  const status = isComplete ? "success" : "primary";

  return (
    <div className="collapse-title text-sm font-medium">
      {variant === "h1" ? (
        <h1 className={`text-${status}-content`}>
          {title} ({currentProgress}%)
        </h1>
      ) : variant === "h2" ? (
        <h2 className={`text-${status}-content`}>
          {title} ({currentProgress}%)
        </h2>
      ) : (
        <strong className={`text-${status}-content`}>
          {title} ({currentProgress}%)
        </strong>
      )}
      <progress
        className={`progress progress-${status} w-full`}
        value={currentProgress}
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressBar;
