import { Shield } from 'lucide-react';

const issues = [
  {
    num: '1',
    title: 'Competitor Accuracy',
    points: [
      "Competitor is required at Stage 3 via the CI_Opportunity_Competitor junction (908-record catalog)",
      "The issue isn't missing data — it's accuracy",
      "Reps pick the wrong competitor or default to the obvious name",
      "One deal can have multiple competitors; the Leading flag tracks who actually won",
    ],
    fix: '→ Validate against CI_Competitor catalog. Build on the existing zero-shot classification to improve entity resolution. Flag deals where Leading competitor changed post-close. Cross-check with Competitive_Notes text.'
  },
  {
    num: '2',
    title: 'Duplicate Deal Records',
    points: [
      "Each deal has a unique Opportunity ID. But duplicates appear from:",
      "(a) Field updates between batch runs — rep corrects the Competitor after a debrief, creating a second version in the next extract",
      "(b) Junction fan-out — one deal with 3 competitors in CI_Opportunity_Competitor becomes 3 rows after the join, tripling the ARR impact unless you aggregate correctly",
      "If 30 of 108 losses are dupes, the scorecard is wrong",
    ],
    fix: '→ Group by Opportunity ID, keep latest timestamp, discard the rest.'
  },
  {
    num: '3',
    title: 'Deriving Usage from Asset Hierarchy',
    points: [
      "Usage isn't a stored field — it's derived from Account → Asset Line Items (Apttus) → child usage objects",
      "Need to build a composite metric (license util + active users + feature adoption)",
      "Validate for accounts where tracking isn't configured or assets are missing",
    ],
    fix: '→ Build the derivation as a transform step. Range-validate the composite output. NULL accounts with no asset data — flag in quality log.'
  },
  {
    num: '4',
    title: 'Cross-System ID Resolution',
    points: [
      "Salesforce IDs are consistent within the CRM (15/18 char)",
      "When tables from different source systems land in Snowflake, the same customer can appear with different identifiers",
      "Joins fail silently",
    ],
    fix: '→ Standardize IDs at the Snowflake layer before any joins. Map external IDs to Salesforce Account_ID as the canonical key.'
  },
];

const qaRows = [
  { check: 'Schema validation', validates: 'Expected columns exist, types correct', fail: 'Block entire load', color: 'red' },
  { check: 'Completeness check', validates: 'Junction record exists for Closed Lost? Usage assets present?', fail: 'Log rate, flag, proceed', color: 'slate' },
  { check: 'Usage derivation', validates: 'Asset hierarchy present? Composite score in valid range?', fail: 'NULL missing assets, log', color: 'amber' },
  { check: 'Uniqueness', validates: 'Each Opportunity ID unique?', fail: 'Dedup – keep latest timestamp', color: 'slate' },
  { check: 'Referential integrity', validates: 'Account_ID in Opp exists in Account?', fail: 'Log orphans, keep but flag', color: 'slate' },
  { check: 'Format standardization', validates: 'Account_ID in consistent format?', fail: 'Normalize to standard', color: 'slate' },
];

export function IntegritySlide() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="space-y-3">
        <div className="inline-block px-4 py-2 rounded-lg bg-red-100 border-2 border-red-300 text-red-700 text-xs font-bold tracking-wider uppercase">
          Step 2 · Data Integrity — Improving Accuracy
        </div>
        <h2 className="text-4xl font-bold leading-tight text-slate-900">
          Raw Salesforce Data Has <span className="text-red-600">Real Problems.</span>
        </h2>
        <p className="text-lg text-slate-600">Here's How I Fix Them.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">Four Critical Issues</h3>
          {issues.map((issue) => (
            <div key={issue.num} className="p-4 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-300 transition-all shadow-sm">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center text-red-700 font-mono text-sm font-bold flex-shrink-0 mt-0.5">
                  {issue.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold mb-1.5 text-slate-900">{issue.title}</h3>
                  <ul className="space-y-1 mb-2">
                    {issue.points.map((point, i) => (
                      <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                        <span className="text-slate-400 font-bold mt-px">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[#2e844a] leading-relaxed font-mono font-semibold">{issue.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">Systematic QA Layer — Runs Before Every Load</h3>
            <div className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden shadow-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="text-left p-3 font-bold text-slate-700 uppercase tracking-wider">Check</th>
                    <th className="text-left p-3 font-bold text-slate-700 uppercase tracking-wider">What It Validates</th>
                    <th className="text-left p-3 font-bold text-slate-700 uppercase tracking-wider">On Fail</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {qaRows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="p-3 text-slate-700 font-semibold">{row.check}</td>
                      <td className="p-3 text-slate-500">{row.validates}</td>
                      <td className={`p-3 ${row.color === 'red' ? 'text-red-600 font-bold' : row.color === 'amber' ? 'text-amber-600 font-semibold' : 'text-slate-600'}`}>{row.fail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-red-50 border-2 border-red-200">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-red-700 mb-2">Quality Gate</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  If any critical check fails, the pipeline <strong className="text-slate-900">stops</strong>. 
                  We serve last known good data and alert the team. Bad data in a dashboard is worse than no update at all.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {['🔒 PII fields encrypted at rest', '🔑 Role-based access controls', '📋 Audit log on every extraction', '⚙️ Minimum-permission service accounts'].map((item) => (
              <span key={item} className="px-4 py-2 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/20 text-xs text-[#2e844a] font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}