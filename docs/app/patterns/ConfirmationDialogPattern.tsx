'use client';

import { AlertTriangle, Info, Trash2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Box, Button, Column, Icon, Row, Text } from '@/components';

interface ConfirmationDialogPatternProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'danger' | 'warning';
  icon?: ReactNode;
}

export function ConfirmationDialogPattern({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  icon,
}: ConfirmationDialogPatternProps) {
  if (!isOpen) return null;

  const variantStyles = {
    default: {
      iconColor: 'primary' as const,
      buttonVariant: 'primary' as const,
      DefaultIcon: Info,
    },
    danger: {
      iconColor: 'red' as const,
      buttonVariant: 'danger' as const,
      DefaultIcon: Trash2,
    },
    warning: {
      iconColor: 'yellow' as const,
      buttonVariant: 'primary' as const,
      DefaultIcon: AlertTriangle,
    },
  };

  const { iconColor, buttonVariant, DefaultIcon } = variantStyles[variant];

  return (
    <Box
      position="fixed"
      style={{ inset: 0, zIndex: 50 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="absolute" style={{ inset: 0 }} backgroundColor="overlay" onClick={onClose} />
      <Box
        position="relative"
        width="100%"
        style={{ maxWidth: '28rem' }}
        margin="4"
        padding="6"
        backgroundColor="surface-raised"
        borderRadius="lg"
        border
        borderColor="muted"
        className="shadow-xl"
      >
        <Column gap="4">
          <Row gap="4" alignItems="flex-start">
            <Box
              width="10"
              height="10"
              borderRadius="full"
              backgroundColor={`${iconColor}-100`}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink="0"
            >
              <Icon color={iconColor}>{icon || <DefaultIcon />}</Icon>
            </Box>
            <Column gap="2">
              <Text size="lg" weight="semibold">
                {title}
              </Text>
              {description && <Text color="muted">{description}</Text>}
            </Column>
          </Row>
          <Row gap="3" justifyContent="flex-end">
            <Button variant="outline" onPress={onClose}>
              {cancelLabel}
            </Button>
            <Button
              variant={buttonVariant}
              onPress={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmLabel}
            </Button>
          </Row>
        </Column>
      </Box>
    </Box>
  );
}

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
}

export function DeleteConfirmation({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}: DeleteConfirmationProps) {
  return (
    <ConfirmationDialogPattern
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title={`Delete ${itemName || 'item'}?`}
      description="This action cannot be undone. This will permanently delete the item and all associated data."
      confirmLabel="Delete"
      cancelLabel="Cancel"
      variant="danger"
    />
  );
}
