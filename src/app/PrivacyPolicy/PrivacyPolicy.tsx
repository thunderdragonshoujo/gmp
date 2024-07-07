import React from 'react';
import { Card } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className='PrivacyPolicy' style={{ textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Privacy Policy</h1>
      </div>
      <div className='flex justify-center'>
        <Card className='w-1/2 m-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Changed to display flex, direction column, and align items to the start to left align the content */}
          <ul className='card-list' style={{ width: '100%' }}>  {/* Ensure full width and left alignment */}
            <li>We will never sell your personal data without your consent</li>
            <li>We will never send ads to your email account without your consent</li>
            <li>You will be able to opt-out of any consents at any time</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

