# Bem vindo 👋

Projeto criado com:
```bash
npx create-expo-app@latest food
```

Retirando os templates:
```bash
npm run reset-project
```
(As pastas que não seriam utilizadas foram apagadas)

Dependências do TailWind:
```bash
npm install nativewind@^4.0.1 react-native-reanimated tailwindcss
```
```bash
npx pod-install
```

Fazendo o setup do tailwind css:

[Passo a passo](https://www.nativewind.dev/v4/getting-started/expo-router)

```bash
npx tailwindcss init
```
- atualize o arquivo com as informações necessárias
- Crie um css global e importe os estilos tailwind
- Modifique o babel
```bash
npx expo customize metro.config.js
```
- Copie as informações e passe para o novo arquivo e modifique o acesso aos estilos globais
- Agora importe esse css de forma global na aplicação
Já que o _layout.tsx em app é um arquivo global na aplicação, mofique-o:
```tsx
import  '../styles/global.css'
import { Slot } from "expo-router";

export default function RootLayout() {
  return <Slot/>
}
```
Já que estamos usando typescript, precisamos:
- Crie a pasta types na raiz
- Crie o arquivo nativewind-env.d.ts e cole:
```ts
/// <reference types="nativewind/types" />
```
Tudo pronto! Agora, para facilitar a vida, baixe a extensão:
Tailwind CSS IntelliSense

Instalando o pagerView:
```bash
npx expo install react-native-pager-view
```
## Iniciando

1. instale as dependências

   ```bash
   npm install
   ```

2. Inicie o app

   ```bash
    npx expo start
   ```




