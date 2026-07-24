import useEmblaCarousel from 'embla-carousel-react';
import { type HTMLAttributes, useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@/components/icons';
import { Button } from './Button';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';

type EmblaOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>;

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  opts?: EmblaOptions;
  onIndexChange?: (index: number) => void;
}

export function Carousel({
  orientation = 'horizontal',
  loop,
  showArrows = true,
  showDots,
  opts,
  onIndexChange,
  className,
  children,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: orientation === 'vertical' ? 'y' : 'x',
    loop,
    ...opts,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    onIndexChange?.(emblaApi.selectedScrollSnap());
  }, [emblaApi, onIndexChange]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const isVertical = orientation === 'vertical';

  return (
    <div
      {...props}
      role="region"
      aria-roledescription="carousel"
      className={cn('relative', className)}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className={cn('flex', isVertical && 'flex-col max-h-full')}>{children}</div>
      </div>
      {showArrows && (
        <>
          <Button
            variant="outline"
            aria-label="Previous slide"
            isDisabled={!canScrollPrev}
            className={cn(
              'absolute rounded-full size-9 p-0',
              isVertical
                ? 'left-1/2 -translate-x-1/2 top-2 rotate-90'
                : 'top-1/2 -translate-y-1/2 left-2',
            )}
            onPress={() => emblaApi?.scrollPrev()}
          >
            <Icon size="sm">
              <ChevronLeft />
            </Icon>
          </Button>
          <Button
            variant="outline"
            aria-label="Next slide"
            isDisabled={!canScrollNext}
            className={cn(
              'absolute rounded-full size-9 p-0',
              isVertical
                ? 'left-1/2 -translate-x-1/2 bottom-2 rotate-90'
                : 'top-1/2 -translate-y-1/2 right-2',
            )}
            onPress={() => emblaApi?.scrollNext()}
          >
            <Icon size="sm">
              <ChevronRight />
            </Icon>
          </Button>
        </>
      )}
      {showDots && scrollSnaps.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {scrollSnaps.map((snap, index) => (
            <button
              key={snap}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'size-2 rounded-full cursor-pointer transition-colors',
                index === selectedIndex
                  ? 'bg-primary'
                  : 'bg-interactive hover:bg-interactive-hover',
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function CarouselItem({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
    >
      {children}
    </div>
  );
}
