import pymongo
import json

MONGO_HOST="localhost"
MONGO_PUERTO="27017"
MONGO_TIEMPO_FUERA=1000

MONGO_URI="mongodb://"+MONGO_HOST+":"+MONGO_PUERTO+"/"

basedatos = "pruebamonolegal"
collections = "facturas"

try:
    cliente= pymongo.MongoClient(MONGO_URI,serverSelectionTimeoutMS=MONGO_TIEMPO_FUERA)
    baseDatos=cliente[basedatos]
    coleccion=baseDatos[collections]
    
    for documento in coleccion.find():
      datos =  (documento)
      print(datos)
     
    
    
    cliente.close()
except pymongo.errors.ServerSelectionTimeoutError as errorTiempo:
     print("error en tiempo de conexion")

