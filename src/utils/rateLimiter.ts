/**
 * Rate Limiter - Prevent spam submissions
 */

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lastAttempt: number;
}

class RateLimiter {
  private attempts: Map<string, RateLimitEntry> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;
  private readonly blockDurationMs: number;

  constructor(
    maxAttempts: number = 3, // Max 3 attempts
    windowMs: number = 60000, // Per 1 minute
    blockDurationMs: number = 300000 // Block for 5 minutes
  ) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.blockDurationMs = blockDurationMs;
  }

  /**
   * Get unique identifier for user (IP-like)
   */
  private getIdentifier(): string {
    // Use combination of browser fingerprint
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const platform = navigator.platform;
    const screenResolution = `${screen.width}x${screen.height}`;

    return btoa(`${userAgent}-${language}-${platform}-${screenResolution}`);
  }

  /**
   * Check if request is allowed
   */
  isAllowed(): { allowed: boolean; retryAfter?: number; message?: string } {
    const identifier = this.getIdentifier();
    const now = Date.now();
    const entry = this.attempts.get(identifier);

    // No previous attempts
    if (!entry) {
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
      });
      return { allowed: true };
    }

    // Check if block period has expired
    const timeSinceLastAttempt = now - entry.lastAttempt;
    if (entry.count >= this.maxAttempts && timeSinceLastAttempt < this.blockDurationMs) {
      const retryAfter = Math.ceil((this.blockDurationMs - timeSinceLastAttempt) / 1000);
      return {
        allowed: false,
        retryAfter,
        message: `Too many attempts. Please try again in ${Math.ceil(retryAfter / 60)} minutes.`,
      };
    }

    // Reset if window has expired
    const timeSinceFirstAttempt = now - entry.firstAttempt;
    if (timeSinceFirstAttempt > this.windowMs) {
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
      });
      return { allowed: true };
    }

    // Increment attempt count
    if (entry.count < this.maxAttempts) {
      entry.count++;
      entry.lastAttempt = now;
      this.attempts.set(identifier, entry);
      return { allowed: true };
    }

    // Block user
    const retryAfter = Math.ceil(this.blockDurationMs / 1000);
    return {
      allowed: false,
      retryAfter,
      message: `Too many attempts. Please try again in ${Math.ceil(retryAfter / 60)} minutes.`,
    };
  }

  /**
   * Reset attempts for identifier
   */
  reset(): void {
    const identifier = this.getIdentifier();
    this.attempts.delete(identifier);
  }

  /**
   * Clean up old entries (call periodically)
   */
  cleanup(): void {
    const now = Date.now();
    for (const [identifier, entry] of this.attempts.entries()) {
      if (now - entry.lastAttempt > this.blockDurationMs) {
        this.attempts.delete(identifier);
      }
    }
  }

  /**
   * Check daily submission count
   */
  getDailyCount(): number {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('dailySubmissions');

    if (!stored) return 0;

    const data = JSON.parse(stored);
    if (data.date !== today) {
      // New day, reset count
      localStorage.removeItem('dailySubmissions');
      return 0;
    }

    return data.count || 0;
  }

  /**
   * Increment daily submission count
   */
  incrementDailyCount(): void {
    const today = new Date().toDateString();
    const count = this.getDailyCount() + 1;

    localStorage.setItem('dailySubmissions', JSON.stringify({
      date: today,
      count: count
    }));
  }

  /**
   * Check if daily limit reached
   */
  isDailyLimitReached(maxPerDay: number = 2): boolean {
    return this.getDailyCount() >= maxPerDay;
  }
}

// Export singleton instance
// 1 submission per 10 minutes
export const contactFormLimiter = new RateLimiter(
  1,        // Max 1 attempt
  600000,   // Per 10 minutes (600,000ms)
  600000    // Block for 10 minutes
);

// Cleanup every 10 minutes
if (typeof window !== 'undefined') {
  setInterval(() => contactFormLimiter.cleanup(), 600000);
}

export default RateLimiter;
