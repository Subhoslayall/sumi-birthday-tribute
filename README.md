<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Happy Birthday Sumi! 🎀 | From Subho</title>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Kalam:wght@300;400;700&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            background: #fdf3e3;
            background-image: radial-gradient(circle at 20% 35%, rgba(210, 170, 100, 0.12) 2%, transparent 2.5%);
            font-family: 'Special Elite', 'Courier New', monospace;
            color: #3b2a1f;
            padding: 1.2rem;
        }

        .main-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(254, 248, 235, 0.95);
            border-radius: 32px 32px 60px 60px;
            box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
            padding: 1.8rem;
            border: 1px solid #ecdbba;
        }

        .hero {
            text-align: center;
            border-bottom: 2px dashed #e2caa0;
            padding-bottom: 1.2rem;
            margin-bottom: 1.8rem;
        }

        .cursive-big {
            font-family: 'Caveat', cursive;
            font-size: 4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #bc6f3a, #e7a062);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .typewriter-date {
            font-family: 'Special Elite', monospace;
            background: #f2e3cf;
            display: inline-block;
            padding: 0.3rem 1.5rem;
            border-radius: 50px;
            margin-top: 10px;
            font-size: 0.9rem;
        }

        .doodle-row {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin: 15px 0 8px;
            font-size: 1.8rem;
        }

        .friendship-banner {
            background: #fef5e8;
            border-radius: 30px;
            padding: 1rem;
            text-align: center;
            margin-bottom: 2rem;
            border-left: 8px solid #9bc48e;
        }

        .gallery-title {
            text-align: center;
            font-family: 'Caveat', cursive;
            font-size: 2rem;
            margin: 1.5rem 0 1rem;
        }

        /* SIMPLE FRAMED PHOTO GRID - NO SLIDESHOW, NO CAROUSEL */
        .photo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 25px;
            justify-items: center;
            margin: 1.5rem 0;
        }

        .photo-frame {
            background: #fffcf3;
            padding: 12px 12px 18px 12px;
            box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.12);
            width: 100%;
            max-width: 220px;
            border-radius: 18px 18px 24px 24px;
            border: 1px solid #f2e2c0;
            transition: all 0.3s;
        }

        .photo-frame:hover {
            transform: translateY(-5px);
            box-shadow: 12px 18px 28px rgba(0, 0, 0, 0.15);
        }

        .photo-frame img {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 14px;
            filter: sepia(0.1);
        }

        .photo-caption {
            text-align: center;
            margin-top: 10px;
            font-family: 'Kalam', cursive;
            font-size: 0.9rem;
            font-weight: bold;
            color: #aa6a3c;
        }

        .compliment-text {
            display: inline-block;
            background: #f5e6d4;
            border-radius: 40px;
            padding: 4px 10px;
            font-size: 0.7rem;
            margin-top: 6px;
            font-family: monospace;
            cursor: pointer;
        }

        footer {
            text-align: center;
            margin-top: 2rem;
            font-size: 0.7rem;
            border-top: 1px dashed #dec394;
            padding-top: 1rem;
        }

        @media (max-width: 650px) {
            .cursive-big {
                font-size: 2.5rem;
            }
            .photo-grid {
                gap: 15px;
            }
        }
    </style>
</head>
<body>

<div class="main-wrapper">
    <div class="hero">
        <div class="doodle-row">🎈🍒📸🧸🌸🍰🎀🐻‍❄️🍬✨</div>
        <div class="cursive-big">🎉 Happy Birthday, Sumi! 🎉</div>
        <div class="typewriter-date"><i class="fas fa-calendar-alt"></i> 14th June — Bestie's Special Day! <i class="fas fa-star"></i></div>
        <div class="doodle-row">💛🙌🍭🐱🎁✨🍰🎀</div>
    </div>

    <div class="friendship-banner">
        <i class="fas fa-handshake fa-2x" style="color:#e8a87c;"></i>
        <p style="font-size: 1.1rem; margin-top: 8px;">To my amazing friend Sumi — you're the best! Hope your day is filled with laughs, cake, and good vibes. 💛</p>
        <p>— Subho ✨</p>
    </div>

    <!-- SIMPLE FRAMED PHOTO GRID - JUST PHOTOS IN FRAMES, NO SLIDESHOW -->
    <div class="gallery-title">
        <i class="fas fa-camera-retro"></i> 10 Beautiful Moments with Sumi 📸
    </div>
    <div class="photo-grid" id="photoGrid"></div>
    <p style="text-align: center; font-size: 0.7rem;">✨ click any photo's compliment to see a sweet message! ✨</p>

    <footer>
        <i class="fas fa-feather-alt"></i> made with bestie energy — for Sumi's 14th June 🎉
    </footer>
</div>

<script>
    // ============================================================
    // 10 PHOTOS - JUST SIMPLE FRAMES (NO SLIDESHOW, NO CAROUSEL)
    // ============================================================
    // HOW TO ADD YOUR PHOTOS:
    // 1. Create a folder called "images" next to this file
    // 2. Put your 10 photos of Sumi in that folder
    // 3. Name them: photo1.jpg, photo2.jpg ... photo10.jpg
    //    (use .png if your photos are PNG)
    // 4. Open this file - DONE!
    // ============================================================
    
    const photoPaths = [
        "images/photo1.jpg",
        "images/photo2.jpg",
        "images/photo3.jpg",
        "images/photo4.jpg",
        "images/photo5.jpg",
        "images/photo6.jpg",
        "images/photo7.jpg",
        "images/photo8.jpg",
        "images/photo9.jpg",
        "images/photo10.jpg"
    ];
    
    // Unique compliments for each photo (friendly, no romance)
    const compliments = [
        "🌸 You have the kindest heart! Always makes everyone feel welcome.",
        "🍰 You're literally the funniest person I know — your memes are iconic!",
        "🎀 Your energy is so positive and uplifting. Thanks for being you!",
        "🧸 You're an amazing friend — so loyal, honest, and real. No cap!",
        "✨ Your smile lights up any room. Keep shining bestie!",
        "🍒 You're so creative and talented! Everything you do is awesome.",
        "📸 You have the best vibes — hanging out with you is always a blast!",
        "🐻‍❄️ You're so strong and brave. I admire you a lot!",
        "💛 You make the world a better place just by being in it. Periodt.",
        "🎉 You're the coolest person to have late night chats with. Bestie forever!"
    ];
    
    const captions = ["🌸 sunny days", "🍰 cake time", "🎀 cute moment", "🧸 cozy vibes", "✨ sparkle energy", "🍒 fun times", "📸 memory lane", "🐻‍❄️ adventure", "💛 happy heart", "🎉 celebration"];
    
    const photoGrid = document.getElementById('photoGrid');
    
    for (let i = 0; i < 10; i++) {
        const frame = document.createElement('div');
        frame.className = 'photo-frame';
        
        const img = document.createElement('img');
        img.src = photoPaths[i];
        img.alt = `Sumi ${i+1}`;
        // Fallback if image doesn't exist - shows a placeholder so you know which photo to add
        img.onerror = function() {
            this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23faeedb'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='%23b87a4a' font-size='14'%3E📸 Photo ${i+1}%3C/text%3E%3C/svg%3E`;
        };
        
        const captionDiv = document.createElement('div');
        captionDiv.className = 'photo-caption';
        captionDiv.innerHTML = `<i class="fas fa-heart" style="color:#e8a87c;"></i> ${captions[i]} <i class="fas fa-heart" style="color:#e8a87c;"></i>
                                <div class="compliment-text" data-compliment="${compliments[i]}">✨ tap for compliment ✨</div>`;
        
        frame.appendChild(img);
        frame.appendChild(captionDiv);
        
        // Add click event to the compliment text only
        const complimentSpan = captionDiv.querySelector('.compliment-text');
        complimentSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            const compliment = complimentSpan.getAttribute('data-compliment');
            complimentSpan.innerHTML = `💬 "${compliment}" 💬`;
            complimentSpan.style.background = "#e8d5b8";
            
            // Create floating heart
            const heart = document.createElement('div');
            heart.innerHTML = '💛';
            heart.style.position = 'fixed';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = '1.5rem';
            heart.style.pointerEvents = 'none';
            heart.style.opacity = '0.8';
            heart.style.transition = 'all 0.8s ease';
            document.body.appendChild(heart);
            setTimeout(() => {
                heart.style.transform = 'translateY(-100px)';
                heart.style.opacity = '0';
                setTimeout(() => heart.remove(), 800);
            }, 10);
            
            setTimeout(() => {
                complimentSpan.innerHTML = `✨ tap for compliment ✨`;
                complimentSpan.style.background = "#f5e6d4";
            }, 4000);
        });
        
        photoGrid.appendChild(frame);
    }
    
    console.log("📸 To add Sumi's photos: Create an 'images' folder and put photo1.jpg to photo10.jpg inside it!");
    console.log("🎀 Each photo has a unique compliment when you click the text below it!");
</script>
</body>
</html>
