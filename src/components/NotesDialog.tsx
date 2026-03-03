import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLeadNotes } from '@/hooks/useLeads';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { MessageSquare } from 'lucide-react';

interface Props {
  leadId: string | null;
  leadName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotesDialog({ leadId, leadName, open, onOpenChange }: Props) {
  const { notes, isLoading, addNote } = useLeadNotes(leadId);
  const [content, setContent] = useState('');

  const handleAdd = async () => {
    if (!content.trim() || !leadId) return;
    try {
      await addNote.mutateAsync({ leadId, content: content.trim() });
      setContent('');
      toast.success('Note added');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Notes — {leadName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Textarea placeholder="Add a note..." value={content} onChange={e => setContent(e.target.value)} maxLength={1000} />
          <Button onClick={handleAdd} disabled={addNote.isPending || !content.trim()} size="sm">
            Add Note
          </Button>
        </div>
        <div className="mt-4 max-h-60 overflow-y-auto space-y-3">
          {isLoading && <p className="text-muted-foreground text-sm">Loading...</p>}
          {notes.length === 0 && !isLoading && (
            <div className="text-center py-6 text-muted-foreground">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No notes yet</p>
            </div>
          )}
          {notes.map(note => (
            <div key={note.id} className="rounded-lg border p-3">
              <p className="text-sm">{note.content}</p>
              <p className="text-xs text-muted-foreground mt-1">{format(new Date(note.created_at), 'MMM d, yyyy h:mm a')}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
