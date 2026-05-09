export default function WelcomePage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Image Editing Research Study
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Selective Image Editing Study
          </h1>

          <p className="text-lg text-slate-500">
            Help us evaluate AI image editing results. No technical background
            is needed.
          </p>
        </div>

        {/* Task Overview */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 mb-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            What is this task about?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-5">
            In this task, you will see 3 input images named <strong>A</strong>,{" "}
            <strong>A&prime;</strong>, and <strong>B</strong>.
          </p>

          {/* Visual analogy diagram */}
          <div className="bg-slate-50 rounded-xl p-5 mb-5">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-5 text-center">
              How the task works
            </p>

            {/* Edit legend */}
            <div className="flex flex-wrap justify-center gap-3 mb-5">
              <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 rounded-full px-3 py-1">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✕</span>
                <span className="text-xs text-red-700 font-medium">Skipped: Sunglasses</span>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                <span className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                <span className="text-xs text-green-700 font-medium">Kept: Laughing</span>
              </div>
            </div>

            {/* Row 1: A → A' */}
            <div className="flex items-center justify-center gap-3 mb-2">
              {/* A */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="relative">
                  <img
                    src="/sia_survey/welcome_imgs/img_a.png"
                    alt="Image A — original source"
                    className="w-32 h-24 object-contain rounded-xl border-2 border-indigo-300 shadow-sm bg-slate-100"
                  />
                  <span className="absolute top-1 left-1 bg-indigo-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-md leading-tight">A</span>
                </div>
                <span className="text-xs text-slate-500">Original source</span>
              </div>

              {/* Arrow A → A' */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-0.5 bg-indigo-400"></div>
                  <span className="text-indigo-500 text-sm">▶</span>
                </div>
                <span className="text-xs text-indigo-600 font-medium whitespace-nowrap">all edits</span>
              </div>

              {/* A' */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="relative">
                  <img
                    src="/sia_survey/welcome_imgs/img_a_prime.png"
                    alt="Image A' — edited source"
                    className="w-32 h-24 object-contain rounded-xl border-2 border-indigo-400 shadow-sm bg-slate-100"
                  />
                  <span className="absolute top-1 left-1 bg-indigo-700 text-white text-xs font-bold px-1.5 py-0.5 rounded-md leading-tight">A&prime;</span>
                </div>
                <span className="text-xs text-slate-500">Edited source</span>
              </div>
            </div>

            {/* "learn from this pair" label */}
            <p className="text-center text-xs text-indigo-500 font-medium mb-4">
              ↑ The AI learns what edits happened in this pair (Laughing + Sunglasses)
            </p>

            {/* Divider */}
            <div className="border-t border-slate-200 mb-4"></div>

            {/* Row 2: B → B' */}
            <div className="flex items-center justify-center gap-3 mb-2">
              {/* B */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="relative">
                  <img
                    src="/sia_survey/welcome_imgs/img_b.png"
                    alt="Image B — new target"
                    className="w-32 h-24 object-contain rounded-xl border-2 border-emerald-300 shadow-sm bg-slate-100"
                  />
                  <span className="absolute top-1 left-1 bg-emerald-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-md leading-tight">B</span>
                </div>
                <span className="text-xs text-slate-500">New image</span>
              </div>

              {/* Arrow B → B' */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-0.5 bg-emerald-500"></div>
                  <span className="text-emerald-600 text-sm">▶</span>
                </div>
                <span className="text-xs text-emerald-700 font-medium whitespace-nowrap">kept only</span>
              </div>

              {/* B' */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="relative">
                  <img
                    src="/sia_survey/welcome_imgs/img_b_prime.png"
                    alt="Image B' — output with kept edits only"
                    className="w-32 h-24 object-contain rounded-xl border-2 border-emerald-500 shadow-sm bg-slate-100"
                  />
                  <span className="absolute top-1 left-1 bg-emerald-700 text-white text-xs font-bold px-1.5 py-0.5 rounded-md leading-tight">B&prime;</span>
                  <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold shadow">goal</span>
                </div>
                <span className="text-xs text-slate-500">Output (ideal)</span>
              </div>
            </div>

            {/* result explanation */}
            <p className="text-center text-xs text-emerald-700 font-medium">
              ↑ B&prime; has Laughing ✓ &nbsp;but no Sunglasses ✕
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Image <strong>A&prime;</strong> is the edited version of Image{" "}
            <strong>A</strong>. By comparing <strong>A</strong> and{" "}
            <strong>A&prime;</strong>, you can see the edits that were made.
            These edits may include things like changing the background, adding
            or removing an object, changing a facial expression, or changing the
            image style. For each question, some of these edits are chosen to be{" "}
            <strong>applied</strong> to another image <strong>B</strong>, and
            some edits are chosen to be <strong>skipped</strong>. The goal of
            the AI methods is to edit the image <strong>B</strong>, using{" "}
            <strong>only</strong> the edits that should be{" "}
            <strong>applied</strong>, while <strong>avoiding</strong> the edits
            that should be <strong>skipped</strong>.
          </p>
        </div>

        {/* Your Job */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 mb-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Your job in this study
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <p className="font-medium text-slate-800">
                  Look at the source images A and A&prime;
                </p>
                <p className="text-slate-500 text-sm mt-0.5">
                  See what changed from the original source to the edited
                  source.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <p className="font-medium text-slate-800">
                  Look at the image B
                </p>
                <p className="text-slate-500 text-sm mt-0.5">
                  This is the image the AI methods are trying to edit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <p className="font-medium text-slate-800">
                  Check which edits should be{" "}
                  <span className="text-green-600">applied</span> and which
                  should be <span className="text-red-600">skipped</span>
                </p>
                <p className="text-slate-500 text-sm mt-0.5">
                  Applied edits should appear in the output image. Skipped edits
                  should not appear.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <p className="font-medium text-slate-800">
                  Rank the 3 best AI outputs
                </p>
                <p className="text-slate-500 text-sm mt-0.5">
                  For each question, you will see 5 AI-generated results. Pick
                  the best 3 results and rank them as{" "}
                  <strong>1st, 2nd, and 3rd</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick reminder */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-6">
          <p className="text-slate-700 text-sm leading-relaxed text-center">
            A good output should include the{" "}
            <span className="font-semibold text-green-700">applied edits</span>,
            avoid the{" "}
            <span className="font-semibold text-red-700">skipped edits</span>,
            and still look like the image <strong>B</strong>.
          </p>
        </div>

        {/* Estimate + CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-5">
            ⏱ Estimated time: <strong>5–10 minutes</strong> &nbsp;·&nbsp; No
            sign-in required
          </p>

          <button
            onClick={onStart}
            className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-lg px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-150"
          >
            Start Study →
          </button>
        </div>
      </div>
    </div>
  );
}
