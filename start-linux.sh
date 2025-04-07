#!/bin/bash

echo "Iniciando Backend Flask..."
gnome-terminal -- bash -c "cd backend && pip install -r requirements.txt && python3 main.py; exec bash"

sleep 2

echo "Iniciando Frontend..."
gnome-terminal -- bash -c "cd frontend && npm install && npm run dev; exec bash"
