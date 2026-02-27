/**
 * Fetches the latest Lagos version from GitHub Releases at build time.
 * Falls back to a hardcoded version if the API is unavailable.
 */
export async function getLatestVersion(fallback = '1.3.2'): Promise<string> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/rKalb/lagos-releases/releases/latest',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'lagos-website-build',
        },
      },
    );
    if (!response.ok) return fallback;
    const data: { tag_name?: string } = await response.json();
    const version = (data.tag_name ?? '').replace(/^v/, '').trim();
    return version || fallback;
  } catch {
    return fallback;
  }
}

/**
 * Fetches the latest Lagos DMG download URL from GitHub Releases.
 * Falls back to empty string if unavailable (link will fall back to env var).
 */
export async function getLatestDownloadUrl(): Promise<string> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/rKalb/lagos-releases/releases/latest',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'lagos-website-build',
        },
      },
    );
    if (!response.ok) return '';
    const data: { assets?: Array<{ name: string; browser_download_url: string }> } =
      await response.json();
    const dmg = data.assets?.find((a) => a.name.endsWith('.dmg'));
    return dmg?.browser_download_url ?? '';
  } catch {
    return '';
  }
}
