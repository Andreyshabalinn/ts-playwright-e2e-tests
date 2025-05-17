import { test as base } from '@playwright/test';
import { createObject } from '../src/createObject';

export const test = base.extend<{
  createdObject: { id: string; name: string };
}>({
  createdObject: async ({ request }, use) => {
    const response = await createObject(request, {
      name: 'Fixture object',
      data: { key: 'value' },
    });
    const body = await response.json();
    await use(body); // передаёт объект в тест
  },
});