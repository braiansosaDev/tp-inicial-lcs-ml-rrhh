@echo off
echo Iniciando Backend Flask...
start cmd /k "cd backend && pip install -r requirements.txt && py main.py"

timeout /t 3

echo Iniciando Frontend...
start cmd /k "cd frontend && npm install && npm run dev"
