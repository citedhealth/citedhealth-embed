/**
 * citedhealth-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for Cited Health */
      'citedhealth'?: 'evidence' | 'ingredient' | 'condition' | 'paper' | 'figure' | 'search' | 'safety';
      /** Entity slug (e.g. "vitamin-d", "insomnia") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'clinical';
      /** Widget design style */
      style?: 'modern' | 'clinical' | 'research';
      /** Widget size */
      size?: 'default' | 'compact';
      /** Search box placeholder text */
      placeholder?: string;
      /** Organ-specific routing (hub only) */
      site?: 'hair' | 'sleep' | 'gut' | 'immune' | 'brain' | 'weight' | 'heart' | 'skin';
    };
  }
}
