export function StrategicCloseSlide() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="space-y-4">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/30 text-[#2e844a] text-xs font-bold tracking-wider uppercase">
          Strategic Value · The Thread Across Both Parts
        </div>
        <h2 className="text-5xl font-bold leading-tight text-slate-900">
          Infrastructure That
          <br />
          <span className="text-[#2e844a]">Earns Business Trust</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          {
            stat: '90 days',
            title: 'Predict Churn Before It Happens',
            desc: 'Usage drop below 30% triggers an automated CS alert 90 days before renewal. The pipeline turns a historical report into a forward-looking early warning system.',
            color: '#2e844a'
          },
          {
            stat: '2 signals',
            title: 'Separate Price Loss from Engagement Loss',
            desc: 'Price loss vs engagement loss require completely different responses. Product team gets roadmap input. Pricing team gets segment analysis. Sales Ops gets CSM assignment data. One pipeline, three actionable briefs.',
            color: '#f59e0b'
          },
          {
            stat: '~23%',
            title: 'Projected Reduction in Competitive Churn',
            desc: 'Proactive CS engagement on the 340 at-risk accounts could protect $2.5–3M of the $4.2M ARR at risk—based on comparable intervention programs.',
            color: '#0176d3'
          },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl border-2 border-slate-200 bg-white shadow-sm">
            <div className="text-4xl font-bold mb-4" style={{ color: item.color }}>{item.stat}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        <h3 className="text-xl font-bold text-slate-700">The Shift This Enables</h3>
        <div className="space-y-4">
          {[
            {
              icon: '←',
              iconColor: '#c23934',
              title: 'Before: Reactive',
              desc: '"We lost 108 deals to Rival Co. last quarter." Reported after the fact. No usage context. No intervention window. Just a number on a slide.',
              titleColor: 'text-slate-600'
            },
            {
              icon: '→',
              iconColor: '#2e844a',
              title: 'After: Predictive',
              desc: '"340 accounts have <30% usage and renew within 90 days. Here are the names, competitors, and recommended actions." CS acts 10 weeks before the loss happens.',
              titleColor: 'text-[#2e844a]'
            },
            {
              icon: '↑',
              iconColor: '#0176d3',
              title: 'The Principle',
              desc: 'Moving from "here\'s what happened" to "here\'s what\'s about to happen" is the difference between a reporting function and a growth engine. This pipeline makes that shift.',
              titleColor: 'text-[#0176d3]'
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-xl border-2 border-slate-200 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0" style={{ 
                backgroundColor: `${item.iconColor}15`,
                color: item.iconColor 
              }}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h4 className={`text-base font-bold mb-2 ${item.titleColor}`}>{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#2e844a]/5 border-2 border-[#2e844a]/30">
        <p className="text-base text-slate-700 leading-relaxed">
          <strong className="text-slate-900">The Thread Across Both Parts:</strong> The adoption alert pipeline (Part 1) and this CI pipeline (Part 2) follow the same architecture—detect a signal in data, clean it, enrich it, and deliver it to the right person with a clear call to action. At LinkedIn, the signal was low product adoption. Here, it's low usage predicting competitive loss. <em className="text-[#2e844a]">Different domain, same engineering. Same outcome: data that drives action before it's too late.</em>
        </p>
      </div>
    </div>
  );
}
