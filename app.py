
# Ingresar cantidad de personas
cantidad = int(input("¿Cuántas personas vas a registrar? "))

personas = []

# Cargar datos
for i in range(cantidad):
    print(f"\nPersona {i + 1}:")
    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    nota = float(input("Nota: "))
    personas.append([nombre, edad, nota])

# Mostrar lista original
print("\nLista original:")
for p in personas:
    print(f"Nombre: {p[0]}, Edad: {p[1]}, Nota: {p[2]}")

# Lista ordenada por nota (mayor a menor)
ordenado = sorted(personas, key=lambda x: x[2], reverse=True)

print("\nLista ordenada por nota mayor a menor:")
for p in ordenado:
    print(f"Nombre: {p[0]}, Edad: {p[1]}, Nota: {p[2]}")
