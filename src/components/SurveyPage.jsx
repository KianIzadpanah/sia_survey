import { useState, useMemo } from "react";

const RANK_LABELS = ["1st", "2nd", "3rd"];
const RANK_STYLES = {
  "1st": "bg-yellow-400 text-yellow-900 border-yellow-500",
  "2nd": "bg-slate-300 text-slate-700 border-slate-400",
  "3rd": "bg-amber-600 text-white border-amber-700",
};
const RANK_RING = {
  "1st": "ring-4 ring-yellow-400 ring-offset-2",
  "2nd": "ring-4 ring-slate-400 ring-offset-2",
  "3rd": "ring-4 ring-amber-500 ring-offset-2",
};

/** Fisher-Yates shuffle (deterministic per sample via seed based on id) */
function shuffleWithSeed(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SurveyPage({ sample, currentIndex, total, onNext }) {
  // Shuffle output methods once per sample mount
  const shuffledMethods = useMemo(
    () => shuffleWithSeed(Object.keys(sample.outputs)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sample.id],
  );

  // rankings: { method: rank_label | null }
  const [rankings, setRankings] = useState({});

  function assignRank(method, rank) {
    setRankings((prev) => {
      const next = { ...prev };
      // Clicking the same rank on the same image deselects it
      if (next[method] === rank) {
        delete next[method];
        return next;
      }
      // Remove this rank from whichever other image currently holds it
      for (const m in next) {
        if (next[m] === rank) delete next[m];
      }
      // Assign the rank to this image
      next[method] = rank;
      return next;
    });
  }

  const rankedCount = Object.keys(rankings).length;
  const allThreeAssigned = rankedCount === 3;

  function handleNext() {
    const result = {
      sample_id: sample.id,
      rank1: null,
      rank2: null,
      rank3: null,
    };
    for (const [method, rank] of Object.entries(rankings)) {
      if (rank === "1st") result.rank1 = method;
      if (rank === "2nd") result.rank2 = method;
      if (rank === "3rd") result.rank3 = method;
    }
    onNext(result);
    setRankings({});
  }

  const progress = (currentIndex / total) * 100;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-500 mb-1.5">
            <span>
              Question {currentIndex + 1} of {total}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Reference images: A, A', B */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-5">
          <h2 className="text-base font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Reference Images — What changes did the AI learn?
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: "A",
                sublabel: "Original source",
                img: sample.a,
                color: "indigo",
              },
              {
                label: "A′",
                sublabel: "Edited source",
                img: sample.a_prime,
                color: "indigo",
              },
              {
                label: "B",
                sublabel: "New image",
                img: sample.b,
                color: "emerald",
              },
            ].map(({ label, sublabel, img, color }) => (
              <div key={label} className="flex flex-col">
                <div
                  className={`text-center text-sm font-semibold mb-1 text-${color}-700`}
                >
                  {label}
                  <span className="font-normal text-slate-400 ml-1 text-xs">
                    — {sublabel}
                  </span>
                </div>
                <img
                  src={img}
                  alt={`Image ${label}`}
                  className={`w-full object-contain rounded-xl border-2 border-${color}-200 bg-slate-100`}
                  style={{ aspectRatio: "4/3" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="hidden w-full bg-slate-100 rounded-xl border-2 border-slate-200 items-center justify-center text-slate-400 text-sm"
                  style={{ aspectRatio: "4/3" }}
                >
                  [Image {label}]
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edit badges */}
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                ✕
              </span>
              <span className="text-sm font-semibold text-red-700">
                Skipped edits (should NOT appear in the output)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sample.suppressed_edits.map((edit) => (
                <span
                  key={edit}
                  className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full border border-red-200"
                >
                  {edit}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              <span className="text-sm font-semibold text-green-700">
                Applied edits (SHOULD appear in the output)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sample.retained_edits.map((edit) => (
                <span
                  key={edit}
                  className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full border border-green-200"
                >
                  {edit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Output images ranking area */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Rank the 3 best outputs
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Five AI methods produced the results below. Click the rank
                buttons under each image. The best result should get{" "}
                <strong>1st</strong>.
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  allThreeAssigned
                    ? "bg-green-100 text-green-700"
                    : "bg-indigo-50 text-indigo-600"
                }`}
              >
                {rankedCount}/3 ranked
              </span>
            </div>
          </div>

          {/* Rank legend */}
          <div className="flex gap-3 my-4 flex-wrap">
            {RANK_LABELS.map((r) => (
              <div
                key={r}
                className="flex items-center gap-1.5 text-sm text-slate-500"
              >
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold border ${RANK_STYLES[r]}`}
                >
                  {r}
                </span>
                <span>
                  ={" "}
                  {r === "1st"
                    ? "Best"
                    : r === "2nd"
                      ? "Second best"
                      : "Third best"}
                </span>
              </div>
            ))}
          </div>

          {/* Output grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {shuffledMethods.map((method, idx) => {
              const assignedRank = rankings[method] || null;
              return (
                <div key={method} className="flex flex-col gap-2">
                  {/* Image */}
                  <div
                    className={`relative rounded-xl overflow-hidden ${assignedRank ? RANK_RING[assignedRank] : ""} transition-all duration-150`}
                  >
                    {assignedRank && (
                      <div
                        className={`absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-xs font-bold border ${RANK_STYLES[assignedRank]}`}
                      >
                        {assignedRank}
                      </div>
                    )}
                    <img
                      src={sample.outputs[method]}
                      alt={`Output ${idx + 1}`}
                      className="w-full object-contain rounded-xl bg-slate-100"
                      style={{ aspectRatio: "1/1" }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="hidden w-full bg-slate-100 rounded-xl items-center justify-center text-slate-400 text-sm"
                      style={{ aspectRatio: "1/1" }}
                    >
                      Output {idx + 1}
                    </div>
                  </div>

                  {/* Image label */}
                  <div className="text-center text-xs font-semibold text-slate-500">
                    Image {idx + 1}
                  </div>

                  {/* Rank buttons */}
                  <div className="flex gap-1 justify-center">
                    {RANK_LABELS.map((rank) => {
                      const isActive = assignedRank === rank;
                      const isTakenByOther =
                        !isActive && Object.values(rankings).includes(rank);
                      return (
                        <button
                          key={rank}
                          onClick={() => assignRank(method, rank)}
                          disabled={isTakenByOther}
                          title={
                            isTakenByOther
                              ? `${rank} is already assigned to another image`
                              : `Mark as ${rank}`
                          }
                          className={`flex-1 text-xs font-semibold py-1.5 rounded-lg border transition-all duration-100 ${
                            isActive
                              ? `${RANK_STYLES[rank]} shadow-sm`
                              : isTakenByOther
                                ? "bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed"
                                : "bg-white border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600 cursor-pointer"
                          }`}
                        >
                          {rank}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next / Submit */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!allThreeAssigned}
            className={`font-semibold text-base px-8 py-3 rounded-xl shadow transition-all duration-150 ${
              allThreeAssigned
                ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
            }`}
          >
            {currentIndex + 1 === total
              ? "Submit Responses →"
              : "Next Question →"}
          </button>
        </div>

        {!allThreeAssigned && (
          <p className="text-right text-sm text-slate-400 mt-2">
            Assign 1st, 2nd, and 3rd to continue.
          </p>
        )}
      </div>
    </div>
  );
}
