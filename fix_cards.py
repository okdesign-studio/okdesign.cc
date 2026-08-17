import re

with open('index.html', 'r') as f:
    content = f.read()

def replacer(match):
    # Extracts everything we need from the wg-feature block
    link_href = match.group('href')
    img_width = match.group('width')
    img_height = match.group('height')
    img_src = match.group('src')
    img_alt = match.group('alt')
    svg = match.group('svg')
    client = match.group('client')
    title = match.group('title')
    
    return f"""<div class="article-blog no-div mil-up">
                                    <a href="{link_href}" class="blog-image img-style mil-image-frame mil-drag">
                                        <img loading="lazy" width="{img_width}" height="{img_height}" src="{img_src}" alt="{img_alt}">
                                        <span class="mil-zoom-btn">{svg}</span>
                                    </a>
                                    <div class="blog-content">
                                        <div class="infor">
                                            <p class="infor_sub text-white-64">{client}</p>
                                            <h6><a href="{link_href}" class="link infor_name">{title}</a></h6>
                                        </div>
                                        <a href="{link_href}" class="btn-action"><i class="icon icon-arrow-top-right"></i></a>
                                    </div>
                                </div>"""

pattern = re.compile(r'<div class="wg-feature-v01 mil-up">\s*<a href="(?P<href>[^"]+)" class="feature-image img-style mil-image-frame mil-drag">\s*<img loading="lazy" width="(?P<width>\d+)" height="(?P<height>\d+)" src="(?P<src>[^"]+)" alt="(?P<alt>[^"]+)">\s*<span class="mil-zoom-btn">(?P<svg><svg.*?</svg>)</span>\s*</a>\s*<div class="feature-content">\s*<div class="info">\s*<p class="tag text-white-64 letter-space--1">(?P<client>[^<]+)</p>\s*<h5 class="name letter-space--2"><a href="[^"]+" class="link">(?P<title>[^<]+)</a></h5>\s*</div>\s*</div>\s*</div>', re.DOTALL)

new_content = pattern.sub(replacer, content)

with open('index.html', 'w') as f:
    f.write(new_content)

# Update styles.css
with open('assets/css/styles.css', 'r') as f:
    css_content = f.read()

# Add position: relative to .article-blog
css_content = css_content.replace('.article-blog {\n  border-radius: 12px;', '.article-blog {\n  position: relative;\n  border-radius: 12px;')

# Add full card clickability via pseudo-element on btn-action
css_addition = """
/* Make the entire article-blog card clickable */
.article-blog .btn-action::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 10;
}
"""
if "Make the entire article-blog card clickable" not in css_content:
    css_content += css_addition

with open('assets/css/styles.css', 'w') as f:
    f.write(css_content)

print("HTML and CSS modified successfully.")
