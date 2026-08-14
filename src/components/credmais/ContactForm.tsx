import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { cn } from '@/lib/utils';

const schema = z.object({
  nome: z.string().trim().min(2, 'Informe seu nome completo').max(100, 'Nome muito longo'),
  empresa: z.string().trim().min(2, 'Informe o nome da empresa').max(100, 'Nome muito longo'),
  telefone: z
    .string()
    .trim()
    .min(10, 'Informe um telefone válido com DDD')
    .max(20, 'Telefone inválido'),
  email: z.string().trim().email('Informe um e-mail válido').max(255, 'E-mail muito longo'),
  mensagem: z.string().trim().max(1000, 'Mensagem muito longa').optional(),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = { nome: '', empresa: '', telefone: '', email: '', mensagem: '' };

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm({
  className,
  title = 'Fale com um especialista',
  description = 'Preencha os dados e nossa equipe entrará em contato para apresentar a melhor solução.',
  submitLabel = 'Enviar mensagem',
}: {
  className?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
}) {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const setField = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: key === 'telefone' ? maskPhone(value) : value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(values);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error('Verifique os campos destacados.');
      return;
    }

    setLoading(true);
    const data = result.data;
    const texto = [
      'Olá, gostaria de falar com um especialista da Credmais.',
      `Nome: ${data.nome}`,
      `Empresa: ${data.empresa}`,
      `Telefone: ${data.telefone}`,
      `E-mail: ${data.email}`,
      data.mensagem ? `Mensagem: ${data.mensagem}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    toast.success('Solicitação enviada! Continue a conversa pelo WhatsApp.');
    setValues(initial);
    setLoading(false);
  };

  const fieldClass = (key: keyof FormValues) =>
    cn(
      'w-full bg-[#F6F8FA] border rounded-2xl px-5 sm:px-6 py-4 text-navy placeholder:text-navy/25',
      'outline-none transition-all focus:ring-2 focus:ring-gold/30',
      errors[key] ? 'border-red-400' : 'border-transparent',
    );

  return (
    <div
      className={cn(
        'bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-navy/5',
        className,
      )}
    >
      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-3">{title}</h3>
      <p className="text-navy/60 font-light mb-8 sm:mb-10">{description}</p>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="nome" className="text-xs uppercase tracking-widest font-bold text-navy/40 ml-1">Nome</label>
            <input id="nome" name="nome" autoComplete="name" value={values.nome} onChange={(e) => setField('nome', e.target.value)} className={fieldClass('nome')} placeholder="Seu nome completo" />
            {errors.nome && <p className="text-xs text-red-500 ml-1">{errors.nome}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="empresa" className="text-xs uppercase tracking-widest font-bold text-navy/40 ml-1">Empresa</label>
            <input id="empresa" name="empresa" autoComplete="organization" value={values.empresa} onChange={(e) => setField('empresa', e.target.value)} className={fieldClass('empresa')} placeholder="Nome da sua empresa" />
            {errors.empresa && <p className="text-xs text-red-500 ml-1">{errors.empresa}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="telefone" className="text-xs uppercase tracking-widest font-bold text-navy/40 ml-1">WhatsApp</label>
            <input id="telefone" name="telefone" inputMode="tel" autoComplete="tel" value={values.telefone} onChange={(e) => setField('telefone', e.target.value)} className={fieldClass('telefone')} placeholder="(11) 90000-0000" />
            {errors.telefone && <p className="text-xs text-red-500 ml-1">{errors.telefone}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-navy/40 ml-1">E-mail</label>
            <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => setField('email', e.target.value)} className={fieldClass('email')} placeholder="voce@empresa.com.br" />
            {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="mensagem" className="text-xs uppercase tracking-widest font-bold text-navy/40 ml-1">Mensagem (opcional)</label>
          <textarea id="mensagem" name="mensagem" rows={4} value={values.mensagem} onChange={(e) => setField('mensagem', e.target.value)} className={cn(fieldClass('mensagem'), 'resize-none')} placeholder="Conte brevemente sobre a sua necessidade" />
          {errors.mensagem && <p className="text-xs text-red-500 ml-1">{errors.mensagem}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group w-full bg-gold text-white font-heading font-semibold tracking-wide py-5 rounded-2xl transition-all shadow-lg shadow-gold/25 hover:-translate-y-1 hover:brightness-110 hover:shadow-2xl active:scale-95 disabled:opacity-60 inline-flex items-center justify-center gap-3"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="transition-transform group-hover:translate-x-1" />}
          {submitLabel}
        </button>

        <p className="text-xs text-navy/40 text-center font-light">
          Ao enviar, você será direcionado ao WhatsApp oficial da Credmais.
        </p>
      </form>
    </div>
  );
}
