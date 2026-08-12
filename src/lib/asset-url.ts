/**
 * As imagens do projeto ficam hospedadas na infraestrutura de assets da Lovable
 * (caminho relativo /__l5e/assets-v1/...). Esse caminho só é servido pelos
 * domínios *.lovable.app. Quando o site é publicado em um domínio próprio
 * (ex.: sejacredmais.com em Cloudflare), o caminho relativo retorna 404 e as
 * imagens não aparecem.
 *
 * Esta função converte o caminho relativo em uma URL absoluta e estável,
 * garantindo que as imagens carreguem em qualquer domínio.
 */

const ASSET_CDN_ORIGIN = 'https://credmais-wavy-hero.lovable.app';

type AssetPointer = { url: string };

export function assetUrl(asset: AssetPointer | string): string {
  const raw = typeof asset === 'string' ? asset : asset?.url;

  if (!raw) return '';
  // URLs já absolutas (http/https/data) permanecem intactas
  if (/^(https?:)?\/\//.test(raw) || raw.startsWith('data:')) return raw;
  // Caminhos de assets da Lovable recebem origem absoluta
  if (raw.startsWith('/__l5e/')) return `${ASSET_CDN_ORIGIN}${raw}`;

  return raw;
}
