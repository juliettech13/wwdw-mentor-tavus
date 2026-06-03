'use client';

import { useEffect, useRef } from 'react';

const BEEHIIV_FORM_ID = 'f3142347-e823-4969-a0ba-24f85fe82009';
const BEEHIIV_LOADER_SRC = 'https://subscribe-forms.beehiiv.com/v3/loader.js';

interface BeehiivFormProps {
  className?: string;
}

export function BeehiivForm({ className }: BeehiivFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.src = BEEHIIV_LOADER_SRC;
    script.setAttribute('data-beehiiv-form', BEEHIIV_FORM_ID);
    script.async = true;
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className={className} />;
}
