'use client';

import { AlertCircle, ArrowLeft, Home, RefreshCw } from 'lucide-react';
import { Box, type BoxProps, Button, Column, Icon, Row, Text } from '@/components';

interface ErrorPageProps extends BoxProps {
  statusCode?: number;
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  showRetryButton?: boolean;
  onRetry?: () => void;
  onBack?: () => void;
  onHome?: () => void;
}

export function ErrorPage({
  statusCode,
  title,
  description,
  showHomeButton = true,
  showBackButton = true,
  showRetryButton = false,
  onRetry,
  onBack,
  onHome,
  ...props
}: ErrorPageProps) {
  const defaultMessages: Record<number, { title: string; description: string }> = {
    400: {
      title: 'Bad Request',
      description: 'The server could not understand your request. Please check and try again.',
    },
    401: {
      title: 'Unauthorized',
      description: 'You need to sign in to access this page.',
    },
    403: {
      title: 'Forbidden',
      description: "You don't have permission to access this page.",
    },
    404: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
    },
    500: {
      title: 'Server Error',
      description: 'Something went wrong on our end. Please try again later.',
    },
    503: {
      title: 'Service Unavailable',
      description: "We're temporarily offline for maintenance. Please try again later.",
    },
  };

  const defaults = statusCode ? defaultMessages[statusCode] : undefined;
  const displayTitle = title || defaults?.title || 'Something went wrong';
  const displayDescription =
    description || defaults?.description || 'An unexpected error occurred.';

  return (
    <Column
      alignItems="center"
      justifyContent="center"
      padding="8"
      gap="6"
      style={{ minHeight: '50vh' }}
      {...props}
    >
      <Column alignItems="center" gap="4">
        {statusCode && (
          <Text size="6xl" weight="bold" color="muted">
            {statusCode}
          </Text>
        )}
        {!statusCode && (
          <Row
            width="16"
            height="16"
            borderRadius="full"
            backgroundColor="red-100"
            alignItems="center"
            justifyContent="center"
          >
            <Icon size="lg" color="red">
              <AlertCircle />
            </Icon>
          </Row>
        )}
        <Column alignItems="center" gap="2">
          <Text size="xl" weight="semibold">
            {displayTitle}
          </Text>
          <Box maxWidth="24rem">
            <Text color="muted" align="center">
              {displayDescription}
            </Text>
          </Box>
        </Column>
      </Column>

      <Row gap="3">
        {showBackButton && (
          <Button variant="outline" onPress={onBack || (() => window.history.back())}>
            <Icon size="sm">
              <ArrowLeft />
            </Icon>
            Go back
          </Button>
        )}
        {showRetryButton && (
          <Button variant="outline" onPress={onRetry}>
            <Icon size="sm">
              <RefreshCw />
            </Icon>
            Try again
          </Button>
        )}
        {showHomeButton && (
          <Button
            variant="primary"
            onPress={
              onHome ||
              (() => {
                window.location.href = '/';
              })
            }
          >
            <Icon size="sm">
              <Home />
            </Icon>
            Go home
          </Button>
        )}
      </Row>
    </Column>
  );
}

export function Error404(props: Partial<ErrorPageProps>) {
  return <ErrorPage statusCode={404} {...props} />;
}

export function Error500(props: Partial<ErrorPageProps>) {
  return <ErrorPage statusCode={500} showRetryButton {...props} />;
}
