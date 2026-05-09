export default function WelcomePage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Image Editing Research Study
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Selective Image Analogy Study
          </h1>
          <p className="text-lg text-slate-500">
            Help us evaluate AI image editing methods — no technical background required.
          </p>
        </div>

        {/* Task Overview */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 mb-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">What is this task about?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            In this study, an AI system learns <strong>how one image was changed</strong> (the
            &ldquo;visual analogy&rdquo;) and tries to apply <em>only some of those changes</em> to a
            new image &mdash; while intentionally <strong>skipping</strong> certain edits that the
            user does not want.
          </p>

          {/* Visual analogy diagram */}
          <div className="bg-slate-50 rounded-xl p-5 mb-5">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4 text-center">
              How the analogy works
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              {/* A */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-20 bg-indigo-100 border-2 border-indigo-300 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-500">A</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Source image</span>
              </div>
              {/* Arrow A→A' */}
              <div className="flex flex-col items-center sm:mx-2">
                <div className="sm:rotate-0 rotate-90 flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <div className="w-10 h-0.5 bg-indigo-400"></div>
                    <span className="text-indigo-500">▶</span>
                  </div>
                  <span className="text-xs text-indigo-600 font-medium mt-1 whitespace-nowrap">edits applied</span>
                </div>
              </div>
              {/* A' */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-20 bg-indigo-200 border-2 border-indigo-400 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-700">A&prime;</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Edited source</span>
              </div>

              {/* Separator */}
              <div className="sm:mx-6 my-2 sm:my-0 flex items-center">
                <div className="w-px h-16 bg-slate-300 hidden sm:block"></div>
                <div className="sm:hidden w-16 h-px bg-slate-300"></div>
              </div>

              {/* B */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-20 bg-emerald-100 border-2 border-emerald-300 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">B</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">New image</span>
              </div>
              {/* Arrow B→B' */}
              <div className="flex flex-col items-center sm:mx-2">
                <div className="sm:rotate-0 rotate-90 flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <div className="w-10 h-0.5 bg-emerald-500"></div>
                    <span className="text-emerald-600">▶</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-medium mt-1 whitespace-nowrap">selective edits</span>
                </div>
              </div>
              {/* B' */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-20 bg-emerald-200 border-2 border-emerald-500 rounded-lg flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-emerald-800">B&prime;</span>
                  <span className="absolute -top-2.5 -right-2.5 bg-emerald-500 text-white text-xs px-1.5 py-0.5 rounded-full">goal</span>
                </div>
                <span className="text-xs text-slate-500 mt-1">Output image</span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            The pair <strong>A → A&prime;</strong> shows what edits were made. The AI sees a new
            image <strong>B</strong> and a list of edits to <strong>skip</strong>, then tries to
            apply the <strong>remaining</strong> edits to produce <strong>B&prime;</strong>.
          </p>
        </div>

        {/* Your Job */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 mb-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Your job in this study</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <p className="font-medium text-slate-800">Look at the reference images A, A&prime;, and B</p>
                <p className="text-slate-500 text-sm mt-0.5">Understand what edits happened from A to A&prime;, and what image B looks like.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <p className="font-medium text-slate-800">Read which edits should be <span className="text-red-600">skipped</span> and which should be <span className="text-green-600">kept</span></p>
                <p className="text-slate-500 text-sm mt-0.5">These are listed clearly on each question page.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <p className="font-medium text-slate-800">Rank the 3 best output images</p>
                <p className="text-slate-500 text-sm mt-0.5">
                  Five different AI methods each produced a result. Pick which three best match the
                  goal (kept edits applied, skipped edits absent) and rank them <strong>1st, 2nd, 3rd</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estimate + CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-5">
            ⏱ Estimated time: <strong>5–10 minutes</strong> &nbsp;·&nbsp; No sign-in required
          </p>
          <button
            onClick={onStart}
            className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-lg px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-150"
          >
            Start the Study →
          </button>
        </div>
      </div>
    </div>
  );
}
