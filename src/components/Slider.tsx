import type { ReactNode } from 'react';
import {
  Slider as AriaSlider,
  type SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';
import { Label } from './Label';
import { cn } from './lib/tailwind';
import { Row } from './Row';

export interface SliderProps extends AriaSliderProps {
  label?: ReactNode;
  showValue?: boolean;
}

function Fill({ percentage }: { percentage: number }) {
  // Fill to thumb center: at 0% = 10px, at 100% = calc(100% - 10px)
  const width = `calc(10px + ${percentage}% - ${percentage * 0.2}px)`;
  return <div className="absolute inset-y-0 left-0 rounded-full bg-track-fill" style={{ width }} />;
}

function Thumb({ percentage }: { percentage: number }) {
  // Position by left edge: at 0% = 0, at 100% = calc(100% - 20px)
  const left = `calc(${percentage}% - ${percentage * 0.2}px)`;
  return (
    <SliderThumb
      className={cn(
        'absolute w-5 h-5 rounded-full bg-surface-base border-2 border-edge-inverted shadow',
        'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2',
      )}
      style={{ top: '50%', left, transform: 'translateY(-50%)' }}
    />
  );
}

export function Slider({ className, showValue = true, label, ...props }: SliderProps) {
  return (
    <AriaSlider {...props} className={cn('flex flex-col gap-2 w-full', className)}>
      <Row justifyContent="space-between" alignItems="center">
        {label && <Label>{label}</Label>}
        {showValue && <SliderOutput className="text-base tabular-nums" />}
      </Row>
      <SliderTrack className="relative h-5 w-full">
        {({ state }) => {
          const percentage = state.getThumbPercent(0) * 100;
          return (
            <>
              {/* Visual track - full width */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 rounded-full bg-track overflow-hidden">
                <Fill percentage={percentage} />
              </div>
              <Thumb percentage={percentage} />
            </>
          );
        }}
      </SliderTrack>
    </AriaSlider>
  );
}
