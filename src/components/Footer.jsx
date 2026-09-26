import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="text-center py-6 px-4 text-xs text-[#86868B]">
      {t.footer.copyright}
    </footer>
  );
}