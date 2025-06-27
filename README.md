# Inventário App - React Native

Um aplicativo de inventário gamificado desenvolvido em React Native com Expo.

## Como executar

1. Instale as dependências:
```bash
cd inventarioappreactnative
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Escaneie o QR code com o app Expo Go ou execute em um emulador.

## Funcionalidades

- **Usuários**: Gerenciar usuários do sistema
- **Perfis de Jogador**: Perfis de jogadores com informações específicas
- **Itens**: Cadastro de itens do inventário
- **Inventários**: Gerenciar inventários dos jogadores
- **Quests**: Sistema de missões/tarefas
- **Conquistas**: Sistema de achievements
- **Quests Completadas**: Histórico de missões concluídas

## Tecnologias

- React Native
- Expo
- TypeScript
- React Navigation (Drawer)

## API

O app consome uma API REST em `http://127.0.0.1:8000/` com os seguintes endpoints:
- `/users/`
- `/playerprofiles/`
- `/items/`
- `/inventories/`
- `/inventoryitems/`
- `/quests/`
- `/achievements/`
- `/completedquests/`

---

*Projeto acadêmico - A3 SDM FAPA 2025*
