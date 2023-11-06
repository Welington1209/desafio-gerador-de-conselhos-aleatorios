## Guia

- [Visão geral](#visão-geral)
  - [Funcionamento](#funcionamento)
  - [Aparência](#aparência)
  - [Links](#links)
- [Processo](#processo)
  - [Desenvolvido com](#desenvolvido-com)
  - [Aprendizado](#aprendizado)

## Visão geral

### Funcionamento

O usuário deve ser capaz de:

- Ver o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
- Gere um novo conselho clicando no ícone do dado

### Aparência

![](/images/Captura%20de%20tela%202023-07-02%20100142.png)

### Links

- Live Site URL: https://welington1209.github.io/desafio-flexbox-gerador-de-conselhos/

## Processo

### Desenvolvido com:

- Tag's semânticas de HTML
- Propriedades de estilização de CSS
- Flexbox
- Responsividade

### Aprendizado

Neste projeto minha maior dificuldadde foi entender como utilizar a tag picture para que o "icon" fosse alterado dependendo do tamanho do display. 

```html
 <picture>
        <source srcset="./images/pattern-divider-mobile.svg" media="(max-width: 768px)">
        <img src="images/pattern-divider-desktop.svg" alt="">
      </picture>
```
Tive que deixar o butão com position absolute para conseguir posicioná-lo onde estava sendo pedido
```css
.atualizar-conselho {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    border-radius: 50px;
    border: none;
    background-color: var(--advice-dice-color);
    position: absolute;
    margin-top: 352px;
}

```
