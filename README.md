# 📱 App Inventário TI

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Projeto de Extensão](https://img.shields.io/badge/projeto-extensão_universitária-C8874A?style=flat-square)

App em React Native para facilitar a conferência de hardware (notebooks) em centros de distribuição.

## 📝 Sobre o projeto

Projeto de extensão da faculdade, inspirado no dia a dia de TI de campo: conferir equipamentos em galpões onde o sinal de internet costuma ser ruim. Por isso a ideia é que o app seja **offline first**, funcionando sem depender da rede.

> Os dados no código são fictícios, usados só para demonstração.

## ✨ Funcionalidades

- Lista de notebooks com modelo e setor, usando `FlatList` (renderiza só o que aparece na tela)
- Botão para marcar cada equipamento como **revisado**, usando `Pressable` com feedback ao toque
- Status atualizado de forma imutável com `useState`

## 🚀 Como rodar

O jeito mais rápido é colar o conteúdo de [`App.js`](./App.js) no [Expo Snack](https://snack.expo.dev/) e abrir no navegador ou no celular com o app Expo Go.

Para rodar localmente:

```bash
npx create-expo-app inventario-ti
cd inventario-ti
# substitua o App.js gerado pelo deste repositório
npx expo start
```

## 💡 Próximas ideias

- [ ] Salvar os dados no aparelho (AsyncStorage / SQLite) para uso offline de verdade
- [ ] Leitura de etiqueta patrimonial pela câmera (QR code / código de barras)
- [ ] Exportar a conferência em planilha

---

Feito por [C4PSZERA](https://github.com/C4PSZERA) 🦫
