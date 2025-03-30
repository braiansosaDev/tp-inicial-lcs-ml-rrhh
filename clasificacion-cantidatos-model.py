import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Cargar el dataset
file_path = "./data/candidatos.xlsx"
df = pd.read_excel(file_path)

# Codificar variables categóricas
le = LabelEncoder()
df['nivel_educativo'] = le.fit_transform(df['nivel_educativo'])
df['es_apto'] = le.fit_transform(df['es_apto'])

# Crear variables dummies para habilidades e idiomas (habilidades_sql, habilidades_java, idiomas_ingles, etc)
df = pd.get_dummies(df, columns=['habilidades', 'idiomas'])

# Eliminar la columna 'nombre' antes de separar características y etiquetas
df = df.drop(columns=['nombre'])  # Eliminar la columna 'nombre'

# Separar datos en características y etiquetas
X = df.drop(columns=['es_apto'])  # Asegúrate de que 'es_apto' sea la etiqueta
y = df['es_apto']

# Verifica que todas las columnas de X son numéricas antes de aplicar la normalización
# Si hay columnas no numéricas, deberías procesarlas antes de la normalización
print(X.dtypes)  # Para revisar los tipos de datos en las columnas

# Normalizar datos numéricos
scaler = StandardScaler()
X = scaler.fit_transform(X)

# Separar en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Entrenar modelo de regresión logística
modelo = LogisticRegression()
modelo.fit(X_train, y_train)

# Evaluar el modelo
y_pred = modelo.predict(X_test)
precision = accuracy_score(y_test, y_pred)
reporte = classification_report(y_test, y_pred)

# Demostración con un candidato nuevo
nuevo_candidato = np.array([[5, 2, 1, 1, 0] + [0] * (X.shape[1] - 5)])  # Ejemplo con habilidades e idiomas en 0
nuevo_candidato = scaler.transform(nuevo_candidato)
prediccion = modelo.predict(nuevo_candidato)
resultado = 'Apto' if prediccion[0] == 1 else 'No Apto'

print(f'Precisión del modelo: {precision:.2f}')
print(reporte)
print(f'Candidato con 5 años de experiencia y estudios universitarios (Posible Gerente) → {resultado}')
