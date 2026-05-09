import { useState } from "react";

export default function ConsentPage({ onConsent }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Participant Consent
          </h1>
          <p className="text-slate-500">
            Please read the following before continuing.
          </p>
        </div>

        {/* Consent card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6">
          <div className="space-y-4 text-slate-700 leading-relaxed text-[15px]">
            <p>
              <strong>Purpose.</strong> This study collects your preferences on
              AI-generated images to help evaluate research on selective image
              editing. Your responses are used solely for academic research.
            </p>
            <p>
              <strong>Anonymity.</strong> No personally identifiable information
              is collected. Each session is assigned a random ID. Your responses
              cannot be traced back to you.
            </p>
            <p>
              <strong>Voluntary participation.</strong> Your participation is
              entirely voluntary. You may stop at any time without consequence.
            </p>
            <p>
              <strong>Duration.</strong> The study takes approximately 5–10
              minutes to complete.
            </p>
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 mt-7 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  checked
                    ? "bg-indigo-600 border-indigo-600"
                    : "bg-white border-slate-300 group-hover:border-indigo-400"
                }`}
              >
                {checked && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-slate-700 text-[15px] leading-snug">
              I have read and understood the above. I voluntarily agree to
              participate in this study.
            </span>
          </label>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onConsent}
            disabled={!checked}
            className={`font-semibold text-lg px-10 py-3.5 rounded-xl shadow-md transition-all duration-150 ${
              checked
                ? "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white hover:shadow-lg cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
            }`}
          >
            Continue to Survey →
          </button>
        </div>
      </div>
    </div>
  );
}
