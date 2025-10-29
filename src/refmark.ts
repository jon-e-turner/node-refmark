export default async function Refmark(options: { repo: string; ref: string }) {
  if (options) {
    if (options.repo && options.ref) {
      // config.set(baseUri) to persist?
      const uri = new URL(`https://github.com/${options.repo}/${options.ref}`);

      const result = await fetch(uri);

      if (result.ok) {
        console.log(result.text);
      }
    }
  }
}
