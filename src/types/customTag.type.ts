import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'channel-name': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'channel-bio': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'see-more-btn': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'thumb-title': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'video-attr': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'video-tag': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'video-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}