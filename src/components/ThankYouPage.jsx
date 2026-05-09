import { useEffect, useState } from "react";
import { saveResponse } from "../firebase";

export default function ThankYouPage({ sessionId, rankings }) {
  const [status, setStatus] = useState("saving"); // "saving" | "success" | "error"

  useEffect(() => {
    saveResponse(sessionId, rankings)
      .then(() => setStatus("success"))
      .catch((err) => {
        console.error("Failed to save responses:", err);
        setStatus("error");
      });
    // Run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">

        {status === "saving" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10">
            <div className="flex justify-center mb-5">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl font-semibold text-slate-700">Saving your responses…</h2>
            <p className="text-slate-400 mt-2 text-sm">Please keep this page open for a moment.</p>
          </div>
        )}

        {status === "success" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Thank you!</h1>
            <p className="text-slate-600 leading-relaxed mb-6">
              Your responses have been recorded successfully. Your feedback helps us build better AI
              image editing tools. We appreciate your time!
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-left text-sm text-slate-500">
              <p className="font-medium text-slate-600 mb-1">Session ID (for your records)</p>
              <code className="font-mono text-xs text-indigo-600 break-all">{sessionId}</code>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-10">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24">
                  <path d="M12 8v4m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-3">Submission failed</h1>
            <p className="text-slate-600 leading-relaxed mb-4">
              We couldn&apos;t save your responses due to a network error. Please copy the data below and
              send it to the researcher directly.
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-left text-xs text-slate-600 overflow-auto max-h-64">
              <pre className="whitespace-pre-wrap break-all">
                {JSON.stringify({ session_id: sessionId, rankings }, null, 2)}
              </pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
