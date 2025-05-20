# 🔐 sigil-serv

**sigil-serv** is a lightweight Express.js server written in TypeScript for serving SSL verification `.txt` files. It is designed to assist in domain validation for SSL certificates using the HTTP file-based verification method.

---

## ✨ Features

- ⚡ Ultra-light Express server for quick validation
- 📂 Serves static `.txt` files from `verificationFiles/` directory
- 🔒 Access path follows strict format: `/.well-known/pki-validation/<filename>.txt`
- 💥 Validation file content served as `text/plain`
- 🧼 Ignores files in version control (via `.gitignore`)
- 🩺 Includes `/health` endpoint for status checks

---

## 📁 Project Structure

```
sigil-serv/
│
├── src/
│   └── index.ts
├── verificationFiles/     # where .txt files will be placed
├── .gitignore
├── tsconfig.json
└── package.json
```

---

## 🛠 Setup & Usage

### Prerequisites
- Node.js (v16+)
- Yarn

### Install dependencies
```bash
yarn install
```

### Run in development
```bash
yarn dev
```

### Build in production
```bash
yarn build
```

### Run in production
```bash
yarn start
```


---

## 📜 Usage Instructions

1. Place your SSL validation `.txt` file inside the `verificationFiles/` directory.
2. Ensure the file is named exactly as required by your certificate provider.
3. The file will be served at:
```
http:///.well-known/pki-validation/.txt
```

✅ File must include `.txt` suffix in the URL.

---

## 🔥 Example

Say you received a file named `1234567890abcdef.txt` from your SSL provider.

- Place it in: `verificationFiles/1234567890abcdef.txt`
- Access via: `http://yourdomain.com/.well-known/pki-validation/1234567890abcdef.txt`

---

## 🔍 Health Check

Visit `/health` to confirm the server is running:
```bash
curl http://localhost:3000/health
```

---

## 🚫 .gitignore

Make sure `verificationFiles/` is **not** committed to version control:

```gitignore
verificationFiles
```


