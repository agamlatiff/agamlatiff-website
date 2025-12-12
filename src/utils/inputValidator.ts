/**
 * Input Validator & Sanitizer - Prevent XSS and injection attacks
 */

export class InputValidator {
  /**
   * Sanitize string input - Remove dangerous characters
   */
  static sanitizeString(input: string): string {
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/<[^>]*>/g, ''); // Remove all HTML tags
  }

  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  /**
   * Validate phone number (Indonesian format)
   */
  static isValidPhone(phone: string): boolean {
    // Remove spaces, dashes, parentheses
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');

    // Indonesian phone: 08xx, +628xx, or 628xx
    const phoneRegex = /^(\+?62|0)8[0-9]{8,11}$/;
    return phoneRegex.test(cleaned);
  }

  /**
   * Validate name (no numbers, special chars)
   */
  static isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    return nameRegex.test(name);
  }

  /**
   * Check for spam patterns
   */
  static containsSpam(text: string): boolean {
    const spamPatterns = [
      /viagra/i,
      /cialis/i,
      /casino/i,
      /lottery/i,
      /winner/i,
      /click here/i,
      /buy now/i,
      /limited time/i,
      /act now/i,
      /congratulations/i,
      /\$\$\$/,
      /💰{3,}/,
      /🎰/,
      /http[s]?:\/\/[^\s]{50,}/i, // Suspicious long URLs
    ];

    return spamPatterns.some(pattern => pattern.test(text));
  }

  /**
   * Check for excessive caps (spam indicator)
   */
  static hasExcessiveCaps(text: string): boolean {
    const capsCount = (text.match(/[A-Z]/g) || []).length;
    const totalLetters = (text.match(/[a-zA-Z]/g) || []).length;

    if (totalLetters === 0) return false;

    const capsRatio = capsCount / totalLetters;
    return capsRatio > 0.7 && text.length > 20; // More than 70% caps
  }

  /**
   * Check for excessive special characters
   */
  static hasExcessiveSpecialChars(text: string): boolean {
    const specialChars = (text.match(/[!@#$%^&*()_+=\[\]{};':"\\|,.<>?]/g) || []).length;
    const totalChars = text.length;

    if (totalChars === 0) return false;

    return specialChars / totalChars > 0.3; // More than 30% special chars
  }

  /**
   * Validate message content
   */
  static isValidMessage(message: string): {
    valid: boolean;
    error?: string;
  } {
    const sanitized = this.sanitizeString(message);

    // Length check
    if (sanitized.length < 10) {
      return { valid: false, error: 'Message too short (minimum 10 characters)' };
    }

    if (sanitized.length > 1000) {
      return { valid: false, error: 'Message too long (maximum 1000 characters)' };
    }

    // Spam check
    if (this.containsSpam(sanitized)) {
      return { valid: false, error: 'Message detected as spam' };
    }

    // Caps check
    if (this.hasExcessiveCaps(sanitized)) {
      return { valid: false, error: 'Too many capital letters' };
    }

    // Special chars check
    if (this.hasExcessiveSpecialChars(sanitized)) {
      return { valid: false, error: 'Too many special characters' };
    }

    return { valid: true };
  }

  /**
   * Comprehensive form validation
   */
  static validateContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }): {
    valid: boolean;
    errors: Record<string, string>;
    sanitized?: typeof data;
  } {
    const errors: Record<string, string> = {};

    // Validate name
    const sanitizedName = this.sanitizeString(data.name);
    if (!sanitizedName) {
      errors.name = 'Name is required';
    } else if (!this.isValidName(sanitizedName)) {
      errors.name = 'Invalid name (letters, spaces, dots, and hyphens only)';
    }

    // Validate email
    const sanitizedEmail = this.sanitizeString(data.email);
    if (!sanitizedEmail) {
      errors.email = 'Email is required';
    } else if (!this.isValidEmail(sanitizedEmail)) {
      errors.email = 'Invalid email format';
    }

    // Validate phone (optional)
    if (data.phone) {
      const sanitizedPhone = this.sanitizeString(data.phone);
      if (sanitizedPhone && !this.isValidPhone(sanitizedPhone)) {
        errors.phone = 'Invalid phone format (example: 08123456789)';
      }
    }

    // Validate message
    const sanitizedMessage = this.sanitizeString(data.message);
    const messageValidation = this.isValidMessage(sanitizedMessage);
    if (!messageValidation.valid) {
      errors.message = messageValidation.error!;
    }

    const valid = Object.keys(errors).length === 0;

    return {
      valid,
      errors,
      sanitized: valid
        ? {
          name: sanitizedName,
          email: sanitizedEmail,
          phone: data.phone ? this.sanitizeString(data.phone) : undefined,
          message: sanitizedMessage,
        }
        : undefined,
    };
  }
}

export default InputValidator;
