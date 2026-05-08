import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RESULT_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  '.results'
);

function writeMarker(name) {
  mkdirSync(RESULT_DIR, { recursive: true });
  writeFileSync(
    join(RESULT_DIR, `${name}.json`),
    JSON.stringify({ executed: true, name })
  );
}

export async function alpha() {
  writeMarker('alpha');
}

export async function beta() {
  writeMarker('beta');
}

// Default export is awaited by `getServiceCrons` to discover entries.
// Each entry's `handler` names a function export above.
export default async function getCrons() {
  return [
    { handler: 'alpha', schedule: '* * * * *' },
    { handler: 'beta', schedule: '*/2 * * * *' },
  ];
}
