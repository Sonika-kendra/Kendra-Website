const HTML_TAG_REGEX = /<[^>]+>/g;
const HTML_ENTITY_REGEX = /&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);/g;

const NAMED_HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: "\"",
  rsquo: "'",
  lsquo: "'",
  rdquo: "\"",
  ldquo: "\"",
  ndash: "-",
  mdash: "--",
  hellip: "...",
};

function decodeEntity(entityBody: string): string {
  if (entityBody.startsWith("#x") || entityBody.startsWith("#X")) {
    const codePoint = Number.parseInt(entityBody.slice(2), 16);
    return Number.isNaN(codePoint) ? `&${entityBody};` : String.fromCodePoint(codePoint);
  }

  if (entityBody.startsWith("#")) {
    const codePoint = Number.parseInt(entityBody.slice(1), 10);
    return Number.isNaN(codePoint) ? `&${entityBody};` : String.fromCodePoint(codePoint);
  }

  return NAMED_HTML_ENTITIES[entityBody] ?? `&${entityBody};`;
}

export function decodeHtmlEntities(text: string): string {
  return text.replace(HTML_ENTITY_REGEX, (_, entityBody: string) =>
    decodeEntity(entityBody)
  );
}

export function stripHtml(html: string): string {
  return html.replace(HTML_TAG_REGEX, "").trim();
}

export function htmlToPlainText(html: string): string {
  return decodeHtmlEntities(stripHtml(html));
}
