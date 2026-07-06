'use client';

import { useEffect, useRef } from 'react';

interface TestimonialItem {
  quote: string;
  name: string;
  city: string;
}

interface TestimonialsCarouselProps {
  items: ReadonlyArray<TestimonialItem>;
}

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isCorrectingRef = useRef(false);

  const loopedItems = [...items, ...items, ...items];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollLeft = container.scrollWidth / 3;

    function handleScroll() {
      if (isCorrectingRef.current || !container) return;

      const setWidth = container.scrollWidth / 3;

      if (container.scrollLeft >= setWidth * 2) {
        isCorrectingRef.current = true;
        container.scrollLeft -= setWidth;
        isCorrectingRef.current = false;
      } else if (container.scrollLeft <= 0) {
        isCorrectingRef.current = true;
        container.scrollLeft += setWidth;
        isCorrectingRef.current = false;
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScrollNext() {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({ left: container.clientWidth * 0.9, behavior: 'smooth' });
  }

  function handleScrollPrev() {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({ left: -container.clientWidth * 0.9, behavior: 'smooth' });
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedItems.map((item, i) => (
          <figure
            key={i}
            className="flex w-80 shrink-0 snap-center flex-col gap-5 rounded-[1.75rem] border border-(--forest) bg-(--card-strong) p-7 sm:w-96"
          >
            <blockquote className="flex-1 text-base italic leading-7 text-(--ink)">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="font-semibold text-(--forest)">{item.name}</p>
              {item.city && <p className="text-sm text-(--ink-soft)">{item.city}</p>}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={handleScrollPrev}
        aria-label="Ver testimonios anteriores"
        className="absolute -left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-(--forest) bg-(--mustard) text-lg font-bold text-(--forest) shadow-[0_10px_25px_rgba(23,53,45,0.18)] transition hover:bg-(--mustard-deep) sm:flex"
      >
        ←
      </button>

      <button
        type="button"
        onClick={handleScrollNext}
        aria-label="Ver más testimonios"
        className="absolute -right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-(--forest) bg-(--mustard) text-lg font-bold text-(--forest) shadow-[0_10px_25px_rgba(23,53,45,0.18)] transition hover:bg-(--mustard-deep) sm:flex"
      >
        →
      </button>
    </div>
  );
}
