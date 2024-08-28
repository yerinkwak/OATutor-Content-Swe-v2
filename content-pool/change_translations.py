import os
import json

def replace_text_in_file(file_path, old_text, new_text):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Convert the JSON object to a string for text replacement
    json_str = json.dumps(data, ensure_ascii=False)
    json_str = json_str.replace(old_text, new_text)
    
    # Load it back into a JSON object
    data = json.loads(json_str)
    
    # Save the modified JSON object back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def process_folder(folder_path):
    # Process JSON files directly in the main folder
    for file_name in os.listdir(folder_path):
        if file_name.endswith('.json'):
            file_path = os.path.join(folder_path, file_name)
            replace_text_in_file(file_path, 'Hitta', 'Bestäm')
            replace_text_in_file(file_path, 'hitta', 'bestäm')

    # Process JSON files in the 'steps' subfolder
    steps_path = os.path.join(folder_path, 'steps')
    if os.path.exists(steps_path):
        for root, dirs, files in os.walk(steps_path):
            for file in files:
                if file.endswith('.json'):
                    file_path = os.path.join(root, file)
                    replace_text_in_file(file_path, 'Hitta', 'Bestäm')
                    replace_text_in_file(file_path, 'hitta', 'bestäm')
    
    # Process JSON files in the 'tutoring' subfolder
    tutoring_path = os.path.join(folder_path, 'tutoring')
    if os.path.exists(tutoring_path):
        for root, dirs, files in os.walk(tutoring_path):
            for file in files:
                if file.endswith('.json'):
                    file_path = os.path.join(root, file)
                    replace_text_in_file(file_path, 'Hitta', 'Bestäm')
                    replace_text_in_file(file_path, 'hitta', 'bestäm')

def main():
    content_pool_path = '/home/yerin/OATutor-Content-Swe-v2/content-pool'

    for folder_name in os.listdir(content_pool_path):
        folder_path = os.path.join(content_pool_path, folder_name)
        if os.path.isdir(folder_path):
            process_folder(folder_path)

if __name__ == "__main__":
    main()