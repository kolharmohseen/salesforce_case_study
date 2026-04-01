export function SummarySlide() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="space-y-4">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#0176d3]/10 border-2 border-[#0176d3]/30 text-[#0176d3] text-xs font-bold tracking-wider uppercase">
          What This Pipeline Delivers
        </div>
        <h2 className="text-5xl font-bold leading-tight text-slate-900">
          Accuracy. Speed. Security.
          <br />
          <span className="text-[#0176d3]">Built Into Every Step.</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Data Pipeline */}
        <div className="p-6 rounded-2xl border-t-4 border-t-[#0176d3] border-2 border-slate-200 bg-white shadow-sm">
          <h3 className="text-xl font-bold text-[#0176d3] mb-6">The Data Pipeline</h3>
          
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Accuracy</h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>6-check QA layer validates every load</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Quality gate stops bad data before dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Point-in-time join prevents data leakage</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Speed</h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Minimize latency from source to dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Pre-aggregated summary tables for fast queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Daily snapshots enable instant lookups</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Security</h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>PII encrypted at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Role-based access controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Audit log on every extraction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Experience */}
        <div className="p-6 rounded-2xl border-t-4 border-t-amber-500 border-2 border-slate-200 bg-white shadow-sm">
          <h3 className="text-xl font-bold text-amber-600 mb-6">The User Experience</h3>
          
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Quick Insight</h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>KPI row answers the question in 3 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>At-risk accounts sorted by renewal date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>12-month sparklines show trend at a glance</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Filtering</h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>One-click competitor filter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Segment and date range slicers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Custom views without SQL</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Delivery</h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Tableau (pull – on-demand)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Slack digests (push – weekly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>CS alerts (proactive – threshold)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Agentforce (AI – semantic queries)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategic Thread */}
        <div className="p-6 rounded-2xl border-t-4 border-t-[#2e844a] border-2 border-slate-200 bg-white shadow-sm">
          <h3 className="text-xl font-bold text-[#2e844a] mb-6">The Strategic Thread</h3>
          
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">The Pattern</h4>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Part 1 (LIHA): signal → pipeline → delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>Part 2 (CI): same pattern, different domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold mt-0.5">•</span>
                  <span>One principle: detect, clean, enrich, deliver</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">The Shift</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span className="text-slate-600"><strong className="text-red-600">Before:</strong> "We lost 108 deals to Rival Co."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2e844a] font-bold mt-0.5">•</span>
                  <span className="text-slate-600"><strong className="text-[#2e844a]">After:</strong> "340 accounts at risk. Here are the names."</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t-2 border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">One Line</h4>
              <p className="text-base font-bold text-[#2e844a] leading-relaxed">
                This isn't a reporting problem.
                <br />
                It's a revenue protection problem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-6 rounded-xl bg-slate-50 border-2 border-slate-200">
        <p className="text-sm text-slate-600">
          Mohseen Kolhar · Data Engineer, Competitive Intelligence · <strong className="text-slate-900">Ready for Q&A</strong>
        </p>
      </div>
    </div>
  );
}
