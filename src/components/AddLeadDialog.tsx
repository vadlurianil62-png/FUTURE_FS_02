import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { useLeads, Lead } from '@/hooks/useLeads';
import { toast } from 'sonner';

interface Props {
  editLead?: Lead | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AddLeadDialog({ editLead, open, onOpenChange }: Props) {
  const { createLead, updateLead } = useLeads();
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;

  const [name, setName] = useState(editLead?.name ?? '');
  const [email, setEmail] = useState(editLead?.email ?? '');
  const [phone, setPhone] = useState(editLead?.phone ?? '');
  const [source, setSource] = useState<Lead['source']>(editLead?.source ?? 'website');
  const [status, setStatus] = useState<Lead['status']>(editLead?.status ?? 'new');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editLead) {
        await updateLead.mutateAsync({ id: editLead.id, name, email, phone: phone || null, source, status });
        toast.success('Lead updated');
      } else {
        await createLead.mutateAsync({ name, email, phone: phone || null, source, status });
        toast.success('Lead created');
      }
      setIsOpen(false);
      setName(''); setEmail(''); setPhone(''); setSource('website'); setStatus('new');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const trigger = !editLead ? (
    <DialogTrigger asChild>
      <Button><Plus className="h-4 w-4 mr-2" />Add Lead</Button>
    </DialogTrigger>
  ) : null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{editLead ? 'Edit Lead' : 'Add New Lead'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><Label>Name *</Label><Input value={name} onChange={e => setName(e.target.value)} required maxLength={100} /></div>
          <div><Label>Email *</Label><Input type="email" value={email} onChange={e => setEmail(e.target.value)} required maxLength={255} /></div>
          <div><Label>Phone</Label><Input value={phone} onChange={e => setPhone(e.target.value)} maxLength={20} /></div>
          <div><Label>Source</Label>
            <Select value={source} onValueChange={(v) => setSource(v as Lead['source'])}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div><Label>Status</Label>
            <Select value={status} onValueChange={(v) => setStatus(v as Lead['status'])}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full" disabled={createLead.isPending || updateLead.isPending}>
            {editLead ? 'Update Lead' : 'Create Lead'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
