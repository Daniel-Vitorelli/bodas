import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

/**
 * Preenche o marcador `__SITE_URL__` do index.html com o endereço público do site.
 * As meta tags de prévia (og:image) precisam de URL ABSOLUTA — o WhatsApp não
 * aceita caminho relativo, por isso o endereço tem que ser resolvido no build.
 *
 * Ordem de prioridade:
 *   1. VITE_SITE_URL — defina no `.env` local ou nas Environment Variables da Vercel
 *   2. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL — a Vercel define sozinha no deploy
 *   3. placeholder — só cai aqui se nada acima existir (troque manualmente)
 */
function resolveSiteUrl(env) {
  const raw =
    env.VITE_SITE_URL ||
    process.env.VITE_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    ''

  const url = String(raw).trim().replace(/\/+$/, '')
  if (!url) return 'https://SEU-LINK-AQUI'
  return /^https?:\/\//.test(url) ? url : `https://${url}`
}

function siteUrlPlugin(env) {
  const siteUrl = resolveSiteUrl(env)

  return {
    name: 'inject-site-url',
    configResolved() {
      // deixa claro no log do build qual endereço entrou nas meta tags
      console.log(`\n[og-preview] endereço usado na prévia do link: ${siteUrl}\n`)
    },
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', siteUrl)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), siteUrlPlugin(env)],
  }
})
