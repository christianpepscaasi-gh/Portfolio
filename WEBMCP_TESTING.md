# WebMCP Testing Guide

This guide covers local prototype testing and the deployed Chrome origin trial. WebMCP is experimental: run these checks in a compatible Chrome version and do not treat a passing local flag test as proof that the deployed trial token is valid.

## Before testing

- The registered production origin is `https://peps-portfolio.vercel.app`.
- The registration does not include subdomains. Test the exact HTTPS origin; a different Vercel alias or custom domain needs its own origin-trial registration.
- The registration notes list an expiry of **March 30, 2027**. Confirm the registration remains active and check Chrome's current trial availability before testing.
- Never paste the token into source, a commit, screenshots, public logs, or this document. The token notes file is Git-ignored.
- The expected first implementation exposes `find_projects` and `get_project_details` as read-only tools. `search_weekly_logs` is optional and should only be tested if it has been implemented and its content reviewed.

## Local test (Chrome flag)

The production token is origin-bound and will not enable the trial on `localhost`.

1. Enable WebMCP for local development:
   - Visit `chrome://flags/#enable-webmcp-testing`.
   - Set the flag to **Enabled** and relaunch Chrome.
2. From the repository root, install dependencies if they are not already installed, then start the dev server:

   ```powershell
   npm install
   npm run dev
   ```

3. Open `http://localhost:3000` in the Chrome instance with the flag enabled.
4. Open DevTools → **Application** → **WebMCP**. Confirm that each implemented tool appears under **Available Tools** and that each schema is valid.
5. Use the panel's manual invocation interface:
   - `find_projects` with no filters returns the projects.
   - Filter `find_projects` by an existing category and technology; verify all returned results match.
   - `get_project_details` with `cargaexpress` returns that project's details and public links.
   - `get_project_details` with an unknown ID returns a clear not-found result.
6. If available, install/use a compatible WebMCP inspector agent and try prompts such as:
   - “Find blockchain projects using Solidity.”
   - “Show me the details for CargaExpress.”
7. Confirm that tool invocations appear in DevTools with the expected input and output.
8. Disable the WebMCP flag, relaunch, and reload the site. Verify that pages still render and navigation, category filters, and links still work without WebMCP.

## Deployed test (origin trial)

### Configure and deploy

1. In Vercel Project Settings → Environment Variables, add the trial token as `WEBMCP_ORIGIN_TRIAL_TOKEN`. Set it for **Production only**; do not add the production-origin token to Preview deployments.
2. Do not add the token to a committed `.env` file or paste it into a build log.
3. Redeploy the Production deployment after setting the variable. The production build must include the conditional `Origin-Trial` response header.
4. Open exactly `https://peps-portfolio.vercel.app`. If that URL redirects to another host, stop and verify/register the final origin before interpreting the result.

### Verify activation and tools

1. Use a Chrome version that supports the WebMCP origin trial and confirm the trial's current version window. For this production check, do not rely on the local WebMCP testing flag.
2. In DevTools → **Network**, inspect the main document response headers. Confirm an `Origin-Trial` header is present. Do not copy its value into screenshots, tickets, or logs.
3. In DevTools → **Application** → **Frames**, check the origin-trial information for the top-level frame.
4. In DevTools → **Application** → **WebMCP**, confirm the expected tools are registered and schemas validate.
5. Repeat the manual tool tests listed in the local procedure, then try the same prompts with the compatible agent/inspector.
6. Open `/work`, `/work/cargaexpress`, and `/logs` directly to confirm normal deployed navigation and content still work. Repeat once in a browser without WebMCP support if available.

### Header check from a terminal

This confirms only whether the response header is present; do not print or share the token value:

```powershell
$response = Invoke-WebRequest -Method Head -Uri 'https://peps-portfolio.vercel.app'
$hasOriginTrial = $response.Headers.Contains('Origin-Trial')
if ($hasOriginTrial) { 'Origin-Trial header present' } else { 'Origin-Trial header missing' }
```

If the host rejects `HEAD`, inspect the document request in Chrome DevTools Network instead.

## Acceptance checklist

- [ ] Tools are available only when `document.modelContext` is supported; unsupported browsers have no runtime errors.
- [ ] Tools appear with useful names, descriptions, and schemas in the WebMCP DevTools panel.
- [ ] Project filters return only matching projects, and unknown IDs return a clear result.
- [ ] Outputs are concise and do not disclose unrelated personal/contact details.
- [ ] The production document response contains the origin-trial header and DevTools reports the trial as active.
- [ ] The deployed production origin matches the origin in the registration.
- [ ] The token is absent from Git changes, docs, source, and shared test output.
- [ ] Existing pages, navigation, and filters behave normally with WebMCP disabled.

## Troubleshooting

| Symptom | Checks |
|---|---|
| No WebMCP panel or API | Confirm Chrome version, local flag/relaunch for localhost, or active origin trial for production. Check `document.modelContext` in the page console. |
| Tools missing | Confirm the client registration component mounted, no console errors occurred, and registration is not gated behind a route or UI state. |
| Trial not active on production | Check that the requested URL is exactly the registered HTTPS origin, the Production environment variable is set, and a new deployment was built after configuration. Check DevTools frame trial information without sharing the token. |
| Header missing | Review the conditional header configuration and Vercel Production deployment/build settings. Confirm the request is for the document, not a static asset. |
| Local test does not activate the trial | Expected for this registration. Enable the local Chrome testing flag; do not use the production token on localhost. |
| Tool output or schema is wrong | Inspect the manual invocation input/output and schema errors in DevTools; verify against the source data and keep outputs within recommended size limits. |

## Record results

For each test run, record the date, environment (local/deployed), Chrome version, deployment URL or commit, tools tested, expected/actual result, and console/DevTools errors. Redact the origin-trial token from all evidence before sharing.

## Local prototype verification

Run on October 20, 2026:

- Chrome `155.0.8059.82`, isolated browser profile, `chrome://flags/#enable-webmcp-testing` enabled, site at `http://localhost:3000`.
- `document.modelContext` was available. `getTools()` returned exactly `find_projects` and `get_project_details`; both included `readOnlyHint: true`.
- `find_projects` with no filters returned all six projects (1,482 characters). Filtering by category `Blockchain` and technology `Solidity` returned PandanChain and Sillag.
- `get_project_details` with `cargaexpress` returned the project description, technologies, highlights, GitHub link, and detail path. An invalid ID returned `{ "success": false, "error": "Project not found.", ... }`.
- Invalid category and malformed ID inputs returned explicit validation errors.
- With WebMCP unavailable in the integrated browser, the home, work, project detail, and logs pages rendered and navigated with no page errors.
- Brave was not installed in the local environment, so a Brave Leo agent test could not be run.
- Follow-up browser-console evidence confirmed `typeof document.modelContext` is `"object"`, `getTools()` returns exactly two tools with `readOnlyHint: true`, and manual `executeTool()` calls work. The user's no-filter search returned all six projects; filtering by `Solidity` returned PandanChain and Sillag; an invalid ID returned the explicit not-found result. The first attempted invalid-ID invocation referenced an undefined console variable (`getProject`); defining it from `getTools()` fixed the test, so this was a console setup typo, not an application error.
- Final local validation invoked `get_project_details` for `cargaexpress`; it returned the public description, technologies, highlights, GitHub URL, and detail path. `lol-this-does-not-exist` returned `{ "success": false, "error": "Project not found.", ... }` without throwing.
- The WebMCP API and manual tool invocations are verified. The DevTools Application → WebMCP panel itself was not confirmed in the installed Chrome 155 DevTools session; do not mark that UI check complete based solely on the browser-console evidence.
- The live `https://peps-portfolio.vercel.app/` origin returned HTTP 200 but did not include an `Origin-Trial` response header at the time checked.
- A conditional header configuration was added to `next.config.ts`; it uses only the server-side `WEBMCP_ORIGIN_TRIAL_TOKEN` variable and emits no header when unset.
- No production token was configured, no Vercel setting was changed, and no deployment was made.
