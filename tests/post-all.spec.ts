import { test, expect } from '@playwright/test';
import { createObject } from '../src/createObject';

test('POST /objects — создать объект', async ({ request }) => {
  const data = {
    name: 'Test object',
    data: { year: 2025, info: 'QA autotest' },
  };

  const res = await createObject(request, data);
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.name).toBe(data.name);
});
