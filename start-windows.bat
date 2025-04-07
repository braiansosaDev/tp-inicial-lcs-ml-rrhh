@echo off
echo Iniciando Backend Flask...
start cmd /k "cd backend && py main.py"

timeout /t 3

echo Iniciando Frontend...
start cmd /k "cd frontend && npm run dev"
