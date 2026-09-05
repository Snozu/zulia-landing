// Thin wrapper over gtag so callers never have to know whether analytics is
// configured. When PUBLIC_GA_ID is absent (local dev, previews) every call is
// a no-op instead of a crash.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: AnalyticsParams = {}): void {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
}

/**
 * Outbound clicks (WhatsApp, mail, tel) navigate away before gtag flushes its
 * beacon on some browsers. Sending the event before opening the target keeps
 * the hit, and the `transport_type: 'beacon'` hint tells GA not to block.
 */
export function trackOutbound(name: string, params: AnalyticsParams = {}): void {
  trackEvent(name, { ...params, transport_type: 'beacon' });
}
