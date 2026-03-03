import { Badge } from '@/components/ui/badge';

const statusStyles: Record<string, string> = {
  new: 'bg-status-new/10 text-status-new border-status-new/20',
  contacted: 'bg-status-contacted/10 text-status-contacted border-status-contacted/20',
  converted: 'bg-status-converted/10 text-status-converted border-status-converted/20',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="outline" className={statusStyles[status] ?? ''}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}
