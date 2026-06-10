# 🎂 Sumi's Birthday Tribute Website 🎂

A beautiful, vintage aesthetic birthday tribute website for Sumi! 💝✨

## Features 🌟

✨ **Vintage Aesthetic Design** - Soft colors, cute doodles, and emojis everywhere
📸 **Animated Photo Slideshow** - All 10 of Sumi's photos with personalized compliments
💌 **Heartfelt Birthday Letter** - A touching message celebrating her friendship
🎮 **Anime Trivia Quiz** - 5 fun anime questions with bonus birthday question
🎰 **Memory Card Game** - Match pairs to celebrate her birthday
🌈 **Interactive Wishes** - Special birthday wishes with cute animations
🎉 **Confetti Animation** - Celebratory confetti falling across the page
📱 **Fully Responsive** - Works beautifully on all devices

## How to Use

### Setup

1. **Add Photos**: Place your photos in the same directory as `index.html`
   - Name them: `photo1.jpg`, `photo2.jpg`, ... `photo10.jpg`
   - Photos should be at least 800x600px for best display

2. **Customize Content** (Optional)
   - Edit `index.html` to change compliments for each photo
   - Modify trivia questions and answers
   - Update the birthday letter with your own words

3. **Deploy**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Access at: `https://yourusername.github.io/sumi-birthday-tribute`

## File Structure

```
sumi-birthday-tribute/
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # JavaScript functionality
├── photo1.jpg       # Birthday photos (photo1-photo10)
├── photo2.jpg
├── ...
└── README.md        # This file
```

## Customization Guide

### Change Compliments
Edit the `.slide-caption` divs in `index.html`:
```html
<div class="slide-caption">Your custom compliment here! 💕</div>
```

### Change Trivia Questions
Find the quiz sections in `index.html` and modify:
```html
<h3>❓ Your Question Here?</h3>
<button class="quiz-btn" onclick="checkAnswer('quiz-1', true)">Correct Answer</button>
<button class="quiz-btn" onclick="checkAnswer('quiz-1', false)">Wrong Answer</button>
```

### Change Colors
Edit `style.css` to customize:
- Primary color: `#ff69b4` (Hot Pink)
- Secondary color: `#d4226f` (Deep Pink)
- Background gradient in `body` selector

## Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Animations and responsive design
- **Vanilla JavaScript** - No frameworks needed!

## Browser Support

✅ Chrome, Firefox, Safari, Edge (all modern versions)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Features Explained

### 📸 Slideshow
- Auto-plays every 5 seconds
- Click arrows to navigate manually
- Click dots to jump to specific photos
- Each photo has a personalized compliment

### 🎮 Anime Trivia
- 5 questions total (4 anime + 1 bonus about Sumi!)
- Instant feedback on answers
- Can retake as many times as you want

### 🎰 Memory Game
- Match 16 cards (8 pairs)
- Tracks number of moves
- Congratulations message when completed
- Reset button to play again

## Hosting Options

1. **GitHub Pages** (Free, Recommended)
   - Enable in repository Settings → Pages
   - Choose main branch as source
   - Site will be live at: `https://username.github.io/sumi-birthday-tribute`

2. **Netlify** (Free)
   - Connect GitHub repo
   - Auto-deploys on push

3. **Vercel** (Free)
   - Connect GitHub repo
   - Auto-deploys on push

## Troubleshooting

### Photos not showing?
- Ensure photos are named `photo1.jpg` through `photo10.jpg`
- Check file extensions match (`.jpg`, `.png`, etc.)
- Files must be in same directory as `index.html`

### Styles look weird?
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that `style.css` is in the same directory

### Games not working?
- Check browser console for errors (F12)
- Ensure `script.js` is in the same directory
- Try a different browser

## Birthday Tribute Details

- **Birthday**: June 14 🎂
- **Theme**: Vintage Aesthetic with Anime References
- **Tone**: Friendly, celebrating a wonderful friendship
- **Vibe**: Cute, fun, and heartfelt

## Made with ❤️

This website was created with tons of love for the cutest friend ever - Sumi! 💝✨

Enjoy the celebration! 🎉🎊
