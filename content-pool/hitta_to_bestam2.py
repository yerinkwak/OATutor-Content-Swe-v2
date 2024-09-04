import os
import json
import re

def replace_text_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    json_str = json.dumps(data, ensure_ascii=False)

    json_str = re.sub(r',\s*hitta\b', ', bestäm', json_str)

    data = json.loads(json_str)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

    print(f"Processed file: {file_path}")  

def process_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.json'):
                file_path = os.path.join(root, file)
                replace_text_in_file(file_path)

def main():
    content_pool_path = '/home/yerin/OATutor-Content-Swe-v2/content-pool'

    process_folder(content_pool_path)

if __name__ == "__main__":
    main()
