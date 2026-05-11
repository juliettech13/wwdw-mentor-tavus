export type TutorialSwatch = 'rose' | 'mustard' | 'mint' | 'periwinkle' | 'lilac';

export interface Tutorial {
  id: string;
  title: string;
  summary: string;
  platform: string | null;
  category: string;
  minutes: number;
  swatch: TutorialSwatch;
  glyph: string;
  href: string;
}

export const tutorials: Tutorial[] = [
  {
    id: 'diccionario',
    title: 'Diccionario para inversionistas',
    summary: 'Glosario completo de términos de inversión: del APR al yield. Tu referencia cuando algo no te suene.',
    platform: null,
    category: 'Referencia',
    minutes: 12,
    swatch: 'rose',
    glyph: 'A',
    href: 'https://juliettech.notion.site/wwdw-diccionario',
  },
  {
    id: 'ibkr-cuenta',
    title: 'Cómo abrir tu cuenta de inversiones',
    summary: 'Paso a paso para abrir tu cuenta en Interactive Brokers desde Latinoamérica.',
    platform: 'IBKR',
    category: 'Setup',
    minutes: 18,
    swatch: 'mustard',
    glyph: '◐',
    href: 'https://juliettech.notion.site/play-time-brokerage',
  },
  {
    id: 'crypto-panama',
    title: 'Cómo comprar crypto desde Panamá',
    summary: 'Tutorial práctico para comprar criptomonedas con Lulubit desde una cuenta panameña.',
    platform: 'Lulubit',
    category: 'Crypto',
    minutes: 10,
    swatch: 'mint',
    glyph: '✦',
    href: 'https://juliettech.notion.site/wwdw-crypto',
  },
  {
    id: 'ibkr-automatizar',
    title: 'Cómo automatizar inversiones recurrentes',
    summary: 'Configura aportes automáticos mensuales en IBKR para invertir sin pensarlo.',
    platform: 'IBKR',
    category: 'Automatización',
    minutes: 14,
    swatch: 'periwinkle',
    glyph: '↻',
    href: 'https://juliettech.notion.site/wwdw-recurrent-investments-ibkr',
  }
];
