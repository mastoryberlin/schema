# Schema
This folder contains 3 types of files that define "living structures" for various pieces of code and data:
1. simple key-value mappings in Dotenv notation (no file extension) -> these files each define a list of words: the keys (= parts before the '=' sign), where each key can additionally be given a description as its "value".
2. TypeScript files (`.ts` extension) -> these should all be placed inside the `ts` subfolder and each define a JSON schema *in typescript*. Thanks to the `json-schema-to-ts` package, this is a convenient method to define a JSON schema *and* TypeScript types at once, so the codebase is exactly informed about the types behind a schema without resorting to `zod`. All types and enums are centrally exported from the top-level `index.ts`.
3. JSON schema files (`.json`) -> placed inside the `json` subfolder, these are exact replicas of their `ts/**/*.ts` counterparts, though this time in pure JSON.
