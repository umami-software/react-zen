import { ReactNode } from 'react';
import { Slider, SliderProps, SliderOutput, SliderThumb, SliderTrack } from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './Slider.module.css';

interface _SliderProps extends SliderProps {
  label?: ReactNode;
  showValue?: boolean;
}

function _Slider({ className, showValue = true, label, ...props }: _SliderProps) {
  return (
    <Slider {...props} className={classNames(styles.slider, className)}>
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
                    (isHorizontal ? state.getThumbPercent(0) : 1 - state.getThumbPercent(0)) * 100 +
                    '%',
                }}
              />
              <SliderThumb className={styles.thumb} />
            </>
          );
        }}
      </SliderTrack>
    </Slider>
  );
}

export { _Slider as Slider };
export type { _SliderProps as SliderProps };
