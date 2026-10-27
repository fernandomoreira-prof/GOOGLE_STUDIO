---
name: Clinical High-Luminescence System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00666d'
  on-tertiary: '#ffffff'
  tertiary-container: '#00818a'
  on-tertiary-container: '#f5feff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 41px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 25px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 23px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

Este sistema de design foi concebido para um aplicativo iOS de cuidados médicos e bem-estar de ultra-luxo. A atmosfera visual combina a serenidade estéril e precisa da medicina de ponta com a hospitalidade discreta de um hotel 5 estrelas.

### Personalidade da Marca
- **Serena & Cirúrgica:** Linhas cristalinas, iluminação límpida e legibilidade absoluta para inspirar calma e segurança diagnóstica.
- **Pioneira & Tecnológica:** Gradientes etéreos de azul celeste a marinho profundo, equilibrados por micropontos de luz ciano luminescente.
- **Exclusiva & Acolhedora:** Superfícies tácteis, microinterações suaves com feedback háptico (Taptic Engine) e translucidez pura.

### Movimento Estético: *Luminous iOS Glassmorphism*
A linguagem visual ancora-se no Human Interface Guidelines contemporâneo fundido a um glassmorphism de precisão ótica: camadas de vidro leitoso fosco (`backdrop-filter: blur(24px)`), bordas de refração luminosa e iluminação interna sutil. Não há sombras escuras artificiais; a profundidade é demarcada por contraste de difusão de luz e reflexos especulares.

## Colors

A paleta cromática transmite assepsia, modernidade e precisão médica por meio de uma base monocromática fria e contrastes nobres.

### Paleta Estrutural
- **Primária (`#0284C7`):** Azul celeste clínico, utilizado em CTAs principais, seleções ativas e ícones funcionais. Escala até o azul oceano profundo (`#0369A1`) em degradês direcionais (135°).
- **Secundária (`#0F172A`):** Azul profundo quase preto (Navy Noturno), reservado para tipografia de alto impacto, títulos principais, botões de ação máxima e cards de status executivo.
- **Terciária / Acento Luminescente (`#00F0FF` / `#38BDF8`):** Ciano elétrico de alto brilho, destinado a badges de telemedicina em tempo real, indicadores biométricos, glows difusos e estados conectados.
- **Superfície Neutra (`#F8FAFC` a `#F0F9FF`):** Base líquida e imaculada com subtons de azul celeste claro (`#E0F2FE`, `#BAE6FD`) para contrastar com elementos em vidro.

### Tratamento de Superfícies & Translucidez
- **Glass Card Base:** `rgba(255, 255, 255, 0.72)` com filtro `blur(20px)` a `blur(32px)`.
- **Borda Especular (Lustre Ring):** `1px solid rgba(255, 255, 255, 0.85)` com gradiente linear sutil de topo para base (`rgba(255, 255, 255, 0.95)` a `rgba(255, 255, 255, 0.3)`).
- **Aura Glow:** `box-shadow: 0 0 20px -4px rgba(0, 240, 255, 0.35)` em elementos ativos e interações de destaque.

## Typography

A tipografia utiliza a clareza analítica do **Inter**, otimizada para replicar a legibilidade nativa do ecossistema Apple com o rigor exigido em ambientes de saúde de alta classe. 

- **Hierarquia Funcional:** Grandes títulos em peso 700 transmitem solidez institucional, enquanto corpos de texto mantêm peso 400 com entrelinha arejada para evitar fadiga em laudos e prescrições.
- **Rótulos e Metadados:** Rótulos pequenos e chips contam com tracking levemente expandido para manter legibilidade instantânea em dimensões reduzidas.
- **Métricas Diagnósticas (`data-mono`):** A leitura de frequência cardíaca, taxas laboratoriais e horários precisos utiliza fonte monoespaçada sutil para alinhamento tabular e precisão científica.

## Layout & Spacing

A composição é calibrada estritamente para ergonomia iOS de mão única (*thumb zone*), respeitando as zonas seguras do hardware (*Safe Area Insets*).

### Grid e Espaçamento
- **Grid Mobile:** Coluna única fluida com margens laterais fixas de 20px (`1.25rem`), garantindo que cards em vidro respirem sem tocar os limites físicos do dispositivo.
- **Módulos de Espaçamento:** Base geométrica de 4px/8px. Gaps entre seções utilizam `24px` a `32px` (`space-lg` a `space-xl`) para assegurar sensação de amplitude e luxo desobstruído.

### Integração com Elementos Nativos iOS
- **Top Safe Area & Dynamic Island:** O topo do layout acomoda 59px de respiro estrutural para interações nativas da Dynamic Island (alertas de tempo de consulta e chamadas ativas), sem que o conteúdo útil sofra sobreposição.
- **Bottom Safe Area & Home Indicator:** Manter área de exclusão vertical inferior de 34px. A barra flutuante de navegação repousa 16px acima do indicador inicial.

## Elevation & Depth

A profundidade é expressa através da transmissão de luz e refração física, rejeitando sombras opacas convencionais da web.

### Níveis de Profundidade

1. **Camada 0 (Canvas Base):** Fundo suave em gradiente radial sutil (`#F0F9FF` para `#E0F2FE`), com manchas de dispersão ciano quase imperceptíveis ao fundo para criar tridimensionalidade atrás do vidro.
2. **Camada 1 (Glassmorphic Cards & Listas):** Superfície com `background: rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(24px)`, borda de `1px solid rgba(255, 255, 255, 0.85)` e sombra difusa `0 10px 30px -10px rgba(2, 132, 199, 0.08)`.
3. **Camada 2 (Floating Tab Bar & Modais):** Superfície com `background: rgba(255, 255, 255, 0.82)`, `backdrop-filter: blur(36px)`, borda perolada e elevação com sombra suave `0 20px 40px -12px rgba(15, 23, 42, 0.12)`.
4. **Camada 3 (Destaque Ativo / Neon Aura):** Elementos em foco, botões de ação e biometria recebem `box-shadow: 0 4px 20px 0 rgba(0, 240, 255, 0.4)`, gerando o efeito de luminosidade ativa em torno do objeto.

## Shapes

A linguagem de formas adota a curvatura contínua (*squircle*) padrão do iOS, transmitindo sofisticação orgânica e toque humano.

- **Containers e Cards:** Raios entre `20px` e `24px` para acomodar blocos de consulta, resumo de exames e perfis de médicos especialistas.
- **Botões e Campos de Entrada:** Raios de `16px` para controles estruturados, proporcionando uma pegada anatômica perfeita ao toque.
- **Chips, Pílulas e Status:** Raios em `9999px` (Pill integral) para badges de disponibilidade imediata, etiquetas de especialidade e barras de pesquisa.

## Components

Instruções para implementação dos blocos visuais e interativos do produto.

### 1. Botões (Buttons)
- **Primário Nobre:** Fundo em degradê linear (135deg, `#0284C7` para `#0369A1`), texto branco (`#FFFFFF`, peso 600), raio de `16px`, altura de `52px`. Borda interna de `1px solid rgba(255,255,255,0.2)`. Estado pressionado com escala de `0.98`.
- **Secundário Executivo:** Fundo `#0F172A`, texto branco, altura de `52px`, raio de `16px`. Indicado para agendamentos confirmados e pagamentos concierge.
- **Glass / Fantasma:** Fundo translúcido `rgba(255, 255, 255, 0.6)`, borda `1px solid rgba(255, 255, 255, 0.9)`, texto `#0284C7`, altura de `48px`.

### 2. Cards Clínicos
- Estrutura translúcida com `padding: 20px`, raio de `24px`, borda de refração perolada.
- **Card de Destaque / Especialista:** Fundo com gradiente sutil do azul oceano para navy translúcido, textos brancos, detalhes em ciano elétrico (`#00F0FF`) e microindicador de status "Online para Telemedicina".

### 3. Chips e Badges
- **Status Ativo / Neon:** Pílula completa (`rounded-full`), fundo `rgba(0, 240, 255, 0.12)`, borda `1px solid rgba(0, 240, 255, 0.5)`, tipografia `label-sm` na cor `#0369A1` com ponto pulsante em `#00F0FF` (`box-shadow: 0 0 8px #00F0FF`).
- **Filtro de Especialidade:** Fundo `rgba(255, 255, 255, 0.8)`, texto `#0F172A`, borda branca suave. Quando ativo: fundo `#0284C7`, texto branco e sombra azul suave.

### 4. Campos de Entrada (Input Fields)
- Altura de `54px`, raio de `16px`, preenchimento em vidro `rgba(255, 255, 255, 0.65)`, borda `1px solid rgba(255, 255, 255, 0.9)`.
- Tipografia `body-md` com placeholder em tom ardósia neutro.
- No foco: borda muda para `#0284C7` com brilho difuso `0 0 12px rgba(0, 240, 255, 0.35)`.

### 5. Checkboxes e Seletores
- Dimensão `24px x 24px`, raio de `8px`.
- Estado inativo com fundo em vidro fosco e contorno suave.
- Estado ativo preenchido com gradiente `#0284C7` para `#0369A1`, ícone de checagem em branco óptico e halo neon ciano sutil.

### 6. Tab Bar Flutuante (Floating Glass Tab Bar)
- Posicionada a `16px` do Home Indicator, largura de `calc(100% - 32px)`, altura de `64px`, raio de `32px`.
- Fundo `rgba(255, 255, 255, 0.78)` com `backdrop-filter: blur(30px)`.
- Ícones ativos recebem acento `#0284C7` acompanhados por um micro ponto inferior em `#00F0FF`.

### 7. Widget de Indicadores Biométricos
- Card compacto com display de dados em tipografia mono (`data-mono`), apresentando curvas de pulso ou glicemia em linhas neon finas (`#00F0FF`) sobre um fundo de vidro leitoso.