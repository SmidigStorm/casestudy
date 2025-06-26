#!/usr/bin/env python3
import os
import re
import html.parser
import sys

class HTMLTextExtractor(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_style = False
        self.in_script = False
        
    def handle_starttag(self, tag, attrs):
        if tag in ['style', 'script']:
            setattr(self, f'in_{tag}', True)
        elif tag in ['br', 'p', 'div', 'li']:
            self.text.append('\n')
            
    def handle_endtag(self, tag):
        if tag in ['style', 'script']:
            setattr(self, f'in_{tag}', False)
        elif tag in ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'tr']:
            self.text.append('\n')
            
    def handle_data(self, data):
        if not self.in_style and not self.in_script:
            self.text.append(data.strip())

def extract_text_from_doc(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        # Handle quoted-printable encoding
        content = re.sub(r'=3D', '=', content)
        content = re.sub(r'=C3=A5', 'å', content)
        content = re.sub(r'=C3=A6', 'æ', content)
        content = re.sub(r'=C3=B8', 'ø', content)
        content = re.sub(r'=C3=85', 'Å', content)
        content = re.sub(r'=C3=86', 'Æ', content)
        content = re.sub(r'=C3=98', 'Ø', content)
        content = re.sub(r'=E2=80=9C', '"', content)
        content = re.sub(r'=E2=80=9D', '"', content)
        content = re.sub(r'=EF=BB=BF', '', content)
        content = re.sub(r'=\r?\n', '', content)
        
        # Find the HTML content section
        html_start = content.find('<html')
        if html_start != -1:
            content = content[html_start:]
            
        parser = HTMLTextExtractor()
        parser.feed(content)
        
        # Clean up the text
        text = ' '.join(parser.text)
        text = re.sub(r'\s+', ' ', text)
        text = re.sub(r'\n\s*\n', '\n\n', text)
        
        return text.strip()
    except Exception as e:
        return f"Error processing {filepath}: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        filepath = sys.argv[1]
        print(extract_text_from_doc(filepath))
    else:
        print("Usage: python extract_full_content.py <filepath>")