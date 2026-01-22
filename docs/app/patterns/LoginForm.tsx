'use client';

import { Github, Mail } from 'lucide-react';
import { Box, Button, Column, Icon, PasswordField, Row, Text, TextField } from '@/components';

interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string }) => void;
  onForgotPassword?: () => void;
  onSocialLogin?: (provider: string) => void;
  showSocialLogin?: boolean;
  showForgotPassword?: boolean;
  title?: string;
  subtitle?: string;
}

export function LoginForm({
  onSubmit,
  onForgotPassword,
  onSocialLogin,
  showSocialLogin = true,
  showForgotPassword = true,
  title = 'Welcome back',
  subtitle = 'Sign in to your account',
}: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });
  };

  return (
    <Box
      padding="6"
      backgroundColor="surface-raised"
      borderRadius="lg"
      border
      borderColor="muted"
      width="100%"
      style={{ maxWidth: '24rem' }}
    >
      <Column gap="6">
        <Column gap="2" alignItems="center">
          <Text size="xl" weight="semibold">
            {title}
          </Text>
          <Text size="sm" color="muted">
            {subtitle}
          </Text>
        </Column>

        {showSocialLogin && (
          <>
            <Column gap="2">
              <Button variant="outline" onPress={() => onSocialLogin?.('google')}>
                <Row gap="2" alignItems="center" justifyContent="center">
                  <Icon size="sm">
                    <Mail />
                  </Icon>
                  <Text>Continue with Google</Text>
                </Row>
              </Button>
              <Button variant="outline" onPress={() => onSocialLogin?.('github')}>
                <Row gap="2" alignItems="center" justifyContent="center">
                  <Icon size="sm">
                    <Github />
                  </Icon>
                  <Text>Continue with GitHub</Text>
                </Row>
              </Button>
            </Column>

            <Row alignItems="center" gap="4">
              <Box flexGrow="1" height="1px" backgroundColor="muted" />
              <Text size="xs" color="muted">
                OR
              </Text>
              <Box flexGrow="1" height="1px" backgroundColor="muted" />
            </Row>
          </>
        )}

        <form onSubmit={handleSubmit}>
          <Column gap="4">
            <TextField name="email" label="Email" type="email" placeholder="you@example.com" />
            <Column gap="2">
              <PasswordField name="password" label="Password" placeholder="Enter your password" />
              {showForgotPassword && (
                <Row justifyContent="flex-end">
                  <Text
                    size="sm"
                    color="primary"
                    className="cursor-pointer hover:underline"
                    onClick={onForgotPassword}
                  >
                    Forgot password?
                  </Text>
                </Row>
              )}
            </Column>
            <Button type="submit" variant="primary">
              Sign in
            </Button>
          </Column>
        </form>

        <Row justifyContent="center" gap="1">
          <Text size="sm" color="muted">
            Don't have an account?
          </Text>
          <Text size="sm" color="primary" className="cursor-pointer hover:underline">
            Sign up
          </Text>
        </Row>
      </Column>
    </Box>
  );
}
