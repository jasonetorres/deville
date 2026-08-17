const ANSI_COLORS: Record<number, string> = {
  30: '#7f7f7f', 31: '#cd0000', 32: '#00cd00', 33: '#cdcd00',
  34: '#0000ee', 35: '#cd00cd', 36: '#00cdcd', 37: '#e5e5e5',
  90: '#4c4c4c', 91: '#ff0000', 92: '#00ff00', 93: '#ffff00',
  94: '#5c5cff', 95: '#ff00ff', 96: '#00ffff', 97: '#ffffff',
};

const BG_COLORS: Record<number, string> = {
  40: '#000000', 41: '#cd0000', 42: '#00cd00', 43: '#cdcd00',
  44: '#0000ee', 45: '#cd00cd', 46: '#00cdcd', 47: '#e5e5e5',
};

export function ansiToHtml(text: string): string {
  const parts = text.split(/(\x1b\[[\d;]+m)/g);
  let fg = '';
  let bg = '';
  let bold = false;
  let html = '';

  for (const part of parts) {
    if (!part) continue;
    const codeMatch = part.match(/^\x1b\[([\d;]+)m$/);
    if (codeMatch) {
      const codes = codeMatch[1].split(';').map(Number);
      for (const code of codes) {
        if (code === 0) { fg = ''; bg = ''; bold = false; }
        else if (code === 1) bold = true;
        else if (code in ANSI_COLORS) fg = ANSI_COLORS[code];
        else if (code in BG_COLORS) bg = BG_COLORS[code];
      }
    } else {
      const escaped = part
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const styles: string[] = [];
      if (bold) styles.push('font-weight:bold');
      if (fg) styles.push(`color:${fg}`);
      if (bg) styles.push(`background:${bg}`);
      if (styles.length) {
        html += `<span style="${styles.join(';')}">${escaped}</span>`;
      } else {
        html += escaped;
      }
    }
  }
  return html;
}
