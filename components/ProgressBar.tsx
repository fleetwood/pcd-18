import React from "react";

type ProgressBarProps = {
  title: string;
  progress: number;
  isComplete: boolean;
  variant?: "h1" | "h2" | "bold";
};

/**
 * @param title (@type {string} The title of the progress bar)
 * @param progress (@type {number}  Number between 0 and 100)
 * @param isComplete (@type {boolean?} optional - is it complete? default is false)
 * @param variant (@type {'h1' | 'h2' | 'bold'} optional - default is 'bold')
 */
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
