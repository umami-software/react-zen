import type { ReactNode } from 'react';
import {
  Slider as AriaSlider,
  type SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';
import { Box } from './Box';
import { Label } from './Label';
import { cn } from './lib/tailwind';
import { Row } from './Row';

export interface SliderProps extends AriaSliderProps {
  label?: ReactNode;
  showValue?: boolean;
}

function Fill({ percentage }: { percentage: number }) {
  return (
    <Box
      borderRadius="full"
      className="absolute inset-y-0 left-0 bg-track-fill"
      style={{ width: `${percentage}%` }}
    />
  );
}

function Thumb() {
  return (
    <SliderThumb
      className={cn(
        'w-5 h-5 rounded-full bg-surface-base border-2 border-edge-inverted shadow',
        'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2',
        'data-[dragging]:scale-110',
        'top-1/2 -translate-y-1/2',
      )}
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
      <SliderTrack className="relative w-full h-2 rounded-full bg-track">
        {({ state }) => {
          const isHorizontal = state.orientation === 'horizontal';
          const percentage =
            (isHorizontal ? state.getThumbPercent(0) : 1 - state.getThumbPercent(0)) * 100;
          return (
            <>
              <Fill percentage={percentage} />
              <Thumb />
            </>
          );
        }}
      </SliderTrack>
    </AriaSlider>
  );
}
