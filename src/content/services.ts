export const services = [
  {
    id: 'power-bi',
    title: 'Power BI Dashboards & Reporting',
    summary:
      'Decision-ready dashboards that combine KPI clarity, robust data models, and secure stakeholder access.',
    whatYouGet: [
      'Executive and operational dashboards tailored to business goals',
      'KPI definitions aligned across teams',
      'Row-level security and role-based visibility',
      'Performance optimization with incremental refresh'
    ],
    whoItsFor:
      'Leaders and operations teams that need trusted reporting, faster decisions, and less spreadsheet chaos.',
    timeline: '2-6 weeks depending on data source complexity and number of reports.',
    deliverables: [
      'Published Power BI workspace and dashboards',
      'Data model documentation and governance notes',
      'KPI glossary and stakeholder handover walkthrough'
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Fabric/Dataflows'],
    cta: 'Plan your dashboard roadmap'
  },
  {
    id: 'automation',
    title: 'Python Automation',
    summary:
      'Reliable automation for ETL, data quality checks, integrations, and recurring operational workflows.',
    whatYouGet: [
      'Automated data ingestion and transformation pipelines',
      'Resilient retries, alerting, and execution logs',
      'API and file-based system integrations',
      'Scheduler-ready scripts with environment-based configs'
    ],
    whoItsFor:
      'Teams spending hours on repetitive tasks, reconciliations, and manual report preparation.',
    timeline: '1-4 weeks for most workflows, with staged releases for critical processes.',
    deliverables: [
      'Production-ready Python codebase',
      'Runbook with setup and troubleshooting notes',
      'Monitoring and alerting configuration'
    ],
    tools: ['Python', 'Pandas', 'APScheduler', 'Airflow/Cron', 'PostgreSQL', 'APIs'],
    cta: 'Automate your highest-friction workflow'
  },
  {
    id: 'trading-bots',
    title: 'Customized Trading Bot Architecture & Building',
    summary:
      'Modular bot architecture from strategy logic and backtesting to execution and observability-first monitoring.',
    whatYouGet: [
      'Strategy module design with clear assumptions',
      'Backtesting framework and performance metrics',
      'Paper trading execution pipelines with risk controls',
      'Monitoring dashboards, alerting, and audit logs'
    ],
    whoItsFor:
      'Technical traders and teams who need disciplined, testable automation before any live deployment decisions.',
    timeline: '3-8 weeks based on strategy complexity, exchanges, and monitoring scope.',
    deliverables: [
      'Modular bot architecture and repository',
      'Backtesting report and risk controls documentation',
      'Paper trading environment and observability stack'
    ],
    tools: ['Python', 'Backtrader/vectorbt', 'CCXT', 'Docker', 'Redis', 'Prometheus/Grafana'],
    cta: 'Design your bot architecture safely'
  },
  {
    id: 'advanced-analytics',
    title: 'Advanced Data Analysis',
    summary:
      'From EDA and experimentation to forecasting and anomaly detection, translated into business action.',
    whatYouGet: [
      'Exploratory analysis that surfaces hidden drivers',
      'Forecasting pipelines with confidence intervals',
      'Anomaly detection logic and alert workflows',
      'Executive-ready storytelling and recommendations'
    ],
    whoItsFor:
      'Product, finance, and operations stakeholders that need more than dashboards—clear analytical decisions.',
    timeline: '2-6 weeks, including stakeholder sessions and decision-ready reporting.',
    deliverables: [
      'Analysis notebooks and reproducible pipelines',
      'Forecast/anomaly models with validation metrics',
      'Stakeholder presentation and implementation roadmap'
    ],
    tools: ['Python', 'scikit-learn', 'statsmodels', 'Jupyter', 'SQL', 'Power BI'],
    cta: 'Turn data into a strategic advantage'
  }
] as const;
