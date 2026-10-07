import { test, expect } from '@playwright/test';

test('Deve navegar para o YouTube e verificar se o logo esta visivel', async ({ page }) => {
  // Navegação para o YouTube
  await page.goto('https://www.youtube.com');

  // Validação usando toBeVisible()
  const logo = page.locator('ytd-logo#logo');
  await expect(logo).toBeVisible();
});