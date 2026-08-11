import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, Mail, MessageCircle } from "lucide-react";

import { CtaLink, OptimizedImage, Reveal, Section, SectionHeading } from "@/components/credmais/primitives";
import { PageHero } from "@/components/credmais/PageHero";
import { CTABand, FAQAccordion, ProcessTimeline, SolutionCard } from "@/components/credmais/blocks";
import { SiteHeader } from "@/components/credmais/SiteHeader";
import { SiteFooter } from "@/components/credmais/SiteFooter";
import {
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_WHATSAPP_URL,
  IMAGES,
  aboutValues,
  differentials,
  homeFaq,
  processSteps,
  solutions,
  whatsappLink,
  type Solution,
} from "@/lib/site-data";

export { SiteHeader, SiteFooter };
export { solutions };
export type { Solution };

/* ============================ WhatsApp flutuante ============================ */

export function WhatsAppFloat({ message }: { message?: string }) {
  return (
    <a
      href={whatsappLink(message ?? "Olá, Credmais! Gostaria de falar com um especialista.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Credmais no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-14 min-w-14 items-center gap-3 rounded-full bg-[#C7A96B] px-4 text-[#071A33] shadow-[0_18px_40px_-18px_rgba(7,26,51,0.7)] transition-transform hover:scale-105 md:px-6"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="hidden text-[12px] font-semibold uppercase tracking-[0.14em] md:inline">
        Falar agora
      </span>
    </a>
  );
}

/* ================================= Home ================================= */

export function HomePage() {
  return (
    <>
      <PageHero
        size="tall"
        image={IMAGES.homeHero}
        hideContent
      />

      <Section id="solucoes" tone="ice">
        <SectionHeading
          eyebrow="Nossas soluções"
          title="Estruturas financeiras para cada momento da sua empresa."
          description="Cada solução é montada a partir da sua operação real: ciclo de vendas, prazos, risco e necessidade de caixa."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Por que a Credmais"
          title="Uma parceira financeira que explica antes de propor."
          description="Trabalhamos com análise humana, condições transparentes e acompanhamento contínuo da operação."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="h-full rounded-[32px] border border-[#E2E8F0]/60 bg-[#F6F8FA] p-8 transition-all duration-400 hover:bg-white hover:shadow-premium hover:border-[#C7A96B]/30">
                <h3 className="text-lg font-semibold text-[#071A33]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#52606D]">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ice">
        <SectionHeading
          eyebrow="Como funciona"
          title="Um processo claro, do diagnóstico ao acompanhamento."
        />
        <div className="mt-14">
          <ProcessTimeline steps={processSteps} />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Setores atendidos"
          title="Experiência com operações de perfis muito diferentes."
          description="Indústria, varejo, serviços, agronegócio e distribuição: adaptamos a estrutura ao ciclo de cada setor."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.segments.map((segment, index) => (
            <Reveal key={segment.label} delay={index * 70}>
              <figure className="group relative overflow-hidden rounded-[24px]">
                <OptimizedImage
                  src={segment.image}
                  alt={`Atendimento Credmais para ${segment.label}`}
                  ratio="aspect-[4/3]"
                  wrapperClassName="rounded-[24px]"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#071A33]/90 to-transparent p-6 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                  {segment.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ice">
        <SectionHeading eyebrow="Dúvidas frequentes" title="O que as empresas costumam perguntar." />
        <div className="mt-12">
          <FAQAccordion items={homeFaq} />
        </div>
      </Section>

      <CTABand
        title="Vamos avaliar a sua operação?"
        description="Conte a sua necessidade e retornamos com o caminho financeiro mais adequado para o momento da empresa."
        primary={{ href: whatsappLink("Olá, Credmais! Quero avaliar a minha operação."), label: "Falar no WhatsApp", external: true }}
        secondary={{ href: "/contato", label: "Enviar mensagem" }}
      />

      <ContactSection />
    </>
  );
}

/* ============================== Solução ============================== */

export function SolutionPage({ solution }: { solution: Solution }) {
  const Icon = solution.icon;

  return (
    <>
      <PageHero
        image={solution.heroImage}
        eyebrow={solution.title}
        title={solution.headline}
        description={solution.summary}
        primary={{
          href: whatsappLink(`Olá, Credmais! Quero saber mais sobre ${solution.title}.`),
          label: "Falar com especialista",
          external: true,
        }}
        secondary={{ href: "#contato", label: "Solicitar proposta" }}
      />

      <Section tone="ice">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Sobre a solução" title="Como esta solução funciona na prática." description={solution.detail} />
            <Reveal delay={100} className="mt-8">
              <p className="rounded-[24px] border border-[#E2E8F0] bg-white p-7 text-sm leading-relaxed text-[#52606D]">
                <strong className="mb-2 block text-[#071A33]">Para quem é</strong>
                {solution.audience}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ul className="grid gap-4">
              {solution.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4 rounded-[20px] border border-[#E2E8F0] bg-white p-6">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#F6F8FA] text-[#C7A96B]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#52606D]">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Passo a passo" title={`Como contratar ${solution.shortTitle.toLowerCase()}.`} />
        <div className="mt-14">
          <ProcessTimeline steps={solution.steps} />
        </div>
      </Section>

      <Section tone="ice">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <OptimizedImage
              src={solution.bannerImage}
              alt={`${solution.title} — operação Credmais`}
              ratio="aspect-[4/3]"
              wrapperClassName="rounded-[28px]"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Diferenciais" title="O que muda quando a Credmais estrutura a operação." />
            <div className="mt-8 grid gap-5">
              {solution.differentials.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="rounded-[20px] border border-[#E2E8F0] bg-white p-6">
                    <h3 className="text-base font-semibold text-[#071A33]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#52606D]">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Dúvidas frequentes" title={`Perguntas sobre ${solution.shortTitle.toLowerCase()}.`} />
        <div className="mt-12">
          <FAQAccordion items={solution.faq} />
        </div>
      </Section>

      <CTABand
        title={`Quer estruturar ${solution.shortTitle.toLowerCase()} na sua empresa?`}
        description="Nossa equipe analisa o cenário e apresenta as condições completas antes de qualquer decisão."
        primary={{
          href: whatsappLink(`Olá, Credmais! Quero estruturar ${solution.title}.`),
          label: "Falar no WhatsApp",
          external: true,
        }}
      />

      <ContactSection compact />
    </>
  );
}

/* =============================== Sobre =============================== */

export function AboutPage() {
  return (
    <>
      <PageHero
        image={IMAGES.aboutHero}
        eyebrow="Sobre a Credmais"
        title="Crédito estruturado com leitura humana."
        description="Uma securitizadora criada para simplificar o acesso a capital, proteger operações e acompanhar empresas em cada fase do crescimento."
        primary={{ href: "/contato", label: "Falar com a equipe" }}
      />

      <Section tone="ice">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Quem somos"
              title="Mais do que uma securitizadora, uma parceira de crescimento."
              description="Unimos análise técnica e atendimento consultivo para desenhar estruturas financeiras sustentáveis. Operação, cobrança e capital deixam de ser blocos separados e passam a trabalhar juntos pelo seu resultado."
            />
            <Reveal delay={120} className="mt-8 grid gap-5 sm:grid-cols-2">
              {aboutValues.map((value) => (
                <article key={value.title} className="rounded-[20px] border border-[#E2E8F0] bg-white p-6">
                  <h3 className="text-base font-semibold text-[#071A33]">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52606D]">{value.text}</p>
                </article>
              ))}
            </Reveal>
          </div>
          <Reveal delay={100}>
            <OptimizedImage
              src={IMAGES.aboutTeam}
              alt="Equipe Credmais em atendimento"
              ratio="aspect-[4/5]"
              wrapperClassName="rounded-[28px]"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Como trabalhamos" title="Um método consistente em todas as operações." />
        <div className="mt-14">
          <ProcessTimeline steps={processSteps} />
        </div>
      </Section>

      <CTABand
        title="Vamos conversar sobre a sua operação."
        description="Traga o cenário atual da empresa e apresentamos as alternativas possíveis com total transparência."
        primary={{ href: whatsappLink("Olá, Credmais! Quero conhecer melhor o trabalho de vocês."), label: "Falar no WhatsApp", external: true }}
        secondary={{ href: "/contato", label: "Enviar mensagem" }}
      />

      <ContactSection compact />
    </>
  );
}

/* ============================== Contato ============================== */

export function ContactPage() {
  return (
    <>
      <PageHero
        image={IMAGES.contactHero}
        eyebrow="Fale com a Credmais"
        title="Conte o que a sua empresa precisa resolver."
        description="Avaliamos o cenário e apresentamos a melhor estrutura para o seu fluxo financeiro, sem compromisso."
        primary={{ href: whatsappLink("Olá, Credmais! Vim pelo site e quero falar com um especialista."), label: "Chamar no WhatsApp", external: true }}
        secondary={{ href: "#contato", label: "Preencher formulário" }}
      />
      <ContactSection />
    </>
  );
}

/* =========================== Páginas legais =========================== */

function LegalPage({ title, eyebrow, intro, children }: { title: string; eyebrow: string; intro: string; children: ReactNode }) {
  return (
    <>
      <PageHero image={IMAGES.legalHero} eyebrow={eyebrow} title={title} description={intro} />
      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-[#52606D] md:text-base">
          <p className="rounded-[20px] border border-[#E2E8F0] bg-[#F6F8FA] p-5 text-sm">
            Documento em versão preliminar. O conteúdo jurídico deve ser validado pela assessoria
            jurídica da Credmais antes da publicação definitiva.
          </p>
          {children}
        </div>
      </Section>
    </>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Política de Privacidade"
      intro="Como a Credmais coleta, utiliza e protege os dados pessoais informados no site e nos canais de atendimento."
    >
      <LegalBlock title="1. Dados coletados">
        Coletamos os dados informados voluntariamente nos formulários do site — nome, e-mail
        corporativo, telefone, empresa e a descrição da necessidade — além de dados de navegação
        necessários ao funcionamento das páginas.
      </LegalBlock>
      <LegalBlock title="2. Finalidade do tratamento">
        Os dados são utilizados exclusivamente para responder a solicitações, avaliar a
        viabilidade de operações financeiras e manter o relacionamento comercial.
      </LegalBlock>
      <LegalBlock title="3. Compartilhamento">
        Não comercializamos dados pessoais. O compartilhamento ocorre apenas com parceiros
        operacionais necessários à execução do serviço e mediante obrigação legal ou regulatória.
      </LegalBlock>
      <LegalBlock title="4. Direitos do titular">
        Nos termos da LGPD (Lei 13.709/2018), o titular pode solicitar confirmação, acesso,
        correção, portabilidade ou eliminação dos seus dados pelo e-mail {CONTACT_EMAIL}.
      </LegalBlock>
      <LegalBlock title="5. Segurança">
        Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não
        autorizados, perda ou alteração indevida.
      </LegalBlock>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Termos"
      title="Termos de Uso"
      intro="Condições de uso do site institucional da Credmais Securitizadora e dos seus canais de atendimento."
    >
      <LegalBlock title="1. Objeto">
        Este site tem caráter institucional e informativo sobre as soluções financeiras oferecidas
        pela Credmais Securitizadora.
      </LegalBlock>
      <LegalBlock title="2. Ausência de oferta vinculante">
        As informações publicadas não constituem proposta ou promessa de contratação. Toda operação
        depende de análise prévia, documentação e aprovação das condições aplicáveis.
      </LegalBlock>
      <LegalBlock title="3. Uso adequado">
        O usuário compromete-se a fornecer informações verdadeiras e a não utilizar o site para
        finalidades ilícitas ou que prejudiquem terceiros.
      </LegalBlock>
      <LegalBlock title="4. Propriedade intelectual">
        Marcas, textos, imagens e demais elementos do site pertencem à Credmais e não podem ser
        reproduzidos sem autorização prévia.
      </LegalBlock>
      <LegalBlock title="5. Contato">
        Dúvidas sobre estes termos podem ser encaminhadas para {CONTACT_EMAIL}.
      </LegalBlock>
    </LegalPage>
  );
}

function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[#071A33] md:text-xl">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}

/* ========================== Seção de contato ========================== */

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contato" className={`bg-[#071A33] ${compact ? "py-16 md:py-20" : "py-20 md:py-28"}`}>
      <div className="container-page grid items-start gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading
            invert
            eyebrow="Contato"
            title="Fale com um especialista da Credmais."
            description="Responda em poucos campos e retornamos com o caminho financeiro mais adequado para a sua empresa."
          />
          <ul className="mt-10 grid gap-5">
            <ContactLine icon={MessageCircle} label="WhatsApp" value={CONTACT_WHATSAPP_DISPLAY} href={CONTACT_WHATSAPP_URL} external />
            <ContactLine icon={Mail} label="E-mail corporativo" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
            <ContactLine icon={Clock} label="Atendimento" value={CONTACT_HOURS} />
          </ul>
          <div className="mt-10">
            <CtaLink
              href={whatsappLink("Olá, Credmais! Prefiro falar direto no WhatsApp.")}
              external
              variant="ghost-light"
            >
              Prefiro falar no WhatsApp
            </CtaLink>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white p-6 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-[#C7A96B]">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">{label}</span>
        <span className="mt-1 block break-words text-base text-white">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          {body}
        </a>
      ) : (
        <div className="flex items-center gap-4">{body}</div>
      )}
    </li>
  );
}

/* ============================= Formulário ============================= */

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo.").max(100, "Nome muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(255, "E-mail muito longo."),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone com DDD.")
    .max(20, "Telefone muito longo.")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números, espaços, parênteses e traços."),
  company: z.string().trim().min(2, "Informe o nome da empresa.").max(120, "Nome muito longo."),
  interest: z.string().trim().min(1, "Escolha uma solução."),
  message: z.string().trim().min(10, "Conte um pouco mais sobre a necessidade.").max(1000, "Mensagem muito longa."),
});

type ContactValues = z.infer<typeof contactSchema>;
type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const emptyContact: ContactValues = { name: "", email: "", phone: "", company: "", interest: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sending, setSending] = useState(false);

  const update = (field: keyof ContactValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: ContactErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Revise os campos destacados antes de enviar.");
      return;
    }

    const data = result.data;
    setSending(true);
    const text = [
      "Olá, Credmais! Vim pelo site.",
      `Nome: ${data.name}`,
      `Empresa: ${data.company}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.phone}`,
      `Solução de interesse: ${data.interest}`,
      `Necessidade: ${data.message}`,
    ].join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    toast.success("Tudo certo! Abrimos o WhatsApp com a sua mensagem pronta.");
    setValues(emptyContact);
    setSending(false);
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="contact-name" label="Nome completo" placeholder="Como podemos te chamar?" value={values.name} onChange={update("name")} error={errors.name} autoComplete="name" />
        <Field id="contact-email" label="E-mail corporativo" type="email" placeholder="voce@suaempresa.com.br" value={values.email} onChange={update("email")} error={errors.email} autoComplete="email" />
        <Field id="contact-phone" label="WhatsApp / Telefone" type="tel" placeholder="(11) 90000-0000" value={values.phone} onChange={update("phone")} error={errors.phone} autoComplete="tel" />
        <Field id="contact-company" label="Empresa" placeholder="Razão social ou nome fantasia" value={values.company} onChange={update("company")} error={errors.company} autoComplete="organization" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-interest" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#52606D]">
          Solução de interesse
        </label>
        <select
          id="contact-interest"
          value={values.interest}
          onChange={(event) => update("interest")(event.target.value)}
          aria-invalid={Boolean(errors.interest)}
          className={`min-h-12 rounded-xl border bg-[#F6F8FA] px-4 text-[#071A33] transition-colors focus:outline-none ${
            errors.interest ? "border-red-500" : "border-[#E2E8F0] focus:border-[#C7A96B]"
          }`}
        >
          <option value="">Selecione uma solução</option>
          {solutions.map((solution) => (
            <option key={solution.slug} value={solution.title}>
              {solution.title}
            </option>
          ))}
          <option value="Ainda não sei">Ainda não sei / quero orientação</option>
        </select>
        {errors.interest ? <span className="text-xs text-red-600">{errors.interest}</span> : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#52606D]">
          Sua necessidade
        </label>
        <textarea
          id="contact-message"
          value={values.message}
          maxLength={1000}
          onChange={(event) => update("message")(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          placeholder="Conte o cenário atual: valores, prazos e o que precisa resolver."
          className={`min-h-32 rounded-xl border bg-[#F6F8FA] p-4 text-[#071A33] transition-colors focus:outline-none ${
            errors.message ? "border-red-500" : "border-[#E2E8F0] focus:border-[#C7A96B]"
          }`}
        />
        <div className="flex items-center justify-between gap-4">
          {errors.message ? (
            <span className="text-xs text-red-600">{errors.message}</span>
          ) : (
            <span className="text-xs text-[#52606D]/70">Respondemos em até 1 dia útil.</span>
          )}
          <span className="text-xs text-[#52606D]/50">{values.message.length}/1000</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#071A33] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C7A96B] hover:text-[#071A33] disabled:opacity-50"
      >
        {sending ? "Enviando..." : "Enviar e falar no WhatsApp"}
      </button>

      <p className="text-center text-xs text-[#52606D]/60">
        Seus dados são usados apenas para este atendimento, conforme a nossa política de privacidade.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#52606D]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
        className={`min-h-12 rounded-xl border bg-[#F6F8FA] px-4 text-[#071A33] transition-colors focus:outline-none ${
          error ? "border-red-500" : "border-[#E2E8F0] focus:border-[#C7A96B]"
        }`}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </div>
  );
}
