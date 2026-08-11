import { ReactNode } from 'react';

export interface Solution {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: '1',
    slug: 'antecipacao',
    title: 'Antecipação de Recebíveis',
    description: 'Transforme suas vendas a prazo em capital imediato para o seu negócio.',
    icon: 'trending-up',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2560&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'boleto-garantido',
    title: 'Boleto Garantido',
    description: 'Segurança total no recebimento de suas cobranças, sem riscos de inadimplência.',
    icon: 'shield-check',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2560&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'gestao-contas',
    title: 'Gestão de Contas',
    description: 'Terceirize sua cobrança e foque no que realmente importa: crescer.',
    icon: 'user-check',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=2560&auto=format&fit=crop',
  }
];

export const SITE_CONFIG = {
  name: 'Credmais',
  logo: 'https://storage.googleapis.com/gpt-engineer-file-uploads/0XILPRqqUbSOh99ow53X5OBDOCC3/assets/credmais-logo-navy.png',
  email: 'contato@sejacredmais.com',
  whatsapp: '5500000000000',
  heroHome: '/mnt/user-uploads/ChatGPT_Image_11_08_2026_14_57_55_12.png', // This will be handled by the asset import in the component
};
