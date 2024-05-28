import pyodbc

# Configuración de la conexión
server = 'DESKTOP-SU2QECI\SQLEXPRESS'  # Nombre del servidor
database = 'BaseD'  # Nombre de la base de datos
username = 'write'  # Nombre de usuario
password = 'Caro9!'  # Contraseña

# Cadena de conexión
connection_string = (
    f'DRIVER={{SQL Server}};'
    f'Server={server};'
    f'Database={database};'
    f'UID={username};'
    f'PWD={password};'
)

# Intentar establecer la conexión
try:
    # Conectar a la base de datos
    conn = pyodbc.connect(connection_string)

    # Crear un cursor para ejecutar comandos SQL
    cursor = conn.cursor()
    # Insertar un nuevo dato
    cursor.execute("INSERT INTO cliente (CLI_CODE, CLI_NOMBRES, CLI_APELLIDOS, CLI_DIRECCION, CLI_SALDO) VALUES (?, ?, ?, ?, ?)",
                   ('C1010', 'Nuevo', 'Cliente', 'Calle Nueva', 150.75))
   
    """
    # Supongamos que quieres eliminar el cliente con CLI_CODE 'C1008'
    codigo_cliente_a_eliminar = 'C1008'
    cursor.execute("DELETE FROM cliente WHERE CLI_CODE = ?", (codigo_cliente_a_eliminar,))
    """
    """
    # Supongamos que quieres modificar la dirección y el saldo del cliente con CLI_CODE 'C1008'
    nueva_direccion = 'Calle Modificada'
    nuevo_saldo = 200.50
    cursor.execute("UPDATE cliente SET CLI_DIRECCION = ?, CLI_SALDO = ? WHERE CLI_CODE = ?",
               (nueva_direccion, nuevo_saldo, codigo_cliente_a_eliminar))
    """

    # Confirmar la transacción
    conn.commit()

    # Ejemplo de consulta después de la inserción
    cursor.execute('SELECT * FROM cliente')

    # Obtener los resultados
    rows = cursor.fetchall()

    if rows:
        # Imprimir los resultados
        for row in rows:
            print(row)
    else:
        print('La tabla está vacía.')

except pyodbc.Error as e:
    print(f'Error: {e}')

finally:
    # Cerrar el cursor y la conexión
    if cursor:
        cursor.close()
    if conn:
        conn.close()