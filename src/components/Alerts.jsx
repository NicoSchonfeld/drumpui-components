import React from "react";

const Alerts = () => {
  return (
    <>
      <div
        role="alert"
        className="bg-red-200 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="rotate-180 text-red-500 w-7 h-7"
            data-testid="geist-icon"
            fill="none"
            height="14"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="14"
          >
            <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>

        <p className="text-red-900 sm:text-base text-sm">
          Unexpected error. Please try again later.
        </p>
      </div>

      <div
        role="alert"
        className="bg-green-200 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="text-green-600"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>

        <p className="text-green-900 sm:text-base text-sm">
          Data uploaded to the server!
        </p>
      </div>

      <div
        role="alert"
        className="bg-yellow-100 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="text-yellow-500"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              fill="var(--geist-fill)"
            />
            <path d="M12 9v4" stroke="var(--geist-stroke)" />
            <path d="M12 17h.01" stroke="var(--geist-stroke)" />
          </svg>
        </span>

        <p className="text-green-900 sm:text-base text-sm">
          Seems your account is about expire.
        </p>
      </div>

      <div
        role="alert"
        className="bg-sky-100 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="text-sky-500 w-7 h-7"
            data-testid="geist-icon"
            fill="none"
            height="14"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="14"
          >
            <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>

        <p className="text-sky-900 sm:text-base text-sm">
          Updated information. Please check!
        </p>
      </div>

      <div
        role="alert"
        className="bg-red-500 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="rotate-180 text-white w-7 h-7"
            data-testid="geist-icon"
            fill="none"
            height="14"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="14"
          >
            <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>

        <p className="text-white sm:text-base text-sm">
          Unexpected error. Please try again later.
        </p>
      </div>

      <div
        role="alert"
        className="bg-green-500 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="text-white"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>

        <p className="text-white sm:text-base text-sm">
          Data uploaded to the server!
        </p>
      </div>

      <div
        role="alert"
        className="bg-yellow-500 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="text-white"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              fill="var(--geist-fill)"
            />
            <path d="M12 9v4" stroke="var(--geist-stroke)" />
            <path d="M12 17h.01" stroke="var(--geist-stroke)" />
          </svg>
        </span>

        <p className="text-white sm:text-base text-sm">
          Seems your account is about expire.
        </p>
      </div>

      <div
        role="alert"
        className="bg-sky-500 flex items-center gap-3 p-3 w-full"
      >
        <span>
          <svg
            className="text-white w-7 h-7"
            data-testid="geist-icon"
            fill="none"
            height="14"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="14"
          >
            <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>

        <p className="text-white sm:text-base text-sm">
          Updated information. Please check!
        </p>
      </div>
    </>
  );
};

export default Alerts;
