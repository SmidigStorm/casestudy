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
            
    def handle_endtag(self, tag):
        if tag in ['style', 'script']:
            setattr(self, f'in_{tag}', False)
        if tag in ['p', 'br', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']:
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
    directory = "/home/storm/casestudy/background"
    doc_files = [f for f in os.listdir(directory) if f.endswith('.doc') and not f.endswith('.Zone.Identifier')]
    
    for doc_file in sorted(doc_files):
        filepath = os.path.join(directory, doc_file)
        print(f"\n{'='*80}")
        print(f"FILE: {doc_file}")
        print('='*80)
        
        text = extract_text_from_doc(filepath)
        print(text[:3000])  # Print first 3000 characters
        print(f"\n... [Total length: {len(text)} characters]")