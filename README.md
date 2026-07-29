# Credmais Hero Wave

vamos criar a hero ondulada para o site da securizadora credmais
deve conter paginas separads inicio,atencipáçao de recebiveis,boleto garantido,sobre,contatoANIMAÇÃO DE ENTRADA (timeline tlHero, roda no load): 1. 0.0s — navbar desce (y:-20→0, opacity) 2. 0.1s — eyebrow: clip-path inset da esquerda p/ direita (0.5s) 3. 0.25s — H1 com revealLines(): cada linha sobe com stagger 0.12 4. 0.6s — sub e CTAs com fadeUp, stagger 0.1 5. 0.7s — card do boleto entra da direita (x:60→0, rotationY:8→0, opacity) 6. 1.2s — dispara loop das partículas boleto→pix (repeat:-1, repeatDelay:2.5) 7. 1.4s — contadores da linha de confiança com countUp() SCROLL (ScrollTrigger na hero): - Parallax sutil: coluna de texto sobe 6% mais devagar que o card (scrub). - Ao rolar 40% da hero, um hint "scroll" (linha vertical verde pulsando) aparece na base, ancorando o início da linha de fluxo. MOBILE: card do boleto vai para baixo do texto, animação de partículas simplificada (fade cross entre os dois cards), H1 ~40px.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://credmais-wavy-hero.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f7fe4be3-375a-4299-8ca9-2b6e4c285ca2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
