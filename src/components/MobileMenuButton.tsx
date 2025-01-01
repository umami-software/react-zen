import { DialogTrigger } from 'react-aria-components';
import { Button, ButtonProps } from './Button';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { Modal } from './Modal';
import { Dialog } from './Dialog';
import { Grid } from './Grid';
import { Row } from './Row';
import { Box } from './Box';
import { Text } from './Text';
import styles from './MobileMenuButton.module.css';

export interface MobileMenuButtonProps extends ButtonProps {
  title?: string;
}

export function MobileMenuButton({ title, children, ...props }: MobileMenuButtonProps) {
  return (
    <DialogTrigger>
      <Button variant="quiet">
        <Icon>
          <Icons.Menu />
        </Icon>
      </Button>
      <Modal className={styles.modal}>
        <Dialog className={styles.dialog}>
          {({ close }) => {
            return (
              <Grid rows="auto 1fr" height="100%" width="100%">
                <Row justifyContent="space-between" alignItems="center">
                  <Text size="3" weight="bold">
                    {title}
                  </Text>
                  <Button onPress={() => close()} variant="quiet">
                    <Icon>
                      <Icons.Close />
                    </Icon>
                  </Button>
                </Row>
                <Box className={styles.content}>{children}</Box>
              </Grid>
            );
          }}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
