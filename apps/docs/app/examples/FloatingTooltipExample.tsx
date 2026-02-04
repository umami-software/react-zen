import { useState } from 'react';
import { Text, TooltipBubble } from '@/components';
import { Box } from '@/components/Box';
import { FloatingTooltip } from '@/components/FloatingTooltip';

export function FloatingTooltipExample() {
  const [show, setShow] = useState(false);

  const handleEnter = () => setShow(true);
  const handleLeave = () => setShow(false);

  return (
    <>
      <Box
        backgroundColor={true}
        width="400px"
        height="300px"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
      {show && (
        <FloatingTooltip>
          <Text>Hello</Text>
        </FloatingTooltip>
      )}
    </>
  );
}
