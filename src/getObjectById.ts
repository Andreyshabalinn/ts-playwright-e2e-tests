import { APIRequestContext } from '@playwright/test';

export async function getObjectById(request: APIRequestContext, id: string) {
  return await request.get(`/objects/${id}`);
}