import os

# Use dir to find [lang] dir
import subprocess
result = subprocess.run(['cmd', '/c', 'dir /b /ad "C:\\Users\\macie\\Documents\\repos\\inoxie-frontend\\app"'], 
                       capture_output=True, text=True)
print(result.stdout)

# Find [lang] directory
for line in result.stdout.split('\n'):
    line = line.strip()
    if line.startswith('[') and 'lang' in line.lower():
        print(f"Found: {line}")
