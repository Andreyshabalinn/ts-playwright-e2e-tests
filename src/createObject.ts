import { APIRequestContext } from '@playwright/test';

export async function createObject(request: APIRequestContext, data: any) {
  return await request.post('/objects', { data });
}