/**
 * Shared fetch helper for the releases list endpoint.
 * GitHub's /releases/latest endpoint is unreliable when releases are created
 * as drafts and published later (it sorts by created_at, not published_at).
 * Using the list endpoint returns releases sorted by published_at instead.
 */
interface RawRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  assets?: Array<{ name: string; browser_download_url: string }>;
}

async function fetchReleases(): Promise<RawRelease[]> {
  const response = await fetch(
    'https://api.github.com/repos/rKalb/lagos-releases/releases?per_page=30',
    {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'lagos-website-build',
      },
    },
  );
  if (!response.ok) return [];
  return response.json();
}

/**
 * Fetches the latest Lagos version from GitHub Releases at build time.
 * Falls back to a hardcoded version if the API is unavailable.
 */
export async function getLatestVersion(fallback = '1.3.9'): Promise<string> {
  try {
    const releases = await fetchReleases();
    const latest = releases.find((r) => !r.prerelease && !r.draft);
    if (!latest) return fallback;
    const version = latest.tag_name.replace(/^v/, '').trim();
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
    const data = await fetchReleases();
    return data
      .filter((r) => !r.draft)
      .map((r) => ({
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
    const releases = await fetchReleases();
    const latest = releases.find((r) => !r.prerelease && !r.draft);
    if (!latest) return '';
    const dmg = latest.assets?.find((a) => a.name.endsWith('.dmg'));
    return dmg?.browser_download_url ?? '';
  } catch {
    return '';
  }
}
