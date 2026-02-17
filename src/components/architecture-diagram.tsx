import type { CaseStudy } from '@/content/caseStudies';

export function ArchitectureDiagram({ architecture }: { architecture: CaseStudy['architecture'] }) {
  return (
    <svg viewBox="0 0 900 260" className="w-full rounded-2xl border border-border bg-card p-4">
      {architecture.map((node, index) => {
        const x = 40 + index * 285;
        return (
          <g key={node.title}>
            <rect x={x} y="40" width="240" height="170" rx="18" className="fill-transparent stroke-[2] stroke-current text-accent/60" />
            <text x={x + 20} y="75" className="fill-foreground text-[15px] font-semibold">
              {node.title}
            </text>
            {node.details.map((detail, detailIndex) => (
              <text key={detail} x={x + 20} y={105 + detailIndex * 24} className="fill-muted-foreground text-[13px]">
                • {detail}
              </text>
            ))}
            {index < architecture.length - 1 ? (
              <path d={`M ${x + 240} 125 L ${x + 280} 125`} className="stroke-[2] text-accent stroke-current" markerEnd="url(#arrow)" />
            ) : null}
          </g>
        );
      })}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" className="fill-accent" />
        </marker>
      </defs>
    </svg>
  );
}
