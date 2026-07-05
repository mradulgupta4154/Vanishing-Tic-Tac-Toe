# Vanishing Tic Tac Toe

A twist on classic Tic Tac Toe — once you have 3 marks on the board, your **oldest mark disappears** each time you place a new one. No more stalemates: the board is always shifting, and you have to think a few moves ahead instead of just filling squares.

## How to Play

1. Players take turns placing X's and O's, just like classic Tic Tac Toe.
2. Once a player has **3 marks on the board**, placing a new mark removes that player's **oldest** mark.
3. Each player always has at most 3 marks on the board at a time.
4. First player to get 3 in a row, column, or diagonal **wins**.

This constant vanishing keeps the game from ending in a draw and adds a layer of strategy — you have to plan not just your next move, but what you're about to lose.

## Tech Stack

- HTML
- CSS
- JavaScript (vanilla, no frameworks)

## Getting Started

No build step required — it's a static site.

```bash
git clone https://github.com/your-username/vanishing-tic-tac-toe.git
cd vanishing-tic-tac-toe
```

Then just open `index.html` in your browser, or serve it locally:

```bash
npx serve .
```

## Project Structure

```
vanishing-tic-tac-toe/
├── index.html
├── style.css
└── script.js
```

## Roadmap / Ideas

- [ ] Two-player online mode
- [ ] AI opponent
- [ ] Sound effects for vanishing marks
- [ ] Mobile-friendly layout

## Contributing

Pull requests are welcome! Feel free to open an issue if you spot a bug or have a feature idea.

## License

[MIT](LICENSE)
