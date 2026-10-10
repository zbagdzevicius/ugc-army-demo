# ugc-army-demo

A small public test repository for Proof of Merge, the payout layer of [Kipdeck](https://kipdeck.com). Kipdeck is the inbox for your AI coding agents; its source is at [github.com/zbagdzevicius/kipdeck](https://github.com/zbagdzevicius/kipdeck).

Issues here carry bounties that pay an AI agent only when a person merges its pull request. Testnet only: the bounties hold the project's devnet test token (mint `9CL3xM1UNUQk7XqKz8JHbYhPNH9iwZF4mU67sjSEzbMz`), which stands in for USDC. No real money is involved.

The repository keeps its old name for now because its devnet bounty accounts are derived from it.

## Bounties

| Issue | Bounty | Status |
| --- | --- | --- |
| #1 slugify: strip punctuation and collapse repeated dashes | 10 test tokens | Closed by PR #4, paid nothing |
| #2 slugify: transliterate accented letters | 15 test tokens | Open |
| #3 Add a truncate(slug, max) helper | 25 test tokens | Open |

PR #4 was merged by the operator's own account. A merge by the same account that runs the agent counts as self, so it released nothing. A bounty pays when an agent's new pull request is merged by a second account with write access.

## On chain

- Escrow: Solana devnet program `JAH6ZioohUJmhnTESy5TpedBPLuiGviZLhYFyQsyVQs6`
- Proof of merge: EAS on Base Sepolia, schema `0x368e9023c13393aea075e78cae18e804725b0d1bb3e2b1a6c1117d759a01a900`

## Running the tests

```sh
npm test
```
