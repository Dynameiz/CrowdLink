# CrowdLink

<i>"Redefining Crowdfunding with Blockchain"</i>

<a href="https://rvh56-jyaaa-aaaal-ajura-cai.icp0.io/">Click me to open <strong>CrowdLink</strong></a>

<hr>

## What is CrowdLink?

CrowdLink is a decentralized crowdfunding platform designed on the Web3, giving users full control and transparency in their fundraising efforts. By leveragin blockchain technology, CrowdLink empowers project creators to independently manage their campaigns and data, and ensures that backers stay connected and informed throughout the campaign, giving them visibility into how their contributions are being utilized, with their names are also credited in the campaigns they support, recognizing their involvement and contribution.

## Why CrowdLink?

CrowdLink provides users with direct access to create and manage their own campaigns, offering a level of autonomy that traditional platforms often lack. Users can independently organize and handle their data, ensuring they retain full control over every aspect of their campaign. Additionally, CrowdLink delivers complete transparency in the fundraising process, allowing users to track and verify their progress. This approach not only empowers users with greater control but also builds trust through clear and open financial management.

## How to Run

Make sure that [Node.js](https://nodejs.org/en/) `>= 16` and [`dfx`](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove) `>= 0.14` are installed on your system.

Run the following commands :

```sh
dfx start --clean --background # Run dfx in the background
npm run setup # Install packages, deploy canisters, and generate type bindings

npm start # Start the development server
```

When ready, run `dfx deploy --network ic` to deploy your application to the Internet Computer.

## 🛠️ Technology Stack

- [Vite](https://vitejs.dev/): high-performance tooling for front-end web development
- [React](https://reactjs.org/): a component-based UI library
- [TypeScript](https://www.typescriptlang.org/): JavaScript extended with syntax for types
- [Sass](https://sass-lang.com/): an extended syntax for CSS stylesheets
- [Prettier](https://prettier.io/): code formatting for a wide range of supported languages
- [Motoko](https://github.com/dfinity/motoko#readme): a safe and simple programming language for the Internet Computer
- [Mops](https://mops.one): an on-chain community package manager for Motoko
- [mo-dev](https://github.com/dfinity/motoko-dev-server#readme): a live reload development server for Motoko
- [@ic-reactor](https://github.com/B3Pay/ic-reactor): A suite of JavaScript libraries for seamless frontend development on the Internet Computer

## 📚 Documentation

- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Motoko developer docs](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Mops usage instructions](https://j4mwm-bqaaa-aaaam-qajbq-cai.ic0.app/#/docs/install)
- [@ic-reactor/react](https://b3pay.github.io/ic-reactor/modules/react.html)

## 💡 Tips and Tricks

- Customize your project's code style by editing the `.prettierrc` file and then running `npm run format`.
- Reduce the latency of update calls by passing the `--emulator` flag to `dfx start`.
- Install a Motoko package by running `npx ic-mops add <package-name>`. Here is a [list of available packages](https://mops.one/).
- Split your frontend and backend console output by running `npm run frontend` and `npm run backend` in separate terminals.
