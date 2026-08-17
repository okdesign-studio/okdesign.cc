import os
from PIL import Image, ImageDraw, ImageFont

def create_coming_soon_image(output_path, width=860, height=645):
    # Create a solid black image
    img = Image.new('RGB', (width, height), color='black')
    draw = ImageDraw.Draw(img)
    
    text = "COMING SOON"
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
    except Exception:
        font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) / 2
    y = (height - text_height) / 2
    
    draw.text((x, y), text, fill=(120, 120, 120), font=font)
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path)
    print(f"Created {output_path}")

base_dir = '/Users/user/Documents/WEBSITE/okdesign.cc/okdesign.cc/assets/images/projects'

targets = [
    os.path.join(base_dir, 'igaming-apps', 'cover.jpg'),
    os.path.join(base_dir, 'maxmarkt', 'cover.jpg'),
    os.path.join(base_dir, 'mixmarkt', 'cover.jpg'),
    os.path.join(base_dir, 'somplo-website-motion', 'cover.jpg'),
    os.path.join(base_dir, 'van-calster-anniversary', 'cover.jpg'),
    os.path.join(base_dir, 'omni-cpa', 'cover.webp'),
]

for t in targets:
    create_coming_soon_image(t)
