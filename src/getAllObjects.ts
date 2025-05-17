import { APIRequestContext } from '@playwright/test';

export async function getAllObjects(request: APIRequestContext) {
  return await request.get('/objects');
}