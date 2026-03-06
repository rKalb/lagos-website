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

export interface GitHubRelease {
  version: string;
  tag: string;
  title: string;
  body: string;
  publishedAt: string;
  dmgUrl: string;
}

/**
 * Fetches all Lagos releases from GitHub at build time.
 * Returns them sorted newest-first.
 */
export async function getAllReleases(): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/rKalb/lagos-releases/releases',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'lagos-website-build',
        },
      },
    );
    if (!response.ok) return [];
    const data: Array<{
      tag_name: string;
      name: string;
      body: string;
      published_at: string;
      assets?: Array<{ name: string; browser_download_url: string }>;
    }> = await response.json();

    return data.map((r) => ({
      version: r.tag_name.replace(/^v/, ''),
      tag: r.tag_name,
      title: r.name || `Lagos ${r.tag_name.replace(/^v/, '')}`,
      body: r.body || '',
      publishedAt: r.published_at,
      dmgUrl: r.assets?.find((a) => a.name.endsWith('.dmg'))?.browser_download_url ?? '',
    }));
  } catch {
    return [];
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
