import os
import re

dir_path = r'c:\Users\ATHUL NANDHU\Desktop\PORTFOLIO'
html_file = os.path.join(dir_path, 'index.html')

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Nav links
new_nav = """<ul class="nav-list">
                <li><a href="index.html#about" class="nav-link">About</a></li>
                <li><a href="works.html" class="nav-link">Work</a></li>
                <li><a href="posters.html" class="nav-link">Posters</a></li>
                <li><a href="certificates.html" class="nav-link">Certificates</a></li>
                <li><a href="index.html#skills" class="nav-link">Skills</a></li>
                <li><a href="index.html#contact" class="nav-link">Contact</a></li>
            </ul>"""

content_with_nav = re.sub(r'<ul class="nav-list">.*?</ul>', new_nav, content, flags=re.DOTALL)
content_with_nav = content_with_nav.replace('<a href="#" class="logo">XRJ</a>', '<a href="index.html" class="logo">XRJ</a>')

# Sections using find
portfolio_match = re.search(r'<!-- Portfolio Section -->.*?<section id="portfolio".*?</section>', content_with_nav, flags=re.DOTALL)
posters_match = re.search(r'<!-- Posters Section -->.*?<section id="posters".*?</section>', content_with_nav, flags=re.DOTALL)
cert_match = re.search(r'<!-- Certificates Section -->.*?<section id="certificates".*?</section>', content_with_nav, flags=re.DOTALL)

portfolio_sec = portfolio_match.group(0)
posters_sec = posters_match.group(0)
cert_sec = cert_match.group(0)

new_index = content_with_nav.replace(portfolio_sec, '').replace(posters_sec, '').replace(cert_sec, '')

# Base template for new pages
hero_match = re.search(r'<!-- Hero Section -->.*?<section id="hero".*?</section>', content_with_nav, flags=re.DOTALL)
about_match = re.search(r'<!-- About Section -->.*?<section id="about".*?</section>', content_with_nav, flags=re.DOTALL)
skills_match = re.search(r'<!-- Skills Section -->.*?<section id="skills".*?</section>', content_with_nav, flags=re.DOTALL)
contact_match = re.search(r'<!-- Contact Section -->.*?<section id="contact".*?</section>', content_with_nav, flags=re.DOTALL)

template = new_index
if hero_match: template = template.replace(hero_match.group(0), '')
if about_match: template = template.replace(about_match.group(0), '')
if skills_match: template = template.replace(skills_match.group(0), '')
if contact_match: template = template.replace(contact_match.group(0), '')

def create_page(filename, section_html):
    # insert section_html inside <main>
    page_html = template.replace('<main>', f'<main>\n{section_html}\n')
    # add some margin so header doesnt overlay
    page_html = page_html.replace('<section ', '<section style="margin-top: 80px;" ')
    with open(os.path.join(dir_path, filename), 'w', encoding='utf-8') as f:
        f.write(page_html)

create_page('works.html', portfolio_sec)
create_page('posters.html', posters_sec)
create_page('certificates.html', cert_sec)

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(new_index)

print("Refactor completed successfully.")
