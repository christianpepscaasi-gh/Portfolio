# WebMCP Integration Plan

## Goal

Add WebMCP as a progressive enhancement to the portfolio. A compatible browser agent should be able to query the site's public project content through clearly described, read-only tools. The existing pages must continue to work in browsers without WebMCP.

## What fits this site

The app is a Next.js App Router portfolio with static content in `app/data/projects.json`, `app/data/logs.json`, and `app/data/profile.ts`. It has no API routes, account state, database, or message-submission endpoint.

## Implementation status

The local prototype registers only `find_projects` and `get_project_details`. It is mounted in the root layout, feature-detects `document.modelContext`, and unregisters using the API's `AbortSignal` option when the component unmounts. No production origin-trial token or Vercel configuration has been added.

The conditional production header configuration is now prepared in `next.config.ts`. It reads only the server-side `WEBMCP_ORIGIN_TRIAL_TOKEN` variable and emits `Origin-Trial` when it is set; with the variable absent, no trial header is configured. The repository currently has no Vercel project link, CLI, or production environment access, so the Vercel variable has not been configured and no deployment has been made.

The initial release consists of only these tools:

1. **`find_projects`** — Filter projects by optional category and/or technology; return a small list with IDs, titles, summaries, categories, technologies, and detail-page paths.
2. **`get_project_details`** — Look up one exact project ID; return its description, technology stack, highlights, and available public links.

Keep the first release read-only. Do not add a tool that sends email, submits contact requests, or modifies data: the current contact links only open the visitor's email application. Avoid returning phone/email details from tools unless that is separately approved.

`search_weekly_logs` is a possible future addition, but is not part of the initial release and has not been implemented.

## Integration approach

1. **Register tools client-side.** Add a small client component mounted from `app/layout.tsx`. Feature-detect `document.modelContext` before registering; do not access browser-only APIs from server-rendered code. Register once for the app lifetime and clean up registrations when the component is removed.
2. **Use the imperative API.** The tools query local project data and do not correspond to a form, so `document.modelContext.registerTool()` is the appropriate API. Define input schemas, validate values, return concise structured results, and mark tools with `readOnlyHint: true`.
3. **Keep source data authoritative.** Reuse the existing JSON and profile/log helpers. Do not duplicate project records in the tool implementation. Return a not-found result for unknown project IDs rather than silently substituting another project.
4. **After local verification and explicit approval only, enable the production origin trial.** Configure the registered token as the Vercel **Production** environment variable `WEBMCP_ORIGIN_TRIAL_TOKEN` and have `next.config.ts` add the `Origin-Trial` response header to site pages only when that variable is present. Do not put the token in source code, documentation, or a committed environment file. The token must be delivered to browsers to activate the trial, so it is not a server-side secret once deployed.
5. **Keep local testing separate.** The supplied registration is for `https://peps-portfolio.vercel.app`; it does not cover `localhost`. Use Chrome's `#enable-webmcp-testing` flag locally instead of reusing the production token on localhost.
6. **Verify in Chrome DevTools and with an agent.** Confirm the origin trial and registered tools, run each tool manually, then try natural-language prompts through a compatible WebMCP inspector/agent. Record browser version, environment, results, and issues for trial feedback.

## Suggested implementation sequence

1. Confirm `https://peps-portfolio.vercel.app` is the canonical production origin and the destination of the Vercel Production deployment.
2. Implement `find_projects` and `get_project_details` with typed schemas and short outputs. Keep the logs tool out of the initial release until its content has been reviewed for intended public exposure.
3. Add a conditional `Origin-Trial` response header in `next.config.ts`, then configure the token in Vercel Production settings and redeploy.
4. Run the local and deployed procedures in [WEBMCP_TESTING.md](./WEBMCP_TESTING.md).
5. If the first two tools behave correctly, consider adding weekly-log search and repeat the same checks.
6. Submit trial feedback with observed successes, failures, browser/build versions, and any API friction. Recheck the registration before its listed expiry of **March 30, 2027**.

## Scope and safety

- No backend/API endpoint is needed for the initial read-only tools.
- Do not expose the tools to third-party origins or enable subdomain matching for this trial.
- Treat WebMCP as experimental; normal navigation and content must remain available if the API is absent or registration fails.
- Keep tool descriptions and outputs concise. Do not return irrelevant personal data or content that is not meant for public visitors.
- The origin-trial token notes are local configuration material and are ignored by Git via `.gitignore`.

## Documentation checked

- [Chrome WebMCP overview](https://developer.chrome.com/docs/ai/webmcp/)
- [Chrome imperative API](https://developer.chrome.com/docs/ai/webmcp/imperative-api/)
- [Chrome WebMCP security guidance](https://developer.chrome.com/docs/ai/webmcp/secure-tools/)
- [Chrome origin trials](https://developer.chrome.com/docs/web-platform/origin-trials/)
- [Chrome DevTools WebMCP panel](https://developer.chrome.com/docs/devtools/application/webmcp/)
- [WebMCP implementation status](https://github.com/webmachinelearning/webmcp/blob/main/implementation-status.md)
