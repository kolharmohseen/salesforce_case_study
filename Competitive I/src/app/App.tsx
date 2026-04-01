import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Database, GitBranch, Shield, Layers, BarChart3, AlertTriangle, CheckCircle2, TrendingUp, Users, Activity, Target, Zap } from 'lucide-react';
import { StrategicCloseSlide } from './StrategicCloseSlide';
import { SummarySlide } from './SummarySlide';
import { IntegritySlide } from './components/IntegritySlide';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'intro', title: 'Part 2 Overview' },
    { id: 'problem', title: 'The Problem' },
    { id: 'data-sources', title: 'Data Sources' },
    { id: 'architecture', title: 'Architecture' },
    { id: 'integrity', title: 'Data Integrity' },
    { id: 'join', title: 'The Join Strategy' },
    { id: 'trends', title: 'Usage Trend Patterns' },
    { id: 'insights', title: 'Insight Matrix' },
    { id: 'price-sensitive', title: 'Price Sensitive Analysis' },
    { id: 'dashboard', title: 'Dashboard' },
    { id: 'strategic-close', title: 'Strategic Value' },
    { id: 'summary', title: 'Summary' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        nextSlide();
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-sm text-[#0176d3]">
              Competitive Intelligence <span className="text-slate-400 font-normal mx-2">-</span> <span className="text-slate-600 font-normal">Tying Product Usage to Competitive Loss</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-[#0176d3] text-[10px] text-[#0176d3] font-medium hover:bg-[#0176d3] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#0176d3] transition-all"
            >
              <ChevronLeft className="w-3 h-3" />
              Prev
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#0176d3] text-[10px] text-white font-medium hover:bg-[#014f8e] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#0176d3] transition-all"
            >
              Next
              <ChevronRight className="w-3 h-3" />
            </button>
            <div className="h-4 w-px bg-slate-300" />
            <span className="text-xs text-slate-500 font-mono">
              {currentSlide + 1} / {slides.length}
            </span>
            <div className="h-4 w-px bg-slate-300" />
            <span className="text-[10px] bg-[#2e844a]/10 text-[#2e844a] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Part 2</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-6 px-8 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/30">
        <div className="w-full max-w-7xl">
          {currentSlide === 0 && <IntroSlide />}
          {currentSlide === 1 && <ProblemSlide />}
          {currentSlide === 2 && <DataSourcesSlide />}
          {currentSlide === 3 && <ArchitectureSlide />}
          {currentSlide === 4 && <IntegritySlide />}
          {currentSlide === 5 && <JoinSlide />}
          {currentSlide === 6 && <TrendsSlide />}
          {currentSlide === 7 && <InsightsSlide />}
          {currentSlide === 8 && <PriceSensitiveSlide />}
          {currentSlide === 9 && <DashboardSlide />}
          {currentSlide === 10 && <StrategicCloseSlide />}
          {currentSlide === 11 && <SummarySlide />}
        </div>
      </main>


    </div>
  );
}

// Slide Components

function IntroSlide() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="space-y-5">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/20 text-[#2e844a] text-xs font-bold tracking-wider uppercase">
          Part 2 · Competitive Data Problem
        </div>
        <h2 className="text-6xl font-bold leading-tight text-slate-900">
          Tying Product Usage to
          <br />
          <span className="text-[#2e844a]">Competitive Loss</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          A complete data processing cycle — from extraction through integrity to insight — with a focus on data quality and accuracy
        </p>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#0176d3] via-[#2e844a] to-[#0176d3] rounded-full max-w-xl" />

      <div className="grid grid-cols-5 gap-5">
        {[
          { num: '1', label: 'Extract', sublabel: 'Salesforce Objects', icon: Database, color: '#0176d3' },
          { num: '2', label: 'Integrity', sublabel: 'Clean + Validate', icon: Shield, color: '#c23934' },
          { num: '3', label: 'Join', sublabel: 'Point-in-Time', icon: GitBranch, color: '#f59e0b' },
          { num: '4', label: 'Enrich', sublabel: 'Derive + Classify', icon: Layers, color: '#7c3aed' },
          { num: '5', label: 'Insight', sublabel: 'Dashboard + Action', icon: BarChart3, color: '#2e844a' },
        ].map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className="group">
              <div className="aspect-square rounded-2xl border-3 border-slate-200 bg-white p-6 flex flex-col items-center justify-center text-center hover:border-slate-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${step.color}15` }}>
                  <Icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
                <div className="text-xl font-bold mb-1" style={{ color: step.color }}>{step.label}</div>
                <div className="text-xs text-slate-500">{step.sublabel}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProblemSlide() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="space-y-4">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/20 text-[#2e844a] text-xs font-bold tracking-wider uppercase">
          The Challenge
        </div>
        <h2 className="text-5xl font-bold leading-tight text-slate-900">
          Can We Tie Product Usage to
          <br />
          <span className="text-[#2e844a]">Competitive Loss?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-1 p-8 rounded-2xl border-2 border-[#2e844a]/30 bg-gradient-to-br from-[#2e844a]/5 to-[#2e844a]/10 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-[#2e844a] flex items-center gap-3">
            <Target className="w-6 h-6" />
            The Question
          </h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            If a deal has been lost to a competitor, did the customer have low usage of existing 
            products that had already been purchased? Can we tie product usage metrics to competitive losses — and surface that insight to drive better decisions?
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-[#0176d3]/10 border-2 border-[#0176d3]/20 flex items-center justify-center mb-5">
              <Database className="w-7 h-7 text-[#0176d3]" />
            </div>
            <h3 className="font-bold mb-3 text-[#0176d3] text-lg">The Data</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Three Salesforce objects — <strong className="text-slate-900">Opportunity</strong> (deal outcomes: stage, amount, close date), 
              <strong className="text-slate-900"> CI_Opportunity_Competitor</strong> (junction table: which competitors were on the deal, who was Leading, competitive notes), 
              and <strong className="text-slate-900">Account</strong> (product usage derived from asset line items). Data already in Snowflake via the existing pipeline.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-[#7c3aed]/10 border-2 border-[#7c3aed]/20 flex items-center justify-center mb-5">
              <Activity className="w-7 h-7 text-[#7c3aed]" />
            </div>
            <h3 className="font-bold mb-3 text-[#7c3aed] text-lg">The Pipeline</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Data flows: <strong className="text-slate-900">Salesforce → Azure → Airflow → Snowflake</strong>. 
              Already in the warehouse—we query from there. Existing infrastructure, new insights.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-[#2e844a]/10 border-2 border-[#2e844a]/20 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7 text-[#2e844a]" />
            </div>
            <h3 className="font-bold mb-3 text-[#2e844a] text-lg">The Deliverable</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A complete data processing cycle — from extraction through integrity to insight — with a <strong className="text-slate-900">focus on data quality and accuracy</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataSourcesSlide() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="space-y-4">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#0176d3]/10 border-2 border-[#0176d3]/20 text-[#0176d3] text-xs font-bold tracking-wider uppercase">
          Step 1 · Source Data — Three Salesforce Objects
        </div>
        <h2 className="text-5xl font-bold leading-tight text-slate-900">
          The Data Lives in
          <br />
          <span className="text-[#0176d3]">Three Connected Objects.</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Opportunity */}
        <div className="rounded-2xl border-t-4 border-t-[#0176d3] border-2 border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-bold text-[#0176d3] uppercase tracking-wider mb-3">Standard Object</div>
          <h3 className="text-2xl font-bold text-[#0176d3] mb-5">Opportunity</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Stage</span>
              <span className="text-red-600 font-mono font-bold">Closed Lost</span>
            </div>
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Amount</span>
              <span className="text-slate-900 font-mono font-semibold">$84,000</span>
            </div>
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Close Date</span>
              <span className="text-slate-900 font-mono">2024-11-15</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span className="text-amber-600 font-mono font-bold">Account_ID</span>
              <span className="text-amber-600 font-mono font-bold">ACC-00391</span>
            </div>
          </div>
          <div className="mt-5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-600 leading-relaxed">
              The deal record. Stage moves through pipeline. We filter for <strong className="text-slate-900">Closed Lost</strong>.
            </p>
          </div>
        </div>

        {/* Competition */}
        <div className="rounded-2xl border-t-4 border-t-[#7c3aed] border-2 border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider mb-1">Junction Object · 2.3M Records</div>
          <div className="text-xs text-slate-500 font-mono mb-3">CI_Opportunity_Competitor</div>
          <h3 className="text-2xl font-bold text-[#7c3aed] mb-5">Competition</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Competitor</span>
              <span className="text-slate-900 font-mono text-xs">Rival Analytics Co.</span>
            </div>
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Incumbent</span>
              <span className="text-slate-900 font-mono">No</span>
            </div>
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-red-600 font-mono font-bold">Leading</span>
              <span className="text-red-600 font-mono font-bold">Yes</span>
            </div>
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Competitive Notes</span>
              <span className="text-slate-400 font-mono italic text-xs">4000 chars free text</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span className="text-slate-600 font-medium">Win/Loss Call</span>
              <span className="text-amber-600 font-mono font-bold">Flagged</span>
            </div>
          </div>
          <div className="mt-5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-600 leading-relaxed">
              Bridges Opportunity to Competitor catalog (908 known competitors). One deal can have <strong className="text-slate-900">multiple competitors</strong>. Required at Stage 3. <strong className="text-red-600">Leading</strong> flag = who won.
            </p>
          </div>
        </div>

        {/* Account */}
        <div className="rounded-2xl border-t-4 border-t-amber-500 border-2 border-amber-500/30 bg-white p-6 shadow-sm flex flex-col">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Object: Asset Line Items (Apttus CPQ)</div>
          <h3 className="text-2xl font-bold text-amber-600 mb-4">Account + Usage</h3>
          <div className="space-y-4 mb-5">
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Account</span>
              <span className="text-slate-900 font-mono font-semibold">Nexus Corp</span>
            </div>
            <div className="flex justify-between text-sm pb-2 border-b border-slate-100">
              <span className="text-slate-600 font-medium">Licensed Product</span>
              <span className="text-slate-900 font-mono">Sales Cloud</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200 mb-4 space-y-1.5 font-mono text-[11px]">
            <div>
              <div className="text-slate-700">Licensed Seats <span className="text-slate-400">=</span> <span className="text-slate-900 font-bold">50</span></div>
              <div className="text-slate-400 text-[10px] pl-3">{'\u2192'} MAX(asset_line_item.quantity)</div>
            </div>
            <div>
              <div className="text-slate-700">Active Users <span className="text-slate-400">=</span> <span className="text-red-600 font-bold">3 of 50</span></div>
              <div className="text-slate-400 text-[10px] pl-3">{'\u2192'} COUNT(DISTINCT usage.user_id)</div>
            </div>
            <div>
              <div className="text-slate-700">Usage Rate <span className="text-slate-400">=</span> <span className="text-red-600 font-bold">6%</span></div>
              <div className="text-slate-400 text-[10px] pl-3">{'\u2192'} Active / Licensed × 100</div>
            </div>
            <div>
              <div className="text-slate-700">Last Active <span className="text-slate-400">=</span> <span className="text-amber-600 font-bold">2024-09-02</span></div>
              <div className="text-slate-400 text-[10px] pl-3">{'\u2192'} MAX(usage.event_ts)</div>
            </div>
          </div>

          <div className="mt-auto p-3 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              Source path: Account → Asset Line Items → Child Usage Records<br />
              Join key: <strong className="text-amber-600">account_id</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4">
        {/* The Source */}
        <div className="p-4 rounded-xl bg-white border-2 border-slate-200 shadow-sm">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">The Source</div>
          <div className="text-sm font-bold text-slate-900 mb-2">Extract from Snowflake</div>
          <p className="text-[11px] text-slate-600 leading-relaxed font-mono">
            Data already flows: Salesforce → Azure → Airflow → Snowflake. Query from there.
          </p>
        </div>
        
        {/* First 30 Days */}
        <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-200 shadow-sm">
          <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-2">First 30 Days</div>
          <div className="text-sm font-bold text-amber-600 mb-2">Map the usage objects</div>
          <p className="text-[11px] text-slate-700 leading-relaxed font-mono">
            Which fields track usage? Logins, feature actions, API calls? Daily or weekly? Is there already a composite score downstream?
          </p>
        </div>
        
        {/* Then Build */}
        <div className="p-4 rounded-xl bg-[#2e844a]/5 border-2 border-[#2e844a]/20 shadow-sm">
          <div className="text-[10px] font-bold text-[#2e844a] uppercase tracking-wider mb-2">Then Build</div>
          <div className="text-sm font-bold text-[#2e844a] mb-2">Composite score + daily snapshots</div>
          <p className="text-[11px] text-slate-700 leading-relaxed font-mono">
            Derive usage metric from asset hierarchy. Build point-in-time history for the join. Define in semantic layer.
          </p>
        </div>
      </div>
    </div>
  );
}

function ArchitectureSlide() {
  return (
    <div className="space-y-4 animate-in fade-in duration-700">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <div className="inline-block px-3 py-1.5 rounded-lg bg-[#2e844a]/10 border border-[#2e844a]/20 text-[#2e844a] text-xs font-bold tracking-wider uppercase">
            Full Architecture
          </div>
          <h2 className="text-4xl font-bold leading-tight text-slate-900">
            End-to-End <span className="text-[#2e844a]">Data Pipeline</span>
          </h2>
        </div>
        <p className="text-slate-600 text-lg">From Three Salesforce Objects to Executive Insight</p>
      </div>

      {/* Source Data Objects */}
      <div className="flex items-center justify-center gap-4 p-5 rounded-xl bg-white border-2 border-slate-200 shadow-sm relative mt-2">
        <div className="absolute -top-3 left-4 bg-white px-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          Data Ingestion (The Source)
        </div>
        
        {/* Opportunity */}
        <div className="flex-1 p-4 rounded-lg border-2 border-[#0176d3]/30 bg-[#0176d3]/5 flex flex-col items-center text-center">
          <Database className="w-5 h-5 text-[#0176d3] mb-2" />
          <span className="text-sm font-bold text-[#0176d3] mb-1">Opportunity</span>
          <span className="text-xs text-slate-600 font-mono">Stage, Amount, Close Date, Account_ID</span>
        </div>
        
        {/* Competition */}
        <div className="flex-1 p-4 rounded-lg border-2 border-[#7c3aed]/30 bg-[#7c3aed]/5 flex flex-col items-center text-center">
          <Database className="w-5 h-5 text-[#7c3aed] mb-2" />
          <span className="text-sm font-bold text-[#7c3aed] mb-1">Competition Junction</span>
          <span className="text-xs text-slate-600 font-mono">Competitor, Incumbent, Leading Flag</span>
        </div>
        
        {/* Account + Usage */}
        <div className="flex-1 p-4 rounded-lg border-2 border-amber-500/30 bg-amber-50 flex flex-col items-center text-center">
          <Database className="w-5 h-5 text-amber-600 mb-2" />
          <span className="text-sm font-bold text-amber-600 mb-1">Account + Usage</span>
          <span className="text-xs text-slate-600 font-mono">Account → Asset Line Items → child usage objects</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {[
          { 
            num: '1', 
            title: 'Extract', 
            color: '#0176d3',
            items: ['Extract from Snowflake (existing EDW)', 'Store as raw tables – no transforms', 'Immutable audit trail preserved', '2 years of deal history + 2 years of usage snapshots']
          },
          { 
            num: '2', 
            title: 'QA + Integrity', 
            color: '#c23934',
            items: ['Schema validation on every load', 'Range checks – flag invalid values', 'Dedup + format normalization', 'Quality gate – blocks bad data']
          },
          { 
            num: '3', 
            title: 'Join', 
            color: '#f59e0b',
            items: ['LEFT JOIN on Account_ID', 'NULLs retained – they are signals', 'Historical snapshot, not current state'],
            pointInTime: "We capture usage as of the deal's close date – not today. A churned customer's usage is now 0%, which tells us nothing. We need what it was when the deal was active."
          },
          { 
            num: '4', 
            title: 'Enrich', 
            color: '#7c3aed',
            items: ['Usage tier: Low / Med / High', '12-month usage trend before loss', 'Days inactive + risk flag', 'Loss reason classification']
          },
          { 
            num: '5', 
            title: 'Insight', 
            color: '#2e844a',
            items: ['Competitor win/loss scorecard', 'At-risk account table by renewal', 'Usage vs loss rate segmentation', 'CS alerts on threshold breaches']
          },
        ].map((step) => (
          <div key={step.num} className="space-y-3">
            <div className="rounded-xl border-2 border-slate-200 bg-white p-4 h-full shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Step {step.num}</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: step.color }}>{step.title}</h3>
              <ul className="space-y-2 mb-3 flex-1">
                {step.items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                    <span className="text-slate-400 mt-0.5 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {step.pointInTime && (
                <div className="mt-auto p-2 rounded bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                  <p className="text-[10px] text-slate-700 leading-relaxed">
                    <strong className="text-[#f59e0b]">Point-in-Time:</strong> {step.pointInTime}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-slate-50 border-2 border-slate-200 flex items-center justify-center gap-3 flex-wrap">
        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider whitespace-nowrap">Output: One Enriched Fact Table</div>
        <div className="font-mono text-sm font-bold text-[#2e844a] px-3 py-1 rounded-lg bg-[#2e844a]/10 whitespace-nowrap">competitive_deal_outcomes</div>
        <div className="flex gap-1.5 flex-wrap">
          {[
            { label: 'Opportunity fields', color: '#0176d3' },
            { label: 'Usage at close date', color: '#f59e0b' },
            { label: 'Competitor resolved', color: '#7c3aed' },
            { label: 'Loss reason classified', color: '#c23934' },
            { label: 'Usage tier + Risk flag', color: '#2e844a' },
            { label: '12-month trend', color: '#2e844a' },
          ].map((tag) => (
            <span key={tag.label} className="px-2.5 py-0.5 rounded-md font-mono text-xs font-semibold border" style={{ 
              backgroundColor: `${tag.color}15`, 
              borderColor: `${tag.color}40`,
              color: tag.color 
            }}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { title: 'Tableau', quote: 'Design for the decision, not the chart', desc: '"Pull" model – on-demand scorecards and drill-downs', color: '#0176d3', icon: BarChart3 },
          { title: 'Agentforce', quote: 'AI is only trusted if definitions are precise', desc: 'Semantic layer as contract. AI needs precise definitions.', color: '#2e844a', icon: Zap },
          { title: 'Slack Digests', quote: 'Dashboards die if no one opens them', desc: '"Push" model – weekly insights delivered proactively', color: '#7c3aed', icon: Activity },
          { title: 'CS Alerts', quote: 'Best insight arrives before the problem', desc: 'Detect before loss (usage <30% + renewal <90d)', color: '#c23934', icon: AlertTriangle },
        ].map((consumer) => {
          const Icon = consumer.icon;
          return (
            <div key={consumer.title} className="p-4 rounded-xl border-t-4 border-2 border-slate-200 bg-white shadow-sm flex flex-col" style={{ borderTopColor: consumer.color }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${consumer.color}15` }}>
                  <Icon className="w-5 h-5" style={{ color: consumer.color }} />
                </div>
                <h4 className="text-sm font-bold" style={{ color: consumer.color }}>{consumer.title}</h4>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">{consumer.desc}</p>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-500 italic leading-snug">"{consumer.quote}"</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function JoinSlide() {
  return (
    <div className="space-y-7 animate-in fade-in duration-700">
      <div className="space-y-3">
        <div className="inline-block px-4 py-2 rounded-lg bg-amber-100 border-2 border-amber-300 text-amber-700 text-xs font-bold tracking-wider uppercase">
          Step 3 · The Join Strategy
        </div>
        <h2 className="text-4xl font-bold leading-tight text-slate-900">
          The Most Important Design Decision:
          <br />
          <span className="text-amber-600">Point-in-Time Joins</span>
        </h2>
      </div>

      <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-200">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-700 mb-3 text-lg">Why does timing matter?</h3>
            <p className="text-slate-700 leading-relaxed text-base">
              A customer churned 3 months ago. Their usage today is <strong className="text-slate-900">0%</strong>. 
              But on the day the deal closed, their usage was <strong className="text-slate-900">18%</strong>. 
              If we join to today, every churned account looks the same—we learn nothing. 
              We need usage <em className="text-amber-700">as of the close date</em>, stored as a daily snapshot.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Decision 1 */}
        <div className="p-6 rounded-2xl border-t-4 border-t-amber-500 border-2 border-slate-200 bg-white shadow-sm">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3">Decision 1 – Critical</div>
          <h3 className="text-xl font-bold mb-5 text-slate-900">Point-in-Time, Not Current State</h3>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200">
              <div className="text-xs font-bold text-red-600 uppercase mb-2">✗ Wrong Approach</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Join to <strong className="text-slate-900">current</strong> usage. Every churned customer shows 0%—tells you nothing.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/30">
              <div className="text-xs font-bold text-[#2e844a] uppercase mb-2">✓ Right Approach</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Join to usage <strong className="text-slate-900">as of close date</strong>. Daily snapshots via SCD Type 2.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-700 leading-relaxed font-mono">
              <strong className="text-slate-900">Example:</strong> Nexus Corp – deal closed Nov 15. Usage on Nov 15: <span className="text-red-600 font-bold">18%</span>. 
              Usage today: 0% (churned). Joining to today's data makes every churned account look identical.
            </p>
          </div>
        </div>

        {/* Decision 2 */}
        <div className="p-6 rounded-2xl border-t-4 border-t-[#0176d3] border-2 border-slate-200 bg-white shadow-sm">
          <div className="text-xs font-bold text-[#0176d3] uppercase tracking-wider mb-3">Decision 2 – Important</div>
          <h3 className="text-xl font-bold mb-5 text-slate-900">LEFT JOIN, Not INNER JOIN</h3>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200">
              <div className="text-xs font-bold text-red-600 uppercase mb-2">Inner Join</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Drops deals with no usage data. Biases analysis toward accounts we already monitored.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/30">
              <div className="text-xs font-bold text-[#2e844a] uppercase mb-2">Left Join</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Keeps ALL losses. NULL usage = tracking not configured = <strong className="text-slate-900">itself a risk signal</strong>.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-700 leading-relaxed font-mono">
              Surface blind spots, not just the accounts you were already watching.
            </p>
          </div>
        </div>
      </div>

      {/* Result Row */}
      <div className="p-6 rounded-xl bg-[#2e844a]/5 border-2 border-[#2e844a]/30">
        <div className="text-xs font-bold text-[#2e844a] uppercase tracking-wider mb-4">
          Result – One Row per Deal-Competitor (OPP-0847 / Nexus Corp)
          <span className="text-slate-600 normal-case ml-3 tracking-normal font-normal">
            One deal may have 2–3 competitors. The <strong className="text-red-600">Leading</strong> flag identifies who won.
          </span>
        </div>
        <div className="flex gap-1.5 items-center flex-nowrap">
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold bg-[#7c3aed]/15 border border-[#7c3aed]/30 text-[#7c3aed] whitespace-nowrap">Leading: Rival Analytics Co.</span>
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold bg-[#0176d3]/15 border border-[#0176d3]/30 text-[#0176d3] whitespace-nowrap">$84,000</span>
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold bg-[#0176d3]/15 border border-[#0176d3]/30 text-[#0176d3] whitespace-nowrap">Close: Nov 15</span>
          <span className="text-slate-400 font-bold text-sm">+</span>
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold bg-amber-100 border border-amber-300 text-amber-700 whitespace-nowrap">Usage @ Close: 18%</span>
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold bg-amber-100 border border-amber-300 text-amber-700 whitespace-nowrap">MAU: 3 of 50</span>
          <span className="text-slate-400 font-bold text-sm">=</span>
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-bold bg-red-100 border border-red-300 text-red-700 whitespace-nowrap">Tier: LOW</span>
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-bold bg-red-100 border border-red-300 text-red-700 whitespace-nowrap">Risk: TRUE</span>
          <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-bold bg-red-100 border border-red-300 text-red-700 whitespace-nowrap">Trend: ↘ declining</span>
        </div>
      </div>
    </div>
  );
}

function TrendsSlide() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="space-y-3">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#7c3aed]/10 border-2 border-[#7c3aed]/30 text-[#7c3aed] text-xs font-bold tracking-wider uppercase">
          Why 12 Months Matters
        </div>
        <h2 className="text-4xl font-bold leading-tight text-slate-900">
          Same Endpoint. <span className="text-[#7c3aed]">Three Different Problems.</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          A usage score of 18% at close means nothing without context. Was it always 18%? Did it used to be 70%? 
          <strong className="text-slate-900"> The shape of the decline tells you what to do.</strong>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Pattern A */}
        <div className="p-6 rounded-2xl border-t-4 border-t-red-500 border-2 border-slate-200 bg-white shadow-sm">
          <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-4">Pattern A – Predictable Decline</div>
          <div className="flex items-end gap-2 h-28 mb-5 px-2">
            {[90, 80, 65, 50, 35, 22, 18].map((val, i) => (
              <div key={i} className="flex-1 rounded-t-lg transition-all" style={{ 
                height: `${val}%`,
                backgroundColor: val > 60 ? '#2e844a' : val > 30 ? '#f59e0b' : '#c23934'
              }} />
            ))}
          </div>
          <h4 className="text-lg font-bold mb-3 text-slate-900">70% → 18% over 12 months</h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Gradual disengagement. The warning was there for months. <strong className="text-slate-900">This loss was preventable.</strong>
          </p>
          <div className="p-4 rounded-lg bg-red-50 border border-red-200">
            <p className="text-xs text-red-700 leading-relaxed font-semibold">
              <strong>Response:</strong> CS should have been alerted at month 6. Proactive intervention window was wide open.
            </p>
          </div>
        </div>

        {/* Pattern B */}
        <div className="p-6 rounded-2xl border-t-4 border-t-[#7c3aed] border-2 border-slate-200 bg-white shadow-sm">
          <div className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider mb-4">Pattern B – Never Adopted</div>
          <div className="flex items-end gap-2 h-28 mb-5 px-2">
            {[22, 20, 22, 18, 21, 19, 20].map((val, i) => (
              <div key={i} className="flex-1 rounded-t-lg bg-red-500 transition-all" style={{ height: `${val}%` }} />
            ))}
          </div>
          <h4 className="text-lg font-bold mb-3 text-slate-900">~20% the entire time</h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Never got off the ground. Onboarding failure, not churn. <strong className="text-slate-900">Different root cause entirely.</strong>
          </p>
          <div className="p-4 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/30">
            <p className="text-xs text-[#7c3aed] leading-relaxed font-semibold">
              <strong>Response:</strong> This is an onboarding problem. Fix the implementation process, not the retention process.
            </p>
          </div>
        </div>

        {/* Pattern C */}
        <div className="p-6 rounded-2xl border-t-4 border-t-amber-500 border-2 border-slate-200 bg-white shadow-sm">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-4">Pattern C – Sudden Drop</div>
          <div className="flex items-end gap-2 h-28 mb-5 px-2">
            {[70, 68, 65, 62, 20, 13, 10].map((val, i) => (
              <div key={i} className="flex-1 rounded-t-lg transition-all" style={{ 
                height: `${val}%`,
                backgroundColor: val > 60 ? '#2e844a' : '#c23934'
              }} />
            ))}
          </div>
          <h4 className="text-lg font-bold mb-3 text-slate-900">65% → 10% in 2 months</h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Something specific happened. Champion left. Competitor demo. Support failure. <strong className="text-slate-900">Investigate immediately.</strong>
          </p>
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
            <p className="text-xs text-amber-700 leading-relaxed font-semibold">
              <strong>Response:</strong> Pull the support tickets. Check if the champion is still there. This one has a specific cause.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-[#2e844a]/5 border-2 border-[#2e844a]/30">
        <p className="text-sm text-slate-700 leading-relaxed text-center">
          <strong className="text-[#2e844a]">Implementation:</strong> Instead of joining to one snapshot at close, we pull a time series – monthly usage for the 12 months before 
          <code className="px-2 py-1 rounded bg-slate-100 border border-slate-300 text-slate-900 font-mono text-xs mx-1">close_date</code>. 
          This requires daily usage snapshots (SCD Type 2). The sparkline per account in the dashboard makes the pattern visible at a glance.
        </p>
      </div>
    </div>
  );
}

function InsightsSlide() {
  return (
    <div className="space-y-7 animate-in fade-in duration-700">
      <div className="space-y-3">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/30 text-[#2e844a] text-xs font-bold tracking-wider uppercase">
          Steps 4 + 5 · Enrich & Insight
        </div>
        <h2 className="text-4xl font-bold leading-tight text-slate-900">
          Low Usage <span className="text-[#2e844a]">Predicts</span> Competitive Loss
        </h2>
      </div>

      {/* Enrichment Strip */}
      <div className="flex gap-3 items-center p-5 rounded-xl bg-[#7c3aed]/5 border-2 border-[#7c3aed]/30">
        <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider whitespace-nowrap">Step 4 · Enrich</span>
        <span className="text-sm text-slate-600">From the joined data we derive:</span>
        <div className="flex gap-2 flex-wrap">
          {['Usage Tier (Low/Med/High)', 'Days Inactive', 'Risk Flag', 'Loss Reason', '12-mo Trend'].map((item) => (
            <span key={item} className="px-3 py-1 rounded-lg bg-[#7c3aed]/15 border border-[#7c3aed]/30 text-xs font-semibold text-[#7c3aed]">{item}</span>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-5">
        {[
          { stat: '3.2×', desc: 'Accounts with <30% usage are 3.2× more likely to churn to a competitor', color: '#c23934' },
          { stat: '74d', desc: 'Average inactivity before loss. Signal visible 10+ weeks before renewal', color: '#f59e0b' },
          { stat: '$4.2M', desc: 'ARR in the Sleeping Risk quadrant. Addressable by CS now', color: '#2e844a' },
        ].map((metric) => (
          <div key={metric.stat} className="p-6 rounded-xl border-2 border-slate-200 bg-white shadow-sm" style={{ borderTopColor: metric.color, borderTopWidth: '4px' }}>
            <div className="text-5xl font-bold mb-3" style={{ color: metric.color }}>{metric.stat}</div>
            <p className="text-sm text-slate-600 leading-relaxed">{metric.desc}</p>
          </div>
        ))}
      </div>

      {/* 2x2 Matrix */}
      <div>
        <h3 className="text-lg font-bold text-slate-700 mb-4">Usage vs Competitive Loss Matrix</h3>
        <div className="grid grid-cols-2 gap-5">
          {[
            { 
              quadrant: '⚠ Danger Zone',
              title: 'Lost + Low Usage',
              stat: '68%',
              desc: 'of all competitive losses had <30% usage before they left. The signal was there weeks earlier.',
              action: 'CS alert 90 days before renewal when usage drops below threshold',
              color: '#c23934'
            },
            { 
              quadrant: '$ Price Sensitive',
              title: 'Lost + High Usage',
              stat: '24%',
              desc: 'Usage was healthy but they still left. This quadrant breaks the pattern—usage wasn\'t the problem.',
              action: 'Cross-reference loss reason. Input for Product, Pricing, and Sales Ops',
              color: '#f59e0b'
            },
            { 
              quadrant: '⏸ Sleeping Risk',
              title: 'Retained + Low Usage',
              stat: '340',
              desc: 'accounts haven\'t churned yet but look exactly like the ones that did. This is the $4.2M opportunity.',
              action: 'Proactive outreach NOW. 60–70% save rate with early intervention',
              color: '#7c3aed'
            },
            { 
              quadrant: '★ Champions',
              title: 'Retained + High Usage',
              stat: '3.1×',
              desc: 'less likely to churn than low-usage accounts. Fully embedded in the product.',
              action: 'Expansion targets. Upsell conversations. Reference customers',
              color: '#2e844a'
            },
          ].map((item) => (
            <div key={item.quadrant} className="p-6 rounded-xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow" style={{ borderTopColor: item.color, borderTopWidth: '4px' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: item.color }}>{item.quadrant}</div>
                  <div className="text-base font-bold text-slate-900">{item.title}</div>
                </div>
                <div className="text-4xl font-bold" style={{ color: item.color }}>{item.stat}</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                <p className="text-xs font-semibold leading-relaxed" style={{ color: item.color }}>
                  <strong>Action:</strong> {item.action}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-slate-500 mt-4">
          Numbers are modeled from pipeline design—in production, derived from actual data
        </p>
      </div>
    </div>
  );
}

function PriceSensitiveSlide() {
  return (
    <div className="space-y-7 animate-in fade-in duration-700">
      <div className="space-y-3">
        <div className="inline-block px-4 py-2 rounded-lg bg-amber-100 border-2 border-amber-300 text-amber-700 text-xs font-bold tracking-wider uppercase">
          The Most Nuanced Quadrant
        </div>
        <h2 className="text-4xl font-bold leading-tight text-slate-900">
          24% of Losses <span className="text-amber-600">Break the Pattern</span>
        </h2>
        <p className="text-lg text-slate-600">These Need Different Thinking</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* In Our Control */}
        <div className="space-y-5">
          <div className="inline-block px-4 py-2 rounded-lg bg-[#2e844a]/10 border-2 border-[#2e844a]/30 text-[#2e844a] text-xs font-bold uppercase tracking-wider">
            ✓ In Our Control – We Can Fix This
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Price undercut',
                tag: 'Pricing Team',
                tagColor: '#f59e0b',
                desc: 'Competitor offered 30% less. Customer was happy with the product but the economics didn\'t work. If this is concentrated in Mid-Market, the pricing tier may be wrong for that segment.'
              },
              {
                title: 'Feature parity crossed',
                tag: 'Product Team',
                tagColor: '#0176d3',
                desc: 'Competitor shipped what was our differentiator. Now they\'re equal on capability and cheaper. This is a roadmap input—not a dashboard metric.'
              },
              {
                title: 'Relationship failure',
                tag: 'Sales Ops',
                tagColor: '#2e844a',
                desc: 'Champion left the account. New decision-maker had a prior relationship with the competitor. CSM assignment model needs review.'
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border-2 border-slate-200 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold border-2" style={{ 
                    backgroundColor: `${item.tagColor}15`, 
                    borderColor: `${item.tagColor}40`,
                    color: item.tagColor 
                  }}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Not in Our Control */}
        <div className="space-y-5">
          <div className="inline-block px-4 py-2 rounded-lg bg-slate-100 border-2 border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-wider">
            ✗ Not In Our Control – Track & Learn
          </div>
          <div className="p-5 rounded-xl border-2 border-slate-200 bg-white shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3">Vendor consolidation</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              CIO standardizing on Oracle/SAP. Product was fine. Politics won. Nothing we could have done—but we should track frequency by account size and region.
            </p>
          </div>
        </div>
      </div>

      {/* What I'd Build — Full Width Footer applying to ALL causes */}
      <div className="p-6 rounded-xl bg-[#2e844a]/5 border-2 border-[#2e844a]/30">
        <div className="flex items-start gap-4 mb-4">
          <Zap className="w-6 h-6 text-[#2e844a] flex-shrink-0 mt-1" />
          <h3 className="text-lg font-bold text-[#2e844a]">What I'd Build</h3>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Cross-reference <strong className="text-slate-900">loss reason classification from the Enrich step</strong> with this quadrant specifically. 
          Surface: <em className="text-slate-900">"Of the 24% of losses where usage was high, what are the top 3 loss reasons by ARR?"</em> 
          <br /><br />
          The answer becomes a <strong className="text-[#0176d3]">product brief</strong>, a <strong className="text-amber-600">pricing review</strong>, 
          and a <strong className="text-[#2e844a]">CSM model change</strong>. Three teams. Three fixes. Not just a number on a dashboard.
          <br /><br />
          And this is exactly the <strong className="text-slate-900">battlecard feedback loop</strong>—classified loss reasons flow back to update battlecard content, 
          with quarterly sign-off to keep it fresh.
        </p>
      </div>
    </div>
  );
}

function DashboardSlide() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="space-y-3">
        <div className="inline-block px-4 py-2 rounded-lg bg-[#0176d3]/10 border-2 border-[#0176d3]/30 text-[#0176d3] text-xs font-bold tracking-wider uppercase">
          Final Deliverable
        </div>
        <h2 className="text-3xl font-bold leading-tight text-slate-900">
          Competitive Intelligence <span className="text-[#0176d3]">Dashboard</span>
        </h2>
      </div>

      <div className="space-y-4">
        {/* Filter Bar */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-white border-2 border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Competitive Intelligence Dashboard</span>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {['All', 'Rival Co.', 'DataForce', 'Competo'].map((filter, i) => (
                <button key={filter} className={`px-3 py-1 rounded-lg text-xs font-semibold border-2 transition-all ${
                  i === 0 
                    ? 'bg-[#2e844a] border-[#2e844a] text-white' 
                    : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                }`}>
                  {filter}
                </button>
              ))}
            </div>
            <div className="h-6 w-px bg-slate-300" />
            <span className="text-xs font-mono text-slate-500">Jan–Nov 2024</span>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { value: '247', label: 'Competitive Losses', change: '↑ 18% YoY', color: '#c23934' },
            { value: '61%', label: 'Had <30% Usage at Loss', change: 'vs 21% in retained', color: '#c23934' },
            { value: '28%', label: 'Avg Usage at Loss', change: 'vs 71% in retained', color: '#f59e0b' },
            { value: '$4.2M', label: 'ARR at Risk', change: '340 accounts addressable', color: '#2e844a' },
          ].map((kpi) => (
            <div key={kpi.label} className="p-5 rounded-xl bg-white border-2 border-slate-200 shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: kpi.color }}>{kpi.value}</div>
              <div className="text-xs uppercase tracking-wider text-slate-600 font-bold mb-1">{kpi.label}</div>
              <div className="text-xs text-slate-500">{kpi.change}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-5">
          {/* Loss Rate */}
          <div className="p-5 rounded-xl bg-white border-2 border-slate-200 shadow-sm">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">Loss Rate by Usage Tier</h4>
            <div className="space-y-4">
              {[
                { label: 'Low <30%', value: 68, color: '#c23934' },
                { label: 'Med 30–70%', value: 34, color: '#f59e0b' },
                { label: 'High >70%', value: 18, color: '#2e844a' },
              ].map((tier) => (
                <div key={tier.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600 font-semibold">{tier.label}</span>
                    <span className="font-mono font-bold" style={{ color: tier.color }}>{tier.value}%</span>
                  </div>
                  <div className="h-6 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full flex items-center px-3 text-xs font-bold text-white" 
                         style={{ width: `${tier.value}%`, backgroundColor: tier.color }}>
                      {tier.value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-center mt-5 text-slate-700">
              Accounts with &lt;30% usage are <span className="text-red-600">3.2×</span> more likely to churn
            </p>
          </div>

          {/* Competitor Win Rate */}
          <div className="p-5 rounded-xl bg-white border-2 border-slate-200 shadow-sm">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">Win Rate by Competitor</h4>
            <div className="space-y-4">
              {[
                { name: 'Rival Analytics Co.', win: 45, lost: 55, amount: '$1.6M' },
                { name: 'DataForce Pro', win: 47, lost: 53, amount: '$1.1M' },
                { name: 'Competo', win: 54, lost: 46, amount: '$680K' },
              ].map((comp) => (
                <div key={comp.name}>
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-slate-700 font-bold">{comp.name}</span>
                    <span className="text-slate-600">{comp.win}% · {comp.amount} lost</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="bg-[#2e844a]" style={{ width: `${comp.win}%` }} />
                    <div className="bg-red-500" style={{ width: `${comp.lost}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center mt-5 text-xs font-mono">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[#2e844a]" />
                Won
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-red-500" />
                Lost
              </span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="p-5 rounded-xl bg-white border-2 border-slate-200 shadow-sm">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">Accounts Requiring Action – Sorted by Renewal Date</h4>
          <div className="overflow-auto">
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="text-left p-3 font-bold text-slate-600 uppercase tracking-wider">Account</th>
                  <th className="text-left p-3 font-bold text-slate-600 uppercase tracking-wider">Segment</th>
                  <th className="text-left p-3 font-bold text-slate-600 uppercase tracking-wider">Competitor</th>
                  <th className="text-center p-3 font-bold text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="text-right p-3 font-bold text-slate-600 uppercase tracking-wider">Deal</th>
                  <th className="text-center p-3 font-bold text-slate-600 uppercase tracking-wider">Usage</th>
                  <th className="text-left p-3 font-bold text-slate-600 uppercase tracking-wider">Trend</th>
                  <th className="text-left p-3 font-bold text-slate-600 uppercase tracking-wider">Renewal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { account: 'Nexus Corp', segment: 'Enterprise', competitor: 'Rival Co.', status: 'LOST', statusColor: 'red', deal: '$84K', usage: '18%', usageColor: 'red', trend: [90, 75, 60, 45, 30, 18], renewal: 'Jan 15', renewalColor: 'red' },
                  { account: 'Alpine Media', segment: 'Mid-Mkt', competitor: 'DataForce', status: 'LOST', statusColor: 'red', deal: '$120K', usage: '9%', usageColor: 'red', trend: [20, 18, 15, 12, 10, 9], renewal: 'Jan 22', renewalColor: 'red' },
                  { account: 'Orbit Labs', segment: 'Enterprise', competitor: 'Rival Co.', status: 'AT RISK', statusColor: 'amber', deal: '$92K', usage: '22%', usageColor: 'red', trend: [65, 60, 55, 50, 25, 22], renewal: 'Feb 01', renewalColor: 'amber' },
                  { account: 'Crestwood Inc', segment: 'SMB', competitor: 'Competo', status: 'WON', statusColor: 'green', deal: '$56K', usage: '71%', usageColor: 'green', trend: [60, 65, 68, 70, 72, 71], renewal: 'Mar 01', renewalColor: 'slate' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-slate-900">{row.account}</td>
                    <td className="p-3 text-slate-600">{row.segment}</td>
                    <td className="p-3 text-slate-600">{row.competitor}</td>
                    <td className="text-center p-3">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold border-2 ${
                        row.statusColor === 'red' ? 'bg-red-100 border-red-300 text-red-700' :
                        row.statusColor === 'amber' ? 'bg-amber-100 border-amber-300 text-amber-700' :
                        'bg-[#2e844a]/10 border-[#2e844a]/30 text-[#2e844a]'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3 text-right font-bold text-slate-900">{row.deal}</td>
                    <td className={`p-3 text-center font-bold ${row.usageColor === 'red' ? 'text-red-600' : 'text-[#2e844a]'}`}>{row.usage}</td>
                    <td className="p-3">
                      <div className="flex items-end gap-1 h-6">
                        {row.trend.map((val, idx) => (
                          <div key={idx} className="flex-1 rounded-t" style={{ 
                            height: `${(val/100)*100}%`,
                            backgroundColor: val > 60 ? '#2e844a' : val > 30 ? '#f59e0b' : '#c23934'
                          }} />
                        ))}
                      </div>
                    </td>
                    <td className={`p-3 font-bold ${row.renewalColor === 'red' ? 'text-red-600' : row.renewalColor === 'amber' ? 'text-amber-600' : 'text-slate-600'}`}>
                      {row.renewal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Push/Pull Models */}
        <div className="grid grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-amber-50 border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center">
                <Activity className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-amber-700 text-lg">Push Model</h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Weekly Slack digests to CS team. Insights come to them—no login required. 
              Alert on threshold breaches (usage &lt;30% + renewal &lt;90d).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#0176d3]" />
              </div>
              <h4 className="font-bold text-[#0176d3] text-lg">Pull Model</h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Tableau dashboard—filterable by region, competitor, time. Leadership uses this for strategic planning 
              and to identify systemic patterns.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#2e844a]/5 border-2 border-[#2e844a]/30 text-center">
          <p className="text-base text-slate-700 leading-relaxed">
            <strong className="text-[#2e844a]">Same principle as Part 1:</strong> Detect signal in data → clean → enrich → 
            deliver to the right person with a clear call to action. <strong className="text-slate-900">Data that drives action before it's too late.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
