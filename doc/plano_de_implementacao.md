# Plano de Execução: Tela de Login Didática em Vue.js 3

Este plano detalha a criação de uma interface de login modular e didática, desenvolvida sob medida para uma **aula inicial de Vue.js 3** (utilizando a Composition API com `<script setup lang="ts">`).

---

## 1. Visão Geral e Abordagem Pedagógica

Para facilitar o aprendizado dos alunos, o código foi estruturado com conceitos essenciais do ecossistema Vue:
- **Reatividade com `ref` / `reactive`**: Gerenciamento de estado de inputs e erros.
- **Two-way Data Binding com `v-model`**: Ligação dos campos de formulário com o estado.
- **Manipulação de Eventos com `@submit.prevent`**: Interceptação do envio tradicional da página.
- **Diretivas Condicionais (`v-if`, `v-show`, `v-bind` / `:class`)**: Exibição dinâmica de mensagens de erro e feedback visual nos campos.
- **Modularização em Componentes**: Separação clara de responsabilidades entre Cabeçalho, Formulário de Login e Rodapé.
- **Saída no Console em JSON**: Exibição formatada e legível no `console.log` com `JSON.stringify(..., null, 2)` e objeto nativo.

---

## 2. Detalhamento dos Componentes

### 2.1. Estrutura de Arquivos Proposta
```text
src/
├── components/
│   ├── AppHeader.vue      # Cabeçalho da aplicação
│   ├── LoginForm.vue      # Componente com lógica e campos do formulário
│   └── AppFooter.vue      # Rodapé institucional/didático
├── views/
│   └── LoginView.vue      # View principal que orquestra a tela de login
├── assets/
│   └── main.css           # Ajuste de layout global (reset do template padrão)
└── App.vue                # Componente raiz estruturando Header, RouterView e Footer
```

---

### 2.2. Componente: `AppHeader.vue` (Cabeçalho)
- **Objetivo**: Fornecer a identidade visual superior da aplicação/aula.
- **Elementos Visuais**:
  - Logotipo com ícone estilizado do Vue e identificação institucional ("SENAC • Desenvolvimento Web").
  - Tag/Badge com indicação de módulo ("Aula Inicial • Composition API").
  - Estilo limpo com barra de navegação superior, sombra suave e efeito de desfoque (glassmorphism).

---

### 2.3. Componente: `LoginForm.vue` (Área de Login e Validação)
- **Objetivo**: Concentrar o formulário, lógica de validação e despacho de dados em JSON.
- **Dados do Formulário (State)**:
  ```typescript
  interface LoginCredentials {
    email: string
    password: string
    rememberMe: boolean
  }

  interface FormErrors {
    email?: string
    password?: string
  }
  ```
- **Campos e Controles**:
  1. **E-mail**:
     - `type="email"`
     - Validações: Campo obrigatório; validação de formato válido (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
     - Feedback em tempo real ao digitar (`@input`) e ao desfocar (`@blur`).
  2. **Senha**:
     - `type="password"` com botão de alternar visibilidade (mostrar/ocultar senha).
     - Validações: Campo obrigatório; mínimo de 6 caracteres.
  3. **Lembrar-me**:
     - `type="checkbox"` exemplificando binding booleano com `v-model`.
  4. **Botão de Submissão**:
     - Botão de envio com estado de carregamento animado (spinner) e efeito hover.
  5. **Botão Didático "Preencher dados de teste"**:
     - Atalho para demonstração rápida em sala de aula.
  6. **Card de Sucesso / Visualizador do Payload JSON**:
     - Painel visual que exibe em tempo real o JSON transmitido na própria tela, além do envio para o console do navegador.

- **Comportamento de Envio**:
  - Disparado pelo evento `@submit.prevent="handleSubmit"`.
  - Se houver erros: o formulário não é enviado e os campos inválidos recebem destaque em vermelho com mensagens explicativas.
  - Se válido:
    - Prepara o objeto payload:
      ```javascript
      const payload = {
        email: formData.email.trim(),
        password: formData.password,
        rememberMe: formData.rememberMe,
        submittedAt: new Date().toISOString()
      }
      ```
    - Imprime no console:
      ```javascript
      console.group('%c🚀 [VUE 3] Formulário de Login Submetido', 'color: #42b883; font-weight: bold; font-size: 14px;')
      console.log('%cJSON Formatado (String):', 'color: #3b82f6; font-weight: 600;')
      console.log(JSON.stringify(payload, null, 2))
      console.log('%cObjeto JavaScript Puro:', 'color: #10b981; font-weight: 600;', payload)
      console.groupEnd()
      ```

---

### 2.4. Componente: `AppFooter.vue` (Rodapé)
- **Objetivo**: Fechar a página na parte inferior de forma profissional.
- **Elementos Visuais**:
  - Copyright e indicação da instituição: "SENAC • Disciplina de Desenvolvimento Web Front-End".
  - Links didáticos: Documentação oficial do Vue.js e Guia Inicial.
  - Fixado à base da janela com layout Flexbox (`min-height: 100vh`).

---

### 2.5. Ajustes Globais e Layout (`App.vue` & `main.css`)
- Ajuste do layout padrão para modelo em coluna (`min-height: 100vh; display: flex; flex-direction: column;`), garantindo que o cabeçalho fique no topo, o formulário fique perfeitamente centralizado e o rodapé fique ao fundo.

---

## 3. Plano de Verificação

### Testes Visuais e Funcionais
1. **Validação de Campos Vazios**: Clicar em "Entrar no Sistema" sem preencher os campos e verificar se os alertas visuais aparecem para e-mail e senha.
2. **Validação de Formato de E-mail**: Digitar e-mail inválido e verificar feedback.
3. **Validação de Tamanho de Senha**: Digitar menos de 6 caracteres e checar a mensagem de erro.
4. **Verificação do Console**: Preencher dados válidos, submeter o formulário e inspecionar no console do navegador (F12) o JSON formatado impresso com precisão.
5. **Responsividade**: Layout adaptado para desktop e telas menores (mobile).
