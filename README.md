# Sindicato dos Empregados no Comércio e Serviços de Guanambi, Caetité e Região

## Estrutura do Projeto

Este projeto foi reorganizado para melhor manutenção e organização do código, separando HTML, CSS e JavaScript em arquivos distintos.

### 📁 Estrutura de Pastas

```
www.secguanambi.com.br/
├── css/                          # Arquivos de estilo
│   ├── amp-boilerplate.css      # Estilos do AMP boilerplate
│   └── styles.css               # Estilos principais do site
├── js/                          # Arquivos JavaScript
│   ├── animations.js            # Animações AMP
│   └── structured-data.js       # Dados estruturados JSON-LD
├── images/                      # Imagens do site
├── beneficios/                  # Página de benefícios
├── convencoes/                  # Página de convenções
├── diretoria/                   # Página da diretoria
├── sobre/                       # Página sobre
├── _materiais/                  # Materiais de design
├── media/                       # Arquivos de mídia
├── index.html                   # Página principal
├── web.config                   # Configuração do servidor
└── README.md                    # Este arquivo
```

### 🎨 Arquivos CSS

- **`css/amp-boilerplate.css`**: Contém os estilos necessários para o AMP boilerplate, incluindo as animações de carregamento
- **`css/styles.css`**: Contém todos os estilos principais do site, incluindo:
  - Variáveis CSS (paleta de cores)
  - Estilos de layout responsivo
  - Componentes (botões, navegação, etc.)
  - Media queries para diferentes tamanhos de tela

### ⚡ Arquivos JavaScript

- **`js/animations.js`**: Contém as animações AMP para o botão de scroll to top
- **`js/structured-data.js`**: Contém os dados estruturados JSON-LD para SEO

### 🔧 Benefícios da Reorganização

1. **Manutenibilidade**: Código mais fácil de manter e atualizar
2. **Reutilização**: CSS e JS podem ser reutilizados em outras páginas
3. **Performance**: Arquivos menores carregam mais rápido
4. **Organização**: Estrutura clara e lógica
5. **Colaboração**: Múltiplos desenvolvedores podem trabalhar simultaneamente

### 📝 Como Usar

1. Para modificar estilos, edite os arquivos em `css/`
2. Para alterar animações, modifique `js/animations.js`
3. Para atualizar dados estruturados, edite `js/structured-data.js`
4. O arquivo `index.html` agora contém apenas a estrutura HTML

### 🚀 Tecnologias Utilizadas

- **AMP (Accelerated Mobile Pages)**: Para performance otimizada
- **CSS3**: Com variáveis CSS para fácil personalização
- **JavaScript**: Para funcionalidades interativas
- **JSON-LD**: Para dados estruturados e SEO

### 📱 Responsividade

O site é totalmente responsivo e funciona bem em:

- Dispositivos móveis
- Tablets
- Desktops

### 🔍 SEO

O site inclui:

- Meta tags otimizadas
- Dados estruturados JSON-LD
- Open Graph para redes sociais
- Twitter Cards
- URLs canônicas
