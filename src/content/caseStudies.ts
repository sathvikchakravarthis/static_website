export type CaseStudyTag = 'Power BI' | 'Automation' | 'Trading Bots' | 'Analytics';

export type CaseStudy = {
  slug: string;
  title: string;
  tag: CaseStudyTag;
  summary: string;
  problem: string;
  constraints: string[];
  approach: string[];
  architecture: { title: string; details: string[] }[];
  outcomes: string[];
  tools: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'executive-kpi-dashboard-rls',
    title: 'Executive KPI Dashboard with RLS and Incremental Refresh',
    tag: 'Power BI',
    summary:
      'Built a secure executive reporting suite consolidating finance, operations, and sales with refresh performance suitable for daily decision-making.',
    problem:
      'A mid-size logistics company had siloed reporting across teams, leading to inconsistent KPI definitions and delayed board-level updates.',
    constraints: [
      'Different business units required strict data visibility boundaries.',
      'Legacy data sources had inconsistent schemas and delayed extracts.',
      'Dashboard refresh windows could not exceed early-morning ops cycles.'
    ],
    approach: [
      'Modeled a shared KPI semantic layer with standardized metric logic.',
      'Implemented row-level security per business unit and management hierarchy.',
      'Configured incremental refresh policies to optimize large fact tables.'
    ],
    architecture: [
      { title: 'Data Sources', details: ['ERP exports', 'Sales CRM', 'Warehouse snapshots'] },
      { title: 'Transformation Layer', details: ['Power Query normalization', 'DAX KPI modeling'] },
      { title: 'Serving Layer', details: ['Power BI Service', 'RLS roles', 'Executive dashboard apps'] }
    ],
    outcomes: [
      'Example outcome: Reduced reporting time by 70% for weekly executive reviews.',
      'Example outcome: Delivered KPI suite with row-level security for 6 departments.',
      'Example outcome: Improved dashboard refresh window from 95 minutes to 22 minutes.'
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Data Gateway']
  },
  {
    slug: 'python-etl-alerting-pipeline',
    title: 'Python ETL + Alerting Pipeline with Scheduling, Retries, and Logging',
    tag: 'Automation',
    summary:
      'Automated a fragile manual data process into a resilient ETL pipeline with observability and timely exception alerts.',
    problem:
      'A regional distribution business relied on manual CSV processing across multiple systems, causing data delays and recurring reconciliation errors.',
    constraints: [
      'Input files varied in structure and occasionally arrived late.',
      'No centralized error handling or run history existed.',
      'Operations required reliable morning-ready outputs before 8 AM.'
    ],
    approach: [
      'Built modular ETL jobs with validation and schema checks.',
      'Implemented scheduler workflows with retries and idempotent logic.',
      'Added structured logging and alerts for failed jobs and threshold breaches.'
    ],
    architecture: [
      { title: 'Ingestion', details: ['SFTP drop zone', 'API pull tasks'] },
      { title: 'Processing', details: ['Validation modules', 'Transform steps', 'Dedup + merge logic'] },
      { title: 'Monitoring', details: ['Scheduler', 'Retry queue', 'Slack/email alerting'] }
    ],
    outcomes: [
      'Example outcome: Automated reconciliation, saving 10+ hours/week.',
      'Example outcome: Reduced ETL failure recurrence by 60% via retry and alerting policies.',
      'Example outcome: Improved data availability SLA to 99% on weekday runs.'
    ],
    tools: ['Python', 'Pandas', 'APScheduler', 'PostgreSQL', 'Slack Webhooks']
  },
  {
    slug: 'modular-trading-bot-paper-trading',
    title: 'Modular Trading Bot Architecture for Backtesting and Paper Trading',
    tag: 'Trading Bots',
    summary:
      'Designed and implemented a modular strategy-to-execution framework with risk controls and monitoring-first engineering.',
    problem:
      'A private trading research group needed to move from ad-hoc scripts to a maintainable architecture supporting repeatable testing and safer execution.',
    constraints: [
      'Strategy components had to be versioned and independently testable.',
      'Execution had to remain in paper-trading mode for risk management.',
      'Team required transparent logs and alerting for every trade decision.'
    ],
    approach: [
      'Separated strategy, risk, execution, and analytics into clear modules.',
      'Implemented backtesting harness with benchmark comparisons.',
      'Built paper trading execution with kill-switch controls and monitoring dashboard.'
    ],
    architecture: [
      { title: 'Research Layer', details: ['Feature engineering', 'Signal generation', 'Backtest engine'] },
      { title: 'Execution Layer', details: ['Risk manager', 'Paper broker adapter', 'Order state tracking'] },
      { title: 'Observability', details: ['Metrics store', 'Alert rules', 'Performance dashboard'] }
    ],
    outcomes: [
      'Example outcome: Built modular bot architecture with paper trading + risk controls.',
      'Example outcome: Reduced strategy validation cycle time by 45% through reusable testing modules.',
      'Example outcome: Achieved full trade-level auditability across signals, orders, and outcomes.'
    ],
    tools: ['Python', 'vectorbt', 'CCXT', 'Docker', 'Prometheus', 'Grafana']
  },
  {
    slug: 'forecasting-anomaly-stakeholder-reporting',
    title: 'Forecasting + Anomaly Detection with Stakeholder Reporting',
    tag: 'Analytics',
    summary:
      'Delivered a decision-focused analytics package combining demand forecasting, anomaly detection, and executive communication.',
    problem:
      'An operations-focused service company struggled with demand volatility and reactive planning, leading to inefficient staffing and missed service targets.',
    constraints: [
      'Historical data had seasonal shifts and irregular event impacts.',
      'Stakeholders needed interpretable outputs, not black-box models.',
      'Insights had to map directly to weekly planning decisions.'
    ],
    approach: [
      'Conducted EDA to isolate demand drivers and event-linked patterns.',
      'Built forecasting pipeline with confidence intervals and drift checks.',
      'Deployed anomaly alerts and concise stakeholder reporting templates.'
    ],
    architecture: [
      { title: 'Data + Features', details: ['Operational history', 'Calendar effects', 'External signals'] },
      { title: 'Modeling', details: ['Forecast model', 'Anomaly threshold engine', 'Validation metrics'] },
      { title: 'Decision Layer', details: ['Weekly planning report', 'Alert digest', 'KPI trend dashboard'] }
    ],
    outcomes: [
      'Example outcome: Improved 8-week forecast accuracy by 24%.',
      'Example outcome: Detected service anomalies 2-3 days earlier than manual review.',
      'Example outcome: Reduced emergency staffing costs by 18% through proactive planning.'
    ],
    tools: ['Python', 'statsmodels', 'scikit-learn', 'Jupyter', 'Power BI']
  }
];
