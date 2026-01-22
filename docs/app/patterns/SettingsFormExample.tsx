'use client';

import { useState } from 'react';
import { SettingsForm, SettingsInput, SettingsSection, SettingsToggle } from './SettingsForm';

export function SettingsFormExample() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [displayName, setDisplayName] = useState('John Doe');

  return (
    <SettingsForm maxWidth="32rem">
      <SettingsSection title="Notifications" description="Manage how you receive notifications">
        <SettingsToggle
          label="Email notifications"
          description="Receive email updates about your account"
          isSelected={emailNotifications}
          onChange={setEmailNotifications}
        />
        <SettingsToggle
          label="Push notifications"
          description="Receive push notifications on your device"
          isSelected={pushNotifications}
          onChange={setPushNotifications}
        />
      </SettingsSection>

      <SettingsSection title="Profile" description="Update your personal information">
        <SettingsInput
          label="Display name"
          description="This is how others will see you"
          value={displayName}
          onChange={setDisplayName}
          placeholder="Enter your name"
        />
      </SettingsSection>
    </SettingsForm>
  );
}
