import { forwardRef, ReactNode, Ref } from 'react';
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './Slider.module.css';

interface SliderProps extends AriaSliderProps {
  label?: ReactNode;
  showValue?: boolean;
}

const Slider = forwardRef(
  ({ className, showValue = true, label, ...props }: SliderProps, ref: Ref<any>) => {
    return (
      <AriaSlider {...props} ref={ref} className={classNames(styles.slider, className)}>
        {label && <Label className={styles.label}>{label}</Label>}
        {showValue && <SliderOutput className={styles.output} />}
        <SliderTrack className={styles.track}>
          {({ state }) => {
            const isHorizontal = state.orientation === 'horizontal';
            return (
              <>
                <div
                  className={styles.fill}
                  style={{
                    [isHorizontal ? 'width' : 'height']:
                      (isHorizontal ? state.getThumbPercent(0) : 1 - state.getThumbPercent(0)) *
                        100 +
                      '%',
                  }}
                />
                <SliderThumb className={styles.thumb} />
              </>
            );
          }}
        </SliderTrack>
      </AriaSlider>
    );
  },
);

export { Slider };
export type { SliderProps };
