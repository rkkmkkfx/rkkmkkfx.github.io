import Link from 'next/link';
import Image from 'next/image';

import styles from './Works.module.css';
import { ReactElement } from 'react';

interface TinyLinkProps {
  url: string;
  header: string;
  description: string;
  defaultMedia: string
}

const BLUR_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAACkCAMAAAApKatmAAAAMFBMVEX////BwcG/v7/f39/v7+/7+/vPz8/z8/Pn5+fLy8vHx8fX19fj4+P39/fr6+vT09OFCFGdAAAC+UlEQVR4nO2a63KDIBCFVUDxEvP+b9u4BAXRpOksK+mc709lRw+cLPdpVQEAAAAAAAAAAAAAAAAAAIDvpH7BlZVnloe3TJVnloe3TJWzyXMI8QFvkkJ8wJukEB/wJinEB7xJCvEBb5JCfMCbpBAf8CYpxAe8SQrxAW+SQnzAm6QQHwU2CQAAAAAAALCiJ6Wm7jisk3BnlVLaSDTs9+jmgdpHjaobYlCH4VpFNuzgws14y93eTzj01j0tLPRbc7shCG8pNe0Wrmehdv+GI2+htUdzzeuw6cNwU5C5A2+GPAyT1q4Lts+wy9qorBqCcNW6Tqr1ROG6nG554O1OFujR5cTSsyLH1BXNuIUt9VCXRArfxdr+jtSbDpPSkaHlibJZ+1HWryaGMFeUuXRyvYjU2xiNmrsvTdGL81JaHuyW5KR0Nak3ys9aWltLw2qb+VtlaZUj7+t6Z9Y0l0DirQu7ZFXdaDg9HvzfHbVPoIPGZymzSeLN7gKNa3x3Mk3sLMdpvJjEm9oFetcXj/cv8cTjv57yNfcj3nprXSaC95RHn3hLf4Jr+IM3vwNZiv/Am/nIW7F9cn4xl7RbxL/1VXPJbg0w4RrgVi694D/brQFt0WvAbu2mNC5rd7xyGf/ZLlFN9PHFvNtzraV4z7Wugt+159LhENr2yrRB8Yc2d96hz+ogn6b0vbIbM+7Hd8dRd5ihDLrDjLmvc4mbGZ/hfjdrXoxuIpaGdf5sOo9N0NgbhevRWn9r4n4SMrScTV24tLNp7M2NmpXeb/6jcDt4b/FVQzELQHXsrbLhXdB2rrFhdFq7cnhFVBcz2KoTb9VtfJYHG77c+RstZZZVwA/Ts6u9UjH6sRm2SRZu8yM8pw5OrmQBAAAAAAAA0hT4j8/4P3NJIT7gTVKID3iTFOID3iSF+IA3SSE+4E1SiA94kxTiA94khfiAN0khPuBNUogPeJMU4oPX2wkc+n+tPLM8vGWqPLM8vGWqPHvdAAAAAAAAAAAAAAAAAAD4An4A5QcTnXnPO7wAAAAASUVORK5CYII=';

function parseBadges(description: string): string[] {
  return description.split(',').map((s) => s.trim()).filter(Boolean);
}

export default function Works({ links }: { links: TinyLinkProps[] }): ReactElement {
  return (
    <div className={styles.root}>
      {links && links.map((link) => {
        const badges = parseBadges(link.description);
        return (
          <Link key={link.url} href={link.url} passHref className={styles.card} target="_blank" rel="noopener noreferrer">
            <span className={styles.media}>
              {link.defaultMedia && (
                <Image
                  fill
                  alt={link.header}
                  src={link.defaultMedia}
                  blurDataURL={BLUR_PLACEHOLDER}
                  style={{ objectFit: 'contain', padding: '12px' }}
                />
              )}
            </span>
            <span className={styles.content}>
              <h4>{link.header}</h4>
              <div className={styles.badges}>
                {badges.map((badge) => (
                  <span key={badge} className={styles.badge}>{badge}</span>
                ))}
              </div>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
