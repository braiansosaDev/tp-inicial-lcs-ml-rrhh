import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Datos de entrenamiento (tamaño de la casa en m²)
X = np.array([50, 60, 70, 80, 90, 100, 110, 120, 130]).reshape(-1, 1)

# Precios de la casa en miles de dólares
y = np.array([150, 180, 210, 240, 270, 300, 330, 360, 390])

# Crear el modelo de regresión lineal
modelo = LinearRegression()

# Entrenar el modelo con los datos
modelo.fit(X, y)

# Predecir el precio de una casa de 105 m²
precio_predicho = modelo.predict([[105]])
print(f"Precio estimado para una casa de 105 m²: {precio_predicho[0]:.2f} mil dólares")

# Graficar los datos reales
plt.scatter(X, y, color="blue", label="Datos reales")

# Graficar la línea de regresión
plt.plot(X, modelo.predict(X), color="red", label="Línea de regresión")

# Configuración del gráfico
plt.xlabel("Tamaño de la casa (m²)")
plt.ylabel("Precio (miles de dólares)")
plt.legend()
plt.title("Regresión Lineal: Tamaño vs Precio de la Casa")
plt.show()
