import { useLeads } from '@/hooks/useLeads';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, Phone } from 'lucide-react';

export default function Dashboard() {
  const { leads } = useLeads();

  const totalLeads = leads.length;
  const convertedLeads = leads.filter(l => l.status === 'converted').length;
  const contactedLeads = leads.filter(l => l.status === 'contacted').length;

  const stats = [
    { title: 'Total Leads', value: totalLeads, icon: Users, color: 'text-primary' },
    { title: 'Contacted', value: contactedLeads, icon: Phone, color: 'text-status-contacted' },
    { title: 'Converted', value: convertedLeads, icon: UserCheck, color: 'text-status-converted' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
